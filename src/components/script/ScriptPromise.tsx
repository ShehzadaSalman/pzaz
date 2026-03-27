import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ScriptPromise = () => {
  const { t } = useTranslation('script');
  return (
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background:
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #01A7CC 0.96%, #7051F7 47.6%, #894FD9 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
            <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                {t("script.promise_line1")}
              </h3>
            <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                {t("script.promise_line2")}
              </p>
            <p className="font-lato font-normal text-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                {t("script.promise_sub")}
              </p>
            </div>
          </motion.div>
        </div>
    </div>
  );
};

export default ScriptPromise;
