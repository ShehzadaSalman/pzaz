import React from "react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import StudioCard from "@/components/script/StudioCard";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconDocument from "@/assets/script/icon-document.svg";
import iconLock from "@/assets/script/icon-lock.svg";

const usps = [
  {
    title: "Unified Production Environment",
    tagline: "Zero Silos",
    description:
      "Scripts, breakdowns, schedules, budgets, tasks, files, and communication all live in the same environment — structurally connected by design.",
    highlight:
      "No plug-ins. No exports. No scattered information. Just a production system that behaves like a production system.",
    icon: iconEngine,
  },
  {
    title: "Scenes, Schedules & Planning — Connected",
    tagline: "Always in Sync",
    description:
      "When a scene changes, the schedule reflects it. When a location is updated, the call sheets adjust. Production context is always preserved.",
    highlight: "The production knows when something changes — without anyone having to tell it.",
    icon: iconFlow,
  },
  {
    title: "AI with Full Production Context",
    tagline: "Smarter Than a List",
    description:
      "AI tools operate within the complete project environment, assisting with script development, planning, and prioritisation — not just generating lists.",
    highlight: "AI doesn't decide what happens next. It makes sure the people who do decide can see clearly.",
    icon: iconAiResearch,
  },
  {
    title: "Team Communication Built In",
    tagline: "Real-Time Clarity",
    description:
      "Teams communicate inside the production structure itself. Discussions stay attached to the scenes, tasks, and files they refer to.",
    highlight: "Communication stops being noise around the production and becomes part of it.",
    icon: iconUserGroup,
  },
  {
    title: "Version Control Across the Production",
    tagline: "One Source of Truth",
    description:
      "Scripts, budgets, schedules, and files always reflect the current state of the project. No more asking which version is right.",
    highlight: "Everyone sees the same evolving picture of the production — always up to date.",
    icon: iconDocument,
  },
  {
    title: "Permission & Access Controls",
    tagline: "Right People, Right Info",
    description:
      "Control who sees what across departments. Sensitive financials stay private. Creative references stay accessible.",
    highlight: "The right information reaches the right people at exactly the right moment.",
    icon: iconLock,
  },
  {
    title: "Sprint & Milestone Planning",
    tagline: "Week by Week",
    description:
      "Plan production in focused periods — pre-production phases, shoot weeks, and post-production milestones — all visible in one timeline.",
    highlight: "Teams know what this week looks like. Nothing important falls between the cracks.",
    icon: iconSprint,
  },
  {
    title: "Real-Time Project Health Dashboard",
    tagline: "Always Visible",
    description:
      "See budget utilisation, task completion, schedule progress, and team activity in one live view — not assembled from five separate tools.",
    highlight: "Leadership sees the whole picture. Departments see their lane. Everyone stays aligned.",
    icon: iconTesting,
  },
];

const ProjectManagementUSPs = () => {
  return (
    <section id="capabilities" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="A System Designed for Production Reality"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              The Pzaz Difference:{" "}
              <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Fully Unified from the Ground Up
              </span>
            </>
          }
          description="Some platforms claim all-in-one. Behind the scenes, they rely on loosely connected modules and bolt-on tools. Pzaz is different — every function is designed to work together in real time."
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

export default ProjectManagementUSPs;
