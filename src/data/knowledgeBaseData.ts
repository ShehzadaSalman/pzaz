export interface KBArticle {
  id: string;
  slug: string;
  title: string;
  category: "functions" | "getting-started" | "tools-and-features";
  content: string;
  relatedSlugs?: string[];
}

export const kbArticles: KBArticle[] = [
  // Getting Started
  {
    id: "gs-1",
    slug: "what-is-pzaz",
    title: "What is Pzaz?",
    category: "getting-started",
    content: `## What is Pzaz?

Pzaz is an all-in-one film production platform built for indie filmmakers and production teams. It combines every tool you need to manage your project — from script to screen — in a single, collaborative workspace.

## Core Pillars

**Script** — Write and format professional screenplays with AI-assisted tools, scene suggestions, and real-time collaboration.

**Imagine** — Build moodboards and visual references to bring your creative vision to life before a single frame is shot.

**Breakdown** — Break down your script into scenes, cast, locations, and props automatically with AI.

**Collaborate** — Share your project with your team, assign roles, and track progress across every department.

## Why Pzaz?

Traditional film production relies on a patchwork of disconnected tools — Final Draft for scripts, Google Sheets for budgets, email chains for approvals. Pzaz replaces all of that with a single platform that keeps every stakeholder aligned from day one.

> Pzaz is designed for producers, directors, and coordinators who want to spend less time on admin and more time making great films.

## Who is it for?

- Independent filmmakers
- Short and feature film producers
- Commercial and branded content teams
- Film school students and educators`,
    relatedSlugs: ["creating-your-first-project", "inviting-your-team", "navigating-the-dashboard"],
  },
  {
    id: "gs-2",
    slug: "creating-your-first-project",
    title: "Creating Your First Project",
    category: "getting-started",
    content: `## Creating Your First Project

Getting your first project set up in Pzaz takes less than two minutes. Here's how to do it.

## Step 1: Sign Up or Log In

Head to [pzaz.io](https://pzaz.io) and create a free account. You can sign up with your email address.

## Step 2: Create a New Project

Once you're logged in, click the **+ New Project** button on your dashboard. You'll be prompted to:

- Give your project a title
- Select a project type (Feature Film, Short Film, Commercial, etc.)
- Set an expected start date (optional)

## Step 3: Import or Write Your Script

You can either:

- **Import an existing script** — Upload a Final Draft (.fdx) or PDF file
- **Start from scratch** — Use the built-in script editor

## Step 4: Invite Your Team

Add collaborators by email. You can assign roles like Producer, Director, or Line Producer, each with their own permission level.

## Step 5: Explore the Workspace

Once your project is created, you'll land on the project dashboard where you can navigate between Script, Imagine, Breakdown, and Collaborate modules.

> Tip: Start with the Breakdown module to automatically extract cast, locations, and props from your script.`,
    relatedSlugs: ["what-is-pzaz", "inviting-your-team", "importing-a-script"],
  },
  {
    id: "gs-3",
    slug: "inviting-your-team",
    title: "Inviting Your Team",
    category: "getting-started",
    content: `## Inviting Your Team

Pzaz is built for collaboration. Here's how to get your crew on board.

## Sending Invitations

Navigate to your project settings and click **Team Members**. Enter the email addresses of the people you want to invite and assign them a role.

## Available Roles

**Owner** — Full access to all modules, settings, and billing.

**Producer** — Can edit all modules, invite team members, and manage budgets.

**Director** — Can edit scripts, moodboards, and view breakdowns.

**Coordinator** — Read and write access to breakdowns and schedules.

**Viewer** — Read-only access to all shared modules.

## Accepting an Invitation

Invitees will receive an email with a secure link. They can click it to create an account (or log in) and join the project automatically.

## Managing Permissions

You can change a team member's role or remove them at any time from the **Team Members** panel. Changes take effect immediately.

> Tip: You can also share a read-only link to your project without requiring team members to create an account.`,
    relatedSlugs: ["creating-your-first-project", "what-is-pzaz", "navigating-the-dashboard"],
  },
  {
    id: "gs-4",
    slug: "navigating-the-dashboard",
    title: "Navigating the Dashboard",
    category: "getting-started",
    content: `## Navigating the Dashboard

The Pzaz dashboard is your central hub for all projects and activity.

## Projects View

When you first log in, you'll see all your active projects displayed as cards. Each card shows the project title, last edited date, and active collaborators.

## Project Workspace

Clicking into a project opens the workspace with the following modules in the left sidebar:

- **Script** — Your screenplay editor
- **Imagine** — Moodboard and visual references
- **Breakdown** — Scene-by-scene production breakdown
- **Collaborate** — Team tasks and approvals
- **Budget** — Cost tracking and estimates
- **Schedule** — Shooting day planner

## Search and Filters

Use the search bar at the top of the dashboard to quickly find projects by name or collaborator. You can also filter by project type or status.

## Notifications

The bell icon in the top right shows activity across your projects — comments, approvals, and team updates.

## Account Settings

Click your avatar in the top right to access your profile, subscription details, and notification preferences.`,
    relatedSlugs: ["what-is-pzaz", "creating-your-first-project", "inviting-your-team"],
  },

  // Functions
  {
    id: "fn-1",
    slug: "ai-script-formatting",
    title: "AI Script Formatting",
    category: "functions",
    content: `## AI Script Formatting

Pzaz's AI formatting engine ensures your screenplay always meets industry standards — automatically.

## What It Does

As you type, Pzaz identifies whether you're writing a scene heading, action line, character name, or dialogue and formats it accordingly. No more manually switching between formatting styles.

## Supported Elements

- **Scene Headings** (INT./EXT.) — Auto-capitalized and formatted
- **Action Lines** — Clean, present-tense formatting
- **Character Names** — Auto-centered and capitalized
- **Dialogue** — Properly indented
- **Parentheticals** — Inline with dialogue
- **Transitions** — Right-aligned (CUT TO:, FADE OUT., etc.)

## Smart Suggestions

When you start a scene heading, Pzaz suggests previously used locations so you stay consistent across your script. The same applies to character names.

## Manual Override

You can override AI formatting at any time by right-clicking any element and selecting **Format As...** to manually assign the element type.

## Export

When you export your script, formatting is preserved exactly as displayed — whether you export to PDF, Final Draft (.fdx), or plain text.`,
    relatedSlugs: ["importing-a-script", "scene-syncing", "ai-research-tool"],
  },
  {
    id: "fn-2",
    slug: "importing-a-script",
    title: "Importing a Script",
    category: "functions",
    content: `## Importing a Script

Already have a script? Bring it into Pzaz in seconds.

## Supported Formats

- **Final Draft (.fdx)** — Full formatting preserved
- **PDF** — Pzaz's OCR engine extracts and re-formats the content
- **Fountain (.fountain)** — Plain text screenplay format
- **Word (.docx)** — Basic import with formatting detection

## How to Import

1. Open your project and navigate to the **Script** module
2. Click **Import Script** in the top toolbar
3. Select your file from your computer
4. Pzaz will process the file and display a preview
5. Confirm the import to load the script into your editor

## After Importing

Once imported, your script is fully editable. You can:
- Use AI formatting to clean up any inconsistencies
- Run a **Breakdown** to extract scenes, characters, and locations
- Share it with your team immediately

## Troubleshooting

**PDF import looks wrong?** PDFs vary significantly in structure. If the result is messy, try exporting from your source software as .fdx or .fountain instead.

**Characters not detected?** Run **Re-analyse Script** from the Script menu to force a fresh character detection pass.`,
    relatedSlugs: ["ai-script-formatting", "scene-syncing", "creating-your-first-project"],
  },
  {
    id: "fn-3",
    slug: "scene-syncing",
    title: "Scene Syncing",
    category: "functions",
    content: `## Scene Syncing

Scene syncing keeps your script and breakdown in perfect alignment — automatically.

## How It Works

Every time you edit a scene in your script, Pzaz's sync engine detects the change and updates the corresponding breakdown entry in real time. Add a new character to a scene? They appear in the breakdown instantly.

## What Gets Synced

- **Scene numbers** — Automatically renumbered when scenes are added or removed
- **Characters** — Any new character introduced is added to the cast list
- **Locations** — New INT./EXT. headings create location entries automatically
- **Props & Set Dressing** — Detected via AI from action lines

## Manual Sync

If you prefer to control when syncing happens, you can disable auto-sync in **Project Settings > Sync** and trigger it manually with the **Sync Now** button.

## Conflict Resolution

If a team member edits the script and another edits the breakdown simultaneously, Pzaz flags the conflict and lets you choose which version to keep — or merge both.

> Tip: Enable auto-sync for the smoothest workflow, especially during pre-production when scripts change frequently.`,
    relatedSlugs: ["ai-script-formatting", "importing-a-script", "breakdown-overview"],
  },
  {
    id: "fn-4",
    slug: "ai-research-tool",
    title: "AI Research Tool",
    category: "functions",
    content: `## AI Research Tool

Pzaz's AI Research tool helps you gather creative references, facts, and production insights without leaving the platform.

## What It Can Do

- Summarise real locations and suggest alternatives
- Pull historical context for period pieces
- Generate character backstory prompts
- Research costume and prop references
- Suggest music and sound design directions

## How to Use It

In any module, click the **AI Research** button in the toolbar (the magnifying glass icon). Type your query in plain language — for example:

> *"What would a 1940s New York detective's office look like?"*

The AI returns a concise summary with image references and suggested search terms for deeper research.

## Research in Script Mode

Highlight any word or phrase in your script and right-click to select **Research This**. Pzaz will automatically context-search the selected term.

## Saving Research

All research results can be saved to a **Research Board** within your project, pinned to specific scenes or characters for quick reference during production.

> Note: AI Research requires an active Pzaz subscription.`,
    relatedSlugs: ["ai-script-formatting", "scene-syncing", "moodboard-creation"],
  },

  // Tools & Features
  {
    id: "tf-1",
    slug: "breakdown-overview",
    title: "Breakdown Overview",
    category: "tools-and-features",
    content: `## Breakdown Overview

The Breakdown module transforms your script into a production-ready breakdown in minutes.

## What Is a Breakdown?

A script breakdown is the process of identifying every element in your screenplay that needs to be sourced, scheduled, or budgeted — cast, locations, props, costumes, special effects, and more.

## Auto-Breakdown with AI

Click **Run AI Breakdown** and Pzaz analyses every scene, extracting:

- **Cast** — Named characters and extras
- **Locations** — Interior and exterior settings
- **Props** — Physical items mentioned in action lines
- **Costumes** — Clothing references
- **Vehicles** — Cars, trucks, and other transport
- **Special Effects** — Stunts, pyrotechnics, VFX notes
- **Animals** — Any animal appearances

## Breakdown Strips

Each scene becomes a colour-coded strip. Click any strip to view and edit its full breakdown. You can manually add or remove elements from each scene.

## Export

Export your complete breakdown as a PDF report or CSV for use in scheduling and budgeting software.

> Tip: Run the breakdown early in pre-production, even from a draft script. It gives you a realistic picture of your production scale before the budget is locked.`,
    relatedSlugs: ["scene-syncing", "budget-tracking", "schedule-builder"],
  },
  {
    id: "tf-2",
    slug: "moodboard-creation",
    title: "Moodboard Creation",
    category: "tools-and-features",
    content: `## Moodboard Creation

The Imagine module lets you build rich, visual moodboards for your film without leaving Pzaz.

## Creating a Moodboard

Navigate to the **Imagine** module in your project and click **New Board**. Give it a name (e.g., "Opening Sequence" or "Character — Sarah") and start adding content.

## Adding Content

You can add content to your board in several ways:

- **Upload images** from your computer
- **Paste a URL** to pull in any public image from the web
- **Use AI Search** to find reference images by description
- **Drag from the Reference Library** — images you've saved from Research

## Organising Your Board

Drag items freely on the canvas. Resize, rotate, and group elements. Add text labels and colour swatches to annotate your references.

## Sharing

Share your moodboard with your team or external stakeholders via a read-only link — no account required to view.

## Export

Export your moodboard as a high-resolution PDF or PNG for presentations and production packages.`,
    relatedSlugs: ["ai-research-tool", "breakdown-overview", "navigating-the-dashboard"],
  },
  {
    id: "tf-3",
    slug: "budget-tracking",
    title: "Budget Tracking",
    category: "tools-and-features",
    content: `## Budget Tracking

Keep your production's finances under control with Pzaz's built-in budget tracker.

## Setting Up a Budget

Navigate to the **Budget** module and click **Create Budget**. You can start from:

- A blank template
- A pre-built indie film budget template
- An imported CSV from another tool

## Budget Categories

Pzaz organises your budget into industry-standard categories:

- Above the Line (story, producer, director, cast)
- Below the Line (crew, equipment, locations, post-production)
- Other (insurance, contingency, marketing)

## Linking to Breakdown

Items in your breakdown can be linked directly to budget line items. When you update a scene's cast or location in the breakdown, the associated costs update automatically.

## Tracking Actual vs. Estimated

For each line item, enter both an estimated and actual amount. Pzaz highlights overspend in red and shows your running total at all times.

## Export

Export your budget as a formatted PDF or Excel-compatible CSV.`,
    relatedSlugs: ["breakdown-overview", "schedule-builder", "inviting-your-team"],
  },
  {
    id: "tf-4",
    slug: "schedule-builder",
    title: "Schedule Builder",
    category: "tools-and-features",
    content: `## Schedule Builder

Plan your shooting days with Pzaz's drag-and-drop schedule builder.

## Creating a Schedule

Open the **Schedule** module and click **New Schedule**. Enter your planned shoot dates and Pzaz will create a day-by-day grid for you.

## Adding Scenes to Days

Drag scenes from the left panel onto shooting days. Pzaz automatically calculates:

- **Page count** per day
- **Estimated shoot time** based on scene complexity
- **Cast call times** based on scenes scheduled that day

## One-Liner

Pzaz generates a professional **one-liner** (a single-page schedule overview) from your schedule that you can share with cast and crew.

## Conflict Detection

If a cast member is scheduled in two places at once, or a location isn't available on a chosen date, Pzaz flags the conflict in red.

## Exporting

Export your schedule as a PDF call sheet, a CSV for import into other tools, or share it directly with your team via a link.

> Tip: Build your schedule from the breakdown — Pzaz can auto-suggest a shooting order that minimises location and cast moves.`,
    relatedSlugs: ["budget-tracking", "breakdown-overview", "inviting-your-team"],
  },
];

export const kbCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Everything you need to know to get up and running with Pzaz.",
    icon: "🚀",
  },
  {
    id: "functions",
    title: "Functions",
    description: "Learn about Pzaz's core AI-powered functions and how to use them.",
    icon: "⚡",
  },
  {
    id: "tools-and-features",
    title: "Tools & Features",
    description: "Deep dives into every production tool available in your workspace.",
    icon: "🛠️",
  },
] as const;

export function getArticlesByCategory(category: KBArticle["category"]): KBArticle[] {
  return kbArticles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): KBArticle | undefined {
  return kbArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: KBArticle): KBArticle[] {
  if (!article.relatedSlugs) return [];
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is KBArticle => !!a);
}
