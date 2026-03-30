import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { Trans, useTranslation } from "react-i18next";
import iconDocument from "@/assets/script/icon-document.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconTextLine from "@/assets/script/icon-text-line.svg";
import iconShapes from "@/assets/script/icon-shapes.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconThList from "@/assets/script/icon-th-list.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";

const featureIcons = [iconCloud, iconUserGroup, iconFlow, iconDocument, iconTextLine, iconShapes, iconThList, iconListCheck, iconSprint];
const featureKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"];

const IndieWhatYouGet = () => {
  const { t } = useTranslation('indie');

  const features = featureKeys.map((key, i) => ({
    icon: featureIcons[i],
    title: t(`indie.whatyouget_${key}`),
  }));

  return (
    <section id="features" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("indie.whatyouget_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("indie.whatyouget_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("indie.whatyouget_title_gradient")}
              </span>
            </>
          }
          description={t("indie.whatyouget_description")}
        />

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group rounded-[30px] p-6 border-2 border-[#D4BAF4] bg-white transition-all duration-300 hover:shadow-lg flex items-start gap-4"
            >
              <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                <img src={feature.icon} alt="" className="w-4 h-4" />
              </div>
              <p className="font-lato font-semibold text-[16px] text-foreground leading-relaxed pt-2">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Plan limits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <Trans
              i18nKey="indie.whatyouget_plan"
              ns="indie"
              components={{ bold: <span className="font-semibold text-foreground" /> }}
            />
          </p>
          <p className="text-lg font-semibold text-[#4D029B] italic">
            {t("indie.whatyouget_closing")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieWhatYouGet;
