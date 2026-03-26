import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import SharedCTA from "@/components/SharedCTA";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { AlertTriangle, CalendarDays, Users, LayoutList, FolderOpen } from "lucide-react";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import iconWarning from "@/assets/icon-warning.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";

import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconDocument from "@/assets/script/icon-document.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const coreTools = [
  {
    icon: iconFlow,
    tagline: "Scheduling",
    title: "Scheduling",
    description:
      "Detailed calendars and shooting schedules can be created and adjusted within a single environment, allowing changes to be reflected across departments without repeated manual updates.",
    highlight: "Keep the production timeline clear.",
  },
  {
    icon: iconUserGroup,
    tagline: "Coordination",
    title: "Crew and Cast Coordination",
    description:
      "Production teams can track roles, availability and key details for both crew and cast, helping ensure that logistical decisions are based on accurate, accessible information.",
    highlight: "Maintain oversight of availability and responsibilities.",
  },
  {
    icon: iconListCheck,
    tagline: "Accountability",
    title: "Task Management",
    description:
      "Visual task boards provide a practical way to assign work, monitor progress and adjust priorities as production needs evolve.",
    highlight: "Maintain accountability across departments.",
  },
  {
    icon: iconDocument,
    tagline: "Organisation",
    title: "Document Management",
    description:
      "Scripts, call sheets and other production documents can be stored and shared securely, reducing the time spent searching for critical information.",
    highlight: "Keep essential materials organised.",
  },
];

const ProductionManagers = () => {
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Production Managers – Run Film Productions with Greater Clarity"
        description="Keep schedules, teams and logistics aligned from prep to wrap. Pzaz gives production managers a structured workspace where planning, communication and day-to-day execution stay connected."
        url="https://pzaz.io/software-for-production-managers"
        canonical="https://pzaz.io/software-for-production-managers"
        keywords={[
          "film production manager software",
          "production management tools",
          "film scheduling software",
          "crew coordination platform",
          "production planning app",
          "film project management",
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50.01% 50.01% at 50% 0%, rgba(41,250,223,0.18) 0%, rgba(139,29,255,0.10) 60%, rgba(170,166,255,0) 100%)",
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
                text="For Production Managers"
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
                Run Film Productions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Keep schedules, teams and logistics aligned from prep to wrap. Production managers operate at the
              centre of every film, balancing schedules, budgets and coordination across departments while
              responding to constant change on set.
            </motion.p>

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
                  prefixIcon={
                    <img
                      src={ctaPlayIcon}
                      alt=""
                      className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]"
                    />
                  }
                >
                  Start for Free
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

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-16 lg:mt-24 max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <div className="p-2">
                <div className="bg-muted/50 rounded-xl aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-background rounded-lg shadow-inner flex">
                    {/* Sidebar */}
                    <div className="w-16 lg:w-52 border-r border-border/50 p-3 hidden sm:block">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                          <CalendarDays className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-xs font-medium hidden lg:block">Production</span>
                      </div>
                      <div className="space-y-2">
                        {["Schedule", "Crew", "Tasks", "Documents"].map((p, i) => (
                          <div key={i} className={`h-6 px-2 rounded text-[10px] flex items-center ${i === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                            <span className="truncate hidden lg:block">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-3 bg-primary/20 rounded w-32" />
                        <div className="h-3 bg-muted rounded w-20" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "Shooting Days", value: "32", sub: "of 40 planned", color: "text-primary" },
                          { label: "Crew Confirmed", value: "94%", sub: "48 of 51 roles", color: "text-green-600" },
                          { label: "Tasks On Track", value: "87%", sub: "across departments", color: "text-amber-600" },
                        ].map((stat, i) => (
                          <div key={i} className="bg-muted/40 rounded-lg p-3 hidden lg:block">
                            <p className="text-[9px] text-muted-foreground mb-1">{stat.label}</p>
                            <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                            <p className="text-[9px] text-muted-foreground">{stat.sub}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 space-y-1.5">
                        {[
                          { dept: "Camera Dept", status: "On Schedule", color: "bg-green-400" },
                          { dept: "Art Dept", status: "1 task overdue", color: "bg-amber-400" },
                          { dept: "Sound Dept", status: "On Schedule", color: "bg-green-400" },
                          { dept: "Wardrobe", status: "On Schedule", color: "bg-green-400" },
                        ].map((row, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-background rounded border border-border/40 hidden lg:flex">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.color}`} />
                            <span className="text-[9px] font-medium text-foreground flex-1">{row.dept}</span>
                            <span className="text-[9px] text-muted-foreground">{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Right panel */}
                    <div className="w-16 lg:w-56 border-l border-border/50 p-3 hidden md:block">
                      <div className="text-xs font-medium mb-3 hidden lg:block">Today's Overview</div>
                      <div className="space-y-2">
                        {["Call Time 07:00", "Location: Studio 4", "Scenes: 12A–15C", "Wrap: 19:00"].map((f, i) => (
                          <div key={i} className="flex items-center p-2 bg-muted/50 rounded">
                            <span className="text-[10px] font-medium text-foreground hidden lg:block">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="max-w-6xl mx-auto"
            pillText="The Production Manager Reality"
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                Bring Structure to the Realities of{" "}
                <span className="text-[#FF4040]">Production Management</span>
              </>
            }
            description="Managing a production involves juggling timelines, crew coordination and operational decisions that can shift quickly as circumstances evolve. When information is spread across spreadsheets, messaging threads and disconnected tools, small issues can escalate into delays or unnecessary costs."
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
                The friction that compounds across every production.
              </h3>
              <div className="space-y-4">
                {[
                  "Schedules and logistics managed across disconnected tools",
                  "Crew availability and responsibilities hard to track centrally",
                  "Updates lost between departments, causing preventable delays",
                  "No single view of progress makes oversight difficult",
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
                <div className="text-sm font-semibold text-foreground mb-4">Production Manager Dashboard</div>
                {[
                  { label: "Schedule On Track", pct: 91 },
                  { label: "Crew Coordination", pct: 84 },
                  { label: "Task Visibility", pct: 88 },
                  { label: "Document Access", pct: 95 },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-44 text-xs font-medium text-muted-foreground shrink-0">{item.label}</div>
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
                  <span className="text-xs text-muted-foreground">Centralised planning — fully connected</span>
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
              Pzaz helps production managers centralise planning and communication so that updates remain visible, responsibilities stay clear and the overall workflow becomes easier to manage under pressure.
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
                Tools Built Around Production Workflows.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                Support practical coordination without adding complexity.
              </p>
              <p className="font-lato font-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Production management is about keeping people, resources and timelines aligned — which requires
                systems that reflect real working conditions rather than theoretical planning models.
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
            description="Support your workflow with tools designed to centralise planning, improve communication and maintain visibility across every stage of production."
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

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-lato font-bold text-[36px] md:text-[52px] md:leading-[62px] text-foreground mb-6">
              Ready to Run Productions with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Greater Clarity?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Support your workflow with tools designed to centralise planning, improve communication and maintain
              visibility across every stage of production.
            </p>
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group px-10 mb-4">
                Get Started for Free
                <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              No credit card required. Start running your productions with clarity.
            </p>
          </motion.div>
        </div>
      </section>

      <SharedCTA />
    </PageLayout>
  );
};

export default ProductionManagers;
