

## Producer Blog Page Build-Out

### Section 1: Hero Section (matching the reference screenshot)

Create a new `ProducerBlogHero` component at `src/components/producer-blog/ProducerBlogHero.tsx`:

- **Title**: "The Film Maker Entrepreneur" -- styled with a gradient (purple-to-blue, matching the screenshot) using a large serif/display font
- **Subtitle**: "Interviews, Industry and Info. Get Pzazzed !" in italic, dark text
- **Category filter bar**: A horizontal row of pill/button-style category filters:
  - Comparisons & Analysis
  - Discoveries & Beginnings
  - Film Business School
  - Filmmaker Interviews
  - How-Tos & Insights
  - News & Updates
  - Production & Producing
  - Art Of Film
  - Share (with an arrow icon)
- Categories styled as rounded rectangular buttons with a light gray background (`#D7D7DC` or similar), matching the screenshot
- Background: light gradient from purple tint at top to light gray

### Section 2: 3-Column Blog Card Grid

Below the hero, add a grid section with 6 `BlogCard` components in a 3-column layout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

- The existing `BlogCard` component has `max-w-[980px]` and large text sizes designed for a full-width featured layout. For the 3-column grid, the card will need its max-width constraint removed and text sizes scaled down so cards fit properly in a grid column.
- Create a smaller variant or adjust the existing `BlogCard` to accept a `variant` prop (e.g., `"featured"` vs `"grid"`), or create a new `ProducerBlogCard` component with grid-appropriate sizing.
- Use placeholder data for the 6 cards (from existing `blogData.ts` posts).

### Files to Create
1. `src/components/producer-blog/ProducerBlogHero.tsx` -- Hero with gradient title, subtitle, and category filter bar
2. Update `src/pages/ProducerBlog.tsx` -- Import hero + render grid of 6 BlogCards

### Files to Modify
3. `src/components/blog/BlogCard.tsx` -- Add an optional `compact` or `variant` prop to support smaller grid sizing (remove max-width, reduce text sizes) so it works in a 3-column layout

### Technical Details

**ProducerBlogHero layout:**
- Centered text, `pt-28 md:pt-32 pb-12`
- Title: gradient text using `bg-gradient-to-r from-[#3207BC] to-[#409DFF]` with `bg-clip-text text-transparent`, large serif font size (~60-80px)
- Subtitle: italic, `text-[#4A4A4F]`, ~24px
- Category bar: flex-wrap row of buttons, light gray bg, rounded corners, centered, with gap spacing
- "Share" button includes a small arrow/share icon

**BlogCard grid variant:**
- Remove `max-w-[980px]` and `mx-auto` when in grid mode
- Scale title from 48-60px down to ~20-24px
- Scale excerpt from 28-44px down to ~14-16px
- Keep the same card structure (image, category pill, title, excerpt)

**ProducerBlog page:**
- Hero section at top
- Grid section: `container mx-auto px-6`, 3-column grid with gap, 6 BlogCard instances using data from `blogPosts` in `blogData.ts`

