import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const CollaborationProblem = () => {
  const { t } = useTranslation('collaboration');
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText={t("collaboration.problem_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("collaboration.problem_title")}{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    {t("collaboration.problem_title_highlight")}
                  </span>
                </>
              }
              align="left"
              className="mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("collaboration.problem_p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("collaboration.problem_p2")}
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              {t("collaboration.problem_quote")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationProblem;
