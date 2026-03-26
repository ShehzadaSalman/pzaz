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
    title: "Structured Project Plans",
    subtitle: "Review viability with greater confidence.",
    body: "Investors can access detailed business plans, funding structures and script materials within a consistent framework that supports clearer evaluation of a project's potential.",
  },
  {
    title: "Market Insight Integration",
    subtitle: "Contextualise projects within industry data.",
    body: "Integrated film database references provide additional perspective on market positioning, audience trends and comparable titles, helping investors make more informed decisions.",
  },
  {
    title: "Production Tracking",
    subtitle: "Maintain oversight as projects progress.",
    body: "Real-time updates on scheduling, budgeting and key milestones allow funding partners to monitor production activity without relying solely on periodic reports.",
  },
  {
    title: "Financial Reporting",
    subtitle: "Support transparency across the funding lifecycle.",
    body: "Detailed budget tracking and financial summaries help investors understand how resources are allocated and how spending evolves during production.",
  },
];

const additionalTools = [
  {
    title: "Real-Time Updates",
    subtitle: "Stay informed as projects evolve.",
    body: "Notifications and activity tracking ensure that investors remain aware of significant developments without needing to request updates manually.",
  },
  {
    title: "Direct Communication Channels",
    subtitle: "Facilitate structured dialogue with production teams.",
    body: "Centralised communication allows investors and filmmakers to exchange information efficiently, supporting timely decision-making.",
  },
  {
    title: "Detailed Financial Overviews",
    subtitle: "Assess performance with greater clarity.",
    body: "Comprehensive financial breakdowns and projections help funding partners evaluate project health and potential return scenarios.",
  },
];

const InvestorsFunding = () => {
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Film Investment Software for Investors & Funding Partners – Pzaz"
        description="Gain visibility, structure and confidence from development through delivery. Review project plans, track production progress and understand financial performance."
        url="https://pzaz.io/film-investment-software"
        keywords={[
          "film investment software",
          "film funding platform",
          "film investor tools",
          "production tracking for investors",
          "film financial reporting",
          "film project oversight",
        ]}
        canonical="https://pzaz.io/film-investment-software"
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
                text="For Investors & Funding Partners"
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
                Invest in Film Projects
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl mx-auto mb-10"
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                Gain visibility, structure and confidence from development through delivery.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Film investment often involves navigating uncertainty, incomplete information and fragmented
                communication between stakeholders. Pzaz provides a structured environment where investors can
                review project plans, track production progress and understand financial performance without
                relying on disconnected updates or informal reporting.
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
                  Start For Free
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
              Reduce Uncertainty{" "}
              <span className="text-muted-foreground font-normal">in Film Funding</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Support projects with greater clarity and accountability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Backing film projects carries inherent risk, particularly when financial planning lacks transparency
              or project oversight is inconsistent. Without reliable data and structured reporting, even promising
              productions can face avoidable setbacks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pzaz helps create a more accountable investment environment by centralising business planning,
              production tracking and financial reporting within a single system designed for filmmaking workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE TOOLS ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Investment Tools"
              title="Tools Designed for Film Investors and Funding Partners"
              description="Support informed decisions throughout the lifecycle of a project. Effective film investment depends on understanding both creative potential and operational execution."
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

      {/* ── ADDITIONAL CAPABILITIES ───────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Additional Capabilities"
              title="Additional Capabilities for Investment Oversight"
              description="Maintain alignment between financial partners and creative teams. Clear communication and structured reporting are essential when multiple stakeholders are involved in a production."
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalTools.map((card, i) => (
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
              <Pill text="AI Insights" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
                Intelligent Insights for Film Investment
              </h2>
              <p className="text-sm font-semibold text-primary mb-3">Support evaluation with data-informed analysis.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pzaz incorporates analytical tools that help identify patterns in production performance,
                financial trends and market positioning, allowing investors to complement their judgment
                with structured insight.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-8 space-y-5">
                {[
                  { label: "Production performance", pct: 85 },
                  { label: "Financial trend analysis", pct: 78 },
                  { label: "Market positioning", pct: 70 },
                  { label: "Investor oversight", pct: 100 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{label}</span>
                      {pct === 100 ? (
                        <span className="text-primary font-semibold">Full visibility</span>
                      ) : (
                        <span className="text-muted-foreground">{pct}%</span>
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

      {/* ── STRUCTURED APPROACH ───────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill text="The Bigger Picture" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6 mx-auto" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              A More Structured Approach to Film Investment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              As the film industry becomes more data-driven and globally interconnected, investors require tools
              that provide both creative context and operational transparency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pzaz supports this shift by connecting planning, production and financial oversight within a
              unified investment environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              {...fadeUp(0)}
              className="relative rounded-[38px] overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
              />
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative p-8 md:p-16 md:py-24 pb-12 text-center">
                <Pill
                  text="Start today"
                  className="bg-white text-primary mb-6 mx-auto"
                  icon={<img src={iconStar} alt="" className="w-4 h-4" />}
                />
                <h2 className="font-lato font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Ready to Invest with Greater Confidence?
                </h2>
                <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
                  Support professional film production within an environment that prioritises transparency,
                  accountability and structured collaboration.
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
                  <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/10 rounded-[10px]">
                      Sign Up Now
                    </Button>
                  </a>
                </div>
                <p className="text-white/60 text-sm">No credit card required. Start investing with structure.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestorsFunding;
