import React from "react";
import PlanningHero from "@/components/planning/PlanningHero";
import PlanningProblem from "@/components/planning/PlanningProblem";
import PlanningContext from "@/components/planning/PlanningContext";
import PlanningHandoff from "@/components/planning/PlanningHandoff";
import PlanningAI from "@/components/planning/PlanningAI";
import PlanningFeatures from "@/components/planning/PlanningFeatures";
import PlanningCTA from "@/components/planning/PlanningCTA";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Planning = () => {
  return (
    <PageLayout>
      <SEO
        title="Pzaz Planning Pro – Preproduction Inside Production Context"
        description="Build your film before you shoot it. Planning Pro keeps creative development inside the same environment that will execute the film — script, breakdown, schedule, and feedback in one place."
        url="https://pzaz.io/film-preproduction-planning"
        keywords={[
          "film preproduction software",
          "screenplay development tool",
          "production planning platform",
          "writer-director tools",
          "Pzaz Planning Pro",
          "script breakdown software",
          "film development workflow",
        ]}
        canonical="https://pzaz.io/film-preproduction-planning"
      />
      <PlanningHero />
      <PlanningProblem />
      <PlanningContext />
      <PlanningHandoff />
      <PlanningAI />
      <PlanningFeatures />
      <PlanningCTA />
    </PageLayout>
  );
};

export default Planning;
