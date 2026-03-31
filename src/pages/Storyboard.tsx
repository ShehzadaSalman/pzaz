import React from "react";
import StoryboardHero from "@/components/storyboard/StoryboardHero";
import StoryboardProblem from "@/components/storyboard/StoryboardProblem";
import StoryboardMomentum from "@/components/storyboard/StoryboardMomentum";
import StoryboardComposition from "@/components/storyboard/StoryboardComposition";
import StoryboardFeatures from "@/components/storyboard/StoryboardFeatures";
import StoryboardCollaborate from "@/components/storyboard/StoryboardCollaborate";
import StoryboardAnimatics from "@/components/storyboard/StoryboardAnimatics";
import StoryboardAlignment from "@/components/storyboard/StoryboardAlignment";
import StoryboardCTA from "@/components/storyboard/StoryboardCTA";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Storyboard = () => {
  return (
    <PageLayout>
      <SEO
        title="Storyboard Software for Film & Video | Start Free | Pzaz"
        description="Rapid visual development inside a structured production environment. Generate, iterate and align storyboard shots with AI-assisted tools, animatics, and real-time collaboration."
        url="https://pzaz.io/film-production-software/storyboarding"
        keywords={[
          "storyboarding software",
          "AI storyboard tool",
          "film preproduction storyboard",
          "animatic creation",
          "visual development tool",
          "Pzaz Storyboard",
          "director storyboard app",
        ]}
        canonical="https://pzaz.io/film-production-software/storyboarding"
      />
      <StoryboardHero />
      <StoryboardProblem />
      <StoryboardMomentum />
      <StoryboardComposition />
      <StoryboardFeatures />
      <StoryboardCollaborate />
      <StoryboardAnimatics />
      <StoryboardAlignment />
      <StoryboardCTA />
    </PageLayout>
  );
};

export default Storyboard;
