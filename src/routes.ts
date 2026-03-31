/**
 * Canonical list of all app routes.
 * Used by both vite.config.ts (sitemap + prerendering) and main.tsx (prerender links).
 * NOTE: blog routes are appended dynamically at build time in vite.config.ts.
 */

/** Base routes without any locale prefix */
const baseRoutes: string[] = [
  "/",
  // Products
  "/film-production-software/indie-filmmakers",
  "/film-production-software/production-planning",
  "/film-production-software/studio-management",
  "/film-production-software/film-budgeting",
  "/film-production-software/storyboarding",
  // Features (tools)
  "/film-production-tool/script-writing-software",
  "/film-production-tool/scene-breakdown-software",
  "/film-production-tool/collaboration-software",
  "/film-production-tool/task-management-software",
  "/film-production-tool/data-sharing-software",
  "/film-production-tool/project-management-software",
  // Solutions
  "/film-production-solution/filmmaking-software",
  "/film-production-solution/software-for-indie-filmmakers",
  "/film-production-solution/film-school-production-software",
  "/film-production-solution/software-for-directors-producers",
  "/film-production-solution/documentary-filmmaking-software",
  "/film-production-solution/software-for-cinematographers",
  "/film-production-solution/creative-agency-production-software",
  "/film-production-solution/film-production-team-software",
  "/film-production-solution/screenwriting-software",
  "/film-production-solution/tv-production-software",
  "/film-production-solution/film-budgeting-software",
  "/film-production-solution/software-for-production-managers",
  // General
  "/pricing",
  "/about-us",
  "/pzaz-vs-final-draft",
  "/sales-team",
  "/brand",
  "/culture",
  "/privacy",
  "/terms-of-use",
  "/knowledge-base",
  "/pzaz-project",
  "/sell",
  "/shoot",
  "/visualise",
  "/write",
  "/breakdown",
  "/imagine",
  "/collaborate",
  "/introductory-video",
  // Blog
  "/producer-blog",
  "/producer-blog/category/industry-insights",
  "/producer-blog/category/production-tips",
  "/producer-blog/category/filmmaker-interviews",
];

/** Knowledge Base article slugs */
const kbSlugs: string[] = [
  // Getting Started
  "book-a-personalised-product-demonstration",
  "writing-your-script-with-pzaz",
  "ai-security-and-privacy-at-pzaz",
  "getting-started-with-workflows",
  "pzaz-101",
  // Functions
  "pzaz-security-features",
  "card-anatomy",
  "delete-your-account",
  "cancelling-or-closing-your-account",
  "your-pzaz-profile",
  "add-or-remove-blocks",
  "leave-feedback",
  "helpful-tools-for-capturing-screenshots-and-videos",
  "reporting-a-bug",
  "get-support",
  // Tools & Features
  "script-breakdown",
  "documents-section",
  "manage-section",
  "shots",
  "scenes",
  "storyboard",
  "stripboard",
  "call-sheets",
  "department",
  "moodboard",
  "team-chats",
  "file-sharing-media-storage",
  "budgeting",
  "board-views",
  "add-and-remove-team-members-filmspace",
  "roles-permissions-in-pzaz",
  "personal-to-dos",
  "card-blocks",
  "your-filmspace",
];

const kbRoutes = kbSlugs.map((s) => `/knowledge-base/${s}`);

/** Supported non-default locales */
const locales = ["ur", "fr", "es", "de"];

/** Legacy paths that redirect — pre-rendered so direct server hits work */
const legacyRedirects: string[] = [
  "/demo-video",
  "/indie",
  "/indie-filmmaking-software",
  "/film-preproduction-planning",
  "/planning",
  "/studio-pro-software",
  "/studio-pro",
  "/film-budgeting-software",
  "/budget",
  "/storyboard-software",
  "/storyboard",
  "/script",
  "/scene-breakdown-software",
  "/scene-breakdown",
  "/film-collaboration-software",
  "/collaboration-tools",
  "/production-task-management",
  "/task-management",
  "/film-file-sharing-storage",
  "/file-sharing",
  "/film-project-management",
  "/project-management",
  "/empowering-filmmaking",
  "/indie-filmmakers",
  "/film-schools-software",
  "/schools",
  "/software-for-directors-producers",
  "/directors-producers",
  "/documentary-filmmaking-software",
  "/documentary-filmmakers",
  "/software-for-cinematographers",
  "/cinematographers",
  "/creative-agency-production-software",
  "/creative-agencies",
  "/film-production-team-software",
  "/production-teams",
  "/screenwriting-software",
  "/tv-series-production-software",
  "/film-investment-software",
  "/software-for-production-managers",
  "/production-managers",
  "/terms",
  "/blog",
];

/** Build all static routes: English base + KB + legacy redirects + all locale prefixes */
export const staticRoutes: string[] = [
  ...baseRoutes,
  ...kbRoutes,
  ...legacyRedirects,
  ...locales.flatMap((loc) => [
    ...baseRoutes.map((r) => (r === "/" ? `/${loc}` : `/${loc}${r}`)),
    ...kbRoutes.map((r) => `/${loc}${r}`),
    ...legacyRedirects.map((r) => `/${loc}${r}`),
  ]),
];
