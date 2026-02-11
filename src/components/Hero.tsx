import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import iconSurvey from "@/assets/icon-survey.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
          >
            One intelligent workflow{" "}
            <span className="gradient-text">from script to shoot.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
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
            <Button size="lg" className="group text-base px-8" style={{ background: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
              <img src={iconSurvey} alt="" className="w-6 h-6" />
              Start for Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group text-base px-8">
              <Play className="w-4 h-4 mr-2" />
              Book a Demo
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground"
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            <div className="absolute inset-0 gradient-hero-bg opacity-5" />
            <div className="p-2">
              <div className="bg-muted/50 rounded-xl aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                {/* Mock dashboard UI */}
                <div className="absolute inset-4 bg-background rounded-lg shadow-inner flex">
                  {/* Sidebar */}
                  <div className="w-16 lg:w-48 border-r border-border/50 p-3 hidden sm:block">
                    <div className="w-8 h-8 rounded-lg gradient-bg mb-4" />
                    <div className="space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-2 bg-muted rounded w-full" style={{ width: `${70 + Math.random() * 30}%` }} />
                      ))}
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-4 lg:p-6">
                    <div className="h-3 bg-muted rounded w-1/3 mb-4" />
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-video bg-muted rounded-lg" />
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-2 bg-muted rounded" style={{ width: `${60 + Math.random() * 40}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <p className="text-muted-foreground text-lg font-medium">Your production workspace</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
