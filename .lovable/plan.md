
## Problem

The error is in `dist-ssr/entry-server.js` — the **compiled output** — not the source file `src/entry-server.tsx`. The source file is already correct (uses `import helmetPkg from "react-helmet-async"` with destructuring). The `dist-ssr/` folder is stale from before the fix.

The error:
```
import helmetPkg, { Helmet } from "react-helmet-async";
                    ^^^^^^
```
This is the old broken import pattern. It exists in `dist-ssr/entry-server.js` because that file was compiled when the source still had `{ Helmet }` as a named import. The build step `vite build --ssr` has not been re-run since the source was fixed.

## Fix

Delete the stale `dist-ssr/` folder so it can't interfere, then the user needs to re-run the full build command:

```
npm run build
```

Which runs: `vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs`

The SSR build step will recompile `src/entry-server.tsx` (now fixed) into a fresh `dist-ssr/entry-server.js`.

## Code change

Add a `clean` step to the build script in `package.json` to delete `dist-ssr/` before building, preventing stale compiled output from causing this class of error in the future:

```json
"build": "vite build && rm -rf dist-ssr && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs"
```

This ensures `dist-ssr/` is always freshly compiled. One file, one line change.
