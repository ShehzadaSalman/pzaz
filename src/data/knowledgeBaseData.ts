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
    slug: "pzaz-security-features",
    title: "Our Security Features: Keeping Your Data Safe",
    category: "functions",
    content: `## Our Security Features: Keeping Your Data Safe

We understand that security is a top priority for our users. Whether collaborating on a script, sharing production plans, or storing sensitive project details, your data deserves the highest level of protection. That's why we've implemented robust security measures to ensure your creative process remains private and secure.

## Encryption: Protecting Your Data Everywhere

We ensure that every time you upload or access a file in the app, it's protected through encryption. While your files are transferred between your device and our servers, they are safeguarded with Transport Layer Security (TLS), a protocol designed to provide secure communication. Once stored on our servers, your data is protected with AES-256 encryption, a highly trusted industry standard. This dual layer of encryption ensures your files remain secure in transit and at rest.

## Access Controls: Managed Simplicity

Currently, we enable administrators to grant or restrict access to storage, ensuring that only authorised users can utilise this feature. While we don't yet offer file-level access controls, this foundational layer of security ensures your team's data is accessible only to the right people. As we evolve, we focus on providing even more granular control to meet your needs.

## Looking Ahead: Future Security Enhancements

While our current security measures are robust, we're actively working on new features to make your experience even more secure. These include:

- **Two-factor authentication (2FA)** — to add an extra layer of login protection
- **Enhanced access controls** — for file-level permissions
- **Advanced link-sharing options** — such as password protection and expiration settings

These upcoming updates reflect our commitment to safeguarding your creative workflow at every stage.

We are more than just a tool for filmmakers; we are a trusted partner in your creative journey. With strong encryption, secure access controls, and a roadmap for continuous improvement, we're here to ensure your ideas remain yours and yours alone.`,
    relatedSlugs: ["card-anatomy", "delete-your-account", "get-support"],
  },
  {
    id: "fn-2",
    slug: "card-anatomy",
    title: "Card Anatomy",
    category: "functions",
    content: `## Card Anatomy

### What are cards made up of?

With cards in the tool, you can create workflows that meet the unique demands of filmmaking, ensuring every detail is managed effectively and creatively. Cards are the foundation of this platform. They capture ideas, document tasks, and execute initiatives as essential building blocks throughout production.

## Managing Cards

The Card Container displays high-level information, including the card title, due date, assigned team members, workflow status, task size, and attachments like documents or links. Clicking on a card opens its details, allowing for deeper interaction and editing.

You can manage multiple cards by placing checkmarks on them, but dragging is currently not supported for selected groups of cards. Holding down the **CTRL** key and clicking on a card activates the checkbox for that card, making it easy to select multiple cards quickly. Once selected, you can filter, move, decline, or delete them via the Board Toolbar, streamlining multi-card actions.

## #GoodToKnow

Card Blocks offer flexibility by allowing you to customise cards for specific needs. Blocks like attachments or descriptions enable detailed information storage, while others can be added manually for tailored functionality. Some blocks load by default, and certain ones, like the description block, cannot be removed.`,
    relatedSlugs: ["add-or-remove-blocks", "pzaz-security-features", "your-pzaz-profile"],
  },
  {
    id: "fn-3",
    slug: "delete-your-account",
    title: "Delete Your Account",
    category: "functions",
    content: `## Delete Your Account

To permanently delete your account, please contact our team through the **Live Chat** page in the app, located under the **Get Help** section. Our team will process your request and securely delete your account from our database.

Please note that we are legally required to retain financial information for compliance purposes, but all other data will be permanently erased — this action cannot be undone.

Before proceeding with account deletion, we encourage you to share any concerns or feedback. We're here to help ensure your experience meets your expectations.

> **Warning:** Account deletion is permanent and cannot be reversed. All your projects and data will be erased.`,
    relatedSlugs: ["cancelling-or-closing-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-4",
    slug: "cancelling-or-closing-your-account",
    title: "Cancelling or Closing Your Account",
    category: "functions",
    content: `## Cancelling or Closing Your Account

If you'd like to close your account, please reach out to our team through the **Live Chat** page in the app, located under the **Get Help** section. We'll assist you with the process and make sure your account is securely closed.

## Before You Go

We'd love to understand your experience and how we can improve. If there's something that isn't working for you, our support team is ready to help — please don't hesitate to reach out before making this decision.

> **Note:** If you only need to cancel a subscription rather than delete your account entirely, our team can assist you with that through the same Live Chat channel.`,
    relatedSlugs: ["delete-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-5",
    slug: "your-pzaz-profile",
    title: "Your Pzaz Profile",
    category: "functions",
    content: `## Your Pzaz Profile

Your profile is your identity, so take a moment to make it uniquely yours. Updating your details or adding a creative avatar ensures your account reflects your style and needs.

## Editing Your Profile

To edit your profile, click the menu icon in the lower-left corner. From there you can make updates such as:

- **Changing your username** — Update how your name appears to collaborators
- **Updating your email address** — Keep your contact details current
- **Resetting your password** — Maintain account security
- **Uploading a new profile photo** — Add an avatar that represents you

These changes help you personalise your experience and ensure your team recognises you across projects.`,
    relatedSlugs: ["card-anatomy", "pzaz-security-features", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-6",
    slug: "add-or-remove-blocks",
    title: "Add or Remove Blocks",
    category: "functions",
    content: `## Add or Remove Blocks

**Customise Cards for Maximum Flexibility**

You can customise cards to fit and enhance your production workflow by adding or removing functionality tailored to your filmmaking process.

## How It Works

Not all blocks are compatible with every card type. Some blocks load by default, while others need to be added manually. The title and description are not a block and, therefore, cannot be removed.

Click the **'Blocks' icon** in the card header to add or remove a block.

## Key Points

- **Default blocks** load automatically when a card is created
- **Optional blocks** can be added manually to extend functionality
- **The title and description** are permanent and cannot be removed
- Block availability varies depending on the card type`,
    relatedSlugs: ["card-anatomy", "your-pzaz-profile", "pzaz-security-features"],
  },
  {
    id: "fn-7",
    slug: "leave-feedback",
    title: "Leave Feedback",
    category: "functions",
    content: `## Leave Feedback

**Help Shape the Future**

We'd love to hear from you! Share your thoughts — what you love, what could be improved, and what new features you'd like to see.

## How to Provide Feedback

Your insights play a crucial role in helping us prioritise features and refine the platform to better serve the filmmaking and creative community. Your feedback drives our mission to create the ultimate platform for filmmakers and creatives.

Share your thoughts through the **Live Chat** page in the app, located under the **Get Help** section.

Thank you for helping us grow!`,
    relatedSlugs: ["get-support", "reporting-a-bug", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-8",
    slug: "helpful-tools-for-capturing-screenshots-and-videos",
    title: "Helpful Tools for Capturing Screenshots and Videos",
    category: "functions",
    content: `## Helpful Tools for Capturing Screenshots and Videos

If you're using Google Chrome, we recommend the **Nimbus Screen Shot and Video Recorder** extension. This tool allows you to:

- Capture full or partial screenshots
- Record your screen to showcase the issue
- Edit, annotate, and save your captures or recordings

You can attach these files to your support message for more precise communication and faster resolution.

## Why This Helps

Providing visual context — screenshots or screen recordings — dramatically speeds up our ability to diagnose and resolve issues. Rather than trying to describe a problem in words, a short recording shows our team exactly what you're experiencing.

Our team is committed to providing you with the best experience possible, so please don't hesitate to contact us whenever you need help.`,
    relatedSlugs: ["reporting-a-bug", "get-support", "leave-feedback"],
  },
  {
    id: "fn-9",
    slug: "reporting-a-bug",
    title: "Reporting a Bug",
    category: "functions",
    content: `## Reporting a Bug

If you encounter a bug, please provide as much detail as possible to help us diagnose and resolve the issue effectively. Including the following information will ensure a quicker resolution or temporary workaround:

## What to Include

- **A detailed description** of the bug
- **Expected vs. actual behaviour** — what you expected to happen versus what occurred
- **Steps to reproduce** — the specific steps you took that triggered the bug
- **Your environment** — the device, operating system, and browser you're using
- **Screenshots or videos** — any relevant captures that showcase the issue

## How to Report

Contact our team through the **Live Chat** page in the app, located under the **Get Help** section. Attach any screenshots or recordings to help our team diagnose the issue as quickly as possible.

> Tip: Use the Nimbus Screen Shot & Video Recorder Chrome extension to easily capture and annotate screenshots or record your screen.`,
    relatedSlugs: ["helpful-tools-for-capturing-screenshots-and-videos", "get-support", "leave-feedback"],
  },
  {
    id: "fn-10",
    slug: "get-support",
    title: "Get Support",
    category: "functions",
    content: `## Get Support

### We're Here to Help!

Encountered an issue or need guidance? Our team is ready to assist you.

## How to Reach Us

Please reach out to our team for assistance through the **Live Chat** page in the app, located under the **Get Help** section. A team member will respond promptly to help resolve your query.

Alternatively, if you have any questions about a specific feature, feel free to reach out to an advisor directly in the app using the Live Chat page. You can find it in the **GET HELP** section.

## What We Can Help With

- Technical issues and bugs
- Account and billing queries
- Feature guidance and how-to questions
- Feedback and feature requests
- General product questions`,
    relatedSlugs: ["reporting-a-bug", "leave-feedback", "helpful-tools-for-capturing-screenshots-and-videos"],
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
