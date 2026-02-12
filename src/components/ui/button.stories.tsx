import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArrowIcon from "@/components/ui/ArrowIcon";
import iconSurvey from "@/assets/icon-survey.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const HeroImportScript: Story = {
  render: () => (
    <Button size="lg" className="group px-8">
      <img src={iconSurvey} alt="" className="w-5 h-5" />
      Import a Script
      <ArrowIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 text-white" />
    </Button>
  ),
};

export const HeroBookStudioDemo: Story = {
  render: () => (
    <Button
      variant="outline"
      size="lg"
      className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
      prefixIcon={
        <img
          src={ctaPlayIcon}
          alt=""
          className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]"
        />
      }
    >
      Book Studio Demo
    </Button>
  ),
};

export const CTAPrimary: Story = {
  render: () => (
    <div className="bg-[#1B0F2E] p-8 rounded-2xl inline-flex">
      <Button
        variant="outline"
        size="xl"
        className="group bg-white text-[#1B0F2E] border-white/20 hover:bg-white/90"
        postfixIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      >
        Get started free
      </Button>
    </div>
  ),
};

export const CTASecondary: Story = {
  render: () => (
    <div className="bg-[#1B0F2E] p-8 rounded-2xl inline-flex">
      <Button
        variant="outline"
        size="xl"
        className="bg-transparent text-white border-white/30 hover:bg-white/10"
      >
        Schedule a demo
      </Button>
    </div>
  ),
};

export const CTASecondaryInverseHover: Story = {
  render: () => (
    <div className="bg-[#1B0F2E] p-8 rounded-2xl inline-flex">
      <Button
        variant="outline"
        size="xl"
        className="bg-white/10 text-white border-white/30"
      >
        Schedule a demo
      </Button>
    </div>
  ),
};

export const ProductExploreStudio: Story = {
  render: () => (
    <Button variant="default" className="group w-full">
      Explore Studio
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  ),
};

export const ProductExploreBudget: Story = {
  render: () => (
    <Button variant="outline" className="group w-full">
      Explore Budget
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  ),
};

export const ProductExploreStoryboard: Story = {
  render: () => (
    <Button variant="outline" className="group w-full">
      Explore Storyboard
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  ),
};
