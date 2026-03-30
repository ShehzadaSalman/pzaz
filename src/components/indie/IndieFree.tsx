import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { useTranslation } from "react-i18next";

const IndieFree = () => {
  const { t } = useTranslation('indie');

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 30%, #FFFFFF 100%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <AnimatedSectionHeader
            wrapperClassName="text-center"
            pillText={t("indie.free_pill")}
            pillClassName="bg-[#E4E4FE] border border-[#8651EF42] text-primary"
            title={
              <>
                {t("indie.free_title")}{" "}
                <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  {t("indie.free_title_gradient")}
                </span>
              </>
            }
            className="mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 text-left bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8 md:p-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("indie.free_p1")}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                t("indie.free_item1"),
                t("indie.free_item2"),
                t("indie.free_item3"),
                t("indie.free_item4"),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#F7F2FD] rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#A805FF] flex-shrink-0" />
                  <span className="font-lato font-semibold text-[16px] text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-[#4D029B] pt-2 italic">
              {t("indie.free_closing")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieFree;
