import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import {
  PenLine,
  Film,
  Users,
  Clapperboard,
  Camera,
  GraduationCap,
  FileVideo,
  ClipboardList,
  Tv,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const audiences = [
  {
    id: "indie",
    icon: Film,
    label: "Indie Filmmakers",
    headline: "Studio Level Capability Without Studio Infrastructure",
    description:
      "Independent creators often balance creative ambition with operational constraint. Pzaz provides the structural tools required to manage production complexity without increasing financial pressure.",
    capabilities: [
      "Industry standard script development tools",
      "Storyboards connected directly to scripts",
      "AI assistance for creative and planning tasks",
      "Production planning and scheduling tools",
      "Real time collaboration across distributed teams",
    ],
    link: "/indie-filmmaking-software",
  },
  {
    id: "screenwriters",
    icon: PenLine,
    label: "Screenwriters",
    headline: "Focus on Craft While Maintaining Professional Control",
    description:
      "Writing depends on sustained concentration. Administrative friction can easily disrupt creative momentum. Pzaz supports writers with structured tools that preserve workflow continuity while ensuring version integrity.",
    capabilities: [
      "Automatic professional formatting",
      "Draft version management",
      "AI support for narrative exploration and dialogue refinement",
      "Live collaboration with co writers",
      "Flexible script templates",
    ],
    link: "/screenwriting-software",
  },
  {
    id: "directors",
    icon: Clapperboard,
    label: "Directors and Producers",
    headline: "Maintain Production Visibility from Concept Through Delivery",
    description:
      "Directorial vision succeeds when supported by precise execution. Pzaz centralises the operational dimensions of production so leadership decisions are guided by real time context.",
    capabilities: [
      "Scene breakdown tools and strip boards",
      "Call sheet creation and distribution",
      "Cast and crew coordination",
      "Scheduling and production calendar integration",
      "Centralised workspace for production assets",
    ],
    link: "/software-for-directors-producers",
  },
  {
    id: "production-teams",
    icon: Users,
    label: "Production Teams",
    headline: "Organised Execution Across Departments",
    description:
      "In production, outcomes are shaped by coordination rather than isolated performance. Pzaz supports this by introducing structured collaboration systems that increase transparency and collective accountability.",
    capabilities: [
      "Task management boards for workflow tracking",
      "Integrated communication tools",
      "Real time updates and notifications",
      "Secure file sharing",
      "Centralised collaboration space",
    ],
    link: "/film-production-team-software",
  },
  {
    id: "cinematographers",
    icon: Camera,
    label: "Cinematographers and Storyboard Artists",
    headline: "Translate Narrative Intention into Visual Precision",
    description:
      "Effective visual planning depends on tools that connect creative interpretation with practical production constraints. Pzaz enables visual teams to align artistic decisions with script structure and real world production requirements.",
    capabilities: [
      "Flexible digital storyboarding",
      "Scene synchronisation with scripts",
      "Shot linking for planning continuity",
      "AI assisted visual ideation",
      "Beat sheets for pacing design",
    ],
    link: "/software-for-cinematographers",
  },
  {
    id: "schools",
    icon: GraduationCap,
    label: "Film Schools and Students",
    headline: "Professional Tools Supporting Educational Development",
    description:
      "Learning filmmaking requires exposure to real production processes. Pzaz simplifies complex workflows so students can develop practical understanding alongside creative skills.",
    capabilities: [
      "Accessible scriptwriting and storyboarding tools",
      "Production planning features for practical learning",
      "Educational access programmes",
      "Collaborative project environments",
      "Professional grade workflows",
    ],
    link: "/film-schools-software",
  },
  {
    id: "documentary",
    icon: FileVideo,
    label: "Documentary Filmmakers",
    headline: "Structured Support for Non Linear Storytelling",
    description:
      "Documentary production introduces unique planning challenges. Narratives evolve during filming and logistics often shift. Pzaz provides adaptable planning tools that accommodate fluid storytelling structures.",
    capabilities: [
      "Non linear script structuring",
      "Episodic content organisation",
      "Location management integration",
      "Detailed production planning tools",
      "Collaborative narrative adjustment",
    ],
    link: "/documentary-filmmaking-software",
  },
  {
    id: "managers",
    icon: ClipboardList,
    label: "Production Managers",
    headline: "Operational Clarity Across Complex Productions",
    description:
      "Production management requires comprehensive oversight. Pzaz consolidates scheduling, coordination and documentation into a single operational framework.",
    capabilities: [
      "Detailed scheduling systems",
      "Crew and cast logistics tools",
      "Task tracking environments",
      "Centralised document sharing",
      "Real time update visibility",
    ],
    link: "/software-for-production-managers",
  },
  {
    id: "tv",
    icon: Tv,
    label: "Television and Series Creators",
    headline: "Manage Episodic Complexity with Structural Consistency",
    description:
      "Series production introduces scale and continuity challenges. Pzaz enables creators to manage multi episode development within a unified system.",
    capabilities: [
      "Episodic project management",
      "Audio visual script support",
      "Version tracking across episodes",
      "Season level scheduling tools",
      "Collaborative development environments",
    ],
    link: "/tv-series-production-software",
  },
  {
    id: "investors",
    icon: TrendingUp,
    label: "Investors and Funding Partners",
    headline: "Transparent Production Insight Supporting Investment Decisions",
    description:
      "Film investment involves creative uncertainty and financial risk. Pzaz provides structured visibility into production planning and execution.",
    capabilities: [
      "Integrated project planning tools",
      "Industry data connections",
      "Financial reporting visibility",
      "Centralised communication with production teams",
      "Real time progress tracking",
    ],
    link: "/film-investment-software",
  },
];

const AudienceCard = ({
  audience,
  index,
}: {
  audience: (typeof audiences)[0];
  index: number;
}) => {
  const Icon = audience.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * (index % 4) }}
      className="rounded-2xl border border-[#E6D7F7] bg-[#F6FCFC] p-8 flex flex-col gap-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
    >
      {/* Icon + label */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="font-lato font-black text-xs uppercase tracking-widest text-primary">
          {audience.label}
        </span>
      </div>

      {/* Headline */}
      <h3 className="font-lato font-extrabold text-xl leading-snug text-foreground">
        {audience.headline}
      </h3>

      {/* Description */}
      <p className="font-lato text-[15px] leading-relaxed text-[#878787]">
        {audience.description}
      </p>

      {/* Capabilities */}
      <div className="flex flex-col gap-2 mt-1">
        <p className="font-lato font-bold text-xs uppercase tracking-widest text-[#5C28A3]">
          Key capabilities
        </p>
        <ul className="flex flex-col gap-1.5">
          {audience.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-lato text-[14px] leading-relaxed text-foreground">
                {cap}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Link */}
      <Link
        to={audience.link}
        className="mt-auto inline-flex items-center gap-1.5 font-lato font-bold text-sm text-primary hover:gap-2.5 transition-all duration-200"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

const EmpoweringFilmmaking = () => {
  const { t } = useTranslation();
  const indieCheckoutUrl = useIndieCheckoutUrl();

  return (
    <PageLayout>
      <SEO
        title="Empowering Every Aspect of Filmmaking | Pzaz"
        description="Pzaz is designed to support the entire filmmaking ecosystem — from indie filmmakers and screenwriters to production teams, investors and film schools."
        canonical="https://pzaz.io/empowering-filmmaking"
      />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gradient background */}
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
              Solutions
            </span>
            <h1 className="font-lato font-extrabold text-4xl md:text-[52px] leading-tight text-foreground mb-6">
              A Platform Designed to Support the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                Entire Filmmaking Ecosystem
              </span>
            </h1>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-4">
              Filmmaking is not a single discipline. It is a coordinated process
              shaped by both creative judgment and operational decisions.
            </p>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-4">
              Pzaz was designed to support this reality. Writers, directors,
              producers, crews and investors each engage with production from
              different perspectives. The platform adapts to these roles so
              collaboration becomes structured, clear and reliable.
            </p>
            <p className="font-lato text-lg leading-relaxed text-[#878787] mb-10">
              The result is greater clarity, stronger execution and more
              predictable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  Start Now
                </Button>
              </a>
              <Link to="#solutions">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Find Your Solution
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Audience Cards Grid ── */}
      <section id="solutions" className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-lato font-extrabold text-3xl md:text-[40px] leading-tight text-foreground">
              Built for Every Role in Production
            </h2>
            <p className="font-lato text-[17px] leading-relaxed text-[#878787] mt-3 max-w-2xl mx-auto">
              Select your role below to explore how Pzaz supports your specific
              workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {audiences.map((audience, index) => (
              <AudienceCard key={audience.id} audience={audience} index={index} />
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
            {/* Decorative glow */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(92,40,163,0.5) 0%, transparent 70%)",
              }}
            />

            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-widest bg-white/10 text-white/70">
              Get Started
            </span>
            <h2 className="font-lato font-extrabold text-3xl md:text-[44px] leading-tight text-white mb-5">
              Ready to Transform Your Filmmaking Process
            </h2>
            <p className="font-lato text-lg leading-relaxed text-white/70 max-w-xl mx-auto mb-3">
              Creative industries often underestimate the value of well designed
              systems.
            </p>
            <p className="font-lato text-lg leading-relaxed text-white/70 max-w-xl mx-auto mb-10">
              Pzaz introduces structural clarity to filmmaking so effort is
              directed toward outcomes rather than operational alignment.
            </p>
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg">
                Get Started for Free
              </Button>
            </a>
            <p className="font-lato text-sm text-white/40 mt-4">
              No credit card required. Start creating.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EmpoweringFilmmaking;
