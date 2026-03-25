import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { motion } from "framer-motion";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import { useTranslation } from "react-i18next";

const HeroDescription = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="font-lato text-lg md:text-xl leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto mb-10"
    >
      {/* Mobile: show up to "delivery", rest in read more */}
      <span className="md:hidden block">
        {t("hero.description_short")}
        {expanded ? (
          <> {t("hero.description_short_more")}</>
        ) : (
          <>
            {" "}
            <button
              onClick={() => setExpanded(true)}
              className="text-muted-foreground/60 text-sm underline underline-offset-2 inline-block"
            >
              {t("hero.read_more")}
            </button>
          </>
        )}
      </span>
      {/* Desktop: full text */}
      <span className="hidden md:block">
        {t("hero.description_full")}<br /><br />{t("hero.description_full2")}
      </span>
    </motion.div>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isUrdu = i18n.language === "ur";
  const indieCheckoutUrl = useIndieCheckoutUrl();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[60px]">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-lato font-bold text-center mb-10 text-balance pt-[40px] md:pt-[60px] text-[32px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            <span className="text-foreground block">{t("hero.headline1")} </span>
            <span className="bg-clip-text text-transparent block" style={{backgroundImage: "linear-gradient(247.38deg, rgb(41, 250, 223) -2.17%, rgb(139, 29, 255) 84.87%)"}}>
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subheading */}
          <HeroDescription />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-row flex-wrap items-start justify-center gap-4 mb-6"
          >
            <div className="flex flex-col items-center gap-1">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group px-8">
                  {t("hero.cta_primary")}
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
              <p className="font-lato font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#878787]">
                {t("hero.cta_primary_sub")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
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
                  {t("hero.cta_secondary")}
                </Button>
              </a>
              <p className="font-lato font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#878787]">
                {t("hero.cta_secondary_sub")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 lg:mt-24 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <video
              src="/videos/hero-banner.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
