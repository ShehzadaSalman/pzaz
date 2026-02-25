import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Users, Upload, Sparkles, RefreshCw } from "lucide-react";

import heroMoodboard from "@/assets/imagine/hero-moodboard.png";
import problemTools from "@/assets/imagine/problem-tools.png";
import solutionMoodboard from "@/assets/imagine/solution-moodboard.png";
import featureFormatting from "@/assets/imagine/feature-formatting.png";
import featureCollaboration from "@/assets/imagine/feature-collaboration.png";
import featureImportExport from "@/assets/imagine/feature-import-export.png";
import featureAIResearch from "@/assets/imagine/feature-ai-research.png";
import featureSceneSyncing from "@/assets/imagine/feature-scene-syncing.png";
import reviewer1 from "@/assets/imagine/reviewer-1.png";
import reviewer2 from "@/assets/imagine/reviewer-2.png";
import reviewer3 from "@/assets/imagine/reviewer-3.png";

const coreFeatures = [
  {
    icon: <Layers className="w-5 h-5" />,
    label: "Standard formatting",
    title: "Industry-Standard Formatting.",
    body: "Proper screenplay formatting is automatic. Focus on the story, not spacing or margins.",
    image: featureFormatting,
    alt: "Pzaz.io moodboard showing images, typography, and color palette used by filmmakers to define visual style.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Real-Time Collaboration",
    title: "Real-Time Collaboration.",
    body: "Write together with co-writers in real time. Leave comments, make suggestions, track changes—just like in Google Docs, but for scripts.",
    image: featureCollaboration,
    alt: "Pzaz.io project planning dashboard showing a film production checklist, task deadlines, and a calendar.",
  },
  {
    icon: <Upload className="w-5 h-5" />,
    label: "Import & Export",
    title: "Import & Export Flexibility.",
    body: "Import from Final Draft or other major formats with full compatibility. Export to PDF for sharing, or CSV for production tools, budgeting, or breakdowns.",
    image: featureImportExport,
    alt: "Filmmaker editing a script on a laptop while using the Pzaz.io platform to manage screenplay drafts.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    label: "AI Research Assistant",
    title: "Built-In AI Research Assistant.",
    body: "Stuck on a scene? Need a quick lookup or spark of inspiration? Use AI to refine dialogue, brainstorm ideas or clarify structure.",
    image: featureAIResearch,
    alt: "Pzaz.io film production interface showing scheduling tasks alongside a planner and notes.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    label: "Scene-by-Scene Syncing",
    title: "Scene-by-Scene Syncing.",
    body: "Each scene is automatically synced with your breakdown, storyboard, stripboard and budget. When you rewrite a scene, your entire project stays up to date.",
    image: featureSceneSyncing,
    alt: "Film directors collaborating while using Pzaz.io to manage workflows and coordinate schedules.",
  },
];

const testimonials = [
  {
    quote: "Pzaz has totally changed how I manage my shoots. With everything from script breakdowns to scheduling in one place, I am not searching for details all the time. It's organised and efficient, exactly what I need.",
    name: "Alex T.",
    role: "Screenwriter, France",
    image: reviewer3,
  },
  {
    quote: "As a director, having clear communication and cohesive vision is everything. Pzaz feels like it's made for indie filmmakers like me, who must wear many hats on set. It's helped us stay organised and stay in budget, no matter the project size.",
    name: "Jamie R.",
    role: "Film Director, UK",
    image: reviewer1,
  },
  {
    quote: "For screenwriters, Pzaz is truly refreshing. The breakdown tools bring my ideas to life in a way that's quickly useful for production team. And with scheduling and location scouting there as well, it has all I need in one place.",
    name: "Marta L.",
    role: "Independent Producer, Italy",
    image: reviewer2,
  },
];

const Imagine = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <PageLayout>
      <SEO
        title="Imagine – Visual Development & Moodboarding | Pzaz"
        description="Pzaz Imagine is your dedicated creative space to capture ideas, build moodboards, and define your film's visual style before a single line is written."
        url="https://pzaz.io/imagine"
        canonical="https://pzaz.io/imagine/"
        keywords={["film moodboard", "creative development", "visual planning", "filmmaking tool", "pzaz imagine"]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#F8F2FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#20124D" }}>
              Why your Creative Process Deserves a{" "}
              <span style={{ background: "linear-gradient(90deg, #5C28A3, #2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Real Tool, Right from the Start.
              </span>
            </h1>
            <p className="text-base text-[#4E2273] mb-3 leading-relaxed">
              Every great film begins with a spark—an idea, an image, a line of dialogue that lingers. But those sparks are fragile.
            </p>
            <p className="text-base text-[#4E2273] mb-3 leading-relaxed">
              In the earliest stages, your creativity needs freedom, structure, and a place to grow. Yet most tools are either too rigid, too generic, or simply not built for filmmakers.
            </p>
            <p className="text-base text-[#4E2273] mb-8 leading-relaxed">
              That's why Step 1 in the Pzaz Filmmaking Flow is <strong>Imagine</strong> — a dedicated space to explore ideas before they become scripts, schedules, or budgets.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/pricing">
                <Button variant="default" size="lg" className="gap-2">
                  TRY PZAZ SCRIPTWRITING <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <div className="text-sm text-[#4E2273]">
                <div className="font-semibold">TRY FOR FREE.</div>
                <div>NO CREDIT CARD.</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#4E2273]/70">Trusted by 5,000+ film makers from all around the globe.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroMoodboard}
              alt="Pzaz.io moodboard dashboard displaying visual references, color palettes, and uploaded media for film production design and style planning."
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={problemTools}
              alt="Icons of design and creative tools like Canva, Pinterest, and Celtx with alert symbols, representing the struggle of managing multiple visual apps before using Pzaz.io."
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5C28A3] mb-3">The Problem.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-6">
              From Inspiration to Imagination, All in One Place
            </h2>
            <p className="text-[#4E2273] text-base leading-relaxed">
              Your film doesn't begin with a camera — it begins with a question, a feeling, a character in your head. Pzaz gives you a professional space to explore those early moments without pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-[#F8F2FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5C28A3] mb-3">The Solution.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-6">
              Turn Every Idea into a Starting Point
            </h2>
            <p className="text-[#4E2273] text-base leading-relaxed">
              Whether you're brainstorming solo or jamming with collaborators, Imagine helps you capture every idea, connect every reference, and start shaping your project from the very first thought.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={solutionMoodboard}
              alt="Pzaz.io moodboard showing image uploads, color palettes, and team collaboration for defining a film's visual tone and style."
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5C28A3] mb-3 text-center">Core Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-12 text-center">Everything You Need in One Place.</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Feature tabs */}
            <div className="flex flex-col gap-3">
              {coreFeatures.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all ${
                    activeFeature === i
                      ? "border-[#5C28A3] bg-[#F8F2FF]"
                      : "border-[#e0e0e0] bg-white hover:border-[#C4A0E8]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span style={{ color: "#5C28A3" }}>{f.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5C28A3]">{f.label}</span>
                  </div>
                  {activeFeature === i && (
                    <>
                      <h3 className="text-lg font-bold text-[#20124D] mb-1">{f.title}</h3>
                      <p className="text-sm text-[#4E2273] leading-relaxed">{f.body}</p>
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Feature image */}
            <div className="rounded-2xl overflow-hidden shadow-xl sticky top-24">
              <img
                src={coreFeatures[activeFeature].image}
                alt={coreFeatures[activeFeature].alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#F8F2FF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-4 text-center">Trusted by Industry Professionals.</h2>
          <p className="text-center text-[#4E2273] mb-12 max-w-2xl mx-auto">
            From screenwriters to directors, Pzaz is the go-to tool for bringing stories to life and ensuring your creative vision reaches the screen easily.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0e0e0]">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mb-4 object-cover" loading="lazy" />
                <p className="text-sm text-[#4E2273] leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-[#20124D] text-sm">{t.name}</div>
                  <div className="text-xs text-[#4E2273]/70">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-4">
            Start your film. Not another tool stack.
          </h2>
          <p className="text-[#4E2273] mb-8">
            Join 5,000+ filmmakers who build their creative vision with Pzaz Imagine.
          </p>
          <Link to="/pricing">
            <Button variant="default" size="lg" className="gap-2">
              Get Started for Free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Imagine;
