import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import ArrowIcon from "@/components/ui/ArrowIcon";
import iconStar from "@/assets/material-symbols_family-star.svg";
import { useIndieCheckoutUrl } from "@/lib/checkout";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const coreTools = [
  {
    title: "Episodic Project Management",
    subtitle: "Organize multi-episode productions with clarity.",
    body: "Plan entire seasons within a single project environment. Track episode progress, narrative dependencies, and production readiness without losing visibility across the series. Creative structure becomes easier to manage. Production complexity becomes easier to coordinate.",
  },
  {
    title: "Script Version Control",
    subtitle: "Maintain clarity across revisions and development stages.",
    body: "Series scripts evolve constantly. Notes, rewrites, and collaborative input must remain traceable. Pzaz allows teams to manage multiple script versions while preserving creative history. Writers can move forward confidently without losing narrative consistency.",
  },
  {
    title: "Audio-Visual Script Support",
    subtitle: "Structure scripts for visual storytelling.",
    body: "Television production requires precision in communication across departments. Pzaz supports audio-visual scripting formats that enhance clarity for directors, cinematographers, editors, and production teams. Creative intent translates more effectively into production execution.",
  },
  {
    title: "Scheduling Tools",
    subtitle: "Plan production timelines with flexibility.",
    body: "Series production often involves overlapping episodes, shared resources, and evolving shooting plans. Pzaz enables detailed scheduling, scene breakdowns, and timeline adjustments within the same environment where scripts and planning live. This reduces friction between creative planning and production logistics.",
  },
];

const supportTools = [
  {
    title: "Collaboration Features",
    subtitle: "Keep creative teams aligned.",
    body: "Writers' rooms, directors, and producers can collaborate in real time. Feedback becomes part of the workflow rather than an external interruption. Communication stays connected to the project itself.",
  },
  {
    title: "Story Arc Planning",
    subtitle: "Maintain narrative consistency across seasons.",
    body: "Map character development, thematic progression, and plot continuity within a structured planning environment. Complex storytelling becomes easier to track and refine.",
  },
  {
    title: "Exporting and Production Materials",
    subtitle: "Prepare professional assets for production and pitching.",
    body: "Generate structured scripts, planning documents, and production schedules ready for internal use or studio presentations. Creative development moves smoothly into production readiness.",
  },
];

const TVSeriesCreators = () => {
  const { t } = useTranslation('solutions');
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="TV & Series Production Software – Pzaz"
        description="The all-in-one platform built for TV & series creators. Plan, write, produce and manage long-form episodic storytelling in one connected workflow."
        url="https://pzaz.io/tv-series-production-software"
        keywords={[
          "TV series production software",
          "episodic storytelling platform",
          "television production management",
          "series creator tools",
          "episodic script management",
          "long-form content creation software",
        ]}
        canonical="https://pzaz.io/tv-series-production-software"
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50.01% 50.01% at 50% 0%, rgba(170,166,255,0.28) 0%, rgba(170,166,255,0.06) 70%, rgba(170,166,255,0) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeUp(0)}>
              <Pill
                text="For TV & Series Creators"
                className="text-primary mb-8 mt-[15px] bg-[#E4E4FE] border border-[#8651EF42]"
                icon={<img src={iconStar} alt="" className="w-4 h-4" />}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-[38px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
            >
              The All-in-One Platform{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Built for TV & Series Creators
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl mx-auto mb-10"
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                Plan. Write. Produce. Manage long-form storytelling in one connected workflow.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                Creating episodic content means managing complexity at scale. Characters evolve across seasons.
                Storylines interweave. Production schedules overlap. Creative decisions ripple across multiple teams.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Pzaz is designed for this reality. It brings writing, planning, collaboration, and production management
                into one platform built specifically for series creators. Instead of forcing long-form storytelling into
                fragmented tools, Pzaz creates a structured environment where creative vision and production execution
                move together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
            >
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Book a Demo
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
                >
                  Get Pzaz for Your Stories
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <Pill text="The Challenge" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              Overcome the Real Challenges of{" "}
              <span className="text-muted-foreground font-normal">Episodic Storytelling</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Series creation is not just writing. It is coordination. It is continuity. It is momentum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Multiple scripts must align with long-term narrative arcs. Teams must collaborate across evolving
              timelines. Production decisions must remain connected to creative intent.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              When tools are fragmented, storytelling suffers. Communication slows. Creative clarity becomes harder
              to maintain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pzaz centralizes the entire episodic workflow into one environment. Writers, producers, and directors
              can work from a shared foundation that supports both creative depth and operational precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE TOOLS ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Core Tools"
              title="The Core Tools for Modern Series Creation"
              description="Built to support episodic storytelling from concept to production. Television and series production require more than scriptwriting software. They demand a system that understands narrative continuity, collaborative writing rooms, and the realities of multi-episode production planning."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {coreTools.map((card, i) => (
              <motion.div key={card.title} {...fadeUp(i * 0.1)}>
                <div className="h-full rounded-2xl border border-border bg-background p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #29FADF, #8B1DFF)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-lato font-bold text-xl text-foreground">{card.title}</h3>
                  <p className="text-sm font-semibold text-primary">{card.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT TOOLS ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Episodic Success"
              title="How Pzaz Supports Episodic Success"
              description="Tools designed around real production workflows. Long-form storytelling thrives when collaboration is structured and visibility is clear."
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {supportTools.map((card, i) => (
              <motion.div key={card.title} {...fadeUp(i * 0.1)}>
                <div className="h-full rounded-2xl border border-border bg-background p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-lato font-bold text-lg text-foreground">{card.title}</h3>
                  <p className="text-sm font-semibold text-primary">{card.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text="AI Assistance" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
                AI Assistance for Script and Production Planning
              </h2>
              <p className="text-sm font-semibold text-primary mb-3">Intelligent support for complex storytelling.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                AI tools within Pzaz help analyze structure, suggest alternative narrative directions, and identify
                pacing opportunities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rather than replacing creative judgment, these tools enhance decision-making and accelerate
                development cycles.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-8 space-y-5">
                {[
                  { label: "Structure analysis", pct: 18 },
                  { label: "Narrative direction suggestions", pct: 22 },
                  { label: "Pacing opportunities", pct: 16 },
                  { label: "Creative authority", pct: 100 },
                ].map(({ label, pct }, i) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{label}</span>
                      {pct === 100 ? (
                        <span className="text-primary font-semibold">Always yours</span>
                      ) : (
                        <span className="text-muted-foreground">Optional</span>
                      )}
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-[#29FADF] to-[#8B1DFF]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FUTURE SECTION ───────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill text="The Bigger Picture" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6 mx-auto" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              The Future of Episodic Content Creation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Series production is becoming increasingly collaborative, data-informed, and digitally integrated.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Pzaz provides a unified environment where storytelling and production evolve together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From early script drafts to detailed scheduling, creators gain the clarity required to manage long-form
              narratives with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp(0)} className="relative rounded-[38px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
              />
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative p-8 md:p-16 md:py-24 pb-12 text-center">
                <Pill
                  text="Free 7-day trial"
                  className="bg-white text-primary mb-6 mx-auto"
                  icon={<img src={iconStar} alt="" className="w-4 h-4" />}
                />
                <h2 className="font-lato font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Ready to Simplify Series Production?
                </h2>
                <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
                  Bring structure to episodic storytelling with tools designed specifically for long-form content
                  creation. Join Pzaz and build your series within a platform that supports both creativity and
                  execution.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="xl"
                      className="group bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px]"
                      postfixIcon={<ArrowIcon className="w-5 h-5 group-hover:translate-x-1 text-white" />}
                    >
                      Get Started for Free
                    </Button>
                  </a>
                </div>
                <p className="text-white/60 text-sm">
                  No credit card required. Start building your series today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TVSeriesCreators;
