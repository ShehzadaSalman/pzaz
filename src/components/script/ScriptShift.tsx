import React from "react";
import { motion } from "framer-motion";
import { Clapperboard, DollarSign, MapPin, CheckCircle } from "lucide-react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import flowchartIcon from "@/assets/icon-flowchart.svg";
import solutionCardPreview from "@/assets/solution-card-preview.png";
import solutionCardSchedule from "@/assets/solution-card-schedule.png";
import solutionCardBudget from "@/assets/solution-card-budget.png";
import solutionCardTeam from "@/assets/solution-card-team.png";
import iconSafetyCert from "@/assets/script/icon-safety-cert.svg";
import iconShapes2 from "@/assets/script/icon-shapes-2.svg";
import iconBell from "@/assets/script/icon-bell.svg";
import iconMoneyBag from "@/assets/script/icon-money-bag.svg";
import ScriptPromise from "@/components/script/ScriptPromise";
import { useTranslation } from "react-i18next";

const ScriptShift = () => {
  const { t } = useTranslation();
  const scriptCards = [
    { icon: iconShapes2, title: t("script.shift_card1"), image: solutionCardPreview },
    { icon: iconMoneyBag, title: t("script.shift_card2"), image: solutionCardSchedule },
    { icon: iconBell, title: t("script.shift_card3"), image: solutionCardBudget },
    { icon: iconSafetyCert, title: t("script.shift_card4"), image: solutionCardTeam },
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
              pillText={t("script.shift_pill")}
              pillIcon={<img src={flowchartIcon} alt="" className="w-4 h-4" />}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("script.shift_title")}{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                    {t("script.shift_title_highlight")}
                  </span>
                </>
              }
              description={t("script.shift_desc")}
              descriptionClassName="text-lg text-muted-foreground"
              className="mb-10"
            />

            <div className="grid md:grid-cols-2 gap-[45px] max-w-6xl mx-auto mb-12 md:mb-[117px]">
              {scriptCards.map((card, index) => (
                <motion.div
                  key={card.title}
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

                  <div className="mt-auto px-[34px] pb-0">
                    <div className="rounded-t-xl overflow-hidden">
                      <img src={card.image} alt={`${card.title} preview`} className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-muted-foreground italic">
              {t("script.shift_bottom")}{" "}
              <span className="text-foreground font-semibold not-italic">{t("script.shift_bottom_highlight")}</span>
            </p>
          </motion.div>
        </div>
      </div>
      <ScriptPromise />
    </section>
  );
};

export default ScriptShift;
