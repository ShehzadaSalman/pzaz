import React from "react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import StudioCard from "@/components/script/StudioCard";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconLock from "@/assets/script/icon-lock.svg";
import iconRefresh from "@/assets/script/icon-refresh.svg";

const usps = [
  {
    title: "Secure Cloud Storage",
    tagline: "Always Protected",
    description: "Store production files securely in the cloud with enterprise-grade protection so your assets are safe throughout the lifecycle.",
    highlight: "Raw footage, final exports, scripts, and references — all protected and accessible from anywhere.",
    icon: iconLock,
  },
  {
    title: "Instant File Sharing",
    tagline: "Zero Friction",
    description: "Share scripts, references, and assets instantly across departments without email chains or expiring links.",
    highlight: "The right file reaches the right person at the right moment — no chase required.",
    icon: iconSprint,
  },
  {
    title: "Structured Project Folders",
    tagline: "Organised by Default",
    description: "Organise files within structured project folders that mirror the production itself — scenes, departments, and stages.",
    highlight: "A storyboard image belongs to a scene. A reference belongs to a shot. Context is never lost.",
    icon: iconFlow,
  },
  {
    title: "Permission Controls",
    tagline: "Right Access, Right People",
    description: "Control access with clear permission settings so every department sees what it needs — and nothing it shouldn't.",
    highlight: "Sensitive budget documents stay private. Creative references stay accessible. You decide.",
    icon: iconUserGroup,
  },
  {
    title: "Version Control",
    tagline: "One Source of Truth",
    description: "Maintain version clarity across the production so teams always know which file is current without asking.",
    highlight: "No more script_v3_FINAL_2_REVISED. One file. One version. Always current.",
    icon: iconRefresh,
  },
  {
    title: "AI-Assisted Asset Generation",
    tagline: "Context-Aware Creativity",
    description: "AI supports visual exploration and asset generation while remaining connected to the scenes and creative structure of the production.",
    highlight: "AI assists creativity — but the production always remains guided by the people behind it.",
    icon: iconAiResearch,
  },
  {
    title: "Searchable Media Library",
    tagline: "Find It Instantly",
    description: "Keep media libraries searchable and organised so teams spend time using assets, not hunting for them.",
    highlight: "Search by scene, department, file type, or keyword — find it in seconds.",
    icon: iconTesting,
  },
  {
    title: "Connected to Production Workflow",
    tagline: "No Silos",
    description: "Media coordination stays connected to scripts, scenes, and planning — never drifting into isolated storage.",
    highlight: "When a scene changes, the related assets update. The production stays in sync.",
    icon: iconEngine,
  },
];

const FileSharingUSPs = () => {
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
              8 Ways Pzaz File Sharing{" "}
              <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Keeps Your Library in Sync
              </span>
            </>
          }
          description="Every capability is designed for producers, directors, department heads, and crews who need media to stay connected to the production at all times."
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

export default FileSharingUSPs;
