import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { X, Check } from "lucide-react";

const StudioProShift = () => {
  const { t } = useTranslation("studio-pro");

  const without = [t("studio_pro.shift_without1"), t("studio_pro.shift_without2"), t("studio_pro.shift_without3")];
  const with_ = [t("studio_pro.shift_with1"), t("studio_pro.shift_with2"), t("studio_pro.shift_with3")];

  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("studio_pro.shift_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={<>{t("studio_pro.shift_title")}{" "}<span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("studio_pro.shift_title_highlight")}</span></>}
        />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"><X className="w-4 h-4 text-red-500" /></div>
              <h3 className="font-lato font-bold text-[20px] text-foreground">{t("studio_pro.shift_without_title")}</h3>
            </div>
            <div className="space-y-4">
              {without.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2.5" />
                  <p className="font-lato text-[16px] text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#F7F2FD] flex items-center justify-center"><Check className="w-4 h-4 text-[#A805FF]" /></div>
              <h3 className="font-lato font-bold text-[20px] text-foreground">{t("studio_pro.shift_with_title")}</h3>
            </div>
            <div className="space-y-4">
              {with_.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F7F2FD] rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A805FF] flex-shrink-0 mt-2.5" />
                  <p className="font-lato text-[16px] text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center text-xl font-bold text-foreground mt-12">
          {t("studio_pro.shift_bottom")}
        </motion.p>
      </div>
    </section>
  );
};

export default StudioProShift;