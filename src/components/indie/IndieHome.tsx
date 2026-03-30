import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const IndieHome = () => {
  const { t } = useTranslation('indie');

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 18.27%, #FFFFFF 100%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText={t("indie.home_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("indie.home_title")}{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    {t("indie.home_title_gradient")}
                  </span>
                </>
              }
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("indie.home_p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("indie.home_p2")}
            </p>
            <p className="text-lg text-foreground font-semibold leading-relaxed italic">
              {t("indie.home_p3")}
            </p>
          </motion.div>

          {/* Right — visual workspace mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-[28px] border-2 border-[#D4BAF4] bg-white p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground font-medium">{t("indie.home_project_name")}</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Script", color: "#A805FF", fill: 85 },
                  { label: "Moodboard", color: "#409DFF", fill: 60 },
                  { label: "Breakdown", color: "#29FADF", fill: 40 },
                  { label: "Team", color: "#8B1DFF", fill: 70 },
                  { label: "Calendar", color: "#3207BC", fill: 50 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-20 flex-shrink-0">{item.label}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.fill}%`, backgroundColor: item.color }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{item.fill}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E6D7F7]">
                <p className="text-xs text-[#A805FF] font-semibold">{t("indie.home_tagline")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndieHome;
