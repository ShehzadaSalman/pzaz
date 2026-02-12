import type { Meta, StoryObj } from "@storybook/react";
import SectionHeader from "@/components/SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "Components/SectionHeader",
  component: SectionHeader,
  args: {
    pillText: "The Solution",
    pillClassName: "bg-primary/10 text-primary mb-0",
    title: (
      <>
        One connected{" "}
        <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
          production system.
        </span>
      </>
    ),
    titleClassName: "text-balance",
    description:
      "Pzaz keeps your film together. Not three apps. Not ten tools. One live environment where script, schedule, budget, storyboard, and team stay in sync.",
    descriptionClassName: "text-center",
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const TheSolution: Story = {};

export const Products: Story = {
  args: {
    pillText: "Products",
    pillClassName: "bg-white text-primary mb-4",
    title: (
      <>
        Built for filmmakers who{" "}
        <span className="font-lato font-extrabold text-[48px] tracking-normal gradient-text">
          actually finish films.
        </span>
      </>
    ),
    titleClassName: "text-balance",
    description:
      "Pzaz is made for filmmaker entrepreneurs, directors, producers, and teams who understand that making a film isn't just about creativity — it's about execution.",
    descriptionClassName: "text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed",
  },
};

export const Integrations: Story = {
  args: {
    pillText: "Integrations",
    pillClassName: "bg-primary/10 text-primary mb-4",
    title: "Works with your existing tools",
    description: "No lock-in. No barriers. Just filmmaking.",
    descriptionClassName: "text-lg text-muted-foreground",
  },
};

export const WithoutPill: Story = {
  args: {
    pillText: undefined,
    title: "Work Smarter. Stay Stress Free",
    description: "All your tools, working together, from day one.",
  },
};
