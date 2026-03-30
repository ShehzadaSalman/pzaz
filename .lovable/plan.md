

## Translate 10 Remaining Components to Urdu

### Scope
30 components were translated in the previous batch. This covers the final 10 components with hardcoded English text.

### Implementation

**Group 1: Blog components (6 files)**

Add new keys to `src/locales/en/blog.json` and `src/locales/ur/blog.json`:
- `blog.producer_hero_title` / `blog.producer_hero_subtitle` — for ProducerBlogHero
- `blog.min_read`, `blog.share`, `blog.written_by`, `blog.related_articles`, `blog.view_all`, `blog.more_coming` — for ArticleContent, ArticleAuthor, ArticleRelated
- `blog.nav_about`, `blog.nav_blog`, `blog.nav_script`, `blog.nav_pricing`, `blog.nav_products`, `blog.nav_login`, `blog.nav_start_free` — for BlogHeader

Component changes:
1. **ProducerBlogHero.tsx** — add `useTranslation('blog')`, replace "The Film Maker Entrepreneur" and subtitle with `t()` calls
2. **ArticleContent.tsx** — add `useTranslation('blog')`, replace "min read" and "Share" with `t()` calls; use locale-aware date formatting based on `locale`
3. **ArticleAuthor.tsx** — add `useTranslation('blog')`, replace "Written by" with `t()`
4. **ArticleRelated.tsx** — add `useTranslation('blog')`, replace "Related Articles", "View all", "More articles coming soon", "min" with `t()` calls
5. **BlogHeader.tsx** — add `useTranslation('blog')` and `useLocale()`, replace nav labels ("About", "Blog", "Script", "Pricing", "Products", "Log in", "Start for Free") with `t()` calls; use `prefix` for Link paths
6. **BlogCard.tsx** — add `useTranslation('blog')`, replace "min read" with `t()`; use locale-aware date formatting

**Group 2: ContactModal (1 file)**

Add new keys to `src/locales/en/common.json` and `src/locales/ur/common.json`:
- `contact.title`, `contact.desc`, `contact.full_name`, `contact.company_name`, `contact.email`, `contact.phone`, `contact.message`, `contact.send`, `contact.sending`, `contact.success_title`, `contact.success_desc`, `contact.error_required`, `contact.error_generic`, plus placeholder keys

7. **ContactModal.tsx** — add `useTranslation('common')`, replace all labels, placeholders, and toast messages with `t()` calls

**Group 3: NotFound (1 file)**

Add keys to `src/locales/en/common.json` and `src/locales/ur/common.json`:
- `not_found.title`, `not_found.message`, `not_found.return_home`

8. **NotFound.tsx** — add `useTranslation('common')` and `useLocale()`, replace hardcoded text with `t()` calls; use `prefix` for home link

**Group 4: SalesTeam (1 file)**

Add keys to `src/locales/en/common.json` and `src/locales/ur/common.json`:
- `sales.seo_title`, `sales.seo_desc`, `sales.heading`, `sales.subtitle`, `sales.reach_out`, `sales.download_vcard`

9. **SalesTeam.tsx** — add `useTranslation('common')`, replace heading, subtitle, description, "Download VCard" with `t()` calls

**Group 5: PzazVsFinalDraft (1 file)**

Create new namespace files `src/locales/en/vs-final-draft.json` and `src/locales/ur/vs-final-draft.json` with all strings:
- SEO, hero, problem, solution section texts
- Comparison table feature names and string values (12 rows)
- "Why Pzaz" section texts
- 3 slide tabs/titles/bodies
- "Built for Teams" section
- "Final Verdict" section
- Shared CTAs: "Start for Free", "Book a Demo", "No credit card..." footnote

10. **PzazVsFinalDraft.tsx** — add `useTranslation('vs-final-draft')`, replace all hardcoded English with `t()` calls; register new namespace in `src/i18n.ts` if needed

### Urdu translations approach
All Urdu translations follow the established meaning-first approach with professional film terminology preserved in English where appropriate (e.g., "Final Draft", "Storyboard", "Shot Lists").

### Files changed
- `src/locales/en/blog.json` — add ~15 new keys
- `src/locales/ur/blog.json` — add ~15 new keys
- `src/locales/en/common.json` — add ~15 new keys
- `src/locales/ur/common.json` — add ~15 new keys
- `src/locales/en/vs-final-draft.json` — new file (~60 keys)
- `src/locales/ur/vs-final-draft.json` — new file (~60 keys)
- 10 component/page files refactored to use `useTranslation`

