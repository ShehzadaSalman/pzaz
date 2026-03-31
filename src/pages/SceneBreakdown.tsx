import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import SceneBreakdownHero from "@/components/scene-breakdown/SceneBreakdownHero";
import SceneBreakdownBuilt from "@/components/scene-breakdown/SceneBreakdownBuilt";
import SceneBreakdownFeatures from "@/components/scene-breakdown/SceneBreakdownFeatures";
import SceneBreakdownCraft from "@/components/scene-breakdown/SceneBreakdownCraft";
import SceneBreakdownAI from "@/components/scene-breakdown/SceneBreakdownAI";
import SceneBreakdownFreedom from "@/components/scene-breakdown/SceneBreakdownFreedom";
import SceneBreakdownCTA from "@/components/scene-breakdown/SceneBreakdownCTA";

const SceneBreakdown = () => {
  return (
    <PageLayout>
      <SEO
        title="Scene Breakdown Software for Film Production | Plan Every Detail | Pzaz"
        description="Break down scenes, add shots, assign teams, and track progress. Pzaz Scene Breakdown keeps creative intent aligned with what production actually requires."
        url="https://pzaz.io/film-production-tool/scene-breakdown-software"
        canonical="https://pzaz.io/film-production-tool/scene-breakdown-software"
        keywords={["scene breakdown", "film production", "shot list", "stripboard", "storyboard", "pzaz"]}
      />
      <SceneBreakdownHero />
      <SceneBreakdownBuilt />
      <SceneBreakdownFeatures />
      <SceneBreakdownCraft />
      <SceneBreakdownAI />
      <SceneBreakdownFreedom />
      <SceneBreakdownCTA />
    </PageLayout>
  );
};

export default SceneBreakdown;
