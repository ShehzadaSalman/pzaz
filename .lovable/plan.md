
## Add Meta Pixel to index.html

**Single file change** — `index.html`

**What:** Insert the Meta Pixel script (Pixel ID: `923288560584876`) into `index.html`.

**Where:**
- Add a `preconnect` + `dns-prefetch` hint for `https://connect.facebook.net` in the `<head>` (alongside the other preconnects at lines 12–23)
- Add the Meta Pixel `<script>` block just before the closing `</head>` tag (after Microsoft Clarity, line 83)
- Add the `<noscript>` pixel fallback `<img>` tag inside `<body>`, right after the existing GTM noscript block (line 90)

**Technical notes:**
- The pixel script is already `async` by nature (uses dynamic script injection), so no additional deferral is needed
- The `<noscript>` fallback goes in `<body>` per Meta's specification
- Pixel ID used exactly as provided: `923288560584876`
