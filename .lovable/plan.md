
## Plan: Video Player Page

**Goal:** Create a new page at `/demo-video` with a full-width video player using `https://pzaz.tv/videos/hero-banner.mp4` and a prominent download button.

### Files to create/modify

**1. Create `src/pages/VideoPlayer.tsx`**
- Clean, minimal branded page using `PageLayout`
- Full-width `<video>` element with `controls`, `autoPlay`, `muted`, `loop`, `playsInline`
- Source: `https://pzaz.tv/videos/hero-banner.mp4`
- Prominent "Download Video" button below the player using an `<a>` tag with `href` pointing to the video URL and `download` attribute — this triggers a native browser download

**2. Add route in `src/App.tsx`**
- Add `const VideoPlayer = lazy(() => import("./pages/VideoPlayer"));`
- Add `<Route path="/demo-video" element={<VideoPlayer />} />`

**3. Add to `src/routes.ts`**
- Append `"/demo-video"` to `staticRoutes`

### Page layout

```text
┌─────────────────────────────┐
│         Header              │
├─────────────────────────────┤
│   Pzaz – Demo Video         │ ← heading
│   subtitle text             │
│  ┌───────────────────────┐  │
│  │   <video> player      │  │ ← full controls
│  └───────────────────────┘  │
│  [ ↓ Download Video ]       │ ← prominent CTA button
├─────────────────────────────┤
│         Footer              │
└─────────────────────────────┘
```

No nav link added — page is accessible via direct URL only, kept unlisted.
