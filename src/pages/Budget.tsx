import React from "react";
import BudgetHero from "@/components/budget/BudgetHero";
import BudgetProblem from "@/components/budget/BudgetProblem";
import BudgetConnected from "@/components/budget/BudgetConnected";
import BudgetBehaviourChange from "@/components/budget/BudgetBehaviourChange";
import BudgetAI from "@/components/budget/BudgetAI";
import BudgetFeatures from "@/components/budget/BudgetFeatures";
import BudgetLegacy from "@/components/budget/BudgetLegacy";
import BudgetCTA from "@/components/budget/BudgetCTA";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Budget = () => {
  return (
    <PageLayout>
      <SEO
        title="Film Budgeting Software for Production Teams | Start Free | Pzaz"
        description="Production budgeting that stays connected to your script, breakdown and schedule. Stop managing financial silos. Start operating with real clarity."
        url="https://pzaz.io/film-production-software/film-budgeting"
        keywords={[
          "production budgeting software",
          "film budget management",
          "connected production workflow",
          "movie budgeting tool",
          "Pzaz Budget",
          "film financial planning",
          "production cost tracking",
        ]}
        canonical="https://pzaz.io/film-production-software/film-budgeting"
      />
      <BudgetHero />
      <BudgetProblem />
      <BudgetConnected />
      <BudgetBehaviourChange />
      <BudgetAI />
      <BudgetFeatures />
      <BudgetLegacy />
      <BudgetCTA />
    </PageLayout>
  );
};

export default Budget;
