import React from "react";
import { Helmet } from "react-helmet-async";
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

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing | Pzaz</title>
        <meta name="description" content="Flexible pricing plans for film production teams of every size. Choose bundles or build your own package with Pzaz." />
        <meta property="og:title" content="Pricing | Pzaz" />
        <meta property="og:description" content="Flexible pricing plans for film production teams of every size. Choose bundles or build your own package with Pzaz." />
      </Helmet>
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
