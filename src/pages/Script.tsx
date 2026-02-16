import React from "react";
import ScriptHero from "@/components/script/ScriptHero";
import ScriptProblem from "@/components/script/ScriptProblem";
import ScriptShift from "@/components/script/ScriptShift";
import ScriptUSPs from "@/components/script/ScriptUSPs";
import ScriptAI from "@/components/script/ScriptAI";
import ScriptFeatures from "@/components/script/ScriptFeatures";
import ScriptTestimonials from "@/components/script/ScriptTestimonials";
import ScriptFAQ from "@/components/script/ScriptFAQ";
import ScriptCTA from "@/components/script/ScriptCTA";
import ScriptHeader from "@/components/script/ScriptHeader";
import PageLayout from "@/components/layout/PageLayout";

const Script = () => {
  return (
    <PageLayout header={<ScriptHeader />}>
      <ScriptHero />
      <ScriptProblem />
      <ScriptShift />
      <ScriptUSPs />
      <ScriptAI />
      <ScriptFeatures />
      <ScriptTestimonials />
      <ScriptFAQ />
      <ScriptCTA />
    </PageLayout>
  );
};

export default Script;
