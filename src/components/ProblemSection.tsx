import React from "react";
import { motion } from "framer-motion";
import iconWarning from "@/assets/icon-warning.svg";
import fragmentedTools from "@/assets/fragmented-tools.png";
import fragmentedToolsOverlay from "@/assets/fragmented-tools-overlay.svg";
import SectionHeader from "@/components/SectionHeader";
import { Pill } from "@/components/ui/pill";

const problems = [
  {
    title: "Context Loss",
    description: "Switching between disconnected apps can erase up to 60% of working context.",
  },
  {
    title: "Digital Fatigue",
    description: "Constant tool switching drains focus and performance drops by up to 30%.",
  },
  {
    title: "Fragmented Data",
    description: "When information isn't connected, mistakes multiply.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Pill text="The Problem" className="mb-4" />
            <SectionHeader
              title={
                <>
                  Plans change.{" "}
                  <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r to-[#409DFF] from-[#3207BC]">
                    Productions break.
                  </span>
                </>
              }
              titleClassName=""
              description="Every time your team switches tools, context disappears. That turns into rework, delays and budget pressure. Production loses alignment."
              descriptionClassName="text-center"
            />
          </motion.div>

          {/* Problem visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 items-center gap-8"
          >
            {/* Left: problem cards */}
            <div className="space-y-4">
              {problems.map((problem) => (
                <div
                  key={problem.title}
                  className="flex items-start gap-4 p-5 bg-white border border-[#E8D9F9] rounded-2xl"
                >
                  <img src={iconWarning} alt="" className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-lato font-bold text-foreground text-base mb-1">{problem.title}</p>
                    <p className="text-sm text-[#878787] leading-snug">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: illustration with overlay */}
            <div className="relative flex items-center justify-center">
              <img
                src={fragmentedTools}
                alt="Fragmented tools illustration"
                className="w-full max-w-[420px] h-auto"
              />
              <img
                src={fragmentedToolsOverlay}
                alt="This isn't a tooling problem. It's a collaboration problem."
                className="absolute bottom-0 right-0 w-[200px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
