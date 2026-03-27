import React from "react";
import { motion } from "framer-motion";
import aiContextIllustration from "@/assets/ai-context-illustration.svg";
import { useTranslation } from "react-i18next";

const AIContextSection = () => {
  const { t } = useTranslation('home');
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-lato font-extrabold text-[48px] leading-[56px] text-foreground text-center mb-12"
        >
          {t("ai_context.heading")}
        </motion.h2>

        {/* Two-column description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 md:gap-52 max-w-5xl mx-auto relative z-10 mb-[-80px]"
        >
          <p className="font-lato font-normal text-[20px] leading-[30px] text-[#878787]">
            {t("ai_context.para1")}
          </p>
          <p className="font-lato font-normal text-[20px] leading-[30px] text-[#878787]">
            {t("ai_context.para2")}
            <br /><br />
            {t("ai_context.para3")}
          </p>
        </motion.div>

        {/* Illustration — slides up behind the text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center relative z-0 mt-16 md:mt-0"
        >
          <img src={aiContextIllustration} alt="AI context illustration" className="w-full max-w-3xl h-auto" width="768" height="516" loading="lazy" />
        </motion.div>

        {/* Caption below illustration */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-lato font-normal text-[20px] leading-[30px] text-[#878787] text-center mt-8"
          dangerouslySetInnerHTML={{ __html: t("ai_context.caption") }}
        />
      </div>
    </section>
  );
};

export default AIContextSection;
