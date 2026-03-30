import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const IndieConfidence = () => {
  const { t } = useTranslation('indie');

  const questions = [
    t("indie.confidence_q1"),
    t("indie.confidence_q2"),
    t("indie.confidence_q3"),
    t("indie.confidence_q4"),
  ];

  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText={t("indie.confidence_pill")}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  {t("indie.confidence_title")}{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    {t("indie.confidence_title_gradient")}
                  </span>
                </>
              }
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-semibold">
              {t("indie.confidence_p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("indie.confidence_p2")}
            </p>
          </motion.div>

          {/* Right — questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {questions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#D4BAF4]"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="font-lato text-[18px] text-foreground leading-relaxed">{q}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <p className="font-lato font-bold text-[18px] text-[#4D029B] italic">
                {t("indie.confidence_closing")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndieConfidence;
