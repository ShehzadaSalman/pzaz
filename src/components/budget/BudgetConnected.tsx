import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const BudgetConnected = () => {
  const { t } = useTranslation('budget');
  const connections = [
    { trigger: t("budget.connected_item1_trigger"), result: t("budget.connected_item1_result") },
    { trigger: t("budget.connected_item2_trigger"), result: t("budget.connected_item2_result") },
    { trigger: t("budget.connected_item3_trigger"), result: t("budget.connected_item3_result") },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 20%, #FFFFFF 100%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText={t("budget.connected_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("budget.connected_title")}{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    {t("budget.connected_title_highlight")}
                  </span>
                </>
              }
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("budget.connected_sub")}
            </p>
            <p className="text-lg font-semibold text-[#4D029B] italic">
              {t("budget.connected_highlight")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {t("budget.connected_label")}
            </p>
            {connections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-white rounded-2xl border border-[#D4BAF4] p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#A805FF]" />
                </div>
                <div>
                  <span className="font-lato font-bold text-[16px] text-foreground">If {item.trigger}, </span>
                  <span className="font-lato text-[16px] text-muted-foreground">{item.result}.</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetConnected;
