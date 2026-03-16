import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { motion } from "framer-motion";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import { useIndieCheckoutUrl } from "@/lib/checkout";

const HeroDescription = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="font-lato text-lg md:text-xl leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto mb-10"
    >
      {/* Mobile: truncated to 2 lines */}
      <span className={`md:hidden block`}>
        <span className={expanded ? "" : "line-clamp-2"}>
          Scripts change. Schedules shift. Budgets move. Teams miss updates. Pzaz keeps your script, plan, budget, timeline, and team perfectly in sync from the first draft to final delivery. Things change and everything updates automatically.{" "}
          Stay focused on the story while Pzaz keeps the production aligned.
        </span>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-primary font-semibold mt-1 inline-block"
          >
            Read More
          </button>
        )}
      </span>
      {/* Desktop: full text */}
      <span className="hidden md:block">
        Scripts change. Schedules shift. Budgets move. Teams miss updates. Pzaz keeps your script, plan, budget, timeline, and team perfectly in sync from the first draft to final delivery. Things change and everything updates automatically.<br /><br />Stay focused on the story while Pzaz keeps the production aligned.
      </span>
    </motion.div>
  );
};

const Hero = () => {

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
            className="font-lato font-bold text-center mb-10 text-balance pt-[40px] md:pt-[60px] text-[48px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            <span className="text-foreground block">Screen productions rarely fail because of creativity. </span><span className="bg-clip-text text-transparent block" style={{backgroundImage: "linear-gradient(247.38deg, rgb(41, 250, 223) -2.17%, rgb(139, 29, 255) 84.87%)"}}>They fail because information falls apart.</span>
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
                  Start for Free
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </a>
              <p className="font-lato font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#878787]">No credit card.</p>
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
                  Book a Demo
                </Button>
              </a>
              <p className="font-lato font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#878787]">Be up and running in 15 minutes.</p>
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
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;
