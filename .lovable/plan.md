
## The Problem

The `prerenderMetaPlugin` in `vite.config.ts` only swaps meta tags (`<title>`, description, OG tags) — it never injects actual page content into the `<div id="root">` shell. Every page's HTML body is identical and empty. Crawlers see the same blank React shell for all URLs.

The fix requires the plugin to:
1. Read the relevant article/page content at build time
2. Render it as HTML strings
3. Inject it into `<div id="root">` in each route's `index.html`

## Plan

### 1. Extend `prerenderMetaPlugin` to inject body content

Add a `bodyContent?: string` field to `RouteSEO`. The plugin will replace `<div id="root"></div>` with `<div id="root" data-ssr="true">{{ bodyContent }}</div>` when content is provided.

### 2. Build a markdown-to-HTML converter in vite.config.ts

A lightweight function that converts the markdown syntax used in `knowledgeBaseData.ts` and `blogDataFull.ts` to HTML strings (headings, paragraphs, lists, bold, italic, links).

### 3. Pre-render Knowledge Base article content

At build time, read `src/data/knowledgeBaseData.ts`, parse each article's content field, convert to HTML, and pass it as `bodyContent` for each KB route. This wraps it in the same article layout structure (title, category badge, prose content) as HTML.

### 4. Pre-render Blog article content

Similarly, read `src/data/blogDataFull.ts` at build time using dynamic `require`/`fs.readFileSync` + regex extraction (same approach already used for blog SEO), extract article content per slug, convert to HTML, and pass as `bodyContent`.

### 5. Static marketing pages

For static pages (`/script`, `/pricing`, etc.) the body content is React-driven and crawler-indexable via the title/description meta tags — leave these as-is since they don't have structured article content to inject.

## Files to Change

- `vite.config.ts` — extend `RouteSEO` interface with `bodyContent?`, update `prerenderMetaPlugin` to inject it into the root div, add markdown-to-HTML utility, generate KB and blog article body content

## What this looks like

```text
Before (all pages):
  <div id="root"></div>  ← empty for crawlers

After (article pages):
  <div id="root" data-ssr="true">
    <h1>Writing Your Script with Pzaz</h1>
    <p>With the scriptwriting tool, you can turn...</p>
    <h2>Getting Started</h2>
    ...
  </div>
```

This is a single-file change to `vite.config.ts` that solves the core crawlability issue without touching any React components or requiring a framework change.
