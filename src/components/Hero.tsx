import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import iconSurvey from "@/assets/icon-survey.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import productionWorkspace from "@/assets/production-workspace.png";

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
            className="font-lato font-extrabold text-[64px] leading-[70px] tracking-normal text-center mb-6 text-balance md:pt-[60px]"
          >
            One intelligent workflow{" "}
            <span className="gradient-text">from script to shoot.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-center text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Pzaz helps you write smarter, plan faster, and avoid costly mistakes. 
            AI works with you, not instead of you, turning your script into a full production plan.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button size="lg" className="group px-8">
              <img src={iconSurvey} alt="" className="w-5 h-5" />
              Import a Script
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </Button>
            <Button variant="outline" size="lg" className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground">
              <img src={ctaPlayIcon} alt="" className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]" />
              Book Studio Demo
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-lato font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#878787]"
          >
            No credit card. Up and running in 15 minutes.
          </motion.p>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 lg:mt-24 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img src={productionWorkspace} alt="Your production workspace" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
