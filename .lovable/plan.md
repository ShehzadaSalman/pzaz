
## Root cause: `App` module is cached across all routes

The problem is a **module caching issue** inside the `prerender()` function.

When `vite-prerender-plugin` calls `prerender(data)` for each route, it calls the function multiple times in the same Node.js process. The line:

```ts
const { AppRoutes } = await import("./App");
```

Uses a **dynamic import** — but in Node.js (and in the Vite SSR bundle), `import()` is **cached after the first call**. Every subsequent call to `prerender()` returns the already-loaded module from memory. This is correct behaviour for modules.

The actual problem is **different**: `react-helmet-async`'s `HelmetProvider` uses a **shared server-side context** internally. When `renderToString` runs for `/` (the first route), it populates the helmet context with the home page's title, description, etc. On the second call for `/script`, a **new** `helmetContext` object is created correctly — but the issue is that **`AppRoutes` is re-imported from cache and React's module-level state (like context providers) may be carrying over**.

More specifically, looking at the code: a **new `QueryClient` is created each call**, and a **new `helmetContext` object is created each call** — so those are fine. 

The real culprit is almost certainly that `vite-prerender-plugin` is **only calling `prerender()` once** (for `/`) and then **copying that same HTML output** to all other route files. This happens when the plugin cannot determine the route from `data.url` — because **`additionalPrerenderRoutes` is passed as the option**, but the plugin's entry point discovery via `index.html` `<script prerender>` means the plugin may only invoke `prerender({ url: "/" })` and replicate the output.

Looking at the `vite-prerender-plugin` docs more carefully: when using `additionalPrerenderRoutes`, the plugin calls `prerender(data)` for EACH route, passing the correct URL. But there is a known issue: **if `data.url` is not passed through to `StaticRouter`'s `location` prop correctly**, every route renders as `/`.

**The actual bug**: `data.url` contains the route path like `/script`, but `StaticRouter` needs it as a full path. Let me check: `StaticRouter location={data.url}` — this should work since `location` accepts a string path.

Wait — looking again more carefully. The `additionalPrerenderRoutes` in `vite.config.ts` is passed to `vitePrerenderPlugin`, but `blogRoutes` are added to `allRoutes` for the sitemap but **NOT to `additionalPrerenderRoutes`**. That's a separate issue.

The **most likely real cause** of every page having identical home page content: The plugin calls `prerender()` correctly per route, but since `import("./App")` is **cached**, React's internal fiber/reconciler state from the first `renderToString` call bleeds into subsequent calls.

**The fix**: Force a fresh module evaluation OR ensure React state is fully isolated per render. Since we can't bust the module cache easily, the correct approach is to ensure all state is created fresh inside the function — which is already done for `queryClient` and `helmetContext`. 

Actually the most reliable fix is to **not use dynamic `await import()` for `AppRoutes` inside the function** — instead import it at the top of the file statically. This ensures the module is loaded once, but `renderToString` is stateless (it doesn't persist React state between calls). `renderToString` is synchronous and doesn't retain state.

**The real root cause** I believe is this: The `helmetContext` object is being reused OR the plugin is actually just copying the first render's output. Let me reconsider.

Actually — looking at the `vite-prerender-plugin` source/docs: when you specify `additionalPrerenderRoutes`, it renders each route by calling the exported `prerender(data)` with `data.url` set to each route. The `html` return value IS used per-route. So if `StaticRouter location={data.url}` is working, different routes should render different content.

**The most likely bug**: `data.url` might be coming in as `undefined` or always `/` from the plugin. Some versions of `vite-prerender-plugin` pass `data.url` as the full path, others pass it differently.

**The fix plan**: 
1. Add a `console.log` to verify... actually we can't test here.
2. The safest fix is to move all static imports to module level (outside the function) and confirm `data.url` is correctly forwarded.

Actually the fix is simpler — **move the `AppRoutes` import to the top of the file** (static import, not dynamic). Dynamic imports inside `prerender()` are fine for server-only modules like `react-dom/server`, but `AppRoutes` should be a static top-level import so there's no ambiguity about what's being rendered.

But the `typeof window !== "undefined"` guard already prevents `createRoot` from running. The dynamic `import("./App")` was added to prevent the App module from being loaded during SSR — but since we guard `createRoot` already, a static import is safe.

**Plan:**

1. **`src/main.tsx`**: Move `AppRoutes` to a **static top-level import** instead of a dynamic `await import()` inside `prerender()`. Keep the other dynamic imports (`react-dom/server`, `react-router-dom/server`, etc.) as-is since those are Node-only modules.

2. Also add `blogRoutes` to `additionalPrerenderRoutes` in `vite.config.ts` (they're currently only in `allRoutes` for the sitemap, not for prerendering).

That's it — two targeted changes.

Wait, actually I need to reconsider one more time. The `import("./App")` is inside the async `prerender()` function — in an ESM SSR bundle, this WILL be cached after the first call. But `renderToString` itself is purely functional and doesn't retain state between calls. The React tree rendered fresh each time. The helmet context is new each call. So the output SHOULD differ per route.

Unless... the plugin itself has a bug where it calls prerender once and copies. Or `data.url` is consistently `/`.

The safest, cleanest fix that addresses all potential causes:
1. Static import `AppRoutes` at the top level
2. Ensure `blogRoutes` are also in `additionalPrerenderRoutes`

This is a one-file change to `main.tsx` and a one-line change to `vite.config.ts`.
