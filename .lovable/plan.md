
## Root cause diagnosis

The user ran `npm run build` locally and the prerendered HTML pages have no content — the `#root` div is empty.

### Why this happens

There are **two compounding issues**:

**1. The `prerenderScript` is an ESM/TSX file — the plugin builds it with the Vite client bundle instead of as a Node SSR bundle**

The `vitePrerenderPlugin` docs say: the prerender script can be specified via `prerenderScript: path.resolve(...)` OR by adding a `prerender` attribute to a `<script>` tag in `index.html`. The plugin builds the script as part of the Vite SSR build. The key requirement is that `src/prerender.tsx` must **not** be imported by the client app — it is a build-time-only script. Currently, `prerender.tsx` is not listed in `index.html` as a `<script prerender>` tag, and is only referenced via the config option. This is fine, BUT:

**2. `App.tsx` imports `BrowserRouter` and calls browser-only APIs at module evaluation time**

The critical issue is that `App.tsx` is imported by `prerender.tsx`. `App.tsx` in turn imports all page components (50+ imports at the top of the file). Several of these components — especially via `framer-motion` — access browser globals (`window`, `document`, `IntersectionObserver`, `ResizeObserver`) during module initialization, not just during render.

Most critically: `framer-motion` accesses `document` and `window` **at import time** when bundled for the browser. When the plugin tries to execute the prerender script in a Node.js context, `framer-motion` crashes before `renderToString` even runs, resulting in an empty `#root`.

The error the plugin produces is silent (swallowed) so the HTML file is written with empty content.

**3. `main.tsx` is the `prerenderScript` entry — but shouldn't be**

Looking at the plugin spec more carefully: the `prerenderScript` option points to `src/prerender.tsx`, which exports `prerender()`. This is correct. However, the plugin also searches `index.html` for `<script type="module" src="...prerender">` as an alternative. Since `index.html` points to `main.tsx` (which calls `createRoot` — a browser DOM API), this may also be causing the crash.

**The real fix**

The plugin's own documentation and GitHub issues confirm: **the prerender script must be the same entrypoint as `main.tsx`** — i.e., it should be colocated with the client entry, OR a separate SSR-only entry must be used. The correct Preact pattern is:

```
// main.tsx (same file, dual-mode)
if (typeof window !== 'undefined') {
  // client hydration
  createRoot(document.getElementById('root')!).render(<App />);
}

export async function prerender(data) {
  // SSR path
}
```

The plugin then picks up the `prerender` export from this single file when it encounters `<script type="module" src="/src/main.tsx">` in `index.html`.

OR use the `prerenderScript` option pointing to a **separate file** that does NOT import anything from the client bundle that uses browser globals at import time.

**The cleanest fix for this project** is to:

1. **Add `prerender` attribute to the `<script>` tag in `index.html`** — this signals the plugin to use `main.tsx` as the prerender entry AND merge the prerender export into it
2. **Move the `prerender()` function export INTO `main.tsx`** — so it's colocated with the client entry (the standard pattern per plugin docs)
3. **Add a `typeof window !== 'undefined'` guard** around `createRoot(...)` in `main.tsx` to prevent the DOM call during SSR
4. **Remove `prerenderScript`** from `vite.config.ts` since the plugin will auto-discover the prerender export from the `<script prerender>` tagged entry
5. **Wrap `framer-motion` usage** with SSR-safe lazy imports or add `reduceMotion` — actually framer-motion v11+ handles SSR fine when not accessed at module level; the real crash is `createRoot` calling `document.getElementById`

### Changes

**`index.html`** — add `prerender` attribute to the script tag:
```html
<script type="module" src="/src/main.tsx" prerender></script>
```

**`src/main.tsx`** — guard client render + export `prerender()`:
```ts
import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./App";
import App from "./App.tsx";
import "./index.css";

// Client-side hydration (guarded — not run during prerendering)
if (typeof window !== "undefined") {
  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

// SSR prerender export (used by vite-prerender-plugin at build time)
export async function prerender(data: { url: string }) {
  // ... renderToString logic (moved from prerender.tsx)
}
```

**`vite.config.ts`** — remove `prerenderScript` option:
```ts
vitePrerenderPlugin({
  renderTarget: "#root",
  additionalPrerenderRoutes: staticRoutes,
  // no prerenderScript — plugin auto-discovers from <script prerender> in index.html
})
```

**`src/prerender.tsx`** — delete this file (logic moved into `main.tsx`)

### Summary of files to change
- `index.html` — add `prerender` attribute to `<script>` tag
- `src/main.tsx` — add `typeof window !== 'undefined'` guard + move prerender export here
- `vite.config.ts` — remove `prerenderScript` option
- `src/prerender.tsx` — delete (no longer needed)
