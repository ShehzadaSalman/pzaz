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
import iconStar from "@/assets/material-symbols_family-star.svg";
import iconFlowchart from "@/assets/icon-flowchart.svg";
import iconSurvey from "@/assets/icon-survey.svg";
import iconGlobe from "@/assets/icon-globe.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";

// Script-style icon set
import iconDocument from "@/assets/script/icon-document.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconAiFormatting from "@/assets/script/icon-ai-formatting.svg";
import iconScriptAnalysis from "@/assets/script/icon-script-analysis.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const primaryTools = [
  {
    icon: iconDocument,
    tagline: "Narrative → Action",
    title: "Script Breakdowns",
    description: "Scripts can be transformed into detailed production plans that help departments understand requirements, dependencies and priorities without losing sight of the story.",
    highlight: "Turn creative decisions into structured, department-ready data the moment the script is locked.",
  },
  {
    icon: iconListCheck,
    tagline: "Daily Clarity",
    title: "Call Sheets",
    description: "Professional call sheets can be created and shared within the same environment where schedules and tasks are managed, reducing confusion during fast-moving production periods.",
    highlight: "Everyone knows where to be, when to be there, and what they need — before the day begins.",
  },
  {
    icon: iconUserGroup,
    tagline: "Team Alignment",
    title: "Cast and Crew Coordination",
    description: "Production leaders can oversee roles, availability and responsibilities, ensuring that communication remains structured even as plans evolve.",
    highlight: "No more chasing updates. Roles and responsibilities stay visible as plans shift.",
  },
  {
    icon: iconFlow,
    tagline: "Timeline Visibility",
    title: "Scheduling and Stripboards",
    description: "Shooting schedules and stripboards allow teams to plan efficiently while retaining the flexibility needed to respond to real-world conditions.",
    highlight: "See the full production timeline. Adjust it in real time without losing the plan.",
  },
];

const additionalTools = [
  {
    icon: iconCloud,
    tagline: "One Source of Truth",
    title: "Centralised Workspace",
    description: "Project materials, notes and communications remain accessible within a single structured environment.",
    highlight: "No more scattered files or missed threads. Everything lives where the work happens.",
  },
  {
    icon: iconSprint,
    tagline: "Move Faster",
    title: "Real-Time Collaboration",
    description: "Updates and feedback can be shared immediately, allowing production leadership to respond to challenges without disrupting workflow.",
    highlight: "Decisions don't wait for email threads. React faster. Stay in sync.",
  },
  {
    icon: iconEngine,
    tagline: "Full Picture",
    title: "Production Oversight",
    description: "From planning visual sequences to tracking budget considerations, Pzaz provides a consolidated view of production activity that supports informed decision-making.",
    highlight: "See what's happening across every department — without micromanaging a single one.",
  },
];

const DirectorsProducers = () => {
  const { t } = useTranslation();
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Directors & Producers – Creative Vision Meets Production Reality"
        description="Keep creative vision and production reality aligned. Pzaz provides a shared production environment where planning, communication and execution remain connected."
        url="https://pzaz.io/software-for-directors-producers"
        keywords={[
          "filmmaking platform for directors",
          "production management for producers",
          "film production workflow",
          "director producer collaboration",
          "production planning software",
        ]}
        canonical="https://pzaz.io/software-for-directors-producers"
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
                text="For Directors and Producers"
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
              A Clearer Way to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Direct and Produce
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Keep creative vision and production reality aligned. Directors and producers operate
              between creative ambition and practical execution — Pzaz keeps both in the same room.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName="max-w-6xl mx-auto"
              pillText="The Production Reality"
              pillIcon={<AlertTriangle className="w-4 h-4" />}
              pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
              title={
                <>
                  Productions don't fail because of creativity.{" "}
                  <span className="text-[#FF4040]">They fail because information falls apart.</span>
                </>
              }
              description="Directors and producers are constantly balancing storytelling decisions with the realities of time, resources and coordination. When tools are fragmented, momentum slows."
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
                  The leadership layer breaks down first.
                </h3>
                <div className="space-y-4">
                  {[
                    "Creative direction and scheduling live in separate tools",
                    "Producers re-enter data across systems manually",
                    "Call sheets drift out of sync with actual schedules",
                    "Budget changes don't surface until it's too late",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-4 min-h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                      <img src={iconWarning} alt="" className="w-6 h-6 shrink-0" />
                      <span className="text-[16px] font-lato">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center pl-8">
                <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-xl space-y-3">
                  <div className="text-sm font-semibold text-foreground pb-2 border-b border-border">Production Status</div>
                  {[
                    { label: "Script Breakdown", pct: 92, color: "#8B1DFF" },
                    { label: "Scheduling", pct: 76, color: "#7051F7" },
                    { label: "Team Alignment", pct: 88, color: "#01A7CC" },
                    { label: "Budget Tracking", pct: 65, color: "#29FADF" },
                  ].map((item, i) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-foreground">{item.label}</span>
                        <span className="text-xs font-semibold text-muted-foreground">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ background: `linear-gradient(to right, ${item.color}99, ${item.color})` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                    <span className="text-xs text-muted-foreground">All departments connected</span>
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
                Fragmentation is a leadership problem. Pzaz solves it at the source.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROMISE BANNER ─────────────────────────────────────── */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background:
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #01A7CC 0.96%, #7051F7 47.6%, #894FD9 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                Pzaz doesn't slow you down with process.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                It gives you clarity to move faster.
              </p>
              <p className="font-lato font-normal text-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Pzaz centralises production workflows so directors and producers can track progress, adjust
                plans and maintain alignment across departments — from early preparation through to final delivery.
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
            pillText="Core Production Tools"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Tools That Support{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Both Vision and Execution
                </span>
              </>
            }
            description="Stay in control without adding complexity. Film production requires systems that reflect how creative decisions translate into operational plans."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px] mb-12">
            {[
              {
                title: "Script Breakdowns",
                description: "Turn narrative structure into practical action. Scripts become department-ready production plans instantly.",
              },
              {
                title: "Call Sheets",
                description: "Communicate daily expectations clearly. Created and shared in the same environment as schedules and tasks.",
              },
              {
                title: "Cast & Crew Coordination",
                description: "Maintain alignment across the team. Oversee roles, availability and responsibilities as plans evolve.",
              },
              {
                title: "Scheduling & Stripboards",
                description: "Keep the production timeline visible. Plan efficiently while retaining flexibility for real-world conditions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-8 rounded-[38px] border-2 border-[#D4BAF4] transition-all hover:shadow-lg"
                style={{ background: "linear-gradient(180deg, #EEE7FF 0%, #F8F4FF 35%, #FFFFFF 100%)" }}
              >
                <h4 className="font-lato font-bold text-[20px] text-[#4D029B] mb-3">{item.title}</h4>
                <p className="font-lato font-normal text-[16px] leading-[24px] text-[#878787]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USP STUDIO CARDS ──────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="Production Leadership"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Additional Tools for{" "}
                <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Production Leadership
                </span>
              </>
            }
            description="Maintain visibility without micromanaging. Effective oversight depends on clear information and responsive collaboration — not constant intervention."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[46px] max-w-7xl mx-auto">
            {additionalTools.map((tool, index) => (
              <StudioCard
                key={tool.title}
                title={tool.title}
                tagline={tool.tagline}
                description={tool.description}
                highlight={tool.highlight}
                icon={tool.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ──────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8F8FC] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text="AI-Powered" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6 text-foreground">
                Intelligent Support for Production Planning
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Assist operational clarity without replacing creative judgment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Analytical tools within Pzaz help identify scheduling conflicts, resource pressures and
                structural opportunities within scripts, supporting more informed production decisions while
                leaving creative direction firmly in human hands.
              </p>
              <a href="/script" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Explore AI Features
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">AI Analysis Running</span>
                </div>
                {[
                  { label: "Scheduling conflicts identified", value: "3 flagged", color: "text-amber-500" },
                  { label: "Resource optimisation opportunities", value: "7 found", color: "text-primary" },
                  { label: "Script structure insights", value: "12 notes", color: "text-primary" },
                  { label: "Budget considerations", value: "4 alerts", color: "text-amber-500" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-xl"
                  >
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATED APPROACH ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-[#D4BAF4] bg-white p-10 sm:p-16 text-center"
          >
            <Pill text="Unified Production" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6 mx-auto" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground max-w-3xl mx-auto">
              A More Integrated Approach to Filmmaking
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              As productions become increasingly collaborative and technically complex, leadership teams require
              systems that connect creative thinking with operational execution.
            </p>
            <p className="text-lg font-semibold text-foreground leading-relaxed max-w-3xl mx-auto italic">
              Pzaz brings planning, coordination and communication into a unified production environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SHARED CTA ──────────────────────────────────────────── */}
      <SharedCTA
        pillText="Free 7-day trial"
        title={
          <>
            Ready to Run Productions
            <br />
            with Greater Clarity?
          </>
        }
        description="Support your creative process with tools that keep teams aligned, decisions visible and production moving forward."
        primaryButtonText="Start for Free"
        secondaryButtonText="Book a Demo"
        showLanguagesImage={false}
        backgroundStyle={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
      />
    </PageLayout>
  );
};

export default DirectorsProducers;
