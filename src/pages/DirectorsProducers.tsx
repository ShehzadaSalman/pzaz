import React from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import iconFlowchart from "@/assets/icon-flowchart.svg";
import iconSurvey from "@/assets/icon-survey.svg";
import iconGlobe from "@/assets/icon-globe.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import iconStar from "@/assets/material-symbols_family-star.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const primaryTools = [
  {
    icon: iconFlowchart,
    title: "Script Breakdowns",
    subtitle: "Turn narrative structure into practical action.",
    body: "Scripts can be transformed into detailed production plans that help departments understand requirements, dependencies and priorities without losing sight of the story.",
  },
  {
    icon: iconSurvey,
    title: "Call Sheets",
    subtitle: "Communicate daily expectations clearly.",
    body: "Professional call sheets can be created and shared within the same environment where schedules and tasks are managed, reducing confusion during fast-moving production periods.",
  },
  {
    icon: iconGlobe,
    title: "Cast and Crew Coordination",
    subtitle: "Maintain alignment across the team.",
    body: "Production leaders can oversee roles, availability and responsibilities, ensuring that communication remains structured even as plans evolve.",
  },
  {
    icon: iconFlowchart,
    title: "Scheduling and Stripboards",
    subtitle: "Keep the production timeline visible.",
    body: "Shooting schedules and stripboards allow teams to plan efficiently while retaining the flexibility needed to respond to real-world conditions.",
  },
];

const additionalTools = [
  {
    icon: iconGlobe,
    title: "Centralised Workspace",
    subtitle: "Keep creative and logistical decisions connected.",
    body: "Project materials, notes and communications remain accessible within a single structured environment.",
  },
  {
    icon: aiResearchIcon,
    title: "Real-Time Collaboration",
    subtitle: "Enable faster decision-making.",
    body: "Updates and feedback can be shared immediately, allowing production leadership to respond to challenges without disrupting workflow.",
  },
  {
    icon: iconSurvey,
    title: "Production Oversight",
    subtitle: "Maintain control across complex projects.",
    body: "From planning visual sequences to tracking budget considerations, Pzaz provides a consolidated view of production activity that supports informed decision-making.",
  },
];

const DirectorsProducers = () => {
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Directors & Producers – Creative Vision Meets Production Reality"
        description="Keep creative vision and production reality aligned. Pzaz provides a shared production environment where planning, communication and execution remain connected."
        url="https://pzaz.io/directors-producers"
        keywords={[
          "filmmaking platform for directors",
          "production management for producers",
          "film production workflow",
          "director producer collaboration",
          "production planning software",
        ]}
        canonical="https://pzaz.io/directors-producers"
      />

      {/* ── HERO ───────────────────────────────────────────────────── */}
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
                text="For Directors and Producers"
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
              A Clearer Way to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Direct and Produce
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl mx-auto mb-10"
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Keep creative vision and production reality aligned.
              </p>
            </motion.div>

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTEXT ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill text="The Challenge" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              Creative Ambition Meets{" "}
              <span className="text-muted-foreground font-normal">Practical Execution</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              Directors and producers operate between creative ambition and practical execution, constantly
              balancing storytelling decisions with the realities of time, resources and coordination.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Pzaz provides a shared production environment where planning, communication and execution remain
              connected, allowing leadership teams to maintain oversight without losing creative momentum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STRUCTURE WITHOUT DISRUPTION ─────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text="Structure & Flow" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
                Bring Structure Without Disrupting Creative Flow
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Maintain clarity across every phase of production.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Managing a film means coordinating cast, crew and schedules while ensuring that creative
                intent carries through each stage of the process. When planning tools are fragmented or
                communication becomes inconsistent, momentum can slow and decision-making becomes more
                difficult.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Pzaz centralises production workflows so directors and producers can track progress, adjust
                plans and maintain alignment across departments, from early preparation through to final delivery.
              </p>
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Optimise Your Workflow
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            {/* Visual */}
            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <div className="text-sm font-semibold text-foreground mb-4">Production Dashboard</div>
                {[
                  { label: "Script Breakdown", pct: 92, color: "#29FADF" },
                  { label: "Scheduling", pct: 76, color: "#8B1DFF" },
                  { label: "Team Alignment", pct: 88, color: "#29FADF" },
                  { label: "Budget Tracking", pct: 65, color: "#8B1DFF" },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-32 text-xs font-medium text-muted-foreground shrink-0">{item.label}</div>
                    <div className="flex-1 bg-border rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ background: `linear-gradient(to right, #29FADF, #8B1DFF)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{item.pct}%</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">All departments connected</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRIMARY TOOLS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Tools"
              title="Tools That Support Both Vision and Execution"
              description="Stay in control without adding complexity. Film production requires systems that reflect how creative decisions translate into operational plans, which is why Pzaz focuses on clarity rather than administrative overhead."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {primaryTools.map((tool, i) => (
              <motion.div key={tool.title} {...fadeUp(i * 0.1)}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <img src={tool.icon} alt="" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-lg text-foreground mb-1">{tool.title}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{tool.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{tool.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TOOLS ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Production Leadership"
              title="Additional Tools for Production Leadership"
              description="Maintain visibility without micromanaging. Effective direction and production oversight depend on clear information and responsive collaboration rather than constant intervention."
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalTools.map((tool, i) => (
              <motion.div key={tool.title} {...fadeUp(i * 0.1)}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <img src={tool.icon} alt="" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-lg text-foreground mb-1">{tool.title}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{tool.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{tool.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text="AI-Powered" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
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
                <Button size="lg" variant="outline" className="group px-8 font-lato font-black text-primary hover:text-primary-foreground">
                  Explore AI Features
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            {/* Visual */}
            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
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
                    {...fadeUp(i * 0.08)}
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

      {/* ── INTEGRATED APPROACH ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill text="Unified Production" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              A More Integrated Approach to Filmmaking
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              As productions become increasingly collaborative and technically complex, leadership teams require
              systems that connect creative thinking with operational execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Pzaz supports this by bringing planning, coordination and communication into a unified
              production environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              Ready to Run Productions with Greater Clarity?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Support your creative process with tools that keep teams aligned, decisions visible and
              production moving forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Start for Free
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
                >
                  Book a Demo
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">No credit card required.</p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DirectorsProducers;
