import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BudgetLegacy = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 30%, #FFFFFF 100%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8 md:p-10"
          >
            <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center mb-6">
              <span className="text-white text-lg font-bold">✓</span>
            </div>
            <h3 className="font-lato font-bold text-[28px] text-foreground mb-2">{t("budget.legacy_title1")}</h3>
            <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-6">{t("budget.legacy_sub1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("budget.legacy_p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("budget.legacy_p2")}</p>
            <p className="text-lg font-semibold text-foreground leading-relaxed">{t("budget.legacy_p3")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8 md:p-10"
          >
            <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center mb-6">
              <span className="text-white text-lg font-bold">→</span>
            </div>
            <h3 className="font-lato font-bold text-[28px] text-foreground mb-2">{t("budget.legacy_title2")}</h3>
            <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-6">{t("budget.legacy_sub2")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("budget.legacy_p4")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("budget.legacy_p5")}</p>
            <p className="text-lg font-semibold text-foreground leading-relaxed">{t("budget.legacy_p6")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetLegacy;
