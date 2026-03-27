import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const BudgetBehaviourChange = () => {
  const { t } = useTranslation('budget');
  const changes = [
    { before: t("budget.shift_b1"), after: t("budget.shift_a1") },
    { before: t("budget.shift_b2"), after: t("budget.shift_a2") },
    { before: t("budget.shift_b3"), after: t("budget.shift_a3") },
  ];

  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-12"
          pillText={t("budget.shift_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("budget.shift_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("budget.shift_title_highlight")}
              </span>
            </>
          }
          description={t("budget.shift_desc")}
        />

        <div className="grid md:grid-cols-3 gap-[30px] mb-12">
          {changes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-[30px] border-2 border-[#D4BAF4] overflow-hidden"
            >
              <div className="bg-[#FDF2F5] p-5 border-b border-[#EF6F9B]/30">
                <p className="text-[14px] font-semibold text-[#EB5757] uppercase tracking-wide mb-1">{t("budget.shift_before")}</p>
                <p className="font-lato text-[16px] text-muted-foreground">{item.before}</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[14px] font-semibold text-[#4D029B] uppercase tracking-wide mb-1">{t("budget.shift_after")}</p>
                <p className="font-lato font-semibold text-[16px] text-foreground">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("budget.shift_bottom1")}{" "}
            <span className="font-bold text-foreground">{t("budget.shift_bottom2")}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetBehaviourChange;
