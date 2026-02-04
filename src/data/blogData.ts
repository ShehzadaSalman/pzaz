export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  author: Author;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export const categories = [
  { id: "all", label: "All Posts" },
  { id: "industry-insights", label: "Industry Insights" },
  { id: "filmmaker-interviews", label: "Filmmaker Interviews" },
  { id: "production-tips", label: "Production Tips" },
  { id: "film-business", label: "Film Business" },
  { id: "technology", label: "Technology" },
  { id: "tutorials", label: "Tutorials" },
];

export const authors: Record<string, Author> = {
  "sarah-chen": {
    name: "Sarah Chen",
    role: "Head of Content",
    avatar: "/placeholder.svg",
    bio: "Former line producer with 15 years in indie film. Now helping filmmakers work smarter with Pzaz.",
  },
  "marcus-williams": {
    name: "Marcus Williams",
    role: "Industry Analyst",
    avatar: "/placeholder.svg",
    bio: "Entertainment industry researcher focused on production economics and emerging technologies.",
  },
  "elena-rodriguez": {
    name: "Elena Rodriguez",
    role: "Filmmaker & Educator",
    avatar: "/placeholder.svg",
    bio: "Award-winning documentary filmmaker and film school instructor sharing real-world insights.",
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-film-budgeting-ai-2026",
    title: "The Future of Film Budgeting: How AI is Reshaping Production Finance in 2026",
    excerpt: "Discover how artificial intelligence is transforming the way productions manage budgets, predict costs, and optimize spending across the filmmaking lifecycle.",
    content: `
## The Evolution of Production Finance

The film industry has always been a high-stakes financial endeavor. From the earliest days of Hollywood, producers have grappled with the challenge of predicting and managing costs across complex, multi-month productions.

Today, artificial intelligence is fundamentally changing this equation. What once required weeks of spreadsheet work can now be accomplished in hours—with greater accuracy and deeper insights.

### Key Trends Shaping 2026

**1. Predictive Cost Modeling**

Modern AI systems can analyze thousands of historical productions to predict costs with unprecedented accuracy. By examining factors like location, genre, cast size, and shooting schedule, these tools generate budget estimates that account for variables human estimators might miss.

**2. Real-Time Budget Tracking**

Gone are the days of end-of-week budget reports. AI-powered systems now track spending in real-time, alerting producers to potential overruns before they become critical.

**3. Scenario Planning**

What if you move the shoot to a different city? What if weather delays push principal photography by two weeks? AI can model these scenarios instantly, helping producers make informed decisions quickly.

## The Human Element

Despite these advances, the role of experienced line producers and production accountants remains crucial. AI augments human expertise—it doesn't replace it.

> "The best productions combine AI efficiency with human creativity and judgment. Technology handles the calculations; people handle the relationships." — Industry Producer

### Getting Started with AI Budgeting

For productions looking to adopt AI-powered budgeting tools:

1. **Start with historical data**: The more production data you can provide, the better AI predictions become
2. **Integrate with existing workflows**: Look for tools that work with your current accounting software
3. **Train your team**: Ensure key personnel understand both the capabilities and limitations of AI tools
4. **Maintain oversight**: Always have human review of AI-generated estimates

## Looking Ahead

As we move through 2026, expect to see AI budgeting tools become standard across productions of all sizes. The technology is maturing rapidly, and early adopters are already seeing significant advantages in cost control and financial planning.

The future of film finance isn't about replacing human expertise—it's about amplifying it with intelligent tools that handle the heavy lifting of data analysis and prediction.
    `,
    category: "industry-insights",
    tags: ["AI", "Budgeting", "Film Finance", "Production", "Technology"],
    featuredImage: "/placeholder.svg",
    author: authors["marcus-williams"],
    publishedAt: "2026-02-01",
    readingTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "interview-indie-filmmaker-sarah-jenkins",
    title: "From Script to Screen: An Interview with Indie Filmmaker Sarah Jenkins",
    excerpt: "Award-winning director Sarah Jenkins shares her journey making micro-budget features and the tools that transformed her production workflow.",
    content: `
## Meet Sarah Jenkins

Sarah Jenkins burst onto the indie scene with her debut feature "Midnight Crossing," a thriller shot for under $50,000 that went on to premiere at SXSW and secure distribution across three continents.

We sat down with Sarah to discuss her filmmaking philosophy and how she manages to punch above her weight class on limited budgets.

### On Starting with Nothing

**Pzaz: You made your first feature for less than most productions spend on craft services. How?**

Sarah: Honestly, it was equal parts desperation and determination. We had no money, but we had incredible people who believed in the story. The key was meticulous planning—every dollar had a purpose.

**Pzaz: What would you do differently now?**

Sarah: Better software, honestly. We tracked everything in spreadsheets that kept breaking. Now I use integrated tools that talk to each other. It sounds boring, but it freed up mental space for creative decisions.

### The Planning Philosophy

> "A well-planned shoot is a creative shoot. When you're not stressed about logistics, you can actually direct."

Sarah's approach emphasizes front-loading production work:

- Detailed script breakdowns before any other planning
- Location scouting with budget implications in mind
- Realistic scheduling that accounts for indie constraints
- Building relationships with vendors who understand low-budget realities

### Advice for Emerging Filmmakers

1. **Master your script breakdown**: Every other decision flows from this
2. **Embrace technology**: The tools available today would have blown my mind five years ago
3. **Build your team carefully**: Attitude matters more than experience on small productions
4. **Plan for problems**: Something will go wrong; budget time and money for it

## What's Next

Sarah is currently in post-production on her second feature, a character drama with a significantly larger budget—though still firmly in indie territory.

"The fundamentals don't change," she says. "You're still telling stories with limited resources. You just have more tools to do it well."
    `,
    category: "filmmaker-interviews",
    tags: ["Interview", "Indie Film", "Micro-Budget", "Directing"],
    featuredImage: "/placeholder.svg",
    author: authors["elena-rodriguez"],
    publishedAt: "2026-01-28",
    readingTime: 6,
    featured: true,
  },
  {
    id: "3",
    slug: "script-breakdown-ultimate-guide",
    title: "The Ultimate Guide to Script Breakdowns: From Page to Production",
    excerpt: "Master the art and science of script breakdowns with this comprehensive guide covering everything from basic elements to advanced techniques.",
    content: `
## What is a Script Breakdown?

A script breakdown is the foundation of all production planning. It's the process of analyzing a screenplay to identify every element that will require resources—cast, locations, props, costumes, special effects, and more.

### Why It Matters

Without a thorough breakdown, you're essentially guessing at your budget and schedule. Every overlooked element is a potential cost overrun or shooting day crisis.

## The Breakdown Process

### Step 1: Read the Script Completely

Before marking anything, read the entire script as a viewer would. Understand the story, the tone, and the creative intent.

### Step 2: Identify Script Elements

Using industry-standard color coding:

- **Red**: Cast (speaking roles)
- **Orange**: Stunts
- **Yellow**: Extras/Atmosphere
- **Green**: Props
- **Blue**: Special Effects
- **Violet**: Vehicles
- **Pink**: Costumes
- **Brown**: Sound/Music

### Step 3: Scene-by-Scene Analysis

For each scene, document:

- Scene number and page count
- Interior/Exterior and Day/Night
- Location description
- All marked elements
- Special notes or requirements

### Step 4: Create Breakdown Sheets

Consolidate your analysis into standardized breakdown sheets—one per scene—that can be referenced throughout pre-production and production.

## Common Mistakes to Avoid

1. **Rushing the first read**: Understanding context prevents missed elements
2. **Ignoring implied elements**: "She checks her phone" means you need a phone as a prop
3. **Underestimating background**: Busy street scenes require significant extras coordination
4. **Missing continuity needs**: Track what characters wear across scenes

## Tools and Technology

Modern breakdown software can accelerate this process significantly:

- Automatic element detection using AI
- Integrated scheduling connections
- Real-time collaboration features
- Version control for script revisions

## Best Practices

> "The breakdown isn't done until production wraps. It's a living document that evolves with the production."

Keep your breakdown flexible and update it as:

- Script revisions arrive
- Location scouts reveal new requirements
- Budget constraints require creative solutions
- Production realities shift plans
    `,
    category: "tutorials",
    tags: ["Script Breakdown", "Pre-Production", "Tutorial", "Planning"],
    featuredImage: "/placeholder.svg",
    author: authors["sarah-chen"],
    publishedAt: "2026-01-25",
    readingTime: 10,
  },
  {
    id: "4",
    slug: "streaming-wars-production-impact-2026",
    title: "How the Streaming Wars Are Reshaping Independent Production in 2026",
    excerpt: "Analysis of how streaming platform economics are creating new opportunities and challenges for independent filmmakers.",
    content: `
## The New Landscape

The streaming industry has matured significantly since its explosive growth in the early 2020s. What does this mean for independent productions in 2026?

### Opportunities

- More buyers for quality content
- Global distribution from day one
- Data-driven understanding of audiences
- Lower barriers to entry

### Challenges

- Compressed theatrical windows
- Ownership and rights complexity
- Platform-specific requirements
- Discoverability in crowded catalogs

## Strategic Considerations

For independent producers navigating this landscape, several strategic considerations have emerged as crucial...
    `,
    category: "film-business",
    tags: ["Streaming", "Distribution", "Industry Analysis", "Business"],
    featuredImage: "/placeholder.svg",
    author: authors["marcus-williams"],
    publishedAt: "2026-01-22",
    readingTime: 7,
  },
  {
    id: "5",
    slug: "location-scouting-digital-age",
    title: "Location Scouting in the Digital Age: Tools and Techniques for 2026",
    excerpt: "Modern location scouting combines traditional skills with cutting-edge technology. Here's how top scouts are working today.",
    content: `
## The Modern Location Scout

Location scouting has evolved dramatically with new technology, but the core skills remain essential...

### Digital Tools

- Satellite imagery and Street View
- 3D scanning and photogrammetry
- Virtual production previsualization
- AI-powered location matching

### Traditional Skills

- Understanding lighting conditions
- Assessing logistical feasibility
- Negotiating with property owners
- Anticipating production needs

## Best Practices for Today's Scouts

The most effective location scouts combine digital efficiency with boots-on-the-ground verification...
    `,
    category: "production-tips",
    tags: ["Location Scouting", "Pre-Production", "Technology", "Tips"],
    featuredImage: "/placeholder.svg",
    author: authors["elena-rodriguez"],
    publishedAt: "2026-01-18",
    readingTime: 5,
  },
  {
    id: "6",
    slug: "production-accounting-essentials",
    title: "Production Accounting Essentials: What Every Filmmaker Needs to Know",
    excerpt: "A primer on production accounting fundamentals, from cost reports to wrap reconciliation.",
    content: `
## Understanding Production Accounting

Production accounting is the financial backbone of any film or television production...

### Key Concepts

- Cost reports and their components
- Petty cash management
- Payroll processing
- Purchase orders and vendor management

### Common Pitfalls

Many productions encounter the same accounting challenges. Here's how to avoid them...
    `,
    category: "film-business",
    tags: ["Accounting", "Finance", "Production", "Business"],
    featuredImage: "/placeholder.svg",
    author: authors["sarah-chen"],
    publishedAt: "2026-01-15",
    readingTime: 9,
  },
];
