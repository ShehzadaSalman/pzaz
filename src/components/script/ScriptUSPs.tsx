import React from "react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import StudioCard from "@/components/script/StudioCard";
import iconDocument from "@/assets/script/icon-document.svg";
import iconTextLine from "@/assets/script/icon-text-line.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconDocumentScanner from "@/assets/script/icon-document-scanner.svg";
import iconShapes from "@/assets/script/icon-shapes.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconVideo from "@/assets/script/icon-video.svg";
import iconShapeLine from "@/assets/script/icon-shape-line.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import { useTranslation } from "react-i18next";

const ScriptUSPs = () => {
  const { t } = useTranslation('script');
  const usps = [
    {
      title: "Tool-Agnostic Script Intake",
      tagline: "No Writer Lock-In",
      description: "Import scripts from Final Draft, Celtx, and standard formats without forcing writers to change tools.",
      highlight: "Zero friction at development stage. Freedom to work with any writer, agent, or partner.",
      icon: iconTextLine,
    },
    {
      title: "Script as Single Source of Truth",
      tagline: "Every Department Aligned",
      description: "One script drives breakdowns, schedules, budgets, casting, locations, and workflows.",
      highlight: "No duplicate interpretations. No silent mismatches. Every department pulls from the same live script data.",
      icon: iconDocument,
    },
    {
      title: "Production-Stage Version Control",
      tagline: "Development → Delivery",
      description: "Development drafts, shooting drafts, and locked scripts — clearly separated and tracked.",
      highlight: "Always know which version is active, approved, and what changed, when, and why.",
      icon: iconShapeLine,
    },
    {
      title: "AI for Production Reality",
      tagline: "Think Like a Production Team",
      description: "AI analyzes scripts for scope, complexity, location intensity, feasibility, and cost drivers.",
      highlight: "Studios greenlight with insight — not gut feeling. This happens before budgets are locked.",
      icon: iconDocumentScanner,
    },
    {
      title: "Automatic Script Breakdown",
      tagline: "Instant & Structured",
      description: "Elements are detected automatically, breakdowns are generated consistently, departments receive structured data.",
      highlight: "What used to take days now takes minutes. A script instantly becomes a production plan.",
      icon: iconShapes,
    },
    {
      title: "Department-Ready Data",
      tagline: "Actionable Production Data",
      description: "Script elements feed directly into scheduling, budgeting, location planning, and crew preparation.",
      highlight: "No duplication. No re-entry. No guessing. The script feeds production.",
      icon: iconVideo,
    },
    {
      title: "Real-Time Collaboration",
      tagline: "Decisions in Context",
      description: "Producers, line producers, ADs, and coordinators collaborate on the same script context.",
      highlight: "Fewer emails. No PDF chaos. Comments tied to scenes. Approvals tracked.",
      icon: iconUserGroup,
    },
    {
      title: "Reduced Greenlight Risk",
      tagline: "Scope & Cost Visibility",
      description: "Scripts become measurable early. Production complexity is visible before money is committed.",
      highlight: "Understand scope and cost before saying yes. Cost implications surface sooner.",
      icon: iconTesting,
    },
    {
      title: "Built to Scale",
      tagline: "From Film to Slate",
      description: "Works for single productions, multiple concurrent projects, and long-term studio workflows.",
      highlight: "Your process stays consistent. Institutional knowledge stays inside the system.",
      icon: iconFlow,
    },
    {
      title: "Speed Without Chaos",
      tagline: "Faster Time-to-Production",
      description: "Shorten the path from script delivery to day one of shooting without cutting corners.",
      highlight: "Better crew availability. Better location options. Lower development overhead.",
      icon: iconSprint,
    },
    {
      title: "Goodbye PDF Hell",
      tagline: "Live Scripts Replace Static Files",
      description: "No outdated PDFs floating around. No confusion over approvals. No lost revision history.",
      highlight: "Always know what was approved, when, and by whom. Cleaner legal and audit trails.",
      icon: iconAiResearch,
    },
    {
      title: "Built for Production Reality",
      tagline: "Not Writing Comfort",
      description: "Pzaz treats the script as a production engine, not a word processor.",
      highlight: "Writing tools end at FADE OUT. Pzaz starts there.",
      icon: iconEngine,
    },
  ];
  return (
    <section id="how-it-works" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("script.usps_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("script.usps_title")}{" "}
              <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("script.usps_title_highlight")}
              </span>
            </>
          }
          description={t("script.usps_desc")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[46px] max-w-7xl mx-auto">
          {usps.map((usp, index) => (
            <StudioCard
              key={usp.title}
              title={usp.title}
              tagline={usp.tagline}
              description={usp.description}
              highlight={usp.highlight}
              icon={usp.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScriptUSPs;
