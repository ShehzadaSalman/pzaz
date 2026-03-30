import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StudioProSlate = () => {
  const { t } = useTranslation("studio-pro");

  const items = [
    { label: t("studio_pro.slate_item1_label"), outcome: t("studio_pro.slate_item1_outcome") },
    { label: t("studio_pro.slate_item2_label"), outcome: t("studio_pro.slate_item2_outcome") },
    { label: t("studio_pro.slate_item3_label"), outcome: t("studio_pro.slate_item3_outcome") },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText={t("studio_pro.slate_pill")}
          pillClassName="bg-primary/10 text-primary"
          title={<>{t("studio_pro.slate_title")}{" "}<span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("studio_pro.slate_title_highlight")}</span></>}
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("studio_pro.slate_p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("studio_pro.slate_p2")}</p>
            <p className="text-xl font-bold text-foreground">{t("studio_pro.slate_p3")}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }} className="bg-white rounded-2xl border border-[#D4BAF4] p-5">
                <p className="font-lato text-[16px] text-foreground leading-relaxed">
                  <span className="font-bold">{item.label}, </span>
                  <span className="text-muted-foreground">{item.outcome}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioProSlate;