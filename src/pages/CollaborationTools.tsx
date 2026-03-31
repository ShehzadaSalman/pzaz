import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import CollaborationHero from "@/components/collaboration/CollaborationHero";
import CollaborationProblem from "@/components/collaboration/CollaborationProblem";
import CollaborationContext from "@/components/collaboration/CollaborationContext";
import CollaborationShift from "@/components/collaboration/CollaborationShift";
import CollaborationAI from "@/components/collaboration/CollaborationAI";
import CollaborationFeatures from "@/components/collaboration/CollaborationFeatures";
import CollaborationCraft from "@/components/collaboration/CollaborationCraft";
import CollaborationModern from "@/components/collaboration/CollaborationModern";
import CollaborationCTA from "@/components/collaboration/CollaborationCTA";

const CollaborationTools = () => {
  return (
    <PageLayout>
      <SEO
        title="Film Collaboration Software | Align Teams & Workflows | Pzaz"
        description="Keep your entire film production team aligned. Pzaz keeps communication, decisions, files, and planning connected inside the production environment."
        url="https://pzaz.io/film-production-tool/collaboration-software"
        canonical="https://pzaz.io/film-production-tool/collaboration-software"
        keywords={["film collaboration", "production team tools", "film communication", "pzaz", "production management"]}
      />
      <CollaborationHero />
      <CollaborationProblem />
      <CollaborationContext />
      <CollaborationShift />
      <CollaborationAI />
      <CollaborationFeatures />
      <CollaborationCraft />
      <CollaborationModern />
      <CollaborationCTA />
    </PageLayout>
  );
};

export default CollaborationTools;
