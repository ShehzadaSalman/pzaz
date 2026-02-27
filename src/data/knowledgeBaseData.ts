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
    slug: "book-a-personalised-product-demonstration",
    title: "Book a Personalised Product Demonstration",
    category: "getting-started",
    content: `## Book a Personalised Product Demonstration

### We are here to Help You Get the Most out of our tool.

We are a team of film-lovers and filmmaking and creative professionals. If there's one thing we love more than films, it's helping other filmmakers to succeed and fulfil their creative ambitions!

That's why we are here every day to speak to via a video call if you want to tell us about your needs, or learn more about what the app has to offer.

## Get in Touch Today!

To arrange a personalised, in-depth product demonstration with us, simply click the following Calendly link and follow the instructions: [BOOK A CALL](https://calendly.com/filmmaking-app/30min)`,
    relatedSlugs: ["writing-your-script-with-pzaz", "getting-started-with-workflows", "pzaz-101"],
  },
  {
    id: "gs-2",
    slug: "writing-your-script-with-pzaz",
    title: "Writing Your Script with Pzaz",
    category: "getting-started",
    content: `## Writing Your Script with Pzaz

### Introduction

With the scriptwriting tool, you can turn your ideas into a fully structured script — whether you're starting from scratch or importing an existing project. The tool streamlines every step, allowing you to customise your title page, add acts, scenes, characters, dialogue, and transitions, and build a seamless narrative flow.

## Getting Started

Start your script by importing it, or by creating a new one from scratch. The first script you create will be marked as the **"Main script"** — this means that only this script can be used for script breakdown, storyboarding, call sheet arranging and for automatically creating elements, equipment, crew & cast and location objects in the Production section of the main menu. All other scripts that are imported, created or duplicated from the main script will be counted as drafts and text from them will need to be manually moved to the main script.

At the moment, if you have multiple scripts in your project, then the first one in the list will be marked as the "Main Script" by default.

## Script Import/Export

When you press the **"New Script"** button, you will be given 2 options — "Start new script" or "Import existing". The app supports .PDF import and Final Draft script file (.FDX) import.

To export your script, click on the 3-dot menu at the top right of the script writing tool and press on the **"Export Script"** option. Here you can enter the name of the script file, select the exportable file format — .FDX or .PDF — and include or exclude the title page in the exported file. You can print the file by selecting the "Print" button.

> Please note that if the file is large, you may have to wait a few seconds until the document is ready for printing.

## Navigation

Navigation is effortless with the intuitive sidebar, letting you quickly rearrange scenes, edit dialogue, or jump to specific sections using the search function. Every update happens in real time, ensuring a smooth writing experience.

## The AI Assistant

Need creative support? The built-in AI assistant provides smart suggestions and insights to refine your script, making the writing process faster and more intuitive. With our app, screenwriting becomes more efficient, organised, and collaborative — so you can focus on bringing your story to life.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "ai-security-and-privacy-at-pzaz", "getting-started-with-workflows"],
  },
  {
    id: "gs-3",
    slug: "ai-security-and-privacy-at-pzaz",
    title: "AI, Security, and Privacy",
    category: "getting-started",
    content: `## AI, Security, and Privacy

We take security and privacy seriously, ensuring your creative work remains protected.

**We never use your scripts, notes, or data for AI training. Your work is private and accessible only to you and the collaborators you choose.**

## Data Security

To keep your data secure, the app uses end-to-end encryption with **TLS** for data in transit and **AES-256** encryption for stored files. Our infrastructure follows industry-leading security standards, with regular updates to safeguard against potential threats.

## Access Controls

We provide strict access controls so you can manage who sees and edits your content. Your projects remain in a private workspace, and no files are publicly available unless you explicitly share them.

## Looking Ahead

We are expanding our security measures with:

- **Two-Factor Authentication (2FA)** — an extra layer of login protection
- **Advanced file permissions** — more granular control over who can access what
- **Secure link sharing** — enhanced control over shared content

With our app, you can focus on your creative work without security concerns. Have questions? Feel free to reach out to an advisor right here in the app, using the Live Chat page. This can be found in the **GET HELP** section.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "writing-your-script-with-pzaz", "pzaz-101"],
  },
  {
    id: "gs-4",
    slug: "getting-started-with-workflows",
    title: "Getting Started with Workflows",
    category: "getting-started",
    content: `## Getting Started with Workflows

### What are Workflows?

Workflows represent internal processes — a series of repeatable steps required to deliver an intended outcome. A workflow can be as simple as "To do > Doing > Done" or more complex, such as the steps in a sales cycle.

Workflows are visualised on boards. You can create as many boards as needed, each representing a different process (e.g., Development, Marketing, Hiring). You make a workflow by adding columns to a board, each representing a step in the process. Cards are dragged from column to column as they advance through the steps in your workflow. This format is often referred to as a **Kanban board**.

## Creating Your First Workflow

When starting a workflow, a Kanban board will load with a single column, which represents the start of your workflow and cannot be deleted or renamed. To add columns, click the vertical ellipsis (three dots) on the current single column and select **Add Heading**, repeating this step for every stage in your workflow.

For example, a content marketing workflow might include: Unassigned, Prioritized, Drafting, Editing, and Published. You can rearrange the columns by dragging and dropping them to suit your needs.

## Adding an Extra Workflow

Please note that only the filmspace owner can add a new workspace. To do so, select the **'Manage'** section in the side menu, then in the left hand menu, select **'+ New Workflow'**.

## Adding Work Items

To create cards — the units of work — click the vertical ellipsis on any column and select **Add Card**. Each card should have a clear, descriptive title. You can document cards by adding details like:

- Descriptions
- Due dates
- Attachments (e.g., documents or links)
- Tasks and subtasks
- Team member assignments`,
    relatedSlugs: ["pzaz-101", "writing-your-script-with-pzaz", "book-a-personalised-product-demonstration"],
  },
  {
    id: "gs-5",
    slug: "pzaz-101",
    title: "The Principle",
    category: "getting-started",
    content: `## The Principle

## Introduction to "The Principle"

Welcome to our platform, where simplicity meets power. We believe that tools should adapt to you — not vice versa. That's why we built our platform on the **Principle**, a user experience (UX) philosophy designed to make it effortless for anyone to get started, grow their capabilities, collaborate, and unlock powerful features at their own pace in real-time.

### What Is the Principle?

The Principle is rooted in three core ideas:

1. **The Platform grows with you:** It is like an empty canvas, ready to take on any task or project, big or small. The basics come naturally, and as you play, mastering the rest feels seamless and intuitive.
2. **Lego-Like Flexibility:** Every feature in the tool is built using simple, modular blocks. Like Lego bricks, these blocks are easy to recognise, fit together seamlessly, and allow you to build anything — from straightforward tasks to intricate workflows.
3. **Support Where It Matters Most:** In a world overflowing with AI tools, the platform focuses on the essentials — helping filmmakers and creatives prepare, produce, and deliver their best work. AI is used not to replace your creativity but to inspire, spark, and support it.

## Your Canvas: Objects and Cards

Start with a blank canvas where you can create **objects** to track tasks, projects, scripts, files, budgets, and more.

Each object shows key details (like deadlines and priorities). Open it to access a **card** — a customisable space for managing all the finer details.

## Blocks: Building Your Workflow

Cards consist of blocks, which represent logical segments of information or features. For instance, a card may include blocks for comments, attachments, team tasks, financial information, and various custom properties.

This modular approach allows you to tailor each card to your workflow. Plus, we can design custom blocks to match your unique needs, giving you ultimate control without the complexity.

## Organising Your Work

In the platform, every object is grouped into a **category**, starting with the default **Outbox**. You can create as many categories as you need to stay organised.

Manage your work using:

- **List View** — Ideal for sorting by topics like fundraising or hiring.
- **Board View** — Track progress through stages like To Do, Doing, and Done.

This workspace stands out with its hybrid view, combining both layouts. This makes it easy to organise tasks while tracking progress, whether you're planning your day, managing a team, or leading a production.`,
    relatedSlugs: ["getting-started-with-workflows", "writing-your-script-with-pzaz", "ai-security-and-privacy-at-pzaz"],
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
