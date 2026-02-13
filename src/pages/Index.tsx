import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductsSection from "@/components/ProductsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WorkSmarterSection from "@/components/ui/WorkSmarterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pzaz | Film Production Management Software</title>
        <meta name="description" content="Pzaz is the all-in-one film production management platform. Plan budgets, schedules, scripts, and teams — smarter and faster." />
        <meta property="og:title" content="Pzaz | Film Production Management Software" />
        <meta property="og:description" content="Pzaz is the all-in-one film production management platform. Plan budgets, schedules, scripts, and teams — smarter and faster." />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WorkSmarterSection />
        <ProductsSection />
        <IntegrationsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
