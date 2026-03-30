import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StudioProFeatures = () => {
  const { t } = useTranslation("studio-pro");

  const capabilities = [
    { title: t("studio_pro.feat1_title"), description: t("studio_pro.feat1_desc") },
    { title: t("studio_pro.feat2_title"), description: t("studio_pro.feat2_desc") },
    { title: t("studio_pro.feat3_title"), description: t("studio_pro.feat3_desc") },
    { title: t("studio_pro.feat4_title"), description: t("studio_pro.feat4_desc") },
    { title: t("studio_pro.feat5_title"), description: t("studio_pro.feat5_desc") },
    { title: t("studio_pro.feat6_title"), description: t("studio_pro.feat6_desc") },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("studio_pro.features_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={<>{t("studio_pro.features_title")}{" "}<span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("studio_pro.features_title_highlight")}</span></>}
          description={t("studio_pro.features_desc")}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 * i }} className="bg-white rounded-[30px] border border-[#D4BAF4] p-6">
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[18px] text-foreground mb-2">{cap.title}</h3>
              <p className="font-lato text-[15px] text-[#878787] leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center text-lg font-semibold text-[#4D029B] mt-12 italic">
          {t("studio_pro.features_bottom")}
        </motion.p>
      </div>
    </section>
  );
};

export default StudioProFeatures;