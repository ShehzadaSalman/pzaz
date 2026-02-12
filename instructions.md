# React/Next.js Project Best Practices

## Core Stack
- Use `React` and, when applicable, `Next.js` App Router for routing and data fetching.
- Use `TypeScript` for type safety across the codebase.
- Use `Tailwind CSS` for styling. Avoid mixing multiple styling systems.

## Project Structure
- Keep components small and focused. Prefer many small components over a few large ones.
- Create separate components for distinct UI sections or concerns.
- Group files by feature or route when possible.
- Use clear, consistent naming: `PascalCase` for components, `camelCase` for variables and functions.

## Component Design
- Prefer functional components and hooks.
- Keep components pure: avoid side effects in render.
- Extract reusable UI patterns into shared components.
- Keep business logic outside UI components when possible.

## Styling with Tailwind
- Use Tailwind utility classes for layout and styling.
- Define reusable design tokens in `tailwind.config` (colors, spacing, fonts).
- Avoid inline styles unless there is a strong reason.
- Keep class lists readable by grouping related utilities.

## State Management
- Use local state for local concerns.
- Lift state up only when necessary.
- Prefer server components and server data fetching in Next.js when possible.
- Use a state library only when the app complexity requires it.

## Data Fetching
- In Next.js, prefer server-side data fetching in `app/` routes.
- Use `fetch` with proper caching/revalidation where appropriate.
- Handle loading and error states explicitly.

## Performance
- Avoid unnecessary re-renders with memoization only when needed.
- Keep component trees shallow and avoid prop drilling when possible.
- Use dynamic imports for heavy components.

## Code Quality
- Keep files short and focused.
- Use ESLint and Prettier for consistent style.
- Write tests for critical paths.
- Prefer explicitness over cleverness.

## Accessibility
- Use semantic HTML elements.
- Ensure proper contrast and focus states.
- Provide `aria` attributes when needed.

## Next.js Specific
- Use `app/` directory conventions and route segments.
- Keep server-only logic on the server.
- Avoid using `use client` unless necessary.

## General
- Document non-obvious decisions.
- Keep dependencies minimal and well-justified.
