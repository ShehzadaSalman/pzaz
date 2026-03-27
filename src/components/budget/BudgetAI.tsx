import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconScriptAnalysis from "@/assets/script/icon-script-analysis.svg";
import iconCharacterTracking from "@/assets/script/icon-character-tracking.svg";
import iconSceneSuggestions from "@/assets/script/icon-scene-suggestions.svg";
import scriptAiPreview from "@/assets/script-ai-preview.png";
import { useTranslation } from "react-i18next";

const BudgetAI = () => {
  const { t } = useTranslation('budget');
  const aiCards = [
    { title: t("budget.ai_card1_title"), description: t("budget.ai_card1_desc"), icon: iconScriptAnalysis },
    { title: t("budget.ai_card2_title"), description: t("budget.ai_card2_desc"), icon: iconCharacterTracking },
    { title: t("budget.ai_card3_title"), description: t("budget.ai_card3_desc"), icon: iconAiResearch },
    { title: t("budget.ai_card4_title"), description: t("budget.ai_card4_desc"), icon: iconSceneSuggestions },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 30%, #FFFFFF 100%)" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="left"
              pillText={t("budget.ai_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("budget.ai_title")}{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    {t("budget.ai_title_highlight")}
                  </span>
                </>
              }
              description={t("budget.ai_desc")}
              className="mb-8"
            />

            <div className="grid md:grid-cols-2 gap-4">
              {aiCards.map((card, index) => (
                <motion.div
                  key={index}
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

            <p className="mt-6 font-lato font-semibold text-[16px] text-[#4D029B] italic">
              {t("budget.ai_highlight")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end"
          >
            <img src={scriptAiPreview} alt="AI budgeting tools preview" className="w-full h-auto rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetAI;
