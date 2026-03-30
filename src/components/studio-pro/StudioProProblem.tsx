import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StudioProProblem = () => {
  const { t } = useTranslation("studio-pro");

  const risks = [
    t("studio_pro.problem_risk1"),
    t("studio_pro.problem_risk2"),
    t("studio_pro.problem_risk3"),
    t("studio_pro.problem_risk4"),
  ];

  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText={t("studio_pro.problem_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={<>{t("studio_pro.problem_title")}{" "}<span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("studio_pro.problem_title_highlight")}</span></>}
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("studio_pro.problem_p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("studio_pro.problem_p2")}</p>
            <p className="text-xl font-bold text-[#4D029B] italic">{t("studio_pro.problem_quote")}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
            {risks.map((risk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#D4BAF4]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-lato text-[18px] text-foreground leading-relaxed">{risk}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioProProblem;