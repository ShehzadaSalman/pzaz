import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import SharedCTA from "@/components/SharedCTA";
import StudioCard from "@/components/script/StudioCard";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { AlertTriangle } from "lucide-react";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import iconWarning from "@/assets/icon-warning.svg";
import iconStar from "@/assets/material-symbols_family-star.svg";
import iconFlowchart from "@/assets/icon-flowchart.svg";
import iconSurvey from "@/assets/icon-survey.svg";
import iconGlobe from "@/assets/icon-globe.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";

import iconDocument from "@/assets/script/icon-document.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconAiFormatting from "@/assets/script/icon-ai-formatting.svg";
import iconScriptAnalysis from "@/assets/script/icon-script-analysis.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const primaryToolIcons = [iconDocument, iconListCheck, iconUserGroup, iconFlow];
const additionalToolIcons = [iconCloud, iconSprint, iconEngine];

const DirectorsProducers = () => {
  const { t } = useTranslation();
  const indieCheckoutUrl = useIndieCheckoutUrl();

  const primaryTools = [
    { icon: primaryToolIcons[0], tagline: t("directors.tool1_title"), title: t("directors.tool1_title"), description: t("directors.tool1_desc") },
    { icon: primaryToolIcons[1], tagline: t("directors.tool2_title"), title: t("directors.tool2_title"), description: t("directors.tool2_desc") },
    { icon: primaryToolIcons[2], tagline: t("directors.tool3_title"), title: t("directors.tool3_title"), description: t("directors.tool3_desc") },
    { icon: primaryToolIcons[3], tagline: t("directors.tool4_title"), title: t("directors.tool4_title"), description: t("directors.tool4_desc") },
  ];

  const additionalTools = [
    { icon: additionalToolIcons[0], tagline: t("directors.add1_tagline"), title: t("directors.add1_title"), description: t("directors.add1_desc"), highlight: t("directors.add1_highlight") },
    { icon: additionalToolIcons[1], tagline: t("directors.add2_tagline"), title: t("directors.add2_title"), description: t("directors.add2_desc"), highlight: t("directors.add2_highlight") },
    { icon: additionalToolIcons[2], tagline: t("directors.add3_tagline"), title: t("directors.add3_title"), description: t("directors.add3_desc"), highlight: t("directors.add3_highlight") },
  ];

  return (
    <PageLayout>
      <SEO
        title="Pzaz for Directors & Producers – Creative Vision Meets Production Reality"
        description="Keep creative vision and production reality aligned. Pzaz provides a shared production environment where planning, communication and execution remain connected."
        url="https://pzaz.io/software-for-directors-producers"
        keywords={["filmmaking platform for directors", "production management for producers", "film production workflow", "director producer collaboration", "production planning software"]}
        canonical="https://pzaz.io/software-for-directors-producers"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(50.01% 50.01% at 50% 0%, rgba(170,166,255,0.28) 0%, rgba(170,166,255,0.06) 70%, rgba(170,166,255,0) 100%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Pill text={t("directors.pill")} className="text-primary mb-8 mt-[15px] bg-[#E4E4FE] border border-[#8651EF42]" icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />} />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
              {t("directors.hero_h1a")}{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
                {t("directors.hero_h1b")}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {t("directors.hero_p")}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  {t("directors.cta1")}
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground" prefixIcon={<img src={ctaPlayIcon} alt="" className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]" />}>
                  {t("directors.cta2")}
                </Button>
              </a>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm text-muted-foreground">
              {t("directors.no_cc")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <AnimatedSectionHeader
              wrapperClassName="max-w-6xl mx-auto"
              pillText={t("directors.problem_pill")}
              pillIcon={<AlertTriangle className="w-4 h-4" />}
              pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
              title={<>{t("directors.problem_title")}{" "}<span className="text-[#FF4040]">{t("directors.problem_title_red")}</span></>}
              description={t("directors.problem_desc")}
              className="mb-12"
            />

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid md:grid-cols-2 mb-12 md:mb-[112px]">
              <div className="bg-white/30 py-8 px-8 md:px-[60px] md:pb-[50px] border border-[#D4BAF4] rounded-[38px] relative z-10">
                <h3 className="font-lato font-bold text-2xl pt-4 pb-8 tracking-normal text-foreground">
                  {t("directors.problem_card_title")}
                </h3>
                <div className="space-y-4">
                  {[t("directors.problem_item1"), t("directors.problem_item2"), t("directors.problem_item3"), t("directors.problem_item4")].map((text) => (
                    <div key={text} className="flex items-center gap-4 min-h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                      <img src={iconWarning} alt="" className="w-6 h-6 shrink-0" />
                      <span className="text-[16px] font-lato">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center pl-8">
                <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-xl space-y-3">
                  <div className="text-sm font-semibold text-foreground pb-2 border-b border-border">{t("directors.problem_status")}</div>
                  {[
                    { label: "Script Breakdown", pct: 92, color: "#8B1DFF" },
                    { label: "Scheduling", pct: 76, color: "#7051F7" },
                    { label: "Team Alignment", pct: 88, color: "#01A7CC" },
                    { label: "Budget Tracking", pct: 65, color: "#29FADF" },
                  ].map((item, i) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-foreground">{item.label}</span>
                        <span className="text-xs font-semibold text-muted-foreground">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div className="h-2 rounded-full" style={{ background: `linear-gradient(to right, ${item.color}99, ${item.color})` }} initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }} />
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                    <span className="text-xs text-muted-foreground">{t("directors.problem_status_connected")}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center">
              <p className="text-xl font-semibold text-foreground">{t("directors.problem_tagline")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROMISE BANNER ─────────────────────────────────────── */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden" style={{ background: "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #01A7CC 0.96%, #7051F7 47.6%, #894FD9 95%)" }}>
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                {t("directors.promise_h1")}
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[64px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                {t("directors.promise_h2")}
              </p>
              <p className="font-lato font-normal text-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                {t("directors.promise_p")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── PRIMARY TOOLS ─────────────────────────────────────── */}
      <section id="tools" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText={t("directors.tools_pill")}
            pillClassName="bg-primary/10 text-primary"
            title={<>{t("directors.tools_title_a")}{" "}<span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("directors.tools_title_b")}</span></>}
            description={t("directors.tools_desc")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px] mb-12">
            {primaryTools.map((tool, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-white rounded-[20px] border border-[#D4BAF4] p-7 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
                <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center shrink-0">
                  <img src={tool.icon} alt="" className="w-4 h-4" />
                </div>
                <h4 className="font-lato font-bold text-[18px] text-foreground">{tool.title}</h4>
                <p className="font-lato text-[14px] text-muted-foreground leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TOOLS ─────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSectionHeader
            wrapperClassName="max-w-6xl mx-auto mb-12"
            pillText={t("directors.add_pill")}
            pillClassName="bg-primary/10 text-primary"
            title={t("directors.add_title")}
            titleClassName="text-foreground"
            description={t("directors.add_desc")}
          />

          <div className="grid md:grid-cols-3 gap-[29px]">
            {additionalTools.map((tool, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-white rounded-[38px] border-2 border-[#D4BAF4] p-10 flex flex-col gap-4">
                <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center shrink-0">
                  <img src={tool.icon} alt="" className="w-4 h-4" />
                </div>
                <Pill text={tool.tagline} className="bg-primary/10 text-primary self-start" />
                <h3 className="font-lato font-bold text-[22px] text-foreground">{tool.title}</h3>
                <p className="font-lato text-[16px] text-muted-foreground leading-relaxed flex-grow">{tool.description}</p>
                <div className="rounded-[12px] bg-[#F7F2FD] p-[22px] mt-auto">
                  <p className="font-lato font-normal text-[16px] text-[#4D029B] italic leading-relaxed">"{tool.highlight}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ─────────────────────────────────────── */}
      <section className="section-padding bg-[#FBFBFB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Pill text={t("directors.ai_pill")} className="text-primary bg-[#E4E4FE] border border-[#8651EF42] mb-6" />
              <h2 className="font-lato font-extrabold text-4xl md:text-[44px] leading-tight mb-6">{t("directors.ai_title")}</h2>
              <p className="text-sm font-semibold text-primary mb-3">{t("directors.ai_subtitle")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("directors.ai_p")}</p>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-border bg-card p-8 space-y-5">
                {[
                  { label: "Production analysis", pct: 20 },
                  { label: "Risk identification", pct: 15 },
                  { label: "Decision support", pct: 18 },
                  { label: "Creative authority", pct: 100 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{label}</span>
                      {pct === 100 ? <span className="text-primary font-semibold">Always yours</span> : <span className="text-muted-foreground">Optional</span>}
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-[#29FADF] to-[#8B1DFF]" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp(0)} className="relative rounded-[38px] overflow-hidden">
              <div className="absolute inset-0" style={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }} />
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative p-8 md:p-16 md:py-24 pb-12 text-center">
                <Pill text={t("directors.cta_pill")} className="bg-white text-primary mb-6 mx-auto" icon={<img src={iconStar} alt="" className="w-4 h-4" />} />
                <h2 className="font-lato font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">{t("directors.cta_h2")}</h2>
                <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">{t("directors.cta_p")}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="xl" className="group bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px]" postfixIcon={<ArrowIcon className="w-5 h-5 group-hover:translate-x-1 text-white" />}>
                      {t("directors.cta_btn1")}
                    </Button>
                  </a>
                  <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/10 rounded-[10px]">
                      {t("directors.cta_btn2")}
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-white/50">{t("directors.cta_note")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DirectorsProducers;
