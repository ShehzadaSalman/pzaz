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
}

/**
 * Generates a static index.html per route with correct <title>, OG, and Twitter meta tags
 * so that crawlers and social-sharing bots receive proper metadata without executing JS.
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
        const html = template
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
    title: "Pzaz – Film Production Software",
    description: "Pzaz is the all-in-one film production platform for indie filmmakers. Manage scripts, budgets, schedules, and crew — powered by AI.",
  },
  {
    path: "/script",
    title: "Script – AI-Powered Screenwriting | Pzaz",
    description: "Write, format, and collaborate on scripts with Pzaz's AI-powered screenwriting tool. Industry-standard formatting, real-time collaboration, and more.",
  },
  {
    path: "/pricing",
    title: "Pricing – Plans for Every Filmmaker | Pzaz",
    description: "Flexible pricing plans for indie filmmakers and production teams. Start for free — no credit card required.",
  },
  {
    path: "/producer-blog",
    title: "Producer Blog – Filmmaking Insights | Pzaz",
    description: "Tips, guides, and insights for indie filmmakers and producers. Explore the Pzaz Producer Blog.",
  },
  {
    path: "/imagine",
    title: "Imagine – Moodboarding & Visual Planning | Pzaz",
    description: "Build stunning moodboards and visual references for your film. Pzaz's Imagine tool brings your creative vision to life.",
  },
  {
    path: "/collaborate",
    title: "Collaborate – Real-Time Film Production Teamwork | Pzaz",
    description: "Work with your entire production team in real time. Pzaz's collaboration tools keep scripts, schedules, and shot lists in sync.",
  },
  {
    path: "/breakdown",
    title: "Breakdown – Scene & Production Breakdown | Pzaz",
    description: "Break down your script into production-ready scene lists, shot lists, and schedules — all inside Pzaz.",
  },
  {
    path: "/about-us",
    title: "About Us – The Story Behind Pzaz",
    description: "Learn about the team and mission behind Pzaz — the all-in-one film production platform built for indie filmmakers.",
  },
  {
    path: "/pzaz-vs-final-draft",
    title: "Pzaz vs. Final Draft – The Complete Film Production Hub",
    description: "See how Pzaz outperforms Final Draft with end-to-end production tools: storyboarding, scheduling, real-time collaboration, AI writing, and more.",
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
  },
  {
    path: "/sell",
    title: "Pzaz Sell – Film Sales, Distribution & Marketing Workspace",
    description: "Pzaz Sell is your mission control for film marketing, outreach, and distribution. Pitch your script, plan festivals, manage licensing, and deliver assets — all in one place.",
  },
  {
    path: "/shoot",
    title: "Pzaz Shoot – Real-Time On-Set Production Command Center",
    description: "Pzaz Shoot is your real-time command center for shoot days. Instant call sheet updates, live team alignment, script changes, and on-set collaboration — all in one place.",
  },
  {
    path: "/visualise",
    title: "Pzaz Visualise – Storyboarding Inside Your Production Platform",
    description: "Pzaz Visualise brings storyboarding into your production workflow. Turn scripts into visual storyboards frame-by-frame with AI, real-time collaboration, and scene syncing.",
  },
  {
    path: "/write",
    title: "Pzaz Write – Screenwriting Connected to Your Entire Film Production",
    description: "Pzaz Write is the screenwriting tool built into your film production workflow. Industry-standard formatting, real-time collaboration, AI assistance, and scene-by-scene syncing.",
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
  // Dynamically collect blog slugs and SEO data
  let blogRoutes: string[] = [];
  let blogSEORoutes: RouteSEO[] = [];
  try {
    const dataFileContent = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogData.ts"),
      "utf-8"
    );
    const slugMatches = dataFileContent.matchAll(/slug:\s*"([^"]+)"/g);
    for (const m of slugMatches) {
      const slug = m[1];
      const routePath = `/producer-blog/${slug}`;
      blogRoutes.push(routePath);

      // Extract SEO fields via regex from the data file
      const postBlock = dataFileContent.match(
        new RegExp(`slug:\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?(?=\\{\\s*id:|$)`)
      )?.[0] || "";

      const seoTitle = postBlock.match(/seo:\s*\{[^}]*?title:\s*"([^"]+)"/)?.[1];
      const seoDesc = postBlock.match(/seo:\s*\{[^}]*?description:\s*"([^"]+)"/)?.[1];
      const seoOgImage = postBlock.match(/seo:\s*\{[^}]*?ogImage:\s*"([^"]+)"/)?.[1];
      const featuredImage = postBlock.match(/featuredImage:\s*"([^"]+)"/)?.[1];
      const title = postBlock.match(/title:\s*"([^"]+)"/)?.[1];
      const excerpt = postBlock.match(/excerpt:\s*"([^"]+)"/)?.[1];
      const canonical = postBlock.match(/canonical:\s*"([^"]+)"/)?.[1];

      blogSEORoutes.push({
        path: routePath,
        title: seoTitle || (title ? `${title} | Pzaz` : "Pzaz – Film Production Software"),
        description: seoDesc || excerpt || "Pzaz is the all-in-one film production platform for indie filmmakers.",
        image: seoOgImage || (featuredImage !== "/placeholder.svg" ? featuredImage : undefined),
        canonical,
      });
    }
  } catch {
    // fallback: no blog routes
  }

  const allRoutes = [...staticRoutes, ...blogRoutes];
  const allSEORoutes = [...staticSEORoutes, ...blogSEORoutes];

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
