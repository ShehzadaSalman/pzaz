import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import SharedCTA from "@/components/SharedCTA";
import StudioCard from "@/components/script/StudioCard";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { AlertTriangle } from "lucide-react";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import iconWarning from "@/assets/icon-warning.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import iconFlowchart from "@/assets/icon-flowchart.svg";
import iconSurvey from "@/assets/icon-survey.svg";
import iconGlobe from "@/assets/icon-globe.svg";

import iconDocument from "@/assets/script/icon-document.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconScenesSuggestions from "@/assets/script/icon-scene-suggestions.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconShapes from "@/assets/script/icon-shapes.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const primaryTools = [
  {
    icon: iconDocument,
    tagline: "Narrative Flexibility",
    title: "Script Customization",
    description:
      "Documentary storytelling evolves through research, interviews, and discovery. Pzaz allows filmmakers to adapt narrative structures while preserving clarity and continuity.",
    highlight: "Stories develop organically without losing direction or structural integrity.",
  },
  {
    icon: iconScenesSuggestions,
    tagline: "Non-Linear Structure",
    title: "Non-Linear Storytelling Tools",
    description:
      "Documentary narratives often unfold in unexpected ways. Themes intersect. Timelines shift. Pzaz provides tools to structure content dynamically while maintaining coherence.",
    highlight: "Explore narrative possibilities without losing the thread of the story.",
  },
  {
    icon: iconFlow,
    tagline: "Multi-Episode Projects",
    title: "Episodic Documentary Management",
    description:
      "Docuseries and multi-episode documentaries require coordination across complex editorial and production timelines. Pzaz enables teams to manage episodic structures within a unified environment.",
    highlight: "Maintain consistency across narrative arcs and production workflows.",
  },
  {
    icon: iconGlobe,
    tagline: "Field Production",
    title: "Location Management",
    description:
      "Documentary filmmaking frequently involves dispersed locations and evolving logistics. Pzaz integrates location planning tools that help filmmakers organize shoots and adapt quickly.",
    highlight: "Coordinate real-world production with the precision it demands.",
  },
];

const additionalTools = [
  {
    icon: iconListCheck,
    tagline: "Evolving Workflows",
    title: "Advanced Planning Tools",
    description:
      "Create shot lists, production schedules, and planning frameworks that adapt as new information emerges. Projects remain structured even as narratives develop organically.",
    highlight: "Build workflows that move with your story, not against it.",
  },
  {
    icon: iconSprint,
    tagline: "Long-form Alignment",
    title: "Real-Time Collaboration",
    description:
      "Documentaries often involve small teams working over long periods. Pzaz enables seamless collaboration so updates, feedback, and creative decisions remain connected to the project itself.",
    highlight: "Stay in sync across time zones, shoots, and editorial phases.",
  },
  {
    icon: iconShapes,
    tagline: "Discovery-Led Editing",
    title: "Dynamic Story Development",
    description:
      "Documentary storytelling thrives on flexibility. Pzaz provides tools that help filmmakers integrate new angles and insights while maintaining narrative clarity throughout the project.",
    highlight: "Respond to discovery without losing direction.",
  },
];

const DocumentaryFilmmakers = () => {
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Documentary Filmmakers – Plan, Adapt, Organize Evolving Stories"
        description="The all-in-one platform built for documentary filmmakers. Bring planning, narrative development, collaboration, and logistics into one connected workspace."
        url="https://pzaz.io/documentary-filmmaking-software"
        keywords={[
          "documentary filmmaking platform",
          "documentary production software",
          "documentary planning tools",
          "docuseries management",
          "non-linear storytelling tools",
          "documentary collaboration software",
        ]}
        canonical="https://pzaz.io/documentary-filmmaking-software"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Pill
                text="For Documentary Filmmakers"
                className="text-primary mb-8 mt-[15px] bg-[#E4E4FE] border border-[#8651EF42]"
                icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
            >
              The All-in-One Platform{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Built for Documentary Filmmakers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Plan. Adapt. Organize stories that evolve in the real world. Pzaz brings planning,
              narrative development, collaboration, and logistics into one connected workspace built
              for real-world storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
            >
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Start Now
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
                  prefixIcon={
                    <img
                      src={ctaPlayIcon}
                      alt=""
                      className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]"
                    />
                  }
                >
                  Book a Demo
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-muted-foreground"
            >
              No credit card required.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="max-w-6xl mx-auto"
            pillText="The Documentary Reality"
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                Documentaries don't follow a fixed script.{" "}
                <span className="text-[#FF4040]">Most tools weren't built for that.</span>
              </>
            }
            description="Narratives evolve during filming. Locations change. Research deepens. Editorial direction shifts. Without a connected workflow, managing these moving parts becomes overwhelming."
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 mb-12 md:mb-[112px]"
          >
            <div className="bg-white/30 py-8 px-8 md:px-[60px] md:pb-[50px] border border-[#D4BAF4] rounded-[38px] relative z-10">
              <h3 className="font-lato font-bold text-2xl pt-4 pb-8 tracking-normal text-foreground">
                The friction that slows real stories down.
              </h3>
              <div className="space-y-4">
                {[
                  "Research notes, scripts, and shot lists live in separate places",
                  "Narrative changes don't propagate to the production plan",
                  "Long-form projects lose coherence across extended timelines",
                  "Collaboration breaks down between field crew and editorial",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 min-h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]"
                  >
                    <img src={iconWarning} alt="" className="w-6 h-6 shrink-0" />
                    <span className="text-[16px] font-lato">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center pl-8">
              <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 space-y-4 shadow-xl">
                <div className="text-sm font-semibold text-foreground mb-4">Documentary Project Status</div>
                {[
                  { label: "Narrative Structure", pct: 78 },
                  { label: "Field Shoots", pct: 64 },
                  { label: "Research Integrated", pct: 89 },
                  { label: "Editorial Alignment", pct: 71 },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-36 text-xs font-medium text-muted-foreground shrink-0">{item.label}</div>
                    <div className="flex-1 bg-border rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ background: "linear-gradient(to right, #29FADF, #8B1DFF)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.12 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{item.pct}%</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Story and production connected</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xl font-semibold text-foreground">
              Fragmentation costs creative energy. Pzaz brings it all together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROMISE BANNER ─────────────────────────────────────── */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            {...fadeUp(0)}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background:
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #01A7CC 0.96%, #7051F7 47.6%, #894FD9 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                Pzaz doesn't cage your story in a rigid structure.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                It gives your story room to breathe and evolve.
              </p>
              <p className="font-lato font-normal text-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Pzaz centralizes the entire documentary process into one environment. Filmmakers gain
                clarity across planning, storytelling, and production coordination without sacrificing
                creative flexibility.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── PRIMARY TOOLS ─────────────────────────────────────── */}
      <section id="tools" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="Documentary Workflows"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Tools Designed for{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Real Documentary Workflows
                </span>
              </>
            }
            description="Support storytelling that develops over time. Documentary production requires adaptability, structure, and collaboration across extended timelines."
          />

          <div className="grid md:grid-cols-2 gap-[29px] mb-16">
            {primaryTools.map((tool, i) => (
              <motion.div
                key={tool.title}
                {...fadeUp(i * 0.1)}
                className="rounded-[28px] bg-white border border-[#D4BAF4] p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <img src={tool.icon} alt="" className="w-6 h-6" />
                </div>
                <Pill
                  text={tool.tagline}
                  className="self-start bg-primary/10 text-primary text-xs py-1"
                />
                <h3 className="font-lato font-bold text-[22px] text-foreground">{tool.title}</h3>
                <p className="text-muted-foreground text-[16px] leading-relaxed flex-1">
                  {tool.description}
                </p>
                <div className="rounded-[12px] bg-[#F7F2FD] p-4">
                  <p className="font-lato font-normal text-[15px] text-[#4D029B] italic leading-relaxed">
                    "{tool.highlight}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TOOLS (StudioCard) ─────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="Production Leadership"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                How Pzaz Supports{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                  Documentary Filmmakers
                </span>
              </>
            }
            description="Maintain creative focus while managing complexity. When planning and storytelling tools are disconnected, documentary production becomes harder than it needs to be."
          />

          <div className="grid md:grid-cols-3 gap-[29px]">
            {additionalTools.map((tool, i) => (
              <StudioCard
                key={tool.title}
                icon={tool.icon}
                tagline={tool.tagline}
                title={tool.title}
                description={tool.description}
                highlight={tool.highlight}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ──────────────────────────────────────────── */}
      <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill
                text="AI-Assisted"
                className="text-primary mb-6 bg-[#E4E4FE] border border-[#8651EF42]"
                icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
              />
              <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
                AI Assistance for Documentary Storytelling
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pzaz uses AI to help analyze narrative structure, manage large volumes of material,
                and identify storytelling opportunities. These tools enhance editorial judgment rather
                than replace it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Filmmakers remain in control while benefiting from deeper insight and faster
                development cycles.
              </p>
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Explore AI Features
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">AI Narrative Analysis</span>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                    Running
                  </span>
                </div>
                {[
                  { label: "Structural coherence", pct: 91 },
                  { label: "Thematic consistency", pct: 84 },
                  { label: "Pacing assessment", pct: 76 },
                  { label: "Story arc analysis", pct: 88 },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-36 text-xs font-medium text-muted-foreground shrink-0">
                      {item.label}
                    </div>
                    <div className="flex-1 bg-border rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ background: "linear-gradient(to right, #29FADF, #8B1DFF)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.12 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{item.pct}%</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    AI suggests: "Consider developing the interview at 00:42 — strong thematic resonance with act two."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FUTURE SECTION ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <Pill
              text="The Future of Documentary"
              className="text-primary mb-6 bg-[#E4E4FE] border border-[#8651EF42]"
            />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              A More Integrated Approach to Filmmaking
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              Documentary production is becoming more collaborative, data-informed, and digitally
              integrated. Pzaz provides a unified environment where research, storytelling, and
              production planning evolve together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Filmmakers gain the clarity required to navigate complex real-world narratives with
              confidence.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { stat: "01", label: "Research connects to narrative" },
              { stat: "02", label: "Narrative connects to production" },
              { stat: "03", label: "Production connects to editorial" },
              { stat: "04", label: "Team stays aligned throughout" },
            ].map(({ stat, label }, i) => (
              <motion.div
                key={stat}
                {...fadeUp(i * 0.08)}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#F7F2FD] border border-[#D4BAF4]"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                  style={{ background: "linear-gradient(135deg, #29FADF, #8B1DFF)" }}
                >
                  {stat}
                </div>
                <p className="text-sm font-medium text-foreground text-center">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SHARED CTA ─────────────────────────────────────────── */}
      <SharedCTA
        pillText="Free 7-day trial"
        title={
          <>
            Ready to Simplify
            <br />
            Documentary Production?
          </>
        }
        description="Bring structure to evolving stories with tools designed for real-world filmmaking. No credit card required."
        primaryButtonText="Get Started for Free"
        secondaryButtonText="Book a Demo"
        showLanguagesImage={false}
        backgroundStyle={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
      />
    </PageLayout>
  );
};

export default DocumentaryFilmmakers;
