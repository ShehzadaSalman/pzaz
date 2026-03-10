
## The User's Valid Point

The user is absolutely right to question this. The current setup is a **fake SSG** — it's just string-based meta tag injection at build time. It does NOT actually execute React components. The `bodyContent` fields in `vite.config.ts` are manually hand-written HTML strings, completely disconnected from the actual React component tree.

True SSG (like Next.js, Astro, or Vite SSR) actually *renders the React components to HTML*. What this project has is a Vite build-time plugin that reads a static `index.html` template and does string replacements — it has no idea what React components are imported where.

**Why the IntegrationsSection heading was missing:**
The plugin never "knew" that `IntegrationsSection` was imported in `Index.tsx` — it only knows what you manually put in the `bodyContent` string for the `/` path.

**The real question: what should we do?**

There are two paths:

### Option A: Embrace the current approach but be honest about it
The `bodyContent` in `vite.config.ts` IS meant to be manually curated SEO content — think of it as a "schema.org"-style content injection specifically for crawlers. It's not supposed to mirror every component; it's supposed to contain the most important semantic content for SEO. The integrations section content was already added in the last message.

This approach is fine and is already working. The `dist/index.html` the user shared confirms it works. The "Works with your existing tools" heading IS now in the bodyContent for `/`.

### Option B: Implement proper React SSR/SSG
This would mean using `react-dom/server`'s `renderToString` in the Vite plugin to actually render the full React component tree to HTML at build time. This is much more complex but would be truly automatic — any component added to a page would automatically appear in the pre-rendered HTML.

**Key constraint from memory**: "A critical architectural constraint is maintaining a standard Vite SPA structure to preserve the Lovable build pipeline; migrations to 'Framework Mode' are strictly avoided as they break the build and preview infrastructure."

However, we can do React SSR rendering *within the existing Vite plugin* without changing to framework mode — by using `react-dom/server` in the `closeBundle` hook, but this requires the components to be importable as CommonJS/ESM in Node.js context during the build, which is complex with assets (images, CSS).

### My recommendation: Plan B (proper SSR in the plugin)

We can implement actual `renderToString` SSG within the existing `prerenderMetaPlugin` without changing the framework. The approach:

1. During the Vite build, after the bundle is generated, use the built server-side entry to render each route
2. Create a `src/entry-server.tsx` file that exports a `render(url)` function using `react-dom/server`'s `renderToString` + `StaticRouter` from `react-router-dom`
3. Add a Vite SSR build step that compiles the server entry
4. In the plugin, call the render function for each route and inject the resulting HTML

Wait — but the memory says "migrations to Framework Mode are strictly avoided". Let me think about whether this actually constitutes a framework mode change...

Actually, adding a server entry + SSR build is a standard Vite SSR pattern (not "framework mode" which refers to React Router v7's new framework mode). This is just `vite build --ssr`. But it does add complexity to the build pipeline.

Actually, the simpler and more pragmatic answer is:

The current approach IS the correct approach for this architecture. The `bodyContent` is intentionally curated SEO content. The user's expectation (that components auto-render to HTML) would require a fundamentally different architecture (true SSR).

**What I should explain in the plan:**

The honest answer is: No, the current plugin cannot automatically pick up React component content because it doesn't actually execute React. It's a static HTML template modifier.

The plan should offer two options:
1. Keep current approach — it's working, the integrations content is already there
2. Upgrade to true SSR rendering using `react-dom/server` + `StaticRouter` in the Vite plugin (genuinely automatic)

I'll present the true SSR upgrade as the plan since that's what the user is implicitly asking for — automation.

**Implementation plan for true SSR:**

1. Create `src/entry-server.tsx` — renders `<App>` with `StaticRouter` and `renderToString`
2. Modify `vite.config.ts` to:
   - Add an SSR build step that compiles `entry-server.tsx` 
   - In `prerenderMetaPlugin`, after the client build, run the SSR build and use `renderToString` for each route
   - Inject the rendered HTML into `<div id="root">`
   - Keep meta tag injection from SEO routes

Actually wait — this is more complex because:
- Images are hashed assets in the bundle, they won't resolve in SSR
- CSS modules won't work the same way
- There might be `window`/`document` references in components

The safest implementation that doesn't break things:
- Use `vite.ssrLoadModule` in the plugin to load the server entry in the same Vite context
- This handles asset URL resolution

But this is quite involved and risky given the constraint about not breaking the build pipeline.

**Final recommendation**: Present a plan to implement proper `renderToString`-based SSG using a dedicated server entry file. This is the correct, automatic solution the user is asking for. It does NOT change the framework — it stays SPA but adds build-time HTML rendering.

The plan:
1. Create `src/entry-server.tsx` with a `render(url)` function using `renderToString` + `StaticRouter`
2. Update `vite.config.ts` to use `vite.ssrLoadModule` to render each route's HTML automatically
3. The `bodyContent` manual strings become unnecessary — real component HTML replaces them
4. Keep the meta tag replacement logic (it still reads from `staticSEORoutes`)

This is clean, automatic, and correct. Let me plan it properly.

Actually, I need to be careful. The `prerenderMetaPlugin` runs in `closeBundle` — at that point, we can use Node's `require`/`import` to load a pre-built SSR bundle. The flow would be:

1. Vite builds the client bundle normally
2. Separately, Vite builds an SSR bundle (`vite build --ssr src/entry-server.tsx`)
3. The plugin loads the SSR bundle and renders each route

But coordinating two Vite builds is complex. The standard approach is to have two separate build commands: `vite build` (client) and `vite build --ssr` (server).

Actually for static pre-rendering, the most common and reliable pattern used in production is:

```
// vite.config.ts - add a prerender script
```

Or use a post-build script. Let me think about what's realistic here without breaking things.

The most pragmatic plan that addresses the user's concern without breaking the Lovable build pipeline:

**Plan: Create a post-build prerender script**

1. Create `src/entry-server.tsx` — exports `render(url: string): string`
2. Create `scripts/prerender.mjs` — a Node script that:
   - Loads the SSR build
   - Renders each route with `renderToString`  
   - Injects the HTML + meta tags into the dist files
3. Update `package.json` to run `vite build && node scripts/prerender.mjs`
4. The `prerenderMetaPlugin` in `vite.config.ts` simplifies to just handle meta tags (no more manual `bodyContent`)

This keeps the Vite config clean, doesn't add an SSR Vite build (just a Node script), and makes pre-rendering truly automatic.

This is the right plan. Let me write it up concisely.
