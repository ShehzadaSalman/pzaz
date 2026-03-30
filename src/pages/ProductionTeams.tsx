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

import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconBell from "@/assets/script/icon-bell.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconDocument from "@/assets/script/icon-document.svg";
import iconShapes2 from "@/assets/script/icon-shapes-2.svg";
import iconScriptAnalysis from "@/assets/script/icon-script-analysis.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const coreTools = [
  {
    icon: iconUserGroup,
    tagline: "Communication",
    title: "Integrated Communication",
    description:
      "Crew members can communicate directly within projects, whether through messaging or quick calls, so discussions remain tied to tasks and decisions rather than scattered across external platforms.",
    highlight: "Keep conversations connected to the work.",
  },
  {
    icon: iconListCheck,
    tagline: "Visibility",
    title: "Visual Task Management",
    description:
      "Task boards provide a simple way to track progress, adjust responsibilities and ensure that everyone understands what needs to happen next without relying on endless updates.",
    highlight: "Maintain clarity across departments.",
  },
  {
    icon: iconBell,
    tagline: "Awareness",
    title: "Real-Time Notifications",
    description:
      "Updates to schedules, tasks or production plans are shared instantly, helping teams respond quickly without unnecessary disruption.",
    highlight: "Stay aware of changes as they happen.",
  },
  {
    icon: iconCloud,
    tagline: "Organisation",
    title: "Centralised File Access",
    description:
      "Documents, images and reference materials can be stored and shared within the same environment, making it easier for departments to access what they need without searching across multiple systems.",
    highlight: "Keep scripts and production materials organised.",
  },
];

const additionalTools = [
  {
    icon: iconFlow,
    tagline: "Teamwork",
    title: "Real-Time Collaboration",
    description:
      "Teams can update plans and documents simultaneously, allowing production decisions to move forward without waiting for handovers or version conflicts.",
    highlight: "Work together without bottlenecks.",
  },
  {
    icon: iconEngine,
    tagline: "Leadership",
    title: "Production Oversight",
    description:
      "Directors and producers can monitor progress, budgets and scheduling within a single environment that reflects the realities of production rather than abstract management frameworks.",
    highlight: "Maintain visibility across the entire project.",
  },
  {
    icon: iconShapes2,
    tagline: "Personalisation",
    title: "Custom Dashboards",
    description:
      "Crew members can shape their view of tasks, timelines and updates so they focus on what matters most to their responsibilities within the production.",
    highlight: "Tailor visibility to each role.",
  },
];

const ProductionTeams = () => {
  const { t } = useTranslation('solutions-teams');
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Film Production Teams – Keep Departments Aligned from Prep to Wrap"
        description="The platform built for film production teams. Bring scheduling, tasks, communication and files into one shared workspace so your crew stays organised without added complexity."
        url="https://pzaz.io/film-production-team-software"
        keywords={[
          "film production team software",
          "production crew management",
          "film scheduling tools",
          "production collaboration platform",
          "crew communication app",
          "film project management",
        ]}
        canonical="https://pzaz.io/film-production-team-software"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50.01% 50.01% at 50% 0%, rgba(139,29,255,0.18) 0%, rgba(41,250,223,0.08) 60%, rgba(170,166,255,0) 100%)",
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
                text="For Production Teams"
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
              The Platform Built for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Film Production Teams
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Keep departments aligned and work moving from prep to wrap. Pzaz brings scheduling,
              tasks, communication and files into one shared workspace so production teams can stay
              organised without adding more process to an already complex environment.
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
                  Optimise Your Workflow
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
            pillText="The Production Reality"
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                Bring order to the realities of production.{" "}
                <span className="text-[#FF4040]">Stay aligned when schedules tighten.</span>
              </>
            }
            description="Production teams work under constant pressure, balancing evolving plans, limited time and coordination across multiple departments. When information lives in separate tools, small misalignments can quickly turn into delays or confusion on set."
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
                The friction that compounds across every shoot.
              </h3>
              <div className="space-y-4">
                {[
                  "Schedules, tasks and communication live in separate tools",
                  "Updates get lost between departments and slow momentum",
                  "Files and scripts are scattered, making access unreliable",
                  "No single view of progress across the production",
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
                <div className="text-sm font-semibold text-foreground mb-4">Production Status Overview</div>
                {[
                  { label: "Schedule Accuracy", pct: 88 },
                  { label: "Department Sync", pct: 76 },
                  { label: "File Accessibility", pct: 93 },
                  { label: "On-Time Delivery", pct: 81 },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-40 text-xs font-medium text-muted-foreground shrink-0">{item.label}</div>
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
                  <span className="text-xs text-muted-foreground">Prep to wrap — fully connected</span>
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
              Pzaz centralises the moving parts so updates, decisions and responsibilities remain visible to everyone.
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
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #29FADF 0.96%, #8B1DFF 47.6%, #3207BC 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                Tools Designed Around How Production Actually Works.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                Support collaboration without slowing the crew down.
              </p>
              <p className="font-lato font-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Production workflows are fast, practical and often unpredictable. The tools supporting
                them need to be clear, flexible and reliable rather than overly complex.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CORE TOOLS ─────────────────────────────────────────── */}
      <section id="tools" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSectionHeader
            wrapperClassName="max-w-6xl mx-auto mb-12"
            pillText="Core Features"
            pillClassName="bg-primary/10 text-primary"
            title={<>Tools Designed for Real Production Workflows</>}
            titleClassName="text-foreground"
            description="Support storytelling that moves fast. Pzaz provides a system that supports production realities without constraining day-to-day execution."
          />

          <div className="grid md:grid-cols-2 gap-[29px]">
            {coreTools.map((tool, i) => (
              <motion.div
                key={tool.title}
                {...fadeUp(i * 0.08)}
                className="bg-white rounded-[38px] border-2 border-[#D4BAF4] p-10 flex flex-col gap-4"
              >
                <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center shrink-0">
                  <img src={tool.icon} alt="" className="w-4 h-4" />
                </div>
                <Pill text={tool.tagline} className="bg-primary/10 text-primary self-start" />
                <h3 className="font-lato font-bold text-[22px] text-foreground">{tool.title}</h3>
                <p className="font-lato text-[16px] text-muted-foreground leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <div className="rounded-[12px] bg-[#F7F2FD] p-[22px] mt-auto">
                  <p className="font-lato font-normal text-[16px] text-[#4D029B] italic leading-relaxed">
                    "{tool.highlight}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TOOLS ───────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSectionHeader
            wrapperClassName="max-w-6xl mx-auto mb-12"
            pillText="Advanced Capabilities"
            pillClassName="bg-primary/10 text-primary"
            title={<>Additional Tools to Support Complex Productions</>}
            titleClassName="text-foreground"
            description="Maintain momentum across fast-moving environments. Production requires constant coordination, and the right tools can help reduce friction without adding unnecessary structure."
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

      {/* ── AI SECTION ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill
                text="Intelligent Support"
                className="bg-primary/10 text-primary mb-6"
                icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
              />
              <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight tracking-normal text-foreground mb-6">
                AI Support for Production Planning
              </h2>
              <p className="font-lato text-[18px] text-muted-foreground leading-relaxed mb-6">
                Pzaz introduces intelligent support where it can genuinely help — analysing schedules,
                highlighting potential conflicts or suggesting adjustments to resource allocation.
              </p>
              <p className="font-lato text-[18px] text-muted-foreground leading-relaxed mb-8">
                These tools aim to reduce administrative pressure while allowing production teams to
                retain full control over planning decisions.
              </p>
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Explore AI Features
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <img src={iconAiResearch} alt="" className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-foreground">AI Production Assistant</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                {[
                  { label: "Schedule Conflict Detection", status: "Active", color: "text-green-600" },
                  { label: "Resource Allocation Suggestions", status: "Analysing", color: "text-blue-500" },
                  { label: "Deadline Risk Flags", status: "Monitoring", color: "text-yellow-600" },
                  { label: "Department Sync Prompts", status: "Active", color: "text-green-600" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                  >
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    AI assists decision-making — production teams retain full control.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FUTURE SECTION ─────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeUp(0)}
            className="max-w-3xl mx-auto text-center"
          >
            <AnimatedSectionHeader
              pillText="The Future of Production"
              pillClassName="bg-primary/10 text-primary"
              title="A More Connected Approach to Production"
              description="As production environments become more complex and collaborative, teams need tools that reflect how work unfolds on set rather than forcing them into rigid systems. Pzaz offers a structured yet flexible workspace that supports coordination from pre-production through delivery."
            />
          </motion.div>
        </div>
      </section>

      {/* ── SHARED CTA ─────────────────────────────────────────── */}
      <SharedCTA
        pillText="For Production Teams"
        title={
          <>
            Ready to Simplify{" "}
            <span className="text-primary-foreground underline decoration-white/40">
              Production Coordination?
            </span>
          </>
        }
        description="Support your crew with tools that make communication clearer and planning more visible — without adding unnecessary complexity to the process."
        primaryButtonText="Get Started for Free"
        secondaryButtonText="Book a Demo"
        showLanguagesImage={false}
        backgroundStyle={{
          background:
            "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #29FADF 0.96%, #8B1DFF 47.6%, #3207BC 95%)",
        }}
      />
    </PageLayout>
  );
};

export default ProductionTeams;
