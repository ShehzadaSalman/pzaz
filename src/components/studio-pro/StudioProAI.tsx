import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconScriptAnalysis from "@/assets/script/icon-script-analysis.svg";
import iconCharacterTracking from "@/assets/script/icon-character-tracking.svg";
import iconSceneSuggestions from "@/assets/script/icon-scene-suggestions.svg";
import scriptAiPreview from "@/assets/script-ai-preview.png";

const aiCards = [
  {
    title: "Structural Inconsistencies",
    description: "Surfaces structural inconsistencies across productions before they become costly coordination failures.",
    icon: iconScriptAnalysis,
  },
  {
    title: "Financial Pattern Recognition",
    description: "Highlights emerging financial patterns across the slate to support proactive decision-making.",
    icon: iconCharacterTracking,
  },
  {
    title: "Cross-Production Support",
    description: "Supports decision-making across multiple productions without operating in isolation from context.",
    icon: iconSceneSuggestions,
  },
  {
    title: "Governed Infrastructure",
    description: "Works within governed infrastructure, assisting the people responsible — not replacing their judgment.",
    icon: iconAiResearch,
  },
];

const StudioProAI = () => {
  return (
    <section className="section-padding bg-[#FBFBFB]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
                  AI as Institutional{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Decision Support
                  </span>
                </>
              }
              description="AI without context creates noise. At studio scale, noise becomes a risk. In Studio Pro, AI operates within the full context of your slate. Humans decide. AI strengthens the clarity."
              className="mb-8"
            />

            <div className="grid md:grid-cols-2 gap-4">
              {aiCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-[#F7F2FD] rounded-[8px] p-4 flex gap-3"
                >
                  <div className="w-8 h-8 flex-shrink-0 mt-0.5 rounded-full bg-[#A805FF] flex items-center justify-center">
                    <img src={card.icon} alt="" className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-lato font-bold text-[16px] leading-snug text-foreground mb-1">{card.title}</h4>
                    <p className="font-lato font-normal text-[14px] leading-[20px] text-[#878787]">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={scriptAiPreview} alt="AI studio tools preview" className="w-full h-auto rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioProAI;
