import React from "react";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductsSection from "@/components/ProductsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import WorkSmarterSection from "@/components/ui/WorkSmarterSection";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="Pzaz – Film Production Software for Indie Filmmakers"
        description="Pzaz is the all-in-one film production platform for indie filmmakers. Manage scripts, budgets, schedules, and crew — powered by AI."
        keywords={[
          "film production software",
          "indie filmmaking",
          "production management",
          "screenwriting software",
          "film budgeting",
          "production scheduling",
          "crew management",
          "AI film production",
          "Pzaz",
        ]}
        canonical="https://pzaz.io/"
      />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WorkSmarterSection />
      <ProductsSection />
      <IntegrationsSection />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default Index;
