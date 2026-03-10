import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

const SITE_URL = "https://pzaz.io";

function sitemapPlugin(routes: string[]): Plugin {
  return {
    name: "generate-sitemap",
    closeBundle() {
      const urls = routes
        .map(
          (r) =>
            `  <url><loc>${SITE_URL}${r}</loc><changefreq>weekly</changefreq></url>`
        )
        .join("\n");
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
      const distDir = path.resolve(__dirname, "dist");
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
      }
    },
  };
}

interface RouteSEO {
  path: string;
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  bodyContent?: string;
}

/**
 * Converts a markdown string to safe HTML for SSG injection.
 * Handles headings, paragraphs, lists, bold, italic, links, blockquotes.
 */
function markdownToHtml(md: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const inlineFormat = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => `<a href="${escape(href)}">${escape(text)}</a>`)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/__(.+?)__/g, "<strong>$1</strong>")
      .replace(/_(.+?)_/g, "<em>$1</em>");

  const lines = md.split("\n");
  const html: string[] = [];
  let inList = false;
  let inBlockquote = false;

  const closeList = () => { if (inList) { html.push("</ul>"); inList = false; } };
  const closeBlockquote = () => { if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; } };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("### ")) {
      closeList(); closeBlockquote();
      html.push(`<h3>${inlineFormat(escape(line.slice(4)))}</h3>`);
    } else if (line.startsWith("## ")) {
      closeList(); closeBlockquote();
      html.push(`<h2>${inlineFormat(escape(line.slice(3)))}</h2>`);
    } else if (line.startsWith("# ")) {
      closeList(); closeBlockquote();
      html.push(`<h1>${inlineFormat(escape(line.slice(2)))}</h1>`);
    } else if (line.startsWith("> ")) {
      closeList();
      if (!inBlockquote) { html.push("<blockquote>"); inBlockquote = true; }
      html.push(`<p>${inlineFormat(escape(line.slice(2)))}</p>`);
    } else if (/^[-*] /.test(line)) {
      closeBlockquote();
      if (!inList) { html.push("<ul>"); inList = true; }
      html.push(`<li>${inlineFormat(escape(line.slice(2)))}</li>`);
    } else if (line.trim() === "") {
      closeList(); closeBlockquote();
    } else {
      closeList(); closeBlockquote();
      html.push(`<p>${inlineFormat(escape(line))}</p>`);
    }
  }
  closeList(); closeBlockquote();
  return html.join("\n");
}

/**
 * Generates a static index.html per route with correct <title>, OG, Twitter meta tags,
 * and pre-rendered body content for crawlers.
 */
function prerenderMetaPlugin(routes: RouteSEO[]): Plugin {
  return {
    name: "prerender-meta-tags",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const templatePath = path.join(distDir, "index.html");
      if (!fs.existsSync(templatePath)) return;

      const template = fs.readFileSync(templatePath, "utf-8");

      for (const route of routes) {
        let html = template
          .replace(
            /<title>[^<]*<\/title>/,
            `<title>${route.title}</title>`
          )
          .replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${route.description}" />`
          )
          .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${route.canonical || `${SITE_URL}${route.path}/`}" />`
          )
          .replace(
            /<meta property="og:title" content="[^"]*" \/>/,
            `<meta property="og:title" content="${route.title}" />`
          )
          .replace(
            /<meta property="og:description" content="[^"]*" \/>/,
            `<meta property="og:description" content="${route.description}" />`
          )
          .replace(
            /<meta property="og:image" content="[^"]*" \/>/,
            `<meta property="og:image" content="${route.image || `${SITE_URL}/og-image.png`}" />`
          )
          .replace(
            /<meta name="twitter:image" content="[^"]*" \/>/,
            `<meta name="twitter:image" content="${route.image || `${SITE_URL}/og-image.png`}" />`
          );

        // Inject pre-rendered body content for article pages
        if (route.bodyContent) {
          html = html.replace(
            /<div id="root"><\/div>/,
            `<div id="root" data-ssr="true"><article class="ssr-content">${route.bodyContent}</article></div>`
          );
        }

        // Write to dist/<route>/index.html
        const routeDir = path.join(distDir, route.path);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }
    },
  };
}

// Static route list
const staticRoutes = [
  "/",
  "/script",
  "/pricing",
  "/producer-blog",
  "/imagine",
  "/collaborate",
  "/breakdown",
  "/about-us",
  "/pzaz-vs-final-draft",
  "/sales-team",
  "/brand",
  "/culture",
  "/privacy",
  "/terms",
  "/knowledge-base",
  "/pzaz-project",
  "/sell",
  "/shoot",
  "/visualise",
  "/write",
  "/indie",
  "/budget",
  "/planning",
  "/studio-pro",
  "/storyboard",
  "/scene-breakdown",
  "/collaboration-tools",
  "/task-management",
  "/file-sharing",
  "/project-management",
  // Knowledge Base – Getting Started
  "/knowledge-base/book-a-personalised-product-demonstration",
  "/knowledge-base/writing-your-script-with-pzaz",
  "/knowledge-base/ai-security-and-privacy-at-pzaz",
  "/knowledge-base/getting-started-with-workflows",
  "/knowledge-base/pzaz-101",
  // Knowledge Base – Functions
  "/knowledge-base/pzaz-security-features",
  "/knowledge-base/card-anatomy",
  "/knowledge-base/delete-your-account",
  "/knowledge-base/cancelling-or-closing-your-account",
  "/knowledge-base/your-pzaz-profile",
  "/knowledge-base/add-or-remove-blocks",
  "/knowledge-base/leave-feedback",
  "/knowledge-base/helpful-tools-for-capturing-screenshots-and-videos",
  "/knowledge-base/reporting-a-bug",
  "/knowledge-base/get-support",
  // Knowledge Base – Tools & Features
  "/knowledge-base/script-breakdown",
  "/knowledge-base/documents-section",
  "/knowledge-base/manage-section",
  "/knowledge-base/shots",
  "/knowledge-base/scenes",
  "/knowledge-base/storyboard",
  "/knowledge-base/stripboard",
  "/knowledge-base/call-sheets",
  "/knowledge-base/department",
  "/knowledge-base/moodboard",
  "/knowledge-base/team-chats",
  "/knowledge-base/file-sharing-media-storage",
  "/knowledge-base/budgeting",
  "/knowledge-base/board-views",
  "/knowledge-base/add-and-remove-team-members-filmspace",
  "/knowledge-base/roles-permissions-in-pzaz",
  "/knowledge-base/personal-to-dos",
  "/knowledge-base/card-blocks",
  "/knowledge-base/your-filmspace",
];

// Static pages with SEO metadata for pre-rendering
const staticSEORoutes: RouteSEO[] = [
  {
    path: "/",
    title: "Pzaz – Film Production Software for Indie Filmmakers",
    description: "Pzaz is the all-in-one film production platform for indie filmmakers. Manage scripts, budgets, schedules, and crew — powered by AI.",
    bodyContent: `<h1>Pzaz – Film Production Software for Indie Filmmakers</h1>
<p>Pzaz is the all-in-one film production platform built for indie filmmakers. Manage your scripts, budgets, schedules, storyboards, and crew — all in one place, powered by AI.</p>
<h2>The Problem With Fragmented Film Production</h2>
<p>Indie filmmakers juggle scripts in one app, budgets in another, and schedules in spreadsheets. Pzaz replaces the fragmented stack with a single connected production environment.</p>
<h2>One Platform. Every Stage of Production.</h2>
<p>From your first screenplay draft to distribution, Pzaz connects every phase of filmmaking — writing, planning, shooting, and selling — in a unified workspace.</p>
<h2>AI-Powered Production Intelligence</h2>
<p>Pzaz's AI engine automatically extracts characters, locations, props, and production requirements directly from your script — turning pages into production-ready breakdowns in seconds.</p>
<h2>Products</h2>
<ul>
<li>Pzaz Script – AI-powered screenwriting and script breakdown</li>
<li>Pzaz Storyboard – Visual development and animatics</li>
<li>Pzaz Budget – Film budgeting connected to your script</li>
<li>Pzaz Planning Pro – Preproduction inside production context</li>
<li>Pzaz Studio Pro – Slate management for production companies</li>
<li>Pzaz Shoot – Real-time on-set command center</li>
<li>Pzaz Scene Breakdown – Tag, organise, and prepare scenes</li>
<li>Pzaz Task Management – Clear ownership for film productions</li>
<li>Pzaz Collaboration Tools – Real-time team coordination</li>
<li>Pzaz File Sharing – Centralised production asset storage</li>
<li>Pzaz Project Management – The work OS for filmmakers</li>
</ul>
<h2>Works with your existing tools</h2>
<p>No lock-in. No barriers. Just filmmaking. Pzaz integrates with Final Draft, Google Maps, PDF, CSV, and more — so you can keep using the tools you already love.</p>`,
  },
  {
    path: "/script",
    title: "Script – AI-Powered Screenwriting | Pzaz",
    description: "Write, format, and collaborate on scripts with Pzaz's AI-powered screenwriting tool. Industry-standard formatting, real-time collaboration, and more.",
    bodyContent: `<h1>Pzaz Script – AI-Powered Script Breakdown &amp; Production Intelligence</h1>
<p>Import any screenplay and instantly extract characters, locations, props, and production data. Pzaz Script turns scripts into production-ready breakdowns powered by AI.</p>
<h2>Why Screenwriters and Producers Choose Pzaz Script</h2>
<p>Traditional script software stops at formatting. Pzaz Script is the only screenwriting tool that connects directly to your entire production — breakdowns, schedules, budgets, and team collaboration all flow from the script.</p>
<h2>Key Features</h2>
<ul>
<li>Industry-standard screenplay formatting</li>
<li>AI-powered script breakdown — extract characters, locations, props automatically</li>
<li>Real-time collaboration with your writing team</li>
<li>Import and export Final Draft, PDF, and fountain formats</li>
<li>Scene-by-scene syncing with production schedules and storyboards</li>
<li>AI writing assistant for drafting, rewriting, and scene suggestions</li>
</ul>`,
  },
  {
    path: "/pricing",
    title: "Pricing – Plans for Every Filmmaker | Pzaz",
    description: "Flexible pricing plans for indie filmmakers and production teams. Start for free — no credit card required.",
    bodyContent: `<h1>Pzaz Pricing – Flexible Plans for Every Filmmaker</h1>
<p>Start free and scale as your productions grow. Pzaz offers individual tools from €19/month and full production bundles from €99/month. No credit card required to get started.</p>
<h2>Plans</h2>
<ul>
<li>Indie – For solo filmmakers starting out</li>
<li>Production Bundle – Full suite for active productions</li>
<li>Studio Pro – Multi-project slate management for production companies</li>
</ul>`,
  },
  {
    path: "/producer-blog",
    title: "Producer Blog – Filmmaking Insights | Pzaz",
    description: "Tips, guides, and insights for indie filmmakers and producers. Explore the Pzaz Producer Blog.",
    bodyContent: `<h1>The Pzaz Producer Blog – Filmmaker Insights &amp; Industry Tips</h1>
<p>Interviews, production tips, film business advice, and the latest in film production technology — curated for indie filmmakers and producers.</p>`,
  },
  {
    path: "/imagine",
    title: "Imagine – Moodboarding & Visual Planning | Pzaz",
    description: "Build stunning moodboards and visual references for your film. Pzaz's Imagine tool brings your creative vision to life.",
    bodyContent: `<h1>Pzaz Imagine – Moodboarding &amp; Visual Development for Filmmakers</h1>
<p>Build visual moodboards, collect reference images, and align your team on the look and feel of your film — all inside your production environment.</p>`,
  },
  {
    path: "/collaborate",
    title: "Collaborate – Real-Time Film Production Teamwork | Pzaz",
    description: "Work with your entire production team in real time. Pzaz's collaboration tools keep scripts, schedules, and shot lists in sync.",
    bodyContent: `<h1>Pzaz Collaborate – Real-Time Teamwork for Film Productions</h1>
<p>Keep your entire cast and crew aligned. Pzaz's collaboration tools connect scripts, schedules, shot lists, and communication in one real-time workspace.</p>`,
  },
  {
    path: "/breakdown",
    title: "Breakdown – Scene & Production Breakdown | Pzaz",
    description: "Break down your script into production-ready scene lists, shot lists, and schedules — all inside Pzaz.",
    bodyContent: `<h1>Pzaz Breakdown – Scene &amp; Production Breakdown Tool</h1>
<p>Break down your script into production-ready scene lists, shot lists, and schedules. Pzaz automates the breakdown process so you can focus on making the film.</p>`,
  },
  {
    path: "/about-us",
    title: "About Us – The Story Behind Pzaz",
    description: "Learn about the team and mission behind Pzaz — the all-in-one film production platform built for indie filmmakers.",
    bodyContent: `<h1>About Pzaz – Built for Indie Filmmakers</h1>
<p>Pzaz was built by filmmakers who experienced the chaos of managing productions across scattered tools. Our mission is to give indie filmmakers one connected platform that handles every stage of production.</p>`,
  },
  {
    path: "/pzaz-vs-final-draft",
    title: "Pzaz vs. Final Draft – The Complete Film Production Hub",
    description: "See how Pzaz outperforms Final Draft with end-to-end production tools: storyboarding, scheduling, real-time collaboration, AI writing, and more.",
    bodyContent: `<h1>Pzaz vs. Final Draft – Why Filmmakers Are Making the Switch</h1>
<p>Final Draft is a great screenwriting tool — but it stops at the script. Pzaz connects your screenplay to every stage of production: breakdown, scheduling, storyboarding, budgeting, and real-time collaboration.</p>
<h2>Key Differences</h2>
<ul>
<li>Pzaz includes AI-powered script breakdown — Final Draft does not</li>
<li>Pzaz connects script to schedule, budget, and storyboard automatically</li>
<li>Pzaz includes real-time collaboration for the entire production team</li>
<li>Pzaz is a complete production platform — not just a writing tool</li>
</ul>`,
  },
  {
    path: "/sales-team",
    title: "Sales Team – Work With Pzaz | Pzaz",
    description: "Connect with the Pzaz sales team to find the right plan for your production company or film school.",
  },
  {
    path: "/brand",
    title: "Brand Assets – Pzaz Media Kit",
    description: "Download official Pzaz logos, brand colours, and media assets for press and partner use.",
  },
  {
    path: "/culture",
    title: "Culture – Life at Pzaz",
    description: "Discover the values, principles, and culture that drive the team at Pzaz.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Pzaz",
    description: "Read the Pzaz privacy policy to understand how we collect, use, and protect your data.",
  },
  {
    path: "/terms",
    title: "Terms of Use | Pzaz",
    description: "Review the Pzaz terms of use governing your access to and use of the platform.",
  },
  // New marketing pages
  {
    path: "/knowledge-base",
    title: "Knowledge Base – Help & Guides | Pzaz",
    description: "Browse Pzaz's knowledge base for guides on getting started, tools & features, security, and account management.",
  },
  {
    path: "/pzaz-project",
    title: "Pzaz Project – Your Film Production Command Center",
    description: "Pzaz Project unifies your entire film production into one connected workspace. Boards, Docs, Messaging, Drive, and Smart Inbox — all in one place. Free to start.",
    bodyContent: `<h1>Pzaz Project – Your Film Production Command Center</h1>
<p>Pzaz Project unifies your entire film production into one connected workspace. Boards, Docs, Messaging, Drive, and Smart Inbox — all in one place. Free to start.</p>`,
  },
  {
    path: "/sell",
    title: "Pzaz Sell – Film Sales, Distribution & Marketing Workspace",
    description: "Pzaz Sell is your mission control for film marketing, outreach, and distribution. Pitch your script, plan festivals, manage licensing, and deliver assets — all in one place.",
    bodyContent: `<h1>Pzaz Sell – Film Sales, Distribution &amp; Marketing Workspace</h1>
<p>Your mission control for film marketing, outreach, and distribution. Pitch your script, plan your festival strategy, manage licensing deals, and deliver assets — all in one place.</p>`,
  },
  {
    path: "/shoot",
    title: "Pzaz Shoot – Real-Time On-Set Production Command Center",
    description: "Pzaz Shoot is your real-time command center for shoot days. Instant call sheet updates, live team alignment, script changes, and on-set collaboration — all in one place.",
    bodyContent: `<h1>Pzaz Shoot – Real-Time On-Set Production Command Center</h1>
<p>Instant call sheet updates, live team alignment, script changes, and on-set collaboration — all in one place. Keep your shoot day running smoothly with Pzaz Shoot.</p>`,
  },
  {
    path: "/visualise",
    title: "Pzaz Visualise – Storyboarding Inside Your Production Platform",
    description: "Pzaz Visualise brings storyboarding into your production workflow. Turn scripts into visual storyboards frame-by-frame with AI, real-time collaboration, and scene syncing.",
    bodyContent: `<h1>Pzaz Visualise – Storyboarding Inside Your Production Platform</h1>
<p>Turn scripts into visual storyboards frame-by-frame with AI assistance, real-time collaboration, and direct scene syncing. Pzaz Visualise brings your creative vision to life before you shoot a single frame.</p>`,
  },
  {
    path: "/write",
    title: "Pzaz Write – Screenwriting Connected to Your Entire Film Production",
    description: "Pzaz Write is the screenwriting tool built into your film production workflow. Industry-standard formatting, real-time collaboration, AI assistance, and scene-by-scene syncing.",
    bodyContent: `<h1>Pzaz Write – Screenwriting Connected to Your Entire Film Production</h1>
<p>Industry-standard screenplay formatting, real-time collaboration, AI writing assistance, and scene-by-scene syncing with your production schedule — all in one place.</p>`,
  },
  // New product pages
  {
    path: "/indie",
    title: "Pzaz Indie – Film Production Software for Independent Filmmakers",
    description: "Everything an indie filmmaker needs to take a project from script to screen. Free to start, no credit card required.",
    bodyContent: `<h1>Pzaz Indie – Film Production Software for Independent Filmmakers</h1>
<p>Everything an indie filmmaker needs to take a project from script to screen. Write your screenplay, break it down, plan your shoot, manage your budget, and collaborate with your team — all in Pzaz. Free to start.</p>
<h2>Built for Indie Filmmakers</h2>
<p>Pzaz Indie gives solo filmmakers and small crews access to professional production tools without the enterprise price tag. Start for free and scale as your production grows.</p>`,
  },
  {
    path: "/budget",
    title: "Pzaz Budget – Film Budgeting Software Connected to Your Production",
    description: "Create accurate film budgets connected directly to your script, schedule, and crew. Pzaz Budget gives indie filmmakers real-time financial control over every production.",
    bodyContent: `<h1>Pzaz Budget – Film Budgeting Connected to Your Production</h1>
<p>Create accurate film budgets connected directly to your script, schedule, and crew. Pzaz Budget gives indie filmmakers real-time financial visibility and control over every production.</p>
<h2>Why Film Budgeting Is Broken</h2>
<p>Most filmmakers build budgets in spreadsheets disconnected from the rest of production. When the script changes, the budget doesn't update. When the schedule shifts, the numbers are wrong. Pzaz Budget solves this by connecting your budget to your entire production environment.</p>
<h2>Key Features</h2>
<ul>
<li>Script-connected budgeting — budget updates when your script changes</li>
<li>Department-by-department cost tracking</li>
<li>Real-time spend vs. budget comparisons</li>
<li>Export to standard industry formats</li>
</ul>`,
  },
  {
    path: "/planning",
    title: "Pzaz Planning Pro – Preproduction Inside Production Context",
    description: "Build your film before you shoot it. Planning Pro keeps creative development inside the same environment that will execute the film — script, breakdown, schedule, and feedback in one place.",
    bodyContent: `<h1>Pzaz Planning Pro – Preproduction Inside Production Context</h1>
<p>Build your film before you shoot it. Planning Pro keeps creative development inside the same environment that will execute the film — script, breakdown, schedule, and feedback all in one place.</p>
<h2>Preproduction Without the Chaos</h2>
<p>Most preproduction happens across scattered tools — scripts in Final Draft, breakdowns in spreadsheets, schedules in StudioBinder, feedback in email. Pzaz Planning Pro unifies the entire preproduction phase in one connected environment.</p>`,
  },
  {
    path: "/studio-pro",
    title: "Pzaz Studio Pro – Production Infrastructure for Slate Management",
    description: "Turn fragmented expansion into structured maturity. Studio Pro establishes shared coordination logic across every production you run — giving executives real visibility across the entire slate.",
    bodyContent: `<h1>Pzaz Studio Pro – Production Infrastructure for Slate Management</h1>
<p>Turn fragmented expansion into structured maturity. Studio Pro establishes shared coordination logic across every production you run — giving executives and producers real visibility across the entire slate.</p>
<h2>Built for Production Companies</h2>
<p>Managing multiple productions simultaneously requires infrastructure, not just tools. Pzaz Studio Pro gives production companies the oversight, standardisation, and cross-project visibility they need to scale.</p>`,
  },
  {
    path: "/storyboard",
    title: "Pzaz Storyboard – Edit the Film Before You Make It",
    description: "Rapid visual development inside a structured production environment. Generate, iterate and align storyboard shots with AI-assisted tools, animatics, and real-time collaboration.",
    bodyContent: `<h1>Pzaz Storyboard – Edit the Film Before You Make It</h1>
<p>Rapid visual development inside a structured production environment. Generate, iterate, and align storyboard shots with AI-assisted tools, animatics, and real-time collaboration.</p>
<h2>Why Storyboarding Matters</h2>
<p>The best films are edited in preproduction. Pzaz Storyboard gives directors and DPs the tools to visualise every shot before setting foot on set — reducing on-set decision fatigue and keeping the creative vision intact.</p>
<h2>Key Features</h2>
<ul>
<li>AI-generated storyboard panels from scene descriptions</li>
<li>Animatic creation directly from storyboard panels</li>
<li>Real-time collaboration with directors, DPs, and producers</li>
<li>Scene-synced panels linked to your script and schedule</li>
<li>Shot composition tools with camera angle and movement controls</li>
</ul>`,
  },
  {
    path: "/scene-breakdown",
    title: "Pzaz Scene Breakdown – Tag, Organise, Prepare",
    description: "Break down scenes, add shots, assign teams, and track progress. Pzaz Scene Breakdown keeps creative intent aligned with what production actually requires.",
    bodyContent: `<h1>Pzaz Scene Breakdown – Tag, Organise, Prepare</h1>
<p>Break down scenes, add shots, assign teams, and track progress. Pzaz Scene Breakdown keeps creative intent aligned with what production actually requires.</p>
<h2>From Script to Set in One Flow</h2>
<p>Scene Breakdown connects your script directly to your production schedule. Tag every element — cast, locations, props, wardrobe, vehicles — and watch your breakdown automatically inform your call sheets and budget.</p>`,
  },
  {
    path: "/collaboration-tools",
    title: "Collaboration Tools – Real-Time Production Teamwork | Pzaz",
    description: "Keep your entire production team aligned with Pzaz's built-in collaboration tools. Real-time editing, comments, task assignment, and team communication — all connected to your production.",
    bodyContent: `<h1>Pzaz Collaboration Tools – Real-Time Production Teamwork</h1>
<p>Keep your entire production team aligned. Pzaz's built-in collaboration tools connect real-time editing, comments, task assignment, and team communication directly to your production environment.</p>
<h2>Why Production Collaboration Is Broken</h2>
<p>Most production teams communicate across Slack, email, WhatsApp, and Google Docs — none of which are connected to the actual production. Pzaz brings all collaboration inside the production context where it belongs.</p>`,
  },
  {
    path: "/task-management",
    title: "Task Management – Clear Ownership for Film Productions | Pzaz",
    description: "Keep every department aligned with task management built into the production environment. Assign work, track deadlines, and keep production momentum going with Pzaz.",
    bodyContent: `<h1>Pzaz Task Management – Clear Ownership for Film Productions</h1>
<p>Keep every department aligned with task management built directly into the production environment. Assign work, track deadlines, and keep production momentum going from preproduction through post.</p>
<h2>Production Tasks That Actually Connect to Production</h2>
<p>Unlike generic task management tools, Pzaz tasks are connected to your script, schedule, and production data — so context is never lost and nothing falls through the cracks.</p>`,
  },
  {
    path: "/file-sharing",
    title: "File Sharing & Media Storage – Centralise Your Production Assets | Pzaz",
    description: "Centralise, share, and protect your film production assets inside Pzaz. Keep scripts, storyboards, footage, and references connected to the production — not scattered across drives.",
    bodyContent: `<h1>Pzaz File Sharing &amp; Media Storage – Centralise Your Production Assets</h1>
<p>Centralise, share, and protect your film production assets inside Pzaz. Keep scripts, storyboards, footage, and references connected to the production — not scattered across Google Drive, Dropbox, and WeTransfer.</p>
<h2>One Drive. Fully Connected to Production.</h2>
<p>Every file in Pzaz is connected to its production context. A storyboard panel links to the scene it visualises. A location photo connects to the scenes shot there. Assets are never orphaned from the production they belong to.</p>`,
  },
  {
    path: "/project-management",
    title: "Project Management – The Work OS for Filmmakers | Pzaz",
    description: "Stop coordinating a film across scattered tools. Pzaz gives filmmakers one unified environment where scripts, schedules, budgets, tasks, and communication all live together.",
    bodyContent: `<h1>Pzaz Project Management – The Work OS for Filmmakers</h1>
<p>Stop coordinating a film across scattered tools. Pzaz gives filmmakers one unified environment where scripts, schedules, budgets, tasks, and communication all live together.</p>
<h2>Why Generic Project Management Tools Fail Filmmakers</h2>
<p>Asana, Monday, and Notion were built for software teams and marketing agencies — not film productions. They don't understand scenes, departments, call sheets, or script breakdowns. Pzaz does.</p>
<h2>Key Capabilities</h2>
<ul>
<li>Script-connected task and schedule management</li>
<li>Department boards with role-based permissions</li>
<li>Production-wide progress tracking</li>
<li>Integrated communication and file sharing</li>
<li>AI-powered production intelligence and automation</li>
</ul>`,
  },
  // Knowledge Base – Getting Started
  {
    path: "/knowledge-base/book-a-personalised-product-demonstration",
    title: "Book a Personalised Product Demonstration | Pzaz Knowledge Base",
    description: "Book a one-on-one video call with the Pzaz team to get a personalised in-depth product demonstration tailored to your filmmaking needs.",
  },
  {
    path: "/knowledge-base/writing-your-script-with-pzaz",
    title: "Writing Your Script with Pzaz | Pzaz Knowledge Base",
    description: "Learn how to write, import, export and navigate scripts in Pzaz. Covers the main script, AI assistant, scene navigation, and collaboration tools.",
  },
  {
    path: "/knowledge-base/ai-security-and-privacy-at-pzaz",
    title: "AI, Security & Privacy at Pzaz | Pzaz Knowledge Base",
    description: "Learn how Pzaz protects your scripts and data with TLS encryption, AES-256 storage security, strict access controls, and a no-training-data policy.",
  },
  {
    path: "/knowledge-base/getting-started-with-workflows",
    title: "Getting Started with Workflows | Pzaz Knowledge Base",
    description: "Understand how Pzaz's Kanban-style workflow boards help you organise production tasks, track progress, and collaborate with your team in real time.",
  },
  {
    path: "/knowledge-base/pzaz-101",
    title: "Pzaz 101 – The Principle | Pzaz Knowledge Base",
    description: "Discover the core philosophy behind Pzaz: one connected filmmaking flow from project setup to post-production, all inside a single workspace.",
  },
  // Knowledge Base – Functions
  {
    path: "/knowledge-base/pzaz-security-features",
    title: "Our Security Features: Keeping Your Data Safe | Pzaz Knowledge Base",
    description: "An overview of Pzaz's security features including encryption, access controls, and upcoming two-factor authentication.",
  },
  {
    path: "/knowledge-base/card-anatomy",
    title: "Card Anatomy | Pzaz Knowledge Base",
    description: "Learn about the structure and components of Pzaz cards — the core building blocks for managing production tasks, scenes, and assets.",
  },
  {
    path: "/knowledge-base/delete-your-account",
    title: "Delete Your Account | Pzaz Knowledge Base",
    description: "Step-by-step guide to permanently deleting your Pzaz account and all associated data.",
  },
  {
    path: "/knowledge-base/cancelling-or-closing-your-account",
    title: "Cancelling or Closing Your Account | Pzaz Knowledge Base",
    description: "Learn how to cancel your Pzaz subscription or close your account, and what happens to your data afterward.",
  },
  {
    path: "/knowledge-base/your-pzaz-profile",
    title: "Your Pzaz Profile | Pzaz Knowledge Base",
    description: "How to view and update your Pzaz profile, including name, avatar, and account preferences.",
  },
  {
    path: "/knowledge-base/add-or-remove-blocks",
    title: "Add or Remove Blocks | Pzaz Knowledge Base",
    description: "Learn how to add and remove content blocks in Pzaz to customise your production documents and cards.",
  },
  {
    path: "/knowledge-base/leave-feedback",
    title: "Leave Feedback | Pzaz Knowledge Base",
    description: "How to submit feedback, suggestions, and feature requests directly to the Pzaz team from within the app.",
  },
  {
    path: "/knowledge-base/helpful-tools-for-capturing-screenshots-and-videos",
    title: "Helpful Tools for Capturing Screenshots and Videos | Pzaz Knowledge Base",
    description: "A guide to the best free and paid tools for capturing screenshots and screen recordings to share with the Pzaz support team.",
  },
  {
    path: "/knowledge-base/reporting-a-bug",
    title: "Reporting a Bug | Pzaz Knowledge Base",
    description: "How to report a bug or technical issue to the Pzaz team, including what information to include for a faster resolution.",
  },
  {
    path: "/knowledge-base/get-support",
    title: "Get Support | Pzaz Knowledge Base",
    description: "Find out how to contact the Pzaz support team via live chat, email, or book a call for personalised help.",
  },
  // Knowledge Base – Tools & Features
  {
    path: "/knowledge-base/script-breakdown",
    title: "Script Breakdown | Pzaz Knowledge Base",
    description: "Learn how to use Pzaz's script breakdown tool to tag scenes, identify elements, and prepare your production schedule.",
  },
  {
    path: "/knowledge-base/documents-section",
    title: "Documents Section | Pzaz Knowledge Base",
    description: "How to create, organise, and collaborate on production documents in Pzaz's dedicated Documents section.",
  },
  {
    path: "/knowledge-base/manage-section",
    title: "Manage Section | Pzaz Knowledge Base",
    description: "An overview of the Manage section in Pzaz for organising cast, crew, locations, equipment, and production elements.",
  },
  {
    path: "/knowledge-base/shots",
    title: "Shots | Pzaz Knowledge Base",
    description: "How to create and manage shot lists in Pzaz, linking shots to scenes, storyboards, and production schedules.",
  },
  {
    path: "/knowledge-base/scenes",
    title: "Scenes | Pzaz Knowledge Base",
    description: "How to work with scenes in Pzaz — from script breakdown to storyboard, stripboard, and scheduling.",
  },
  {
    path: "/knowledge-base/storyboard",
    title: "Storyboard | Pzaz Knowledge Base",
    description: "How to create and edit storyboards in Pzaz, link panels to scenes, add notes, and collaborate with your team.",
  },
  {
    path: "/knowledge-base/stripboard",
    title: "Stripboard | Pzaz Knowledge Base",
    description: "Learn how to use Pzaz's digital stripboard to plan and reorder shooting days by scene.",
  },
  {
    path: "/knowledge-base/call-sheets",
    title: "Call Sheets | Pzaz Knowledge Base",
    description: "How to generate and distribute professional call sheets in Pzaz directly from your schedule and scene breakdown.",
  },
  {
    path: "/knowledge-base/department",
    title: "Production Section | Pzaz Knowledge Base",
    description: "How to manage departments, assign crew, and track production tasks in Pzaz's Production section.",
  },
  {
    path: "/knowledge-base/moodboard",
    title: "Moodboard | Pzaz Knowledge Base",
    description: "How to build and share visual moodboards in Pzaz to align your team on the look and feel of your film.",
  },
  {
    path: "/knowledge-base/team-chats",
    title: "Team Chats | Pzaz Knowledge Base",
    description: "How to use Pzaz's team chat feature for real-time production communication, topic threads, and direct messages.",
  },
  {
    path: "/knowledge-base/file-sharing-media-storage",
    title: "File Sharing & Media Storage | Pzaz Knowledge Base",
    description: "How to upload, organise, and share production files and media assets in Pzaz's built-in Drive.",
  },
  {
    path: "/knowledge-base/budgeting",
    title: "Budgeting | Pzaz Knowledge Base",
    description: "How to create and manage film budgets in Pzaz, track expenses, and keep your production financially on track.",
  },
  {
    path: "/knowledge-base/board-views",
    title: "Board Views | Pzaz Knowledge Base",
    description: "How to switch between board views in Pzaz to visualise your production tasks and workflows.",
  },
  {
    path: "/knowledge-base/add-and-remove-team-members-filmspace",
    title: "Add and Remove Team Members | Pzaz Knowledge Base",
    description: "How to invite collaborators to your Pzaz Filmspace and manage team member access and permissions.",
  },
  {
    path: "/knowledge-base/roles-permissions-in-pzaz",
    title: "Roles & Permissions in Pzaz | Pzaz Knowledge Base",
    description: "An overview of user roles and permission levels in Pzaz to control what each team member can see and do.",
  },
  {
    path: "/knowledge-base/personal-to-dos",
    title: "Personal To-dos | Pzaz Knowledge Base",
    description: "How to use Pzaz's personal to-do list to manage your own tasks separately from the shared production boards.",
  },
  {
    path: "/knowledge-base/card-blocks",
    title: "Card Blocks | Pzaz Knowledge Base",
    description: "Learn how to use card blocks in Pzaz to add structured content like checklists, notes, and media to production cards.",
  },
  {
    path: "/knowledge-base/your-filmspace",
    title: "Your Filmspace | Pzaz Knowledge Base",
    description: "An introduction to Pzaz's Filmspace — your central hub for all projects, team members, and production assets.",
  },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // ── Knowledge Base articles: parse content at build time ──────────────────
  let kbSEORoutes: RouteSEO[] = [];
  try {
    const kbFile = fs.readFileSync(
      path.resolve(__dirname, "src/data/knowledgeBaseData.ts"),
      "utf-8"
    );
    // Extract each article block between { id: "..." ... } entries
    const articleBlocks = kbFile.matchAll(/\{\s*id:\s*"[^"]+",\s*slug:\s*"([^"]+)"([\s\S]*?)(?=,\s*\{?\s*\/\/|,?\s*\];|,\s*\{\s*id:)/g);
    for (const match of articleBlocks) {
      const slug = match[1];
      const block = match[0];
      // Extract title
      const title = block.match(/title:\s*"([^"]+)"/)?.[1] || slug;
      // Extract content between backticks
      const contentMatch = block.match(/content:\s*`([\s\S]*?)`/);
      const rawContent = contentMatch?.[1] || "";
      const bodyContent = rawContent.trim()
        ? `<h1>${title}</h1>\n${markdownToHtml(rawContent)}`
        : "";

      // Find matching SEO route to merge
      const existingIdx = staticSEORoutes.findIndex(r => r.path === `/knowledge-base/${slug}`);
      if (existingIdx >= 0) {
        kbSEORoutes.push({ ...staticSEORoutes[existingIdx], bodyContent: bodyContent || undefined });
      }
    }
  } catch {
    // fallback: no KB body content
  }

  // Merge KB body content into staticSEORoutes
  const mergedStaticSEORoutes = staticSEORoutes.map(route => {
    const withContent = kbSEORoutes.find(r => r.path === route.path);
    return withContent || route;
  });

  // ── Blog articles: parse content + SEO at build time ──────────────────────
  let blogRoutes: string[] = [];
  let blogSEORoutes: RouteSEO[] = [];
  try {
    // Use blogData.ts for slug list + SEO metadata
    const dataFileContent = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogData.ts"),
      "utf-8"
    );
    // Use blogDataFull.ts for article body content
    const fullDataContent = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogDataFull.ts"),
      "utf-8"
    );

    const slugMatches = dataFileContent.matchAll(/slug:\s*"([^"]+)"/g);
    for (const m of slugMatches) {
      const slug = m[1];
      const routePath = `/producer-blog/${slug}`;
      blogRoutes.push(routePath);

      // Extract SEO fields from blogData.ts
      const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const postBlock = dataFileContent.match(
        new RegExp(`slug:\\s*"${escapedSlug}"[\\s\\S]*?(?=\\{\\s*id:|$)`)
      )?.[0] || "";

      const seoTitle = postBlock.match(/seo:\s*\{[^}]*?title:\s*"([^"]+)"/)?.[1];
      const seoDesc = postBlock.match(/seo:\s*\{[^}]*?description:\s*"([^"]+)"/)?.[1];
      const seoOgImage = postBlock.match(/seo:\s*\{[^}]*?ogImage:\s*"([^"]+)"/)?.[1];
      const featuredImage = postBlock.match(/featuredImage:\s*"([^"]+)"/)?.[1];
      const title = postBlock.match(/title:\s*"([^"]+)"/)?.[1];
      const excerpt = postBlock.match(/excerpt:\s*"([^"]+)"/)?.[1];
      const canonical = postBlock.match(/canonical:\s*"([^"]+)"/)?.[1];

      // Extract full article content from blogDataFull.ts
      const fullPostBlock = fullDataContent.match(
        new RegExp(`slug:\\s*"${escapedSlug}"[\\s\\S]*?(?=,\\s*\\{\\s*id:|\\s*\\];)`)
      )?.[0] || "";
      const contentMatch = fullPostBlock.match(/content:\s*`([\s\S]*?)`/);
      const rawContent = contentMatch?.[1]?.trim() || "";
      const articleTitle = seoTitle?.replace(/ \| Pzaz$/, "") || title || slug;
      const bodyContent = rawContent
        ? `<h1>${articleTitle}</h1>\n${markdownToHtml(rawContent)}`
        : undefined;

      blogSEORoutes.push({
        path: routePath,
        title: seoTitle || (title ? `${title} | Pzaz` : "Pzaz – Film Production Software"),
        description: seoDesc || excerpt || "Pzaz is the all-in-one film production platform for indie filmmakers.",
        image: seoOgImage || (featuredImage !== "/placeholder.svg" ? featuredImage : undefined),
        canonical,
        bodyContent,
      });
    }
  } catch {
    // fallback: no blog routes
  }

  const allRoutes = [...staticRoutes, ...blogRoutes];
  const allSEORoutes = [...mergedStaticSEORoutes, ...blogSEORoutes];

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      mode === "production" && sitemapPlugin(allRoutes),
      mode === "production" && prerenderMetaPlugin(allSEORoutes),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
