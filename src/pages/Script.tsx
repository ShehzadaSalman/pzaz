import React from "react";
import { Helmet } from "react-helmet-async";
import ScriptHeader from "@/components/script/ScriptHeader";
import ScriptHero from "@/components/script/ScriptHero";
import ScriptProblem from "@/components/script/ScriptProblem";
import ScriptShift from "@/components/script/ScriptShift";
import ScriptUSPs from "@/components/script/ScriptUSPs";
import ScriptFeatures from "@/components/script/ScriptFeatures";
import ScriptAI from "@/components/script/ScriptAI";
import ScriptPricing from "@/components/script/ScriptPricing";
import ScriptTestimonials from "@/components/script/ScriptTestimonials";
import ScriptFAQ from "@/components/script/ScriptFAQ";
import ScriptCTA from "@/components/script/ScriptCTA";
import Footer from "@/components/Footer";

const Script = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Script Writing Tool | Pzaz</title>
        <meta name="description" content="Write, break down, and manage scripts with AI-powered tools. Pzaz Script helps filmmakers go from draft to production-ready faster." />
        <meta property="og:title" content="Script Writing Tool | Pzaz" />
        <meta property="og:description" content="Write, break down, and manage scripts with AI-powered tools. Pzaz Script helps filmmakers go from draft to production-ready faster." />
      </Helmet>
      <ScriptHeader />
      <main>
        <ScriptHero />
        <ScriptProblem />
        <ScriptShift />
        <ScriptUSPs />
        <ScriptFeatures />
        <ScriptAI />
        <ScriptPricing />
        <ScriptTestimonials />
        <ScriptFAQ />
        <ScriptCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Script;
