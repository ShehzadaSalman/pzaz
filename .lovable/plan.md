
## Problem

`ipapi.co/json/` is being called directly from the browser (client-side). It blocks requests from Lovable preview and production origins with CORS errors. The same underlying issue caused `freeipapi.com` and `ipwho.is` to fail earlier — these geo-IP APIs do not support arbitrary browser origins.

## Solution

Create a thin Supabase Edge Function (`geo-detect`) that:
1. Calls `ipapi.co/json/` **server-side** (no CORS restrictions on server-to-server calls)
2. Returns only `{ country_code, continent_code }` to the client
3. Responds with proper `Access-Control-Allow-Origin: *` headers so the browser can call it freely

Then update `use-currency.ts` to call this edge function instead of hitting `ipapi.co` directly.

## Changes

**1. New file: `supabase/functions/geo-detect/index.ts`**
- Handles `OPTIONS` preflight with CORS headers
- Fetches `https://ipapi.co/json/` server-side using the request's IP (forwarded via the `X-Forwarded-For` header from Supabase's infrastructure)
- Returns `{ country_code, continent_code }` with CORS headers

**2. Update: `supabase/config.toml`**
- Add `[functions.geo-detect]` with `verify_jwt = false` (no auth needed for a public geo lookup)

**3. Update: `src/hooks/use-currency.ts`**
- Replace the direct `ipapi.co` call with a call to the edge function URL:
  ```
  https://zrlonqczjzkgzmxiwdcl.supabase.co/functions/v1/geo-detect
  ```
- Map the response to `{ countryCode, continentCode }` using `country_code` / `continent_code`
- Keep the same fallback-to-EUR logic if the request fails

## Architecture

```text
Browser
  │
  ├── fetch /functions/v1/geo-detect  (no CORS issue — same infra domain)
  │
  └── Edge Function (Deno, server-side)
        │
        └── fetch https://ipapi.co/json/  (server-to-server, no CORS)
              │
              └── returns { country_code, continent_code }
```

No secrets required — `ipapi.co` free tier works without an API key for server-side calls.
