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
import iconShapes2 from "@/assets/script/icon-shapes-2.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconMoneyBag from "@/assets/script/icon-money-bag.svg";
import iconDownload from "@/assets/script/icon-download.svg";
import iconVideo from "@/assets/script/icon-video.svg";
import iconTextLine from "@/assets/script/icon-text-line.svg";
import iconBell from "@/assets/script/icon-bell.svg";
import iconRefresh from "@/assets/script/icon-refresh.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const workflowStages = [
  {
    icon: iconShapes,
    step: "01",
    tagline: "Ideation",
    title: "Imagine",
    description:
      "Capture early concepts, shape direction, and align teams before presentation building starts. Concept boards supported by intelligent prompts. Flexible modular cards for ideas, files and notes.",
    highlight: "Where creative thinking begins.",
  },
  {
    icon: iconDocument,
    step: "02",
    tagline: "New Business",
    title: "Propose",
    description:
      "Ideas evolve directly into structured presentations without duplication. Proposal frameworks generated from live project content. Real-time collaboration between strategy, creative and accounts.",
    highlight: "Turn creative energy into compelling client proposals.",
  },
  {
    icon: iconVideo,
    step: "03",
    tagline: "Pre-Production",
    title: "Visualise",
    description:
      "Translate strategy into visual clarity that clients and teams can understand immediately. Storyboard and mood board creation tools. Direct linking between visuals, briefs and proposals.",
    highlight: "Make ideas tangible before production begins.",
  },
  {
    icon: iconUserGroup,
    step: "04",
    tagline: "Teamwork",
    title: "Collaborate",
    description:
      "Creative work progresses faster when communication is embedded in the workflow. Live project spaces with messaging and task visibility. Role-based permissions for internal and external stakeholders.",
    highlight: "One workspace for internal teams and clients.",
  },
  {
    icon: iconMoneyBag,
    step: "05",
    tagline: "Financial Clarity",
    title: "Budget",
    description:
      "Automated budget generation linked to proposal content. Tracking between estimated and actual spend. Approval flows aligned to agency hierarchy. Real-time financial visibility.",
    highlight: "Bring financial clarity into creative decision-making.",
  },
  {
    icon: iconFlow,
    step: "06",
    tagline: "Execution",
    title: "Plan",
    description:
      "Approved work becomes structured production workflows instantly. Project schedules generated from proposal scope. Dependency tracking and workload balancing. Cross-department coordination in real time.",
    highlight: "Move seamlessly from pitch to execution.",
  },
  {
    icon: iconListCheck,
    step: "07",
    tagline: "Campaign Delivery",
    title: "Deliver",
    description:
      "Live task tracking across teams. Automated milestone updates for clients. Department checklists ensuring quality control. Daily performance insights for project leads.",
    highlight: "Execute campaigns with greater confidence.",
  },
  {
    icon: iconEngine,
    step: "08",
    tagline: "Continuous Improvement",
    title: "Learn",
    description:
      "Analytics on proposal performance and win rates. Visual dashboards for team productivity. Identification of recurring workflow bottlenecks. Custom reporting for leadership and clients.",
    highlight: "Turn project data into strategic advantage.",
  },
];

const supportTools = [
  {
    icon: iconAiResearch,
    tagline: "Intelligent Workflows",
    title: "AI That Supports Creative Thinking",
    description:
      "Pzaz brings intelligent support into the parts of agency work where it actually helps — shaping proposal structures, visualising campaign ideas, or keeping budgets aligned with scope.",
    highlight: "Intelligence designed to assist, not replace creative ownership.",
  },
  {
    icon: iconGlobe,
    tagline: "Connected Ecosystem",
    title: "Integrations",
    description:
      "Connect with Google Drive, Dropbox, OneDrive, Adobe Creative Cloud, Slack, and Notion. Import and export through standard formats to reduce transition friction across your stack.",
    highlight: "Works with the tools your agency already uses.",
  },
  {
    icon: iconSprint,
    tagline: "Quick Setup",
    title: "Fast Onboarding",
    description:
      "Structured onboarding sessions designed specifically for creative agencies, with templates and workflows that reflect how agency projects actually run in practice.",
    highlight: "Up and running fast, with human support throughout.",
  },
];

const CreativeAgencies = () => {
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Creative Agencies – From Brief to Launch in One Connected Flow"
        description="The creative platform built for agencies. Bring ideation, planning, proposals, collaboration, budgeting and delivery into one intelligent environment."
        url="https://pzaz.io/creative-agency-production-software"
        keywords={[
          "creative agency platform",
          "agency workflow software",
          "agency project management",
          "creative production platform",
          "proposal and delivery software",
          "agency collaboration tools",
        ]}
        canonical="https://pzaz.io/creative-agency-production-software"
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
                text="For Creative Agencies"
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
              The Creative Platform{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Built for Agencies
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              From brief to launch, one connected flow. Pzaz brings ideation, planning, proposals,
              collaboration, budgeting and delivery into one intelligent environment — a foundation
              that keeps creativity moving.
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
                  Start for Free
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
            pillText="The Agency Reality"
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                Creative work should not feel like firefighting.{" "}
                <span className="text-[#FF4040]">Broken systems make it so.</span>
              </>
            }
            description="Agencies are full of smart people doing good work. What slows them down isn't creativity — it's coordination. Too many tools, too many handovers, too much context lost between departments."
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
                The friction that compounds across every project.
              </h3>
              <div className="space-y-4">
                {[
                  "Briefs, proposals, and delivery plans live in separate systems",
                  "Creative handovers lose context and slow momentum",
                  "Budgets are disconnected from the scope they're meant to reflect",
                  "Client communication scattered across email and chat tools",
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
                <div className="text-sm font-semibold text-foreground mb-4">Agency Pipeline Status</div>
                {[
                  { label: "Brief → Proposal", pct: 85 },
                  { label: "Creative Alignment", pct: 72 },
                  { label: "Budget Accuracy", pct: 91 },
                  { label: "On-Time Delivery", pct: 78 },
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
                  <span className="text-xs text-muted-foreground">Brief to delivery — fully connected</span>
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
              Creativity rarely fails because of ideas. It fails because of broken systems.
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
                Create. Collaborate. Deliver. Win.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                One workflow instead of ten disconnected systems.
              </p>
              <p className="font-lato font-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Ideas no longer need to be rebuilt every time they move from concept to proposal to
                production. Visual thinking stays aligned with strategy, budgets reflect real
                decisions, and collaboration takes place inside the work itself.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── WORKFLOW STAGES ────────────────────────────────────── */}
      <section id="workflow" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="The Full Agency Workflow"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                From Brief to Signed Deal,{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8B1DFF] to-[#29FADF]">
                  Faster Than Before
                </span>
              </>
            }
            description="One connected environment designed around how creative agencies actually operate. Manage ideas, proposals and delivery without stitching multiple subscriptions together."
          />

          <div className="grid md:grid-cols-2 gap-[29px]">
            {workflowStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                {...fadeUp(i * 0.08)}
                className="rounded-[28px] bg-white border border-[#D4BAF4] p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-[48px] h-[48px] rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <img src={stage.icon} alt="" className="w-6 h-6" />
                  </div>
                  <span
                    className="font-lato font-black text-[40px] leading-none tabular-nums select-none"
                    style={{ color: "hsl(var(--border))" }}
                  >
                    {stage.step}
                  </span>
                </div>
                <Pill text={stage.tagline} className="self-start bg-primary/10 text-primary text-xs py-1" />
                <h3 className="font-lato font-bold text-2xl text-foreground">{stage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
                <p className="text-sm font-semibold text-primary border-t border-border pt-4 mt-auto">
                  {stage.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI + INTEGRATIONS + SUPPORT ───────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="Built to Scale With You"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Evolve.{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Build an Agency Prepared for the Next Era.
                </span>
              </>
            }
            description="AI is already reshaping how creative work gets organised and delivered. Pzaz weaves intelligent support into the workflow in a way that reduces friction and admin."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {supportTools.map((tool, i) => (
              <motion.div key={tool.title} {...fadeUp(i * 0.12)}>
                <StudioCard
                  icon={tool.icon}
                  title={tool.title}
                  description={tool.description}
                  tagline={tool.tagline}
                  highlight={tool.highlight}
                  index={i}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI INTELLIGENCE PANEL ─────────────────────────────── */}
      <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill
                text="AI-Powered Agency Support"
                className="text-primary mb-6 bg-primary/10"
                icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
              />
              <h2 className="font-lato font-extrabold text-3xl md:text-[40px] md:leading-[50px] text-foreground mb-6">
                AI That Supports{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Creative Thinking
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Pzaz integrates AI where it reduces friction and enhances strategic clarity —
                shaping proposal structures, visualising campaign ideas, or keeping budgets aligned
                with the scope of the project as it evolves.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                The goal is not automation for its own sake, but to help agencies move faster while
                keeping creative ownership exactly where it belongs.
              </p>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Book a Call with a Specialist
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Agency AI Insights</span>
                  <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                    Active
                  </span>
                </div>
                {[
                  { label: "Proposal win rate", pct: 74, color: "#29FADF" },
                  { label: "On-time delivery", pct: 88, color: "#8B1DFF" },
                  { label: "Budget accuracy", pct: 92, color: "#29FADF" },
                  { label: "Team utilisation", pct: 81, color: "#8B1DFF" },
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
                    Proposal-to-close time reduced by 31% after connecting briefs and budgets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <Pill
              text="The Way Creative Work Should Function"
              className="text-primary mb-8 bg-primary/10 mx-auto"
            />
            <h2 className="font-lato font-extrabold text-3xl md:text-[48px] md:leading-[58px] text-foreground mb-6">
              Whether you are a small studio or a larger agency operating across markets,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1DFF] to-[#29FADF]">
                Pzaz scales alongside your way of working without forcing rigid structures.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Ideas move faster from concept to approval to execution. With Pzaz, the full creative
              process lives in one connected system — giving teams a clearer way to manage work from
              early concept through to delivery without constantly switching between tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SHARED CTA ───────────────────────────────────────────── */}
      <SharedCTA
        pillText="Free 7-day trial"
        title={
          <>
            Ready to Unlock Your<br />Agency's Creative Potential?
          </>
        }
        description="From brief to launch in one connected flow. No credit card required."
        primaryButtonText="Start for Free"
        secondaryButtonText="Book a Demo"
        backgroundStyle={{
          background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)",
        }}
      />
    </PageLayout>
  );
};

export default CreativeAgencies;
