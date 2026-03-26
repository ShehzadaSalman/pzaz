import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const PlanningFeatures = () => {
  const { t } = useTranslation();
  const features = [
    { title: t("planning.feat1_title"), description: t("planning.feat1_desc") },
    { title: t("planning.feat2_title"), description: t("planning.feat2_desc") },
    { title: t("planning.feat3_title"), description: t("planning.feat3_desc") },
    { title: t("planning.feat4_title"), description: t("planning.feat4_desc") },
    { title: t("planning.feat5_title"), description: t("planning.feat5_desc") },
    { title: t("planning.feat6_title"), description: t("planning.feat6_desc") },
  ];
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("planning.features_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("planning.features_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("planning.features_title_highlight")}
              </span>
            </>
          }
          description={t("planning.features_desc")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[18px] text-foreground mb-2">{feature.title}</h3>
              <p className="font-lato text-[15px] text-[#878787] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg font-semibold text-[#4D029B] mt-12 italic"
        >
          {t("planning.features_closing")}
        </motion.p>
      </div>
    </section>
  );
};

export default PlanningFeatures;
