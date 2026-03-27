import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const FileSharingCoreFeatures = () => {
  const { t } = useTranslation('file-sharing');
  const coreCapabilities = [
    { title: t("file_sharing.core_feat1_title"), description: t("file_sharing.core_feat1_desc") },
    { title: t("file_sharing.core_feat2_title"), description: t("file_sharing.core_feat2_desc") },
    { title: t("file_sharing.core_feat3_title"), description: t("file_sharing.core_feat3_desc") },
    { title: t("file_sharing.core_feat4_title"), description: t("file_sharing.core_feat4_desc") },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-12"
            pillText={t("file_sharing.core_pill")}
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                {t("file_sharing.core_title")}{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  {t("file_sharing.core_title_highlight")}
                </span>
              </>
            }
            description={t("file_sharing.core_desc")}
            motionProps={{ initial: { opacity: 0, y: 30 } }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px]">
            {coreCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-8 rounded-[38px] border-2 border-[#D4BAF4] transition-all hover:shadow-lg"
                style={{ background: "linear-gradient(180deg, #EEE7FF 0%, #F8F4FF 35%, #FFFFFF 100%)" }}
              >
                <h4 className="font-lato font-bold text-[20px] text-[#4D029B] mb-3">{item.title}</h4>
                <p className="font-lato font-normal text-[16px] leading-[24px] text-[#878787]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileSharingCoreFeatures;
