import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconWarning from "@/assets/icon-warning.svg";
import { useTranslation } from "react-i18next";

const BudgetProblem = () => {
  const { t } = useTranslation('budget');
  const siloProblems = [
    t("budget.problem_item1"),
    t("budget.problem_item2"),
    t("budget.problem_item3"),
    t("budget.problem_item4"),
  ];

  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-12"
          pillText={t("budget.problem_pill")}
          pillIcon={null}
          pillClassName="bg-[#FF404017] text-[#EB5757]"
          title={
            <>
              {t("budget.problem_title")}{" "}
              <span className="text-[#FF4040]">{t("budget.problem_title_highlight")}</span>
            </>
          }
          description={t("budget.problem_desc")}
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white py-8 px-8 border border-[#D4BAF4] rounded-[38px]"
          >
            <h3 className="font-lato font-bold text-2xl pt-4 pb-8 text-foreground">
              {t("budget.problem_card_title")}
            </h3>
            <div className="space-y-4">
              {siloProblems.map((problem, i) => (
                <div key={i} className="flex items-center gap-4 min-h-[60px] p-5 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                  <img src={iconWarning} alt="" className="w-6 h-6 flex-shrink-0" />
                  <span className="text-[18px] font-lato">{problem}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-[28px] border-2 border-[#D4BAF4] p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("budget.problem_right1")}
              </p>
            </div>
            <div className="bg-[#F7F2FD] rounded-[28px] border-2 border-[#D4BAF4] p-8">
              <p className="font-lato font-bold text-[20px] text-[#4D029B] italic">
                {t("budget.problem_right2")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetProblem;
