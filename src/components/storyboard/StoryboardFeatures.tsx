import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const StoryboardFeatures = () => {
  const { t } = useTranslation();
  const features = [
    { title: t("storyboard.feat1_title"), description: t("storyboard.feat1_desc") },
    { title: t("storyboard.feat2_title"), description: t("storyboard.feat2_desc") },
    { title: t("storyboard.feat3_title"), description: t("storyboard.feat3_desc") },
    { title: t("storyboard.feat4_title"), description: t("storyboard.feat4_desc") },
    { title: t("storyboard.feat5_title"), description: t("storyboard.feat5_desc") },
    { title: t("storyboard.feat6_title"), description: t("storyboard.feat6_desc") },
    { title: t("storyboard.feat7_title"), description: t("storyboard.feat7_desc") },
    { title: t("storyboard.feat8_title"), description: t("storyboard.feat8_desc") },
  ];
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("storyboard.features_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("storyboard.features_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("storyboard.features_title_highlight")}
              </span>
            </>
          }
          description={t("storyboard.features_desc")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[16px] text-foreground mb-2">{feature.title}</h3>
              <p className="font-lato text-[14px] text-[#878787] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryboardFeatures;
