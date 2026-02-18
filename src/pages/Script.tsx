import React from "react";
import ScriptHero from "@/components/script/ScriptHero";
import ScriptProblem from "@/components/script/ScriptProblem";
import ScriptShift from "@/components/script/ScriptShift";
import ScriptUSPs from "@/components/script/ScriptUSPs";
import ScriptAI from "@/components/script/ScriptAI";
import ScriptFeatures from "@/components/script/ScriptFeatures";
import ScriptCoreFeatures from "@/components/script/ScriptCoreFeatures";
import ScriptTestimonials from "@/components/script/ScriptTestimonials";
import ScriptFAQ from "@/components/script/ScriptFAQ";
import ScriptCTA from "@/components/script/ScriptCTA";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Script = () => {
  return (
    <PageLayout>
      <SEO
        title="Pzaz Script – AI Screenwriting Software"
        description="Write, format, and collaborate on screenplays with AI-powered tools. Pzaz Script helps filmmakers go from idea to shooting script faster."
        url="https://pzaz-sparkle-showcase.lovable.app/script"
      />
      <ScriptHero />
      <ScriptProblem />
      <ScriptShift />
      <ScriptUSPs />
      <ScriptFeatures />
      <ScriptCoreFeatures />
      <ScriptAI />
      <ScriptTestimonials />
      <ScriptFAQ />
      <ScriptCTA />
    </PageLayout>
  );
};

export default Script;
