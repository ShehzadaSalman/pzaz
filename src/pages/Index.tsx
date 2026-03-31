import React from "react";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AIContextSection from "@/components/AIContextSection";
import ProductsSection from "@/components/ProductsSection";
import IntegrationsSection from "@/components/IntegrationsSection";

import CTA from "@/components/CTA";

import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="All-in-One Film Production Management Software | Start Free | Pzaz"
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
      <AIContextSection />
      
      <ProductsSection />
      <IntegrationsSection />
      
      <CTA />
    </PageLayout>
  );
};

export default Index;
