import React from "react";
import ScriptHeader from "@/components/script/ScriptHeader";
import ScriptHero from "@/components/script/ScriptHero";
import ScriptProblem from "@/components/script/ScriptProblem";
import ScriptShift from "@/components/script/ScriptShift";
import ScriptUSPs from "@/components/script/ScriptUSPs";
import ScriptFeatures from "@/components/script/ScriptFeatures";
import ScriptAI from "@/components/script/ScriptAI";
import ScriptTestimonials from "@/components/script/ScriptTestimonials";
import ScriptFAQ from "@/components/script/ScriptFAQ";
import ScriptCTA from "@/components/script/ScriptCTA";
import Footer from "@/components/Footer";

const Script = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScriptHeader />
      <main>
        <ScriptHero />
        <ScriptProblem />
        <ScriptShift />
        <ScriptUSPs />
        <ScriptFeatures />
        <ScriptAI />
        <ScriptTestimonials />
        <ScriptFAQ />
        <ScriptCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Script;
