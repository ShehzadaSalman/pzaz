import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconDownload from "@/assets/script/icon-download.svg";
import iconDocument from "@/assets/script/icon-document.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconRefresh from "@/assets/script/icon-refresh.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";
import { useTranslation } from "react-i18next";

const BudgetFeatures = () => {
  const { t } = useTranslation('budget');
  const features = [
    { icon: iconDownload, title: t("budget.feat1") },
    { icon: iconDocument, title: t("budget.feat2") },
    { icon: iconCloud, title: t("budget.feat3") },
    { icon: iconEngine, title: t("budget.feat4") },
    { icon: iconRefresh, title: t("budget.feat5") },
    { icon: iconFlow, title: t("budget.feat6") },
    { icon: iconListCheck, title: t("budget.feat7") },
    { icon: iconTesting, title: t("budget.feat8") },
    { icon: iconUserGroup, title: t("budget.feat9") },
  ];

  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("budget.features_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("budget.features_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("budget.features_title_highlight")}
              </span>
            </>
          }
          description={t("budget.features_desc")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="rounded-[30px] p-6 border-2 border-[#D4BAF4] bg-white hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                <img src={feature.icon} alt="" className="w-4 h-4" />
              </div>
              <p className="font-lato font-semibold text-[16px] text-foreground leading-relaxed pt-2">{feature.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetFeatures;
