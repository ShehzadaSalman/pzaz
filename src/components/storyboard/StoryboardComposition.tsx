import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StoryboardComposition = () => {
  const { t } = useTranslation("storyboard");

  const steps = [
    { number: "01", title: t("storyboard.composition_step1_title"), description: t("storyboard.composition_step1_desc") },
    { number: "02", title: t("storyboard.composition_step2_title"), description: t("storyboard.composition_step2_desc") },
    { number: "03", title: t("storyboard.composition_step3_title"), description: t("storyboard.composition_step3_desc") },
  ];

  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("storyboard.composition_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("storyboard.composition_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("storyboard.composition_title_highlight")}
              </span>
            </>
          }
          description={t("storyboard.composition_desc")}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-8 relative"
            >
              <span className="text-6xl font-extrabold text-[#F0E9FC] font-lato select-none absolute top-6 right-6">{step.number}</span>
              <h3 className="font-lato font-bold text-[22px] text-foreground mb-3 relative z-10">{step.title}</h3>
              <p className="font-lato text-[15px] text-[#878787] leading-relaxed relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryboardComposition;