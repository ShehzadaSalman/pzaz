import React from "react";
import ScriptHero from "@/components/script/ScriptHero";
import ScriptProblem from "@/components/script/ScriptProblem";
import ScriptShift from "@/components/script/ScriptShift";
import ScriptPromise from "@/components/script/ScriptPromise";
import ScriptUSPs from "@/components/script/ScriptUSPs";
import ScriptAI from "@/components/script/ScriptAI";
import ScriptFeatures from "@/components/script/ScriptFeatures";
import ScriptTestimonials from "@/components/script/ScriptTestimonials";
import ScriptFAQ from "@/components/script/ScriptFAQ";
import ScriptCTA from "@/components/script/ScriptCTA";
import PageLayout from "@/components/layout/PageLayout";

const Script = () => {
  return (
    <PageLayout>
      <ScriptHero />
      <ScriptProblem />
      <ScriptShift />
      <ScriptPromise />
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
