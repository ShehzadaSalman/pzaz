import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const ProjectManagementStats = () => {
  const { t } = useTranslation("project-management");

  const stats = [
    { number: t("project_management.stat1_number"), label: t("project_management.stat1_label"), note: t("project_management.stat1_note") },
    { number: t("project_management.stat2_number"), label: t("project_management.stat2_label"), note: t("project_management.stat2_note") },
    { number: t("project_management.stat3_number"), label: t("project_management.stat3_label"), note: t("project_management.stat3_note") },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, #F9F5FE 0%, #FFFFFF 60%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader wrapperClassName="text-center mb-16" pillText={t("project_management.stats_pill")} pillClassName="bg-primary/10 text-primary"
          title={<>{t("project_management.stats_title")}{" "}<span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("project_management.stats_title_highlight")}</span></>}
          description={t("project_management.stats_desc")} />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((s, i) => (
            <motion.div key={s.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 * i }} className="rounded-[38px] border-2 border-[#D4BAF4] bg-white p-10 text-center hover:shadow-lg transition-all duration-300">
              <p className="font-lato font-extrabold text-[64px] leading-none mb-4 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #8B1DFF 0%, #409DFF 100%)" }}>{s.number}</p>
              <p className="font-lato font-bold text-[18px] text-foreground mb-3 leading-snug">{s.label}</p>
              <p className="font-lato text-[14px] text-[#878787] leading-relaxed italic">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-3xl mx-auto rounded-[28px] bg-[#F7F2FD] border border-[#D4BAF4] p-8 md:p-12 text-center">
          <p className="font-lato font-bold text-[20px] text-[#4D029B] leading-relaxed italic">{t("project_management.stats_quote")}</p>
          <p className="font-lato text-[14px] text-[#878787] mt-4">{t("project_management.stats_quote_note")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectManagementStats;