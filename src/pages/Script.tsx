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
        title="Pzaz Script – AI-Powered Script Breakdown & Production Intelligence"
        description="Import any screenplay and instantly extract characters, locations, props, and production data. Pzaz Script turns scripts into production-ready breakdowns powered by AI."
        url="https://pzaz.io/script"
        keywords={[
          "script breakdown software",
          "AI script analysis",
          "screenplay breakdown",
          "film production intelligence",
          "automated script breakdown",
          "Pzaz Script",
          "production planning",
          "screenwriting tools",
        ]}
        canonical="https://pzaz.io/script"
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
