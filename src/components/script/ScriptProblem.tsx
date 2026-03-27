import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconWarning from "@/assets/icon-warning.svg";
import fragmentedTools from "@/assets/fragmented-tools.png";
import { useTranslation } from "react-i18next";

const ScriptProblem = () => {
  const { t } = useTranslation('script');
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatedSectionHeader
            wrapperClassName="max-w-6xl mx-auto"
            pillText={t("script.problem_pill")}
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                {t("script.problem_title")}{" "}
                <span className="text-[#FF4040]">{t("script.problem_title_highlight")}</span>
              </>
            }
            description={t("script.problem_desc")}
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 mb-12 md:mb-[112px]"
          >
            <div className="bg-white/30 py-8 px-8 md:px-[60px] md:pb-[50px] border border-[#D4BAF4] rounded-[38px] relative z-10">
              <h3 className="font-lato font-bold text-2xl pt-4 pb-8 tracking-normal text-foreground">
                {t("script.problem_card_title")}
              </h3>
              <div className="space-y-4">
                {[
                  t("script.problem_item1"),
                  t("script.problem_item2"),
                  t("script.problem_item3"),
                  t("script.problem_item4"),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                    <img src={iconWarning} alt="" className="w-6 h-6" />
                    <span className="text-[20px] font-lato">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center -ml-[80px]">
              <img src={fragmentedTools} alt="Fragmented tools illustration" className="max-w-full h-auto" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xl font-semibold text-foreground">
              {t("script.problem_bottom")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScriptProblem;
