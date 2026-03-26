import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const PlanningContext = () => {
  const { t } = useTranslation();
  const benefits = [
    t("planning.context_b1"),
    t("planning.context_b2"),
    t("planning.context_b3"),
    t("planning.context_b4"),
  ];
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("planning.context_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("planning.context_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("planning.context_title_highlight")}
              </span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("planning.context_p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("planning.context_p2")}
            </p>
            <p className="text-xl font-bold text-foreground">
              {t("planning.context_bold")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#D4BAF4]"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-lato text-[18px] text-foreground leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanningContext;
