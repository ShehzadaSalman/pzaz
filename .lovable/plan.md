
The user has uploaded a complete set of favicon files in all standard sizes. I need to:

1. Copy all uploaded favicon files to the `public/` directory:
   - `favicon.ico` → `public/favicon.ico`
   - `favicon-16x16.png` → `public/favicon-16x16.png`
   - `favicon-32x32.png` → `public/favicon-32x32.png`
   - `apple-touch-icon.png` → `public/apple-touch-icon.png`
   - `android-chrome-192x192.png` → `public/android-chrome-192x192.png`
   - `android-chrome-512x512.png` → `public/android-chrome-512x512.png`

2. Update `index.html` to replace the current single favicon link with the full set of properly sized favicon tags:
   - `<link rel="icon" href="/favicon.ico">` (default)
   - `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`
   - `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`
   - `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`
   - `<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">`
   - `<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">`

This replaces the current `public/favicon.webp` reference and gives full cross-browser and mobile device support.
