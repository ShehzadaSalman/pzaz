import React from "react";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingHero from "@/components/pricing/PricingHero";
import PricingStageSelector from "@/components/pricing/PricingStageSelector";
import PricingFlow from "@/components/pricing/PricingFlow";
import PricingBuildYourOwn from "@/components/pricing/PricingBuildYourOwn";
import PricingAI from "@/components/pricing/PricingAI";
import PricingTrust from "@/components/pricing/PricingTrust";
import PricingCTA from "@/components/pricing/PricingCTA";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <PricingHeader />
      <main>
        <PricingHero />
        <PricingStageSelector />
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
