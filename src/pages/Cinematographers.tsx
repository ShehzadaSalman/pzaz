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
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconScenesSuggestions from "@/assets/script/icon-scene-suggestions.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconShapes from "@/assets/script/icon-shapes.svg";
import iconShapes2 from "@/assets/script/icon-shapes-2.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconDownload from "@/assets/script/icon-download.svg";
import iconVideo from "@/assets/script/icon-video.svg";
import iconTextLine from "@/assets/script/icon-text-line.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const primaryTools = [
  {
    icon: iconShapes2,
    tagline: "Visual Narrative",
    title: "Storyboarding Tools",
    description:
      "Develop detailed storyboards that communicate framing, movement, and narrative progression. Visual concepts remain organized and accessible for directors, producers, and crew members throughout production.",
    highlight: "Shape each scene's visual identity before a single frame is shot.",
  },
  {
    icon: iconScenesSuggestions,
    tagline: "Script-to-Visual Sync",
    title: "Scene Syncing",
    description:
      "Link storyboards directly to script scenes so narrative changes are reflected across visual planning. This reduces misalignment and helps maintain continuity from development to production.",
    highlight: "Narrative changes flow automatically into your visual plan.",
  },
  {
    icon: iconVideo,
    tagline: "Camera Planning",
    title: "Shot Planning",
    description:
      "Plan camera angles, compositions, and shot sequences within a structured environment. Cinematographers can build visual strategies that remain connected to the broader production workflow.",
    highlight: "Define your visual language with precision before you step on set.",
  },
  {
    icon: iconAiResearch,
    tagline: "Creative Exploration",
    title: "AI Image Generation",
    description:
      "Use AI tools to generate conceptual imagery and refine visual direction during early planning stages. These tools support creative exploration while preserving artistic control.",
    highlight: "Explore visual ideas with greater speed and confidence.",
  },
];

const additionalTools = [
  {
    icon: iconTextLine,
    tagline: "Narrative Pacing",
    title: "Beat Sheets",
    description:
      "Map visual rhythms across scenes and sequences to support narrative momentum and emotional progression. Keep pacing intentional from the first frame to the last.",
    highlight: "Shape the emotional arc of your story visually.",
  },
  {
    icon: iconUserGroup,
    tagline: "Cross-Department Sync",
    title: "Real-Time Collaboration",
    description:
      "Storyboard artists, cinematographers, and directors can collaborate within a shared workspace, ensuring visual intent remains consistent throughout the production process.",
    highlight: "One workspace for every creative voice shaping the visual story.",
  },
  {
    icon: iconDownload,
    tagline: "Production-Ready Output",
    title: "Flexible Export Options",
    description:
      "Export storyboards, shot plans, and visual references in formats suited for pre-production, pitching, and on-set execution. Share your vision without friction.",
    highlight: "From pitch deck to set-ready document in one click.",
  },
];


const Cinematographers = () => {
  const { t } = useTranslation('solutions');
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Cinematographers & Storyboard Artists – Visual Planning Platform"
        description="The all-in-one platform built for cinematographers and storyboard artists. Transform scripts into visual language with storyboarding, shot planning, scene syncing, and AI image generation."
        url="https://pzaz.io/software-for-cinematographers"
        keywords={[
          "cinematography planning software",
          "storyboard artist tools",
          "shot planning platform",
          "visual storytelling tools",
          "storyboarding software",
          "scene syncing film production",
        ]}
        canonical="https://pzaz.io/software-for-cinematographers"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50.01% 50.01% at 50% 0%, rgba(41,250,223,0.14) 0%, rgba(139,29,255,0.10) 50%, rgba(170,166,255,0) 100%)",
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
                text="For Cinematographers & Storyboard Artists"
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
                Built for Cinematographers and Storyboard Artists
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Transform scripts into visual language with clarity and precision. Scripts, visuals,
              shot planning, and collaboration live together — in one unified workspace designed for
              real production workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
            >
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
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Bring Your Concepts To Life
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
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
            pillText="The Visual Planning Reality"
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                Visual departments work across too many disconnected tools.{" "}
                <span className="text-[#FF4040]">That costs clarity and creative momentum.</span>
              </>
            }
            description="Directors communicate intent. Cinematographers define visual language. Storyboard artists shape narrative rhythm. When tools are fragmented, communication slows and visual continuity suffers."
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
                The friction that fragments visual planning.
              </h3>
              <div className="space-y-4">
                {[
                  "Storyboards live separately from scripts and production schedules",
                  "Shot lists and visual references aren't linked to narrative structure",
                  "Script changes require manual updates across every visual document",
                  "Collaboration between visual and production departments breaks down",
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
                <div className="text-sm font-semibold text-foreground mb-4">Visual Planning Status</div>
                {[
                  { label: "Shot Coverage", pct: 82 },
                  { label: "Scene Storyboards", pct: 67 },
                  { label: "Script Alignment", pct: 91 },
                  { label: "Team Sync", pct: 74 },
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
                  <span className="text-xs text-muted-foreground">Visuals and scripts connected</span>
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
              Pzaz connects visual planning directly to scripts, timelines, and team collaboration.
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
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #00C2A8 0.96%, #5C28A4 47.6%, #3207BC 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                Vision without structure is just an idea.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                Structure without vision is just administration.
              </p>
              <p className="font-lato font-normal text-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Pzaz connects visual planning to production reality — giving cinematographers and
                storyboard artists the tools to move from concept to execution with clarity and
                creative confidence.
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
            pillText="Visual Department Tools"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Tools Designed for{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Visual Departments
                </span>
              </>
            }
            description="Support creative precision across every stage of production. Cinematography and storyboarding demand both artistic sensitivity and technical discipline."
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
                <h3 className="font-lato font-bold text-xl text-foreground">{tool.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                <p className="text-sm font-semibold text-primary border-t border-border pt-4 mt-auto">
                  {tool.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TOOLS (StudioCard) ──────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="More for Visual Storytelling"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Additional Tools for{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Visual Storytelling
                </span>
              </>
            }
            description="Enhance collaboration and creative rhythm. Visual departments operate within dynamic production environments — Pzaz helps maintain clarity while supporting creative flexibility."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {additionalTools.map((tool, i) => (
              <motion.div key={tool.title} {...fadeUp(i * 0.12)}>
                <StudioCard
                  icon={tool.icon}
                  title={tool.title}
                  description={tool.description}
                  tagline={tool.tagline}
                  highlight={tool.highlight}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ───────────────────────────────────────────── */}
      <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill
                text="AI-Powered Visual Development"
                className="text-primary mb-6 bg-primary/10"
                icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
              />
              <h2 className="font-lato font-extrabold text-3xl md:text-[40px] md:leading-[50px] text-foreground mb-6">
                AI Assistance for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Visual Development
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Pzaz integrates AI features that help generate concepts, refine visual ideas, and
                streamline repetitive planning tasks. These capabilities allow visual artists to
                focus more on creative judgment and less on administrative friction.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                AI supports creative exploration while preserving artistic control. Filmmakers remain
                in the director's seat.
              </p>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Explore AI Features
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">AI Visual Analysis</span>
                  <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                    Running
                  </span>
                </div>
                {[
                  { label: "Shot list completeness", pct: 88, color: "#29FADF" },
                  { label: "Storyboard coverage", pct: 72, color: "#8B1DFF" },
                  { label: "Scene-to-visual sync", pct: 95, color: "#29FADF" },
                  { label: "Visual consistency score", pct: 81, color: "#8B1DFF" },
                ].map((item, i) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <motion.div
                        className="h-1.5 rounded-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">AI insight:</span>{" "}
                    3 scenes missing shot coverage — adding reference frames recommended.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FUTURE / CLOSING STATEMENT ───────────────────────── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <Pill
              text="The Future of Visual Storytelling"
              className="text-primary mb-8 bg-primary/10 mx-auto"
            />
            <h2 className="font-lato font-extrabold text-3xl md:text-[48px] md:leading-[58px] text-foreground mb-6">
              As productions become more collaborative and technically complex,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                visual departments need tools that connect creative thinking with operational execution.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Pzaz provides a unified environment where visual planning evolves alongside scripts,
              schedules, and production logistics — giving visual artists the clarity to bring their
              best work to every production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SHARED CTA ───────────────────────────────────────────── */}
      <SharedCTA
        pillText="Free 7-day trial"
        title={
          <>
            Ready to Elevate Your<br />Visual Planning?
          </>
        }
        description="Transform scripts into structured visual strategies with tools designed specifically for cinematographers and storyboard artists. No credit card required."
        primaryButtonText="Get Started for Free"
        secondaryButtonText="Book a Demo"
        backgroundStyle={{
          background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)",
        }}
      />
    </PageLayout>
  );
};

export default Cinematographers;
