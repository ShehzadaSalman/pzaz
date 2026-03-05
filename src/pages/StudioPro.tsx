import React from "react";
import StudioProHero from "@/components/studio-pro/StudioProHero";
import StudioProProblem from "@/components/studio-pro/StudioProProblem";
import StudioProSlate from "@/components/studio-pro/StudioProSlate";
import StudioProShift from "@/components/studio-pro/StudioProShift";
import StudioProAI from "@/components/studio-pro/StudioProAI";
import StudioProFeatures from "@/components/studio-pro/StudioProFeatures";
import StudioProCTA from "@/components/studio-pro/StudioProCTA";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const StudioPro = () => {
  return (
    <PageLayout>
      <SEO
        title="Pzaz Studio Pro – Production Infrastructure for Slate Management"
        description="Turn fragmented expansion into structured maturity. Studio Pro establishes shared coordination logic across every production you run — giving executives real visibility across the entire slate."
        url="https://pzaz.io/studio-pro"
        keywords={[
          "studio production management",
          "slate management software",
          "production company tools",
          "multi-project film oversight",
          "Pzaz Studio Pro",
          "executive production visibility",
          "production infrastructure",
        ]}
        canonical="https://pzaz.io/studio-pro"
      />
      <StudioProHero />
      <StudioProProblem />
      <StudioProSlate />
      <StudioProShift />
      <StudioProAI />
      <StudioProFeatures />
      <StudioProCTA />
    </PageLayout>
  );
};

export default StudioPro;
