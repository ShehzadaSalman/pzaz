import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconWarning from "@/assets/icon-warning.svg";
import { useTranslation } from "react-i18next";

const ProjectManagementProblem = () => {
  const { t } = useTranslation('project-management');
  const questions = [
    t("project_management.problem_q1"),
    t("project_management.problem_q2"),
    t("project_management.problem_q3"),
    t("project_management.problem_q4"),
  ];
  const tools = [
    t("project_management.problem_tool1"),
    t("project_management.problem_tool2"),
    t("project_management.problem_tool3"),
    t("project_management.problem_tool4"),
  ];

  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="max-w-6xl mx-auto"
          pillText={t("project_management.problem_pill")}
          pillIcon={<AlertTriangle className="w-4 h-4" />}
          pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
          title={
            <>
              {t("project_management.problem_title")}{" "}
              <span className="text-[#FF4040]">{t("project_management.problem_title_highlight")}</span>
            </>
          }
          description={t("project_management.problem_desc")}
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 mb-12 md:mb-[80px]"
        >
          <div className="bg-white/30 py-8 px-8 md:px-[60px] md:pb-[50px] border border-[#D4BAF4] rounded-[38px] relative z-10">
            <h3 className="font-lato font-bold text-2xl pt-4 pb-8 tracking-normal text-foreground">
              {t("project_management.problem_card_title")}
            </h3>
            <div className="space-y-4">
              {questions.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-4 h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]"
                >
                  <img src={iconWarning} alt="" className="w-6 h-6 flex-shrink-0" />
                  <span className="text-[18px] font-lato">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-sm space-y-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#D4BAF4] shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF4040] flex-shrink-0" />
                  <span className="text-[13px] text-[#878787] font-lato">{tool}</span>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-[13px] text-[#878787] italic pt-2"
              >
                {t("project_management.problem_tools_footer")}
              </motion.p>
            </div>
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
            {t("project_management.problem_bottom")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectManagementProblem;
