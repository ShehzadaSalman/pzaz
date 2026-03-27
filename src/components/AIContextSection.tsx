import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aiContextIllustration from "@/assets/ai-context-illustration.svg";

const AIContextSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            {t("ai_context.heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            {t("ai_context.para1")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            {t("ai_context.para2")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            {t("ai_context.para3")}
          </motion.p>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src={aiContextIllustration}
            alt="AI context illustration showing connected production data"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-lg text-muted-foreground mt-8 max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t("ai_context.caption") }}
        />
      </div>
    </section>
  );
};

export default AIContextSection;
