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
      <SEO />
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
