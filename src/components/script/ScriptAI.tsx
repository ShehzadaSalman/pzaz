import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import scriptAiPreview from "@/assets/script-ai-preview.png";
import iconAiFormatting from "@/assets/script/icon-ai-formatting.svg";
import iconSceneSuggestions from "@/assets/script/icon-scene-suggestions.svg";
import iconCharacterTracking from "@/assets/script/icon-character-tracking.svg";
import iconScriptAnalysis from "@/assets/script/icon-script-analysis.svg";
import { useTranslation } from "react-i18next";

const ScriptAI = () => {
  const { t } = useTranslation();
  const aiCards = [
    { titleKey: "script.ai_card1_title", descKey: "script.ai_card1_desc", icon: iconCharacterTracking },
    { titleKey: "script.ai_card2_title", descKey: "script.ai_card2_desc", icon: iconScriptAnalysis },
    { titleKey: "script.ai_card3_title", descKey: "script.ai_card3_desc", icon: iconAiFormatting },
    { titleKey: "script.ai_card4_title", descKey: "script.ai_card4_desc", icon: iconSceneSuggestions },
  ];
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
              pillText={t("script.ai_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("script.ai_title")}{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    {t("script.ai_title_highlight")}
                  </span>
                </>
              }
              description={t("script.ai_desc")}
              className="mb-8"
            />

            <div className="grid md:grid-cols-2 gap-4">
              {aiCards.map((card, index) => (
                <motion.div
                  key={card.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-[#F6FCFC] rounded-[8px] p-4 flex gap-3"
                >
                  <div className="w-8 h-8 flex-shrink-0 mt-0.5 rounded-full bg-[#A805FF] flex items-center justify-center">
                    <img src={card.icon} alt="" className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-lato font-bold text-[16px] leading-snug text-foreground mb-1">
                      {t(card.titleKey)}
                    </h4>
                    <p className="font-lato font-normal text-[16px] leading-[22px] text-[#878787]">
                      {t(card.descKey)}
                    </p>
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
