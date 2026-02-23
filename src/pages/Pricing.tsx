import React from "react";
import Header from "@/components/Header";
import PricingHero from "@/components/pricing/PricingHero";
import PricingStageSelector from "@/components/pricing/PricingStageSelector";

import PricingFlow from "@/components/pricing/PricingFlow";
import PricingBuildYourOwn from "@/components/pricing/PricingBuildYourOwn";
import PricingTrust from "@/components/pricing/PricingTrust";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingCartBar from "@/components/pricing/PricingCartBar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { PricingCartProvider } from "@/contexts/PricingCartContext";

const Pricing = () => {
  return (
    <PricingCartProvider>
      <div className="min-h-screen bg-background">
        <SEO
          title="Pricing – Pzaz Film Production Software"
          description="Flexible pricing for indie filmmakers and production teams. Individual tools from €19/mo, bundles from €99/mo. Start free and scale as your productions grow."
          url="https://pzaz.io/pricing"
          keywords={[
            "pzaz pricing",
            "film production software pricing",
            "indie filmmaker pricing",
            "production management plans",
            "screenwriting software cost",
            "film budgeting software pricing",
            "StudioBinder alternative pricing",
            "Celtx alternative pricing",
          ]}
          canonical="https://pzaz.io/pricing"
        />
        <Header />
        <main>
          <PricingHero />
          <PricingStageSelector />
          <PricingFlow />
          <PricingBuildYourOwn />
          <PricingTrust />
          <PricingCTA />
        </main>
        <Footer />
        <PricingCartBar />
      </div>
    </PricingCartProvider>
  );
};

export default Pricing;
