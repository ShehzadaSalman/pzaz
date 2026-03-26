import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import iconStar from "@/assets/material-symbols_family-star.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import iconGlobe from "@/assets/icon-globe.svg";
import iconFlowchart from "@/assets/icon-flowchart.svg";
import iconSurvey from "@/assets/icon-survey.svg";
import heroDashboard from "@/assets/breakdown/hero-dashboard.webp";

// ── fade-up helper ──────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

// ── Feature pill list ───────────────────────────────────────────
const features = [
  "Script writing",
  "Shot lists",
  "Storyboards",
  "Production planning",
  "Task management",
  "Team collaboration",
  "File sharing",
  "Scene breakdowns",
  "Scheduling",
  "30+ languages",
];

// ── Why section cards ───────────────────────────────────────────
const whyCards = [
  {
    icon: iconFlowchart,
    title: "Teaches Real Workflows",
    body: "Students learn filmmaking through a structured process that mirrors professional production environments — not patchwork tools.",
  },
  {
    icon: iconSurvey,
    title: "Instructor Visibility",
    body: "Teachers gain clear visibility into participation, progress, and deliverables without micromanaging every group project.",
  },
  {
    icon: iconGlobe,
    title: "30+ Languages",
    body: "Pzaz removes language barriers so students and educators can work in their native language, improving inclusion and confidence.",
  },
  {
    icon: aiResearchIcon,
    title: "AI-Powered Learning",
    body: "Students discover modern production workflows that combine real-time collaboration with AI-assisted features — the future of filmmaking.",
  },
];

// ── What you get items ──────────────────────────────────────────
const whatYouGet = [
  { emoji: "🎓", label: "Free student access" },
  { emoji: "📋", label: "Onboarding for faculty" },
  { emoji: "📁", label: "Teaching templates" },
  { emoji: "🎯", label: "Training workshops" },
  { emoji: "💬", label: "Priority support" },
  { emoji: "🚀", label: "Graduate discount plan" },
];

// ── Connected flow steps ────────────────────────────────────────
const flowSteps = [
  { step: "01", label: "Scripts connect to shot lists" },
  { step: "02", label: "Shot lists connect to production plans" },
  { step: "03", label: "Tasks connect to team members" },
  { step: "04", label: "Communication happens inside the project" },
];

const Schools = () => {
  return (
    <PageLayout>
      <SEO
        title="Pzaz for Schools – Free Filmmaking Platform for Film Education"
        description="The first filmmaking platform built for film schools. Completely free for schools and students. Replace fragmented tools with one connected production workspace."
        url="https://pzaz.io/film-schools-software"
        keywords={[
          "pzaz for schools",
          "film school platform",
          "filmmaking education software",
          "free film production tools for students",
          "film school collaboration",
          "film education platform",
        ]}
        canonical="https://pzaz.io/film-schools-software"
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
                text="Free for Film Schools & Students"
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
              The First Filmmaking Platform{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
              >
                Built for Film Schools
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl mx-auto mb-10"
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                Pzaz is an all-in-one filmmaking workspace that replaces scripts, planning tools,
                production management, and collaboration software with one platform designed
                specifically for film schools.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
                Completely free for schools and students.
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
              <a href="https://projector.pzaz.io/checkout?plan=indie&period=month&addons=indie_free&currency=EUR" target="_blank" rel="noopener noreferrer">
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
                  Get Pzaz for Your School
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-muted-foreground"
            >
              No licenses or hidden costs.
            </motion.p>
          </div>

        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <Pill text="The Problem" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6 text-foreground">
              Film schools teach collaboration.<br />
              <span className="text-muted-foreground font-normal">But the tools don't.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Scripts live in Google Docs. Planning happens in Trello. Files sit in Drive. Teams communicate in
              messaging apps. Nothing connects, and no one sees the full picture.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Google Docs",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg",
              },
              {
                name: "Trello",
                icon: "https://cdn.worldvectorlogo.com/logos/trello.svg",
              },
              {
                name: "Google Drive",
                icon: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
              },
              {
                name: "Slack",
                icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
              },
            ].map((tool, i) => (
              <motion.div key={tool.name} {...fadeUp(i * 0.08)}>
                <div className="relative rounded-xl border border-border bg-background p-5 flex flex-col items-center gap-3 text-center">
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                  <p className="text-sm font-medium text-muted-foreground">{tool.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OS FOR SCHOOLS ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text="One Platform" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6">
                The Operating System for Film Schools
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Pzaz brings the entire filmmaking process into one platform so students can learn real production
                workflows while teachers maintain visibility and control.
              </p>
              <div className="space-y-4">
                {flowSteps.map(({ step, label }, i) => (
                  <motion.div key={step} {...fadeUp(i * 0.1)} className="flex items-center gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                      style={{ background: "linear-gradient(135deg, #29FADF, #8B1DFF)" }}
                    >
                      {step}
                    </div>
                    <p className="text-foreground font-medium">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Everything Connected
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {features.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY SCHOOLS ARE SWITCHING ────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <SectionHeader
              pillText="Why Film Schools Are Switching"
              title="Film education works best when the tools support the creative process."
              description="Most filmmaking tools are either too simple or built for professional crews. Pzaz is the tool film schools actually need."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyCards.map((card, i) => (
              <motion.div key={card.title} {...fadeUp(i * 0.1)}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <img src={card.icon} alt="" className="w-6 h-6" />
                  </div>
                  <h3 className="font-lato font-bold text-lg text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHERS VISIBILITY ──────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div {...fadeUp(0.1)} className="order-2 md:order-1">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <div className="text-sm font-semibold text-foreground mb-2">Project Overview — Year 2 Production</div>
                {["Alex Chen", "Maria Santos", "James Okafor", "Priya Nair"].map((name, i) => (
                  <div key={name} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                      style={{ background: "linear-gradient(135deg, #29FADF, #8B1DFF)" }}
                    >
                      {name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-foreground">{name}</div>
                      <div className="w-full bg-border rounded-full h-1.5 mt-1">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-[#29FADF] to-[#8B1DFF]"
                          style={{ width: `${[85, 72, 90, 60][i]}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{[85, 72, 90, 60][i]}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0)} className="order-1 md:order-2">
              <Pill text="For Educators" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
                Teachers Finally See What Is Happening
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Instructors gain clear visibility into participation, progress, and project development without
                micromanaging students.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pzaz provides a clear view of project activity, team collaboration, and student deliverables.
                Instructors can review progress, provide feedback, and guide the project from within the same
                platform students are already using.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill
              text="Built for International Classrooms"
              className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6"
              icon={<img src={iconGlobe} alt="" className="w-4 h-4" />}
            />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6">
              Works in More Than 30 Languages
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Pzaz removes language barriers so students can collaborate in the language they learn and create in.
              For international programs and diverse classrooms, this makes a meaningful difference.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "English",    flag: "🇬🇧" },
                { label: "Spanish",    flag: "🇪🇸" },
                { label: "French",     flag: "🇫🇷" },
                { label: "German",     flag: "🇩🇪" },
                { label: "Italian",    flag: "🇮🇹" },
                { label: "Portuguese", flag: "🇵🇹" },
                { label: "Japanese",   flag: "🇯🇵" },
                { label: "Korean",     flag: "🇰🇷" },
                { label: "Chinese",    flag: "🇨🇳" },
                { label: "Arabic",     flag: "🇸🇦" },
                { label: "Dutch",      flag: "🇳🇱" },
                { label: "Russian",    flag: "🇷🇺" },
                { label: "+ 20 more",  flag: "🌍" },
              ].map(({ label, flag }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-primary/20 bg-primary/5 text-primary"
                >
                  <span>{flag}</span>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FREE FOR FILM SCHOOLS ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text="Education Program" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">
                Free for Film Schools
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We believe film students should learn using real tools. That is why Pzaz offers a dedicated
                education program designed specifically for film schools and training institutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Programs can start with a single class or expand across the entire institution. No expensive licenses.
                No complicated software stacks.
              </p>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  Book a Demo
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="grid grid-cols-2 gap-4">
                {whatYouGet.map(({ emoji, label }, i) => (
                  <motion.div key={label} {...fadeUp(i * 0.07)}>
                    <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3">
                      <span className="text-2xl">{emoji}</span>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLASSROOM TO CAREER ───────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <Pill text="From Classroom to Career" className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6">
              The Workflow Graduates Take With Them
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Students can continue using Pzaz after graduation at a deeply discounted personal plan — carrying
              their workflow from school into professional filmmaking. Education should prepare students for the
              real world. Pzaz helps make that transition smoother.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp(0)} className="relative rounded-[38px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
              />
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-8 md:p-16 md:py-24 pb-12 text-center">
                <SectionHeader
                  pillText="See It in Action"
                  pillClassName="bg-white text-primary mb-0"
                  pillIcon={<img src={iconStar} alt="" className="w-4 h-4" />}
                  title="See How a Student Film Runs Inside Pzaz"
                  titleClassName="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground"
                  description="In a short demo we will walk you through a complete filmmaking workflow, from the first script draft to the final production plan. You will see how students collaborate, how teachers guide the process, and how an entire production can be managed in one platform."
                  descriptionClassName="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4"
                />

                <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
                  Schools can also start with a small pilot program to test the platform in a single class before expanding.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="xl"
                      variant="outline"
                      className="group bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px] px-8"
                      postfixIcon={<ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />}
                    >
                      Book a Demo
                    </Button>
                  </a>
                  <a href="https://projector.pzaz.io/checkout?plan=indie&period=month&addons=indie_free&currency=EUR" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="xl"
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px] px-8"
                    >
                      Start a Free Pilot
                    </Button>
                  </a>
                </div>

                <p className="mt-8 text-sm text-primary-foreground/60">
                  The filmmaking workspace designed for education. Built for makers. Trusted by educators.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Schools;
