import React from "react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import StudioCard from "@/components/script/StudioCard";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";

const usps = [
  {
    title: "Clear Task Assignment",
    tagline: "No Ambiguity",
    description: "Assign tasks clearly across departments so every piece of work has a named owner connected to the production.",
    highlight: "No more 'I thought you were handling that.' Ownership is explicit, visible, and tied to the work.",
    icon: iconUserGroup,
  },
  {
    title: "Deadline Tracking",
    tagline: "Production-Calibrated",
    description: "Track deadlines and milestones that reflect actual production timing, not arbitrary dates in a to-do app.",
    highlight: "Dates mean something because they exist inside the same scheduling context as the rest of production.",
    icon: iconTesting,
  },
  {
    title: "Task Boards & Priority Lists",
    tagline: "Visual Clarity",
    description: "Organise work using boards and priority lists that reflect the real rhythm of pre-production and principal photography.",
    highlight: "Every department sees their own lane. Leadership sees the whole picture.",
    icon: iconFlow,
  },
  {
    title: "Sprint-Style Planning",
    tagline: "Focused Work Periods",
    description: "Plan focused work periods designed for the production rhythm — week-by-week, prep phase by prep phase.",
    highlight: "Teams know what this week looks like. Nothing important falls between the cracks.",
    icon: iconSprint,
  },
  {
    title: "AI Dependency Surfacing",
    tagline: "Smarter Prioritisation",
    description: "AI assists with organising tasks, surfacing dependencies, and helping teams prioritise based on production structure.",
    highlight: "AI doesn't decide what happens next. It makes sure the people who do decide can see clearly.",
    icon: iconAiResearch,
  },
  {
    title: "Connected Production Workflow",
    tagline: "No Silos",
    description: "Task coordination stays connected to scripts, scenes, schedules, and planning — never drifting into an isolated tool.",
    highlight: "When a scene changes, related tasks update. The production stays in sync automatically.",
    icon: iconEngine,
  },
];

const TaskManagementUSPs = () => {
  return (
    <section id="capabilities" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="Built for Real Production Workflows"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              6 Ways Pzaz Task Management{" "}
              <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Keeps Production Moving
              </span>
            </>
          }
          description="Every capability is designed for producers, line producers, production managers, and department heads who need tasks to reflect production reality."
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

export default TaskManagementUSPs;
