import type { Meta, StoryObj } from "@storybook/react";
import { Sparkles } from "lucide-react";
import { Pill } from "@/components/ui/pill";

const meta: Meta<typeof Pill> = {
  title: "UI/Pill",
  component: Pill,
  args: {
    text: "The Solution",
  },
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    text: "Free 14-day trial",
    icon: <Sparkles className="text-primary" />,
  },
};

export const OnDark: Story = {
  render: () => (
    <div className="bg-[#1B0F2E] p-6 rounded-2xl inline-flex">
      <Pill text="Products" className="bg-white text-primary" />
    </div>
  ),
};

export const TheSolution: Story = {
  args: {
    text: "The Solution",
  },
};

export const Products: Story = {
  render: () => (
    <Pill text="Products" className="bg-white text-primary" />
  ),
};
