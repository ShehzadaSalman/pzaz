import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const IndieFunding = () => {
  const { t } = useTranslation('indie');

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 40%, #FFFFFF 100%)" }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center"
          pillText={t("indie.funding_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              {t("indie.funding_title")}{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                {t("indie.funding_title_gradient")}
              </span>
            </>
          }
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("indie.funding_p1")}
            </p>
          </div>

          <div className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("indie.funding_p2")}
            </p>
          </div>

          <div className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("indie.funding_p3")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#F7F2FD] rounded-[30px] border-2 border-[#D4BAF4] p-8 text-center"
          >
            <p className="font-lato font-bold text-[20px] text-[#4D029B] italic">
              {t("indie.funding_closing")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieFunding;
