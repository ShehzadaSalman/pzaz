import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import heroBanner from "@/assets/culture/hero-banner.webp";
import principle1 from "@/assets/culture/principle-1.png";
import principle2 from "@/assets/culture/principle-2.png";
import principle3 from "@/assets/culture/principle-3.png";
import principle4 from "@/assets/culture/principle-4.png";
import culture1 from "@/assets/culture/culture-1.png";
import culture2 from "@/assets/culture/culture-2.png";
import culture3 from "@/assets/culture/culture-3.png";
import culture4 from "@/assets/culture/culture-4.png";
import culture5 from "@/assets/culture/culture-5.png";
import valuesLogo from "@/assets/culture/values-logo.png";
import dream1 from "@/assets/culture/dream-1.png";
import dream2 from "@/assets/culture/dream-2.png";
import dream3 from "@/assets/culture/dream-3.png";
import dream4 from "@/assets/culture/dream-4.png";
import dream5 from "@/assets/culture/dream-5.png";
import dream6 from "@/assets/culture/dream-6.png";

const principleIcons = [principle1, principle2, principle3, principle4];
const cultureIcons = [culture1, culture2, culture3, culture4, culture5];
const dreamIcons = [dream1, dream2, dream3, dream4, dream5, dream6];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Culture = () => {
  const { t } = useTranslation("culture");

  const principles = t("culture.principles", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const traits = t("culture.traits", { returnObjects: true }) as string[];
  const values = t("culture.values", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const dreamTeam = t("culture.dream_team", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <PageLayout>
      <SEO
        title={t("culture.seo_title")}
        description={t("culture.seo_desc")}
        url="https://pzaz.io/culture"
        keywords={["pzaz culture", "film production culture", "pzaz values", "pzaz team"]}
      />

      {/* Hero */}
      <section className="pt-28 pb-0">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
            <span className="text-[#20124D]">{t("culture.hero_title_1")}</span>
            <span className="bg-gradient-to-r from-[#8B1DFF] to-[#D946EF] bg-clip-text text-transparent">{t("culture.hero_title_2")}</span>
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8">
          <img src={heroBanner} alt="Pzaz Culture hero banner" className="w-full rounded-2xl" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#20124D]" style={{ fontFamily: "'Lato', sans-serif" }}>
            {t("culture.manifesto_title")}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#4E2273]" style={{ fontFamily: "'Lato', sans-serif" }}>{t("culture.manifesto_p1")}</p>
          <p className="text-base md:text-lg leading-relaxed text-[#4E2273] mt-4" style={{ fontFamily: "'Lato', sans-serif" }}>{t("culture.manifesto_p2")}</p>
          <p className="text-base md:text-lg leading-relaxed text-[#4E2273] mt-4" style={{ fontFamily: "'Lato', sans-serif" }}>{t("culture.manifesto_p3")}</p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#20124D]" style={{ fontFamily: "'Lato', sans-serif" }}>
            {t("culture.principles_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/80 rounded-2xl p-8 text-center border border-[#D4BAF4]"
              >
                <img src={principleIcons[i]} alt={p.title} className="w-16 h-16 mx-auto mb-5" />
                <h3 className="text-lg font-bold text-[#20124D] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>{p.title}</h3>
                <p className="text-sm text-[#4E2273] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pzaz Culture */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#20124D]" style={{ fontFamily: "'Lato', sans-serif" }}>
            {t("culture.culture_title")}
          </h2>
          <p className="text-base md:text-lg text-[#4E2273] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>{t("culture.culture_p1")}</p>
          <p className="text-base md:text-lg text-[#4E2273] mb-10" style={{ fontFamily: "'Lato', sans-serif" }}>{t("culture.culture_p2")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {traits.map((text, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center gap-3">
                <img src={cultureIcons[i]} alt={text} className="w-14 h-14" />
                <p className="text-sm font-medium text-[#20124D] text-center" style={{ fontFamily: "'Lato', sans-serif" }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <img src={valuesLogo} alt="Pzaz values" className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("culture.values_title")}
            </h2>
            <p className="text-base md:text-lg text-[#4E2273]" style={{ fontFamily: "'Lato', sans-serif" }}>{t("culture.values_desc")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/80 rounded-2xl p-6 border border-[#D4BAF4]">
                <h3 className="text-base font-bold text-[#20124D] mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>{v.title}</h3>
                <p className="text-sm text-[#4E2273] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Team */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("culture.dream_title")}
            </h2>
            <p className="text-base md:text-lg text-[#4E2273] max-w-3xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("culture.dream_desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {dreamTeam.map((d, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl p-8 bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5] border border-[#D4BAF4] text-center">
                <img src={dreamIcons[i]} alt={d.title} className="w-full rounded-xl mb-5" />
                <h3 className="text-lg font-bold text-[#20124D] mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>{d.title}</h3>
                <p className="text-sm text-[#4E2273] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Culture;
