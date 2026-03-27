import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PricingCTA = () => {
  const { t } = useTranslation("pricing");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-hero-bg animate-gradient" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
            </div>
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-12 sm:p-16 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                {t("pricing.cta_title_1")}
                <br />
                {t("pricing.cta_title_2")}
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-xl mx-auto">
                {t("pricing.cta_desc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
