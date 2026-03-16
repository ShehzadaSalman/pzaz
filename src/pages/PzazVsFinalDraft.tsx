import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIndieCheckoutUrl } from "@/lib/checkout";

import heroImg from "@/assets/vs-final-draft/hero.webp";
import problemImg from "@/assets/vs-final-draft/problem.webp";
import solutionImg from "@/assets/vs-final-draft/solution.webp";
import iconIntegrationImg from "@/assets/vs-final-draft/icon-integration.webp";
import featureIntegrationImg from "@/assets/vs-final-draft/feature-integration.webp";
import iconCollaborationImg from "@/assets/vs-final-draft/icon-collaboration.webp";
import featureCollaborationImg from "@/assets/vs-final-draft/feature-collaboration.webp";
import slideStoryboardImg from "@/assets/vs-final-draft/slide-storyboard.webp";
import slidePlanningImg from "@/assets/vs-final-draft/slide-planning.webp";
import slideScheduleImg from "@/assets/vs-final-draft/slide-schedule.webp";
import builtForTeamsImg from "@/assets/vs-final-draft/built-for-teams.webp";
import finalVerdictImg from "@/assets/vs-final-draft/final-verdict.webp";

const comparisonRows = [
  { feature: "Automatic Formatting", pzaz: true, finalDraft: true },
  { feature: "Script Versioning", pzaz: true, finalDraft: true },
  { feature: "Real-Time Collaboration", pzaz: "Yes (built-in, free)", finalDraft: "Yes (via paid add-on)" },
  { feature: "Cross-Device Syncing", pzaz: true, finalDraft: true },
  { feature: "Storyboarding", pzaz: "Yes (visual integration)", finalDraft: false },
  { feature: "Scheduling", pzaz: true, finalDraft: false },
  { feature: "Scene Breakdown", pzaz: true, finalDraft: false },
  { feature: "Shot Lists", pzaz: true, finalDraft: false },
  { feature: "Cloud-Based", pzaz: true, finalDraft: "No (requires manual saving)" },
  { feature: "Free Version", pzaz: true, finalDraft: false },
  { feature: "AI-Assisted Writing", pzaz: true, finalDraft: false },
  { feature: "Media Storage", pzaz: "Yes (Integrated)", finalDraft: false },
];

const slides = [
  {
    tab: "Storyboard Your Script",
    title: "Storyboard Your Script",
    body: "Pzaz's integrated storyboard feature allows you to visualise your project. Final Draft doesn't offer this tool, so you won't be able to map out your shots within the same platform.",
    image: slideStoryboardImg,
  },
  {
    tab: "Plan Every Detail",
    title: "Plan Every Detail with Scene and Shot Planning",
    body: "Take your project beyond the page with Pzaz's scene and shot planning tools. You can manage everything from camera angles to shoot schedules, ensuring your vision comes to life precisely as you imagined. Final Draft lacks these crucial production tools, leaving you to handle these tasks elsewhere.",
    image: slidePlanningImg,
  },
  {
    tab: "Stay on Schedule",
    title: "Stay on Schedule with Smart Shooting Planning",
    body: "With Pzaz, you can seamlessly manage your crew, locations, and timelines using its integrated planning tools. With everything you need in one place, you can keep your production running smoothly. Final Draft doesn't offer any production planning features.",
    image: slideScheduleImg,
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#5C28A3" fillOpacity="0.12" />
    <path d="M6 10.5l2.5 2.5 5-5" stroke="#5C28A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#F3F3F3" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#BBBBBB" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CellValue = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <span className="text-sm text-[#20124D] font-medium">{value}</span>;
  }
  return value ? <CheckIcon /> : <CrossIcon />;
};

const PzazVsFinalDraft = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <>
      <SEO
        title="Pzaz vs. Final Draft – The Complete Film Production Hub"
        description="See how Pzaz outperforms Final Draft with end-to-end production tools: storyboarding, scheduling, real-time collaboration, AI writing, and more — all in one platform."
        url="https://pzaz.io/pzaz-vs-final-draft/"
        canonical="https://pzaz.io/pzaz-vs-final-draft/"
        keywords={["pzaz vs final draft", "final draft alternative", "film production software", "screenwriting software comparison", "all-in-one filmmaking platform"]}
      />
      <Header />
      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] mb-4">
              Pzaz vs. Final Draft: Elevate Your Entire Production Process
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#20124D] leading-tight mb-6">
              Why Settle for Just Scriptwriting? Unlock a Full-Film Production Hub with Pzaz
            </h1>
            <p className="text-[#4E2273] text-lg leading-relaxed mb-8">
              <strong>Looking for a scriptwriting tool that goes beyond the basics?</strong> While Final Draft has long been an industry standard for writing scripts, Pzaz offers much more. Pzaz doesn't stop at writing—it's an all-in-one platform that integrates the entire production process. Here's how we stand apart from Final Draft.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">Start for Free</Button>
              </a>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Book a Demo</Button>
              </a>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="Pzaz film production hub" className="w-full rounded-2xl shadow-lg" />
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="bg-[#F8F2FF] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={problemImg} alt="Final Draft limitation" className="w-full rounded-2xl shadow" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] mb-3">The Problem.</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-5">
                Final Draft is designed exclusively for writing scripts.
              </h2>
              <p className="text-[#4E2273] text-lg leading-relaxed">
                It's great for formatting, editing, and professional scriptwriting. However, once the script is written, you must export and jump between other tools to manage production.
              </p>
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] mb-3">The Solution.</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-5">
                Pzaz: More Than Scriptwriting.
              </h2>
              <p className="text-[#4E2273] text-lg leading-relaxed">
                Pzaz changes the game by providing a complete ecosystem—from scriptwriting to budgeting, scheduling, and real-time collaboration. Everything is unified in a single platform. Pzaz is your command centre for the entire production.
              </p>
            </div>
            <div>
              <img src={solutionImg} alt="Pzaz all-in-one platform" className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="bg-[#F8F2FF] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] text-center mb-10">
              A Side-by-Side Look: Pzaz vs. Final Draft
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#D4BAF4] shadow-sm bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D4BAF4]">
                    <th className="text-left px-6 py-4 text-[#20124D] font-semibold w-1/2">Feature</th>
                    <th className="px-6 py-4 text-[#5C28A3] font-bold text-center">Pzaz</th>
                    <th className="px-6 py-4 text-[#888] font-semibold text-center">Final Draft</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7FF]"}>
                      <td className="px-6 py-4 text-[#20124D] font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center"><CellValue value={row.pzaz} /></div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center"><CellValue value={row.finalDraft} /></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why Pzaz ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-5">
              Why Pzaz? The Complete Production Solution.
            </h2>
            <p className="text-[#4E2273] text-lg leading-relaxed">
              Unlike Final Draft, Pzaz allows you to <strong>visualise and manage every aspect of your filmmaking</strong> process—from script to screen. Whether you're planning detailed scenes, creating comprehensive shot lists, or managing your cast and locations, Pzaz brings it all together in one easy-to-use platform.
            </p>
          </div>

          {/* End-to-end Integration */}
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img src={iconIntegrationImg} alt="End-to-end integration icon" className="w-14 h-14 mb-5 object-contain" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#20124D] mb-4">End-to-End Integration.</h3>
              <p className="text-[#4E2273] text-lg leading-relaxed">
                With Pzaz, you don't just write. You create, organise, and produce—all in one place. There's no need to switch between multiple tools or platforms. <strong>Final Draft only handles your scriptwriting</strong>, leaving you to juggle various other apps for production tasks.
              </p>
            </div>
            <div>
              <img src={featureIntegrationImg} alt="Pzaz end-to-end integration" className="w-full rounded-2xl shadow" />
            </div>
          </div>

          {/* Real-time Collaboration */}
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img src={iconCollaborationImg} alt="Collaboration icon" className="w-14 h-14 mb-5 object-contain" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#20124D] mb-4">Real-Time Collaboration—At No Extra Cost.</h3>
              <p className="text-[#4E2273] text-lg leading-relaxed">
                Pzaz supports seamless, real-time collaboration, allowing your team to work on the same project without additional setup or fees. In contrast, <strong>Final Draft requires an extra paid add-on for collaboration</strong>, which doesn't cover production tasks like scheduling or shot planning.
              </p>
            </div>
            <div className="md:order-1">
              <img src={featureCollaborationImg} alt="Pzaz real-time collaboration" className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>

        {/* ── Unique Features Slider ── */}
        <section className="bg-[#F8F2FF] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] text-center mb-3">Unique Pzaz Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] text-center mb-10">
              Unique Pzaz Features You Won't Find in Final Draft
            </h2>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {slides.map((slide, i) => (
                <button
                  key={slide.tab}
                  onClick={() => setActiveSlide(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    activeSlide === i
                      ? "bg-[#5C28A3] text-white border-[#5C28A3] shadow-md"
                      : "bg-white text-[#20124D] border-[#D4BAF4] hover:border-[#5C28A3]"
                  }`}
                >
                  {slide.tab}
                </button>
              ))}
            </div>

            {/* Slide content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#20124D] mb-5">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-[#4E2273] text-lg leading-relaxed">
                  {slides[activeSlide].body}
                </p>
              </div>
              <div>
                <img
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Built for Teams ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-6">
                Pzaz: Built for Teams, Designed for Filmmakers.
              </h2>
              <p className="text-[#4E2273] text-lg leading-relaxed mb-8">
                Whether you're an independent filmmaker or part of a large production team, Pzaz grows with your needs. The platform is designed to be flexible, scalable, and cost-effective, so you don't have to pay for extra tools or features. Everything you need for your project is already integrated into Pzaz.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg">Start for Free</Button>
                </a>
                <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">Book a Demo</Button>
                </a>
              </div>
              <p className="text-xs text-[#888] mt-3">No credit card, no time limit. Up and running in 15 min.</p>
            </div>
            <div>
              <img src={builtForTeamsImg} alt="Pzaz built for teams" className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>

        {/* ── Final Verdict ── */}
        <section className="bg-[#20124D] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Final Verdict: Why Pzaz is the Smarter Choice Over Final Draft.
              </h2>
              <p className="text-[#D4BAF4] text-lg leading-relaxed mb-8">
                Final Draft might be an excellent tool for writing, but Pzaz is a complete production hub. When it comes to writing, organising, and managing your film's production, Pzaz does it—without the need for extra software or fees. Start creating, collaborating, and producing more efficiently today.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="bg-white text-[#20124D] hover:bg-white/90">Start for Free</Button>
                </a>
                <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Book a Demo</Button>
                </a>
              </div>
              <p className="text-xs text-[#D4BAF4]/70 mt-3">No credit card, no time limit. Up and running in 15 min.</p>
            </div>
            <div>
              <img src={finalVerdictImg} alt="Pzaz final verdict" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default PzazVsFinalDraft;
