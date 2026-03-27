import React from "react";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import { useTranslation } from "react-i18next";

const CollaborationHero = () => {
  const { t } = useTranslation('collaboration');
  const indieCheckoutUrl = useIndieCheckoutUrl();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50.01% 50.01% at 50% 0%, rgba(170, 166, 255, 0.25) 0%, rgba(170, 166, 255, 0.05) 69.96%, rgba(170, 166, 255, 0) 90.38%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Pill
              text={t("collaboration.hero_pill")}
              className="text-primary mb-8 mt-[15px] bg-[#E4E4FE] border border-[#8651EF42]"
              icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
          >
            {t("collaboration.hero_h1a")}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
            >
              {t("collaboration.hero_h1b")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-10"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
              {t("collaboration.hero_sub1")}
            </p>
            <p className="text-lg sm:text-xl text-foreground font-semibold leading-relaxed">
              {t("collaboration.hero_sub2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group px-8">
                {t("collaboration.hero_cta1")}
                <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
              </Button>
            </a>
            <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
                prefixIcon={
                  <img
                    src={ctaPlayIcon}
                    alt=""
                    className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]"
                  />
                }
              >
                {t("collaboration.hero_cta2")}
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            {t("collaboration.hero_trust")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 lg:mt-24 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            <div className="p-2">
              <div className="bg-muted/50 rounded-xl aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-background rounded-lg shadow-inner flex flex-col">
                  <div className="flex items-center gap-2 border-b border-border/50 px-4 py-2">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">C</span>
                    </div>
                    <span className="text-xs font-medium hidden lg:block">Team Collaboration</span>
                    <div className="ml-auto flex gap-2">
                      {["Chat", "Tasks", "Files", "Activity"].map((s, i) => (
                        <div key={i} className={`h-5 px-2 rounded text-[10px] flex items-center ${i === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                          <span className="hidden sm:block">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 p-4 grid grid-cols-3 gap-3">
                    <div className="col-span-1 flex flex-col gap-2">
                      {["Scene 12 – Feedback", "Budget Review", "Crew Schedule", "Script Draft v3"].map((item, i) => (
                        <div key={i} className={`rounded-lg border px-3 py-2 text-[9px] font-medium ${i === 0 ? "border-primary/40 bg-primary/5 text-primary" : "border-border/40 bg-muted/40 text-muted-foreground"} hidden lg:block`}>
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="col-span-2 flex flex-col gap-2 border-l border-border/30 pl-3">
                      {[
                        { user: "Director", msg: "Can we adjust the lighting in this shot?", time: "2m ago", me: false },
                        { user: "DP", msg: "Agreed — I'll flag it for the gaffer.", time: "1m ago", me: false },
                        { user: "You", msg: "Added to Scene 12 notes.", time: "just now", me: true },
                      ].map((m, i) => (
                        <div key={i} className={`flex flex-col gap-0.5 ${m.me ? "items-end" : "items-start"} hidden lg:flex`}>
                          <span className="text-[8px] text-muted-foreground">{m.user} · {m.time}</span>
                          <div className={`text-[9px] px-2 py-1 rounded-lg max-w-[80%] ${m.me ? "bg-primary/15 text-primary" : "bg-muted text-foreground"}`}>{m.msg}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationHero;
