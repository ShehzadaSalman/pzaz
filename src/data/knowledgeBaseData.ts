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
    slug: "script-breakdown",
    title: "Script Breakdown",
    category: "tools-and-features",
    content: `## Script Breakdown

## Introduction

We're excited to introduce the **Script Breakdown** feature — a powerful tool designed to help you prepare and plan your film or TV production in more detail than ever before.

This feature allows you to use your script as a foundation for organising everything you'll need for production, from props and costumes to locations and cast.

## Getting Started

To get started with script breakdown, you'll first need to create or upload your script. Once uploaded, your script will be treated as the **master script** — this is the version the app uses as the basis for your breakdown. You can add additional scripts, but only the master script will be analysed for breakdown purposes.

Once your master script is added, the app will automatically generate a list of all scenes. You can view these by selecting **Breakdown** from the left-hand navigation menu.

## Features of the Script Breakdown Tool

You can think of this feature as your production team's pre-production dashboard. Here's what you can do:

- **Automatically generate a scene list** based on your master script
- **View scene metadata**, such as character presence and script coverage
- **Tag essential elements** directly from your script — including cast, props, vehicles, costumes, stunts, special effects, and more
- **Organise your breakdown** using a category panel and in-line colour-coded highlights
- **Search and filter tagged items** to quickly find what you need
- **Create or delete custom categories** for full control over your breakdown structure

## Tagging Items in Your Script

To tag an item from your script:

1. Navigate to the **Breakdown** section and select the scene you'd like to work on.
2. In the focused scene view, highlight the word or phrase you want to tag.
3. A popup will appear — choose the section (e.g. Elements), the category (e.g. Props, Makeup, Vehicles), and whether to tag a single instance or all occurrences.
4. Click **Tag** — the item will now appear highlighted in the scene with a colour code for its category.
5. The item is also added to the panel on the right, where you can view, expand, and manage all tagged items.

## What Happens Next

Once you've tagged your script, all relevant items will automatically appear in their respective sections of the app. This means you can start planning earlier and ensure you're fully prepared when it's time to shoot.`,
    relatedSlugs: ["scenes", "storyboard", "stripboard"],
  },
  {
    id: "tf-2",
    slug: "documents-section",
    title: "Documents Section",
    category: "tools-and-features",
    content: `## Documents Section

### Introduction

We have reintroduced the Documents section in response to feedback from customers telling us they missed it!

## Getting Started

The Documents section lets you create an unlimited number of books, and an unlimited number of pages. Each page must be contained within a book. To create these, simply click into the text field at the top of the screen, enter a title, and then press enter.

## Features of the Documents Section

You can think of this feature as your team's personal production wiki. You can:

- Create unlimited pages across unlimited books
- Format with headers (H1–H6), bullet points, numbered lists, and hyperlinks
- Organise all your project documentation in one central place
- Create any type of document — from treatments to on-set procedures — it can all live here

We hope you find the Documents section as useful as we do! If you encounter an issue or need guidance, reach out to the support team via the Live Chat feature within the app.`,
    relatedSlugs: ["your-filmspace", "manage-section", "card-blocks"],
  },
  {
    id: "tf-3",
    slug: "manage-section",
    title: "Manage Section",
    category: "tools-and-features",
    content: `## Manage Section

### Your Personal Board

The personal board is your personal space for seeing work and tasks that apply only to you. You'll see two types of items in this board:

1. **Todos** — tasks that will only ever be visible to you, no one else.
2. **Workflow cards** — if you are either the owner of, or have been added to, any workflow cards, then these will be shown here too.

The board is split into two sections — the inbox (a list on the left-hand side) and board columns (on the right-hand side). You can move any of the todos or cards from the list into the columns by dragging and dropping them with the cursor.

You can add as many extra columns as you want to show what stage each item is up to. To add an extra column, click the **"+"** icon at the top of any column.

## Workflow Board

The Filmspace owner can create as many new workflow boards as they wish by clicking the **"+ New Workflow"** button in the left-hand frame.

Once created, each workflow board can be viewed by anyone who has access to it. Like your personal board, each workflow board is split into two sections — a list, and a column-based board.

Only cards will be visible on a workflow board, not personal todos. You can add new workflow cards to either the list section, or to any of the columns, by clicking the **"+"** icon above that part of the view.`,
    relatedSlugs: ["board-views", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-4",
    slug: "shots",
    title: "Shots",
    category: "tools-and-features",
    content: `## Shots

### Plan and track all the individual shots for your film.

The Shots feature allows you to break down each scene into specific camera shots and organise them according to your shooting schedule.

## How Can the Shots Feature Work for Me?

As a producer, director, or other person involved in a production, you can be confident that the Shots feature lets you record all the relevant information for planning your shoot. Whether it's camera angles, required movements, specific lenses, or anything else, we've got you covered.

Not only that, but the tool contains an integrated **AI assistant** that can automatically generate preview images for each of your shots, based on prompts you provide.

You can submit both 'positive' and 'negative' prompts to make sure your previews are as accurate as possible. Furthermore, the AI can generate your preview images in a range of styles — including photographic, futuristic, anime — really entirely anything you want to add!

For further assistance with the Shots feature, feel free to use the Live Chat feature within the app to talk to us.`,
    relatedSlugs: ["scenes", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-5",
    slug: "scenes",
    title: "Scenes",
    category: "tools-and-features",
    content: `## Scenes

### Organise and manage the narrative structure of your film; break down your script into scenes and track their progress during production.

The Scenes feature in the app allows you to divide your script into manageable units and keep track of each scene's status throughout the production process. You can assign scenes to specific shooting days, allocate resources, and monitor the overall progress of your film.

## How Does It Work?

- When you enter the Scenes section for the first time, you will need to select one of the scripts already saved within your Filmspace from the left-hand side menu.
- Once you select a script, each scene mentioned in that script will generate a panel in the view on the right-hand side.
- Our tool then gives you the ability to use our **AI Assistant** to generate a preview image for each scene.
- You have a huge amount of flexibility — you can generate images in a huge range of styles, and provide extremely varied prompts to make your images even more unique. You can also upload your own images if you have some prepared!

For further assistance with the Scenes feature, feel free to speak to us using the Live Chat feature within the GET HELP section.`,
    relatedSlugs: ["shots", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-6",
    slug: "storyboard",
    title: "Storyboard",
    category: "tools-and-features",
    content: `## Storyboard

### Organise and visualize your film's key moments and shots with our Storyboard feature

The Storyboard feature in the app helps you visually plan and organise your film's key scenes. It enables you to break down each scene into individual shots, and represent them with images, drawings, or notes to create a clear visual reference for your production.

## Where to Find It

You'll find the **Storyboard** feature in the **"Pre-production" section** in the left-hand navigation menu — your one-stop hub for visual planning and shot organisation before the cameras start rolling.

## Two Ways to Create Your Storyboard

### 1. Auto-Generate from Your Master Script

Upload your script, and the app will automatically extract your scenes. Each scene becomes its own storyboard — ready for you to start adding individual shots, camera angles, and scene details. Perfect if you're working from a fully written script.

### 2. Build It from Scratch

Create a custom storyboard and manually add scenes. Ideal for experimental projects, documentaries, or multiple films within the same space.

## Add Detailed Shots to Each Scene

Once your scenes are set, add as many shots as you need to each scene, and record key production information such as:

- Scene location and time of day
- Character dialogue
- Shot details (angle, movement, shot size)
- Camera info
- Timing
- Comments and notes

Each shot can be expanded and enriched with all the information you need. Everything is saved and structured, so you can scroll through your storyboard chronologically.`,
    relatedSlugs: ["scenes", "shots", "stripboard"],
  },
  {
    id: "tf-7",
    slug: "stripboard",
    title: "Stripboard",
    category: "tools-and-features",
    content: `## Stripboard

### Organise and streamline your production schedule with our Stripboard

The Stripboard feature is designed to help you manage your shooting schedule. It allows you to break down your script into scenes and organise them visually to plan each day of your shoot.

## How Can I Use the Stripboard Most Effectively?

To take full advantage of the Stripboard, you will first need to create a script that can be used as a foundation.

Once you open the Stripboard section, select an existing script from the left-hand menu. The Stripboard view will then open and give you a clear and concise breakdown of each scene in your script. You can then begin to allocate specific shooting days and assign resources.

You can:

- Move scenes around when there are changes in your production schedule
- Monitor the availability of your team and locations
- Track which scenes are ready, in progress, or completed
- Visualise the entire production flow from start to finish

For further assistance, feel free to reach out to an advisor via the Live Chat page in the GET HELP section.`,
    relatedSlugs: ["call-sheets", "scenes", "storyboard"],
  },
  {
    id: "tf-8",
    slug: "call-sheets",
    title: "Call Sheets",
    category: "tools-and-features",
    content: `## Call Sheets

### Coordinate and communicate your shoot's logistics with Call Sheets

The Call Sheets feature allows you to organise and distribute daily schedules to your crew, ensuring everyone knows where to be and when. You can create detailed, customised call sheets that list all relevant information for each shoot day, including call times, locations, and any special instructions.

## How Can I Use Call Sheets?

To begin, select the shooting days you need to plan and enter relevant details such as:

- Call time for each crew member
- Location information
- Special requirements for the day

You can distribute call sheets to your team via email directly through the platform.

The app allows you to keep track of crew availability and manage potential changes in schedules or locations. Call Sheets also integrate with your production and shooting schedules, ensuring everything is aligned. You can make real-time updates and notify your team of any changes instantly.

For further assistance, reach out to an advisor via the Live Chat page in the GET HELP section.`,
    relatedSlugs: ["stripboard", "department", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-9",
    slug: "department",
    title: "Production Section",
    category: "tools-and-features",
    content: `## Production Section

### Manage all aspects of your production process in one central hub.

The Production section in the app provides tools for keeping track of everything you need to make your production run smoothly, ensuring a seamless and efficient workflow.

## What Does This Section Contain?

The Production section is broken up into several separate features including **Casting, Crew, Locations, Elements, and Equipment**.

## How Can the Production Section Work for Me?

From coordinating tasks across teams to tracking the status of various elements in production, the Production feature provides all the tools needed to keep everything in sync. You can itemise crew and cast, production elements, locations, and equipment, and organise them to suit your workflow needs.

You can add all relevant information to your production items, including:

- Financial details
- Company or agency details
- Pick-up details and addresses
- Unlimited comments to make sure no-one on the team misses crucial production information

For further assistance, reach out to an advisor via the Live Chat page in the GET HELP section.`,
    relatedSlugs: ["call-sheets", "script-breakdown", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-10",
    slug: "moodboard",
    title: "Moodboard",
    category: "tools-and-features",
    content: `## Moodboard

### Record your ideas for the tone and style of your project

The **Moodboard** feature in the app enables filmmakers to visually conceptualise and communicate the aesthetic and tone of their projects. It serves as a creative tool to compile images, colour schemes, and design elements that reflect the project's vision.

## What Can You Do Within the Moodboard Section?

- **Visual Compilation** — Gather and arrange assets to create a cohesive visual representation of the project
- **Use Different Asset Types** — Add images, specific colours (using the standardised RGBA format), and particular fonts that align with the project's theme. Fonts are supported in the popular TTF font format.
- **Collaborative Editing** — Share moodboards with team members for input and adjustments, ensuring a unified visual direction

For further assistance with the Moodboard feature, reach out to an advisor via the Live Chat page in the GET HELP section.`,
    relatedSlugs: ["scenes", "storyboard", "documents-section"],
  },
  {
    id: "tf-11",
    slug: "team-chats",
    title: "Team Chats",
    category: "tools-and-features",
    content: `## Team Chats

### Upgrade your project communication, with Team Chats

Effective communication is vital in film and video production. The app's Messages feature offers real-time messaging capabilities, enabling seamless collaboration among team members. This integrated tool ensures that everyone stays informed and connected throughout the production process.

## What Does the Team Chat Feature Offer?

- **Real-Time Messaging** — Engage in instant conversations with team members to address issues promptly and keep the production moving smoothly
- **Versatility** — Communicate in the way that suits you best — the tool offers voice messaging, supports emojis, and lets you send file attachments
- **Group Chats** — Facilitate discussions among multiple team members, departments, or project-specific groups
- **Integration with Other Tools** — The Chat feature complements task management and scheduling, providing a centralised communication hub

For further assistance with the Chat feature, reach out to an advisor via the Live Chat page in the GET HELP section.`,
    relatedSlugs: ["file-sharing-media-storage", "add-and-remove-team-members-filmspace", "your-filmspace"],
  },
  {
    id: "tf-12",
    slug: "file-sharing-media-storage",
    title: "File Sharing & Media Storage",
    category: "tools-and-features",
    content: `## File Sharing & Media Storage

### Streamline managing and sharing your files and media

Managing and sharing files is streamlined with our **Drive** feature, providing a centralised repository for all production-related documents and media. This ensures that team members have easy access to the latest versions of files, enhancing collaboration and efficiency.

## Detailed Functionality

- **Centralised Storage** — Store scripts, storyboards, schedules, and other essential documents in one secure location
- **Seamless Integrations** — The app integrates with popular tools like Google Drive, Slack, and Adobe Suite, keeping workflows connected and efficient
- **Version Control** — Track changes and maintain version history to ensure the team is working with the most up-to-date files

For further assistance with the Drive feature, reach out to an advisor via the Live Chat page in the GET HELP section.`,
    relatedSlugs: ["team-chats", "documents-section", "your-filmspace"],
  },
  {
    id: "tf-13",
    slug: "budgeting",
    title: "Budgeting",
    category: "tools-and-features",
    content: `## Budgeting

**How Does Budgeting Work in the App?**

Our app offers an automated budgeting tool designed to streamline the financial planning process for film and video productions. By integrating budgeting directly with other production elements — such as scriptwriting, scene breakdowns, and scheduling — the app enables users to efficiently allocate resources and estimate costs.

## What Does 'Above' and 'Below' the Line Mean?

- **Above the Line Costs (ATL)** — Fixed, upfront costs associated with creative and key decision-making roles (writers, directors, producers). Usually negotiated before production begins.
- **Below the Line Costs (BTL)** — Variable, production-related expenses involved in the physical creation of the film (crew wages, equipment rental, location fees).

Our app allows you to view ATL or BTL costs separately, or combined, giving you a complete financial overview.

## Key Features of the Budget Tool

- **Left-Hand Menu** — Categories to classify items: Above the Line, Below the Line, and Combined Budget view
- **Right-Hand Panel** — All budget items, with flexible currency selection (Euros, Pounds, or Dollars)
- **Total fiscal amount** displayed in the top right-hand corner for quick reference

## Adding and Managing Budget Items

To add new items, click the purple button, select the item type, enter the name, and press Enter. Each item will be added to the **Unassigned** category until categorised.

## Exporting Your Budget

Export your completed budget as a **PDF** or **Excel (.xls)** file. Customise your export by selecting project name, budget categories, and optional credits (Producer, Director, Writer).`,
    relatedSlugs: ["department", "script-breakdown", "your-filmspace"],
  },
  {
    id: "tf-14",
    slug: "board-views",
    title: "Board Views",
    category: "tools-and-features",
    content: `## Board Views

### What are Boards?

Workflow boards offer a hybrid view — containing a list of items on the left-hand side, and a column-based view on the right-hand side. You can easily move Todos and Cards between these two sections, enabling you to choose the best approach for your production process.

## Flexible Workflow Management

The column-based view arranges itself into vertical columns representing workflow steps. Cards can be moved between columns as they progress through a work process. You can easily add, remove, and rename these columns to match the steps in your process.

For example, you might give columns names like "Pre-Production" or "Review" — or simply label them "Todo", "Doing", and "Done".`,
    relatedSlugs: ["manage-section", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-15",
    slug: "add-and-remove-team-members-filmspace",
    title: "Add and Remove Team Members – Filmspace",
    category: "tools-and-features",
    content: `## Add and Remove Team Members – Filmspace

Invite people to join your team or add collaborators to your Filmspace. Then, they can seamlessly collaborate on your creative projects.

## Adding Team Members

Navigate to **Profile and Settings** in the menu and click **Invite Members**. Enter the individual's name and email address, optionally adding a personal note for context, and click **Send Invite**. Once accepted, the individual will gain access to your Filmspace for collaboration.

## Removing Team Members

Open **Settings**. Click the **More Options icon (three dots)** next to the member you wish to remove and confirm the action. The team member will be removed and lose access to the Filmspace.

## #GoodToKnow

Only **Filmspace Owners** can add or remove team members, ensuring control over your collaborative environment.`,
    relatedSlugs: ["roles-permissions-in-pzaz", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-16",
    slug: "roles-permissions-in-pzaz",
    title: "Roles & Permissions in Pzaz",
    category: "tools-and-features",
    content: `## Roles & Permissions in Pzaz

### Updated Roles & Permissions

Every Filmspace member has a role, and each role comes with specific permissions tailored to their responsibilities in the filmmaking process. There are five leading roles:

1. **Filmspace Owner** — Full control over the Filmspace, billing, and all settings
2. **Filmspace Administrator** — Can share administrative duties for streamlined management
3. **Creative Lead** — Focused on creative direction and editorial decisions
4. **Team Member** — Full working access to the Filmspace; can create their own Filmspace
5. **Collaborator** — Minimal, task-specific access without a paid seat

## Customising Roles

You can customise the permissions for all roles except the Filmspace Owner. When a role is customised, the UI displays an icon to indicate the adjustments.

Collaborators are unique in that their permissions are always minimal and specific to their assigned tasks. You can define which functions a Collaborator can access on a case-by-case basis.

## Seats and Access

The first four roles are considered **main members** and have paid seats. Collaborators do not occupy paid seats — they are intended for short-term or task-specific contributions.

## #GoodToKnow

Roles and permissions are designed to foster collaboration while maintaining clear boundaries. A Filmspace Owner can participate as a Team Member in another Filmspace, but roles cannot overlap within the same Filmspace.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-17",
    slug: "personal-to-dos",
    title: "Personal To-dos",
    category: "tools-and-features",
    content: `## Personal To-dos

### What's the Difference Between a Card and a Todo?

A **todo** is only visible to the user who created it. By contrast, a **card** is visible to anyone who is a member of the board where the card belongs, or to anyone who has been added to it.

## What Are Personal To-dos?

Stay on top of your priorities and manage your time effectively with Personal To-dos. Unlike tasks assigned to specific projects or workflows, Personal To-dos are private items visible only to you. These are accessible via the Inbox, helping you stay organised without cluttering shared production spaces.

## The Inbox — Your Power Tool

No matter how many film projects you are managing or at what stage — whether it's just an idea for a script, acquiring funding, or a production in full swing — everything is consolidated in your Inbox.

Your inbox shows a hybrid view, with a list of items on the left, and as many columns as you wish to add on the right. You can also select cards and tasks for group actions such as deleting or archiving. Archived items are stored in a dedicated Archive section where they can be restored if needed.

## How to Manage Personal To-dos

Adding and managing Personal To-dos is simple and intuitive:

- Add notes, due dates, or attachments to each task
- Prioritise items by flagging them or moving them through stages
- Convert To-dos into shared cards or include them in meetings

## #GoodToKnow

With our platform, your To-dos are more than reminders — they're part of a streamlined toolkit to support your creative process.`,
    relatedSlugs: ["manage-section", "board-views", "card-blocks"],
  },
  {
    id: "tf-18",
    slug: "card-blocks",
    title: "Card Blocks",
    category: "tools-and-features",
    content: `## Card Blocks

### What Are Blocks?

Blocks are modular components you can add or remove from cards to tailor them to your needs. Each block provides a unique functionality, making cards adaptable for various tasks and workflows.

For example, the description block allows you to add detailed information, while other blocks like checklists or due dates enable task tracking and deadline management. Some blocks, such as the description block, are preloaded by default, while others can be added manually.

## Why Blocks Matter

Blocks help customise cards to fit your project requirements. They:

- Support flexibility by allowing you to adapt cards for different stages of filmmaking
- Enhance collaboration by enabling features like comments and attachments
- Keep relevant tools and information easily accessible

Adding or removing blocks is simple through the **'Add/Remove Blocks'** panel in the card header, so you can adjust cards as your workflow evolves.

## #GoodToKnow

Some blocks load by default, while others are optional. Except for the **Description block**, all blocks can be removed. This allows cards to be fully customised to your workflow.`,
    relatedSlugs: ["card-anatomy", "add-or-remove-blocks", "personal-to-dos"],
  },
  {
    id: "tf-19",
    slug: "your-filmspace",
    title: "Your Filmspace",
    category: "tools-and-features",
    content: `## Your Filmspace

### What Is a Filmspace?

Filmspace is your all-in-one workspace, explicitly designed for filmmakers, video creators, and production teams. It's where you can develop and refine ideas, prioritise projects, plan and execute production workflows, and foster seamless collaboration across your team.

## Your Creative Hub

Unlike standard project management tools, a Filmspace is built specifically for the film and video industry. It combines powerful workflow tools to streamline every step of the production process.

- **One Filmspace** is ideal for small to medium projects
- **Multiple Filmspaces** suit larger teams managing various projects, clients, or creative visions

## #GoodToKnow

You're not just tracking tasks — you're managing the entire creative journey, from pre-production to final delivery.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "roles-permissions-in-pzaz", "manage-section"],
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
