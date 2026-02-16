import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import cardIconBudget from "@/assets/card-icon-budget.svg";
import scriptAiPreview from "@/assets/script-ai-preview.png";

const aiCards = [
  {
    title: "AI-Powered Formatting",
    description: "Automatically formats your script to industry standards as you write, so you never break creative flow.",
  },
  {
    title: "Intelligent Scene Suggestions",
    description: "Get contextual scene and dialogue recommendations based on your story's tone, genre, and structure.",
  },
  {
    title: "Smart Character Tracking",
    description: "AI keeps track of character arcs, dialogue patterns, and continuity across your entire script.",
  },
  {
    title: "Instant Script Analysis",
    description: "Receive real-time feedback on pacing, structure, and readability to sharpen every draft.",
  },
];

const ScriptAI = () => {
  return (
    <section className="section-padding bg-[#FBFBFB]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left column — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="left"
              pillText="Built-in intelligence"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Smart AI tools for effortless{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    scriptwriting.
                  </span>
                </>
              }
              description="Let AI handle the heavy lifting — from formatting and continuity to scene suggestions — so you can focus on telling your story."
              className="mb-8"
            />

            <div className="grid grid-cols-2 gap-4">
              {aiCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-[#F6FCFC] rounded-[8px] p-4 flex gap-3"
                >
                  <img src={cardIconBudget} alt="" className="w-8 h-8 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-lato font-bold text-[16px] leading-snug text-foreground mb-1">
                      {card.title}
                    </h4>
                    <p className="font-lato font-normal text-[16px] leading-[22px] text-[#878787]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end"
          >
            <img
              src={scriptAiPreview}
              alt="AI scriptwriting tools preview"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScriptAI;
