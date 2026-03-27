import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import flowchartIcon from "@/assets/icon-flowchart.svg";
import iconBell from "@/assets/script/icon-bell.svg";
import iconShapes2 from "@/assets/script/icon-shapes-2.svg";
import iconMoneyBag from "@/assets/script/icon-money-bag.svg";
import iconSafetyCert from "@/assets/script/icon-safety-cert.svg";
import { useTranslation } from "react-i18next";

const ProjectManagementOS = () => {
  const { t } = useTranslation('project-management');
  const reframeCards = [
    { icon: iconShapes2, title: t("project_management.os_card1_title"), description: t("project_management.os_card1_desc") },
    { icon: iconSafetyCert, title: t("project_management.os_card2_title"), description: t("project_management.os_card2_desc") },
    { icon: iconBell, title: t("project_management.os_card3_title"), description: t("project_management.os_card3_desc") },
    { icon: iconMoneyBag, title: t("project_management.os_card4_title"), description: t("project_management.os_card4_desc") },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 18.27%, #FFFFFF 100%)" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <AnimatedSectionHeader
              wrapperClassName="text-center"
              pillText={t("project_management.os_pill")}
              pillIcon={<img src={flowchartIcon} alt="" className="w-4 h-4" />}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("project_management.os_title")}{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                    {t("project_management.os_title_highlight")}
                  </span>
                </>
              }
              description={t("project_management.os_desc")}
              descriptionClassName="text-lg text-muted-foreground"
              className="mb-10"
            />

            <div className="grid md:grid-cols-2 gap-[45px] max-w-6xl mx-auto mb-12 md:mb-[80px]">
              {reframeCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group rounded-2xl bg-white border border-[#E6D7F7] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 px-[34px] pt-[34px] pb-4">
                    <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                      <img src={card.icon} alt="" className="w-4 h-4" />
                    </div>
                    <span className="font-lato font-bold text-[20px] leading-[23px] text-foreground text-left">
                      {card.title}
                    </span>
                  </div>
                  <div className="px-[34px] pb-[34px]">
                    <p className="font-lato text-[16px] text-[#878787] leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-muted-foreground italic">
              {t("project_management.os_footer_pre")}{" "}
              <span className="text-foreground font-semibold not-italic">
                {t("project_management.os_footer_highlight")}
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background:
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #01A7CC 0.96%, #7051F7 47.6%, #894FD9 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                {t("project_management.banner_h1")}
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[56px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                {t("project_management.banner_h2")}
              </p>
              <p className="font-lato font-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                {t("project_management.banner_desc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementOS;
