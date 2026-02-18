import React from "react";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingHero from "@/components/pricing/PricingHero";
import PricingStageSelector from "@/components/pricing/PricingStageSelector";
import PricingBundles from "@/components/pricing/PricingBundles";
import PricingFlow from "@/components/pricing/PricingFlow";
import PricingBuildYourOwn from "@/components/pricing/PricingBuildYourOwn";
import PricingAI from "@/components/pricing/PricingAI";
import PricingTrust from "@/components/pricing/PricingTrust";
import PricingCTA from "@/components/pricing/PricingCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing – Pzaz"
        description="Flexible pricing plans for indie filmmakers and production teams. Start free and scale as your productions grow."
        url="https://pzaz-sparkle-showcase.lovable.app/pricing"
      />
      <PricingHeader />
      <main>
        <PricingHero />
        <PricingStageSelector />
        <PricingBundles />
        <PricingFlow />
        <PricingBuildYourOwn />
        <PricingAI />
        <PricingTrust />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
