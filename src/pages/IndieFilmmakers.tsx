import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import StudioCard from "@/components/script/StudioCard";
import { Button } from "@/components/ui/button";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import { AlertTriangle, Sparkles, CheckCircle2 } from "lucide-react";

import iconMoneyBag from "@/assets/script/icon-money-bag.svg";
import iconSafetyCert from "@/assets/script/icon-safety-cert.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconDocument from "@/assets/script/icon-document.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";

const problems = [
  { text: "Budgets are constrained." },
  { text: "Workflows are improvised." },
  { text: "Critical information lives in disconnected tools." },
];

const coreBenefits = [
  {
    icon: iconMoneyBag,
    tagline: "Cost Effective Solution",
    title: "Maximise Creative Output Without Financial Pressure",
    description:
      "Independent productions operate within clear financial limits. Managing multiple subscriptions, tools and workflows introduces hidden costs that compound over time. Pzaz replaces fragmented software stacks with a single platform designed to deliver more capability per budget allocated.",
    highlight: "More capability per budget — without the fragmentation tax.",
  },
  {
    icon: iconSafetyCert,
    tagline: "Full Creative Control",
    title: "Your Vision Maintains Integrity from Concept to Screen",
    description:
      "Creative independence is meaningful only when supported by practical execution. Pzaz allows filmmakers to oversee every phase of production while maintaining authorship over artistic decisions.",
    highlight: "Artistic decisions stay yours. Pzaz provides the structure to execute them.",
  },
  {
    icon: iconEngine,
    tagline: "Streamlined Workflow",
    title: "One Platform Supporting the Entire Production Process",
    description:
      "When creative work is distributed across disconnected tools, efficiency becomes difficult to sustain. Pzaz integrates writing, visual planning and production preparation into a single structured environment.",
    highlight: "Less administrative overhead. More sustained creative momentum.",
  },
  {
    icon: iconUserGroup,
    tagline: "Effortless Collaboration",
    title: "Keep Your Team Aligned Regardless of Location",
    description:
      "Independent filmmaking often involves distributed teams working under time constraints. Pzaz enables real time collaboration so contributors remain synchronised and accountable throughout the project lifecycle.",
    highlight: "Your team stays in sync — no matter where they are.",
  },
];

const additionalFeatures = [
  {
    icon: iconDocument,
    tagline: "Script to Screen",
    title: "Seamless Scriptwriting and Storyboarding",
    description:
      "Draft, refine and visualise scripts within a single environment. Integrated storyboarding tools ensure the transition from written narrative to visual planning remains fluid and efficient.",
    highlight: "From written concept to visual structure — without switching tools.",
  },
  {
    icon: iconFlow,
    tagline: "Production Clarity",
    title: "Effortless Production Planning and Collaboration",
    description:
      "Production planning requires structured coordination. Pzaz supports scheduling, budgeting and workflow alignment with real time visibility for all contributors.",
    highlight: "Clarity across teams and timelines, from day one to wrap.",
  },
  {
    icon: iconAiResearch,
    tagline: "AI Powered",
    title: "AI Powered Enhancements for Indie Filmmakers",
    description:
      "Artificial intelligence within Pzaz is designed to enhance rather than replace creative decision making. Filmmakers receive analytical insights that improve narrative clarity and production feasibility.",
    highlight: "Intelligent assistance that supports creative judgment — not replaces it.",
  },
];

const testimonials = [
  {
    quote:
      "Pzaz has transformed the way we manage production. We spend more time developing ideas and significantly less time coordinating logistics.",
    name: "Alex Carter",
    role: "Independent Filmmaker",
    title: "Championing Indie Projects",
  },
  {
    quote:
      "The platform allows our team to work with clarity and confidence. Decisions are made faster and projects progress with fewer uncertainties.",
    name: "Sofia Martinez",
    role: "Producer",
    title: "Enhancing Creative Collaboration",
  },
  {
    quote:
      "Pzaz provides structure without restricting creativity. It supports both the artistic and operational realities of filmmaking.",
    name: "Daniel Brooks",
    role: "Director",
    title: "Enabling Efficient Execution",
  },
];

const IndieFilmmakers = () => {
  const { t } = useTranslation('solutions-indie-filmmakers');
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Production Software for Indie Filmmakers | Pzaz"
        description="Pzaz brings the full indie filmmaking process into one intelligent environment — scriptwriting, storyboarding, planning, collaboration and distribution in one place."
        canonical="https://pzaz.io/film-production-solution/software-for-indie-filmmakers"
      />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--primary)/0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-primary/10 text-primary">
              For Indie Filmmakers
            </span>
            <h1 className="font-lato font-extrabold text-4xl md:text-[52px] leading-tight text-foreground mb-6">
              The Ultimate Filmmaking Platform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                for Indie Creators
              </span>
            </h1>
            <p className="font-lato text-xl font-bold text-foreground mb-4">
              Everything You Need to Create, Produce and Distribute in One Place
            </p>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-4">
              Independent filmmaking should not feel like an exercise in software management.
              Pzaz brings the filmmaking process into a single intelligent environment so creators
              can move from idea to finished film with clarity and control.
            </p>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-10 italic">
              This is not another creative tool. It is operational infrastructure for storytelling.
            </p>
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg">
                Start Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-red-50 text-red-500">
                The Challenge
              </span>
              <h2 className="font-lato font-extrabold text-3xl md:text-[40px] leading-tight text-foreground mb-4">
                Why Indie Filmmaking Feels Harder Than It Should
              </h2>
              <p className="font-lato font-bold text-lg text-foreground mb-2">
                The Biggest Challenges Indie Filmmakers Face
              </p>
              <p className="font-lato text-[#878787] text-base leading-relaxed mb-6">
                Independent creators are not limited by imagination. They are limited by fragmentation.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                {problems.map(({ text }) => (
                  <div key={text} className="flex items-center gap-3 p-4 rounded-xl border border-red-100 bg-red-50/50">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="font-lato text-[15px] text-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <p className="font-lato text-[#878787] text-base leading-relaxed mb-6">
                This introduces unnecessary friction at every stage of production. Momentum slows.
                Decisions take longer. Costs increase in subtle ways.
              </p>
              <p className="font-lato text-base leading-relaxed text-foreground mb-6">
                Pzaz simplifies the filmmaking process by unifying the tools required to plan, create
                and deliver a film within one coherent system.
              </p>
              <Link to="/film-production-software/indie-filmmakers">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-[#E6D7F7] bg-[#F6FCFC] p-8 flex flex-col gap-4"
            >
              <p className="font-lato font-bold text-sm uppercase tracking-widest text-primary">
                With Pzaz
              </p>
              {[
                "One platform replaces fragmented tools",
                "Budgets stay visible and under control",
                "Teams collaborate in real time from anywhere",
                "Scripts and storyboards stay connected",
                "Production planning and scheduling in one place",
                "AI assistance at every creative stage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-lato text-[15px] text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Benefits ── */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-primary/10 text-primary">
              Why Pzaz
            </span>
            <h2 className="font-lato font-extrabold text-3xl md:text-[40px] leading-tight text-foreground mb-3">
              Empowering Indie Filmmakers with an All in One Solution
            </h2>
            <p className="font-lato text-lg text-[#878787] max-w-2xl mx-auto">
              Comprehensive Capability at a Rational Cost
            </p>
            <p className="font-lato text-base text-[#878787] max-w-2xl mx-auto mt-2">
              Indie filmmaking requires precision as much as creativity. Pzaz provides the structural
              support needed to execute ambitious ideas without operational strain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[46px] max-w-5xl mx-auto">
            {coreBenefits.map((benefit, i) => (
              <StudioCard
                key={benefit.title}
                icon={benefit.icon}
                tagline={benefit.tagline}
                title={benefit.title}
                description={benefit.description}
                highlight={benefit.highlight}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Features ── */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-primary/10 text-primary">
              Features
            </span>
            <h2 className="font-lato font-extrabold text-3xl md:text-[40px] leading-tight text-foreground mb-3">
              Additional Features to Support Indie Filmmaking
            </h2>
            <p className="font-lato text-lg text-[#878787] max-w-2xl mx-auto">
              Practical Tools for Real Production Conditions
            </p>
            <p className="font-lato text-base text-[#878787] max-w-2xl mx-auto mt-2">
              Independent productions require adaptability. Pzaz provides tools that support both
              creative development and operational execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-[46px] max-w-5xl mx-auto">
            {additionalFeatures.map((feat, i) => (
              <StudioCard
                key={feat.title}
                icon={feat.icon}
                tagline={feat.tagline}
                title={feat.title}
                description={feat.description}
                highlight={feat.highlight}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Section ── */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#E6D7F7] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #F6FCFC 0%, #F0EBFF 100%)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 flex flex-col justify-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="font-lato font-black text-xs uppercase tracking-widest text-primary">
                      AI Powered
                    </span>
                    <h2 className="font-lato font-extrabold text-2xl md:text-3xl leading-tight text-foreground mt-1 mb-3">
                      Smart AI Tools for Enhanced Filmmaking
                    </h2>
                    <p className="font-lato font-bold text-base text-foreground mb-2">
                      AI Assistants Supporting Practical Creativity
                    </p>
                    <p className="font-lato text-[15px] leading-relaxed text-[#878787] mb-6">
                      Pzaz integrates AI tools that assist with script development, scene evaluation
                      and planning decisions. This accelerates production readiness while allowing
                      creators to remain focused on storytelling.
                    </p>
                    <Link to="/film-production-software/indie-filmmakers#ai">
                      <Button variant="default" size="sm">
                        Explore AI Features
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-10 flex flex-col gap-4 justify-center">
                  {[
                    "Script development assistance",
                    "Scene evaluation and narrative clarity",
                    "Production feasibility analysis",
                    "AI driven visual ideation for storyboards",
                    "Dialogue refinement support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-lato text-[15px] text-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Future CTA Banner ── */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-primary/10 text-primary">
              The Future
            </span>
            <h2 className="font-lato font-extrabold text-3xl md:text-[40px] leading-tight text-foreground mb-5">
              The Future of Indie Filmmaking Starts Here
            </h2>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-3">
              Independent filmmaking is evolving towards systems that reduce friction while preserving
              artistic autonomy.
            </p>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-8">
              Pzaz represents this shift by combining efficiency with creative empowerment.
            </p>
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg">
                Sign Up Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-2xl border border-[#E6D7F7] bg-[#F6FCFC] p-7 flex flex-col gap-4"
              >
                <p className="font-lato font-black text-xs uppercase tracking-widest text-primary">
                  {t.title}
                </p>
                <p className="font-lato text-[15px] leading-relaxed text-foreground italic flex-1">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-lato font-bold text-sm text-foreground">{t.name}</p>
                  <p className="font-lato text-xs text-[#878787]">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden text-center py-20 px-8"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, #1A0050 0%, #0D0028 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(92,40,163,0.5) 0%, transparent 70%)",
              }}
            />
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-white/10 text-white/70">
              Get Started
            </span>
            <h2 className="font-lato font-extrabold text-3xl md:text-[44px] leading-tight text-white mb-5">
              Ready to Empower Your Indie Filmmaking
            </h2>
            <p className="font-lato text-lg leading-relaxed text-white/70 max-w-xl mx-auto mb-3">
              Join Pzaz and access a filmmaking platform designed to support the full creative
              lifecycle.
            </p>
            <p className="font-lato text-lg leading-relaxed text-white/70 max-w-xl mx-auto mb-10">
              Simplify workflows, strengthen collaboration and move from concept to completion with
              greater confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">
                  Start for Free
                </Button>
              </a>
              <a
                href="https://calendly.com/pzaz/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Book a Demo
                </Button>
              </a>
            </div>
            <p className="font-lato text-sm text-white/40">
              No credit card required. Unlock your creative potential.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndieFilmmakers;
