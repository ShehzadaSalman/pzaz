import React from "react";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import { useIndieCheckoutUrl } from "@/lib/checkout";

const PlanningHero = () => {
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
              text="For Writer-Directors and Creative Leads"
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
            Build Your Film{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
            >
              Before You Shoot It
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-10"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
              Preproduction is where films succeed or quietly fall apart. Not because the idea is weak, but because structure arrives too late.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
              Versions multiply. Feedback fragments. Production realities surface after decisions are locked.
            </p>
            <p className="text-lg sm:text-xl text-foreground font-semibold leading-relaxed">
              Planning Pro keeps creative development inside the same environment that will execute the film.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <Link to="/pricing">
              <Button size="lg" className="group px-8">
                Start Free
                <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
              </Button>
            </Link>
            <a href="https://www.youtube.com/watch?v=9szESOfyK_8" target="_blank" rel="noopener noreferrer">
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
                Watch Video
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            Up and running in minutes.
          </motion.p>
        </div>

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
                <div className="absolute inset-4 bg-background rounded-lg shadow-inner flex">
                  <div className="w-16 lg:w-56 border-r border-border/50 p-3 hidden sm:block">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">P</span>
                      </div>
                      <span className="text-xs font-medium hidden lg:block">Planning Pro</span>
                    </div>
                    <div className="space-y-2">
                      {["Script", "Breakdown", "Schedule", "Budget", "Versions"].map((item, i) => (
                        <div key={i} className={`h-6 px-2 rounded text-[10px] flex items-center ${i === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                          <span className="truncate hidden lg:block">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 p-4 lg:p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-3 bg-primary/20 rounded w-32" />
                      <div className="h-3 bg-muted rounded w-16" />
                      <div className="h-3 bg-green-200 rounded w-20" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-muted/60 rounded-lg p-3 space-y-2">
                          <div className="h-2 bg-primary/20 rounded w-2/3" />
                          <div className="h-2 bg-muted-foreground/20 rounded w-full" />
                          <div className="h-2 bg-muted-foreground/20 rounded w-4/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-16 lg:w-48 border-l border-border/50 p-3 hidden md:block">
                    <div className="text-xs font-medium mb-3 hidden lg:block">Production Status</div>
                    <div className="space-y-2">
                      {["Script", "Breakdown", "Schedule", "Budget"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="text-[10px] text-muted-foreground hidden lg:block">{item}</span>
                          <div className={`w-2 h-2 rounded-full ${i < 3 ? "bg-green-400" : "bg-muted-foreground/30"}`} />
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

export default PlanningHero;
