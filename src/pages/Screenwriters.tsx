import React from "react";
import { motion } from "framer-motion";
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

const toolsData = [
  {
    title: "Industry-Standard Formatting",
    subtitle: "Let structure support the story.",
    body: "Scripts are automatically formatted according to established standards, reducing the need for manual adjustments and allowing writers to focus on narrative development.",
  },
  {
    title: "Collaborative Writing",
    subtitle: "Work with others without losing clarity.",
    body: "Co-writers and editors can contribute within the same document environment, ensuring that feedback, revisions and discussion remain connected to the script.",
  },
  {
    title: "Draft Management",
    subtitle: "Maintain continuity across revisions.",
    body: "Version tracking and autosave features help writers explore changes without losing earlier iterations, creating a more flexible development process.",
  },
  {
    title: "Intelligent Creative Support",
    subtitle: "Navigate moments of creative hesitation.",
    body: "Integrated assistance tools can help generate ideas or explore dialogue variations, offering optional support during challenging stages of writing.",
  },
];

const additionalTools = [
  {
    title: "Project Organisation",
    subtitle: "Manage multiple scripts with clarity.",
    body: "Writers can maintain oversight across different projects, drafts and development stages within one structured workspace.",
  },
  {
    title: "Real-Time Collaboration",
    subtitle: "Maintain context during shared writing.",
    body: "Live editing and commenting features allow teams to work together without losing narrative continuity.",
  },
  {
    title: "Creative Assistance",
    subtitle: "Support momentum during development.",
    body: "Optional AI tools can help with ideation or structural analysis while preserving the writer's creative authority.",
  },
];

const Screenwriters = () => {
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Screenwriting Software for Writers – Pzaz"
        description="A writing environment designed for screenwriters. Stay focused on the story while formatting, collaboration and version management are handled in the background."
        url="https://pzaz.io/screenwriting-software"
        keywords={[
          "screenwriting software",
          "screenplay writing tool",
          "script formatting software",
          "collaborative screenwriting",
          "draft management for writers",
          "screenwriter tools",
        ]}
        canonical="https://pzaz.io/screenwriting-software"
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
                text="For Screenwriters"
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
              A Writing Environment{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Designed for Screenwriters
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl mx-auto mb-10"
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                Stay focused on the story while everything else stays organised.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Writing a screenplay requires sustained concentration, creative momentum and the ability to move
                between drafts without losing clarity. Pzaz provides a structured writing space where formatting,
                collaboration and version management are handled in the background, allowing writers to remain
                fully engaged with the work itself.
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
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
                >
                  Streamline Your Process
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
              Writing Should Feel Challenging,{" "}
              <span className="text-muted-foreground font-normal">Not Complicated</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Remove the friction that interrupts creative flow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Screenwriting already demands enough mental energy without technical distractions slowing the process.
              Managing formatting, tracking revisions and coordinating with collaborators can gradually pull
              attention away from the story. Pzaz helps simplify these practical aspects of writing so that
              creative effort is directed where it matters most, whether you are developing early ideas or refining
              a final draft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Core Writing Tools"
              title="Tools That Support the Writing Process"
              description="Create, revise and collaborate within one consistent environment. Writers often move between multiple tools to manage drafts, feedback and formatting, which can fragment concentration and disrupt momentum."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {toolsData.map((card, i) => (
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

      {/* ── ADDITIONAL TOOLS ──────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Additional Tools"
              title="Additional Tools for Writers"
              description="Support creative exploration without disruption. Writing environments should reduce cognitive load rather than introduce new layers of complexity."
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
              <Pill text="AI Support" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
                Thoughtful Creative Support
              </h2>
              <p className="text-sm font-semibold text-primary mb-3">Tools designed to assist, not replace.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                AI within Pzaz is intended to support the writing process by providing suggestions and structural
                insights, rather than directing creative decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Writers remain fully in control of tone, pacing and narrative direction.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-8 space-y-5">
                {[
                  { label: "Dialogue suggestions", pct: 15 },
                  { label: "Scene structure analysis", pct: 20 },
                  { label: "Pacing insights", pct: 12 },
                  { label: "Writer's authority", pct: 100 },
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

      {/* ── INTEGRATED APPROACH ──────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill text="The Bigger Picture" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6 mx-auto" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              A More Integrated Approach to Screenwriting
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              As writing becomes increasingly collaborative and digitally mediated, writers benefit from environments
              that combine craft support with practical workflow management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pzaz provides a unified space where storytelling and revision can evolve without unnecessary friction.
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
                  text="Free 7-day trial"
                  className="bg-white text-primary mb-6 mx-auto"
                  icon={<img src={iconStar} alt="" className="w-4 h-4" />}
                />
                <h2 className="font-lato font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Ready to Focus Fully on the Story?
                </h2>
                <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
                  Work within a writing environment that supports concentration, creative exploration and
                  collaborative development.
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
                <p className="text-sm text-white/60">No credit card required.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Screenwriters;
