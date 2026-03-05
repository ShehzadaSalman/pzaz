import React from "react";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import { Link } from "react-router-dom";

const SceneBreakdownHero = () => {
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
              text="For Directors and Production Teams"
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
            Scenes Don't Break Down{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
            >
              Because of Detail.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto mb-10"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
              Tag, Organise, Prepare: Break down scenes, add shots, assign teams, and track progress.
            </p>
            <p className="text-lg sm:text-xl text-foreground font-semibold leading-relaxed">
              All in one seamless platform.
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
            <a href="https://calendly.com/pzaz-tv/30min" target="_blank" rel="noopener noreferrer">
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
            Break down your first scene.
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
                <div className="absolute inset-4 bg-background rounded-lg shadow-inner flex flex-col">
                  {/* Toolbar */}
                  <div className="flex items-center gap-2 border-b border-border/50 px-4 py-2">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">B</span>
                    </div>
                    <span className="text-xs font-medium hidden lg:block">Scene Breakdown</span>
                    <div className="ml-auto flex gap-2">
                      {["Scene 1", "Scene 2", "Scene 3", "Scene 4"].map((s, i) => (
                        <div key={i} className={`h-5 px-2 rounded text-[10px] flex items-center ${i === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                          <span className="hidden sm:block">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Scene stripboard */}
                  <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { scene: "INT. OFFICE – DAY", dept: "Camera, Art", crew: "3 cast, 2 crew" },
                      { scene: "EXT. STREET – NIGHT", dept: "Lighting, Sound", crew: "1 cast, 4 crew" },
                      { scene: "INT. STUDIO – DAY", dept: "Camera, Makeup", crew: "5 cast, 6 crew" },
                    ].map((row, i) => (
                      <div key={i} className={`rounded-lg border-2 ${i === 0 ? "border-primary/40 bg-primary/5" : "border-border/40 bg-muted/40"} p-3 flex flex-col gap-2`}>
                        <p className="text-[10px] font-bold text-foreground hidden lg:block">{row.scene}</p>
                        <div className="flex gap-1 flex-wrap">
                          {row.dept.split(", ").map((d) => (
                            <span key={d} className="text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary hidden lg:block">{d}</span>
                          ))}
                        </div>
                        <p className="text-[8px] text-muted-foreground hidden lg:block">{row.crew}</p>
                        <div className="w-full h-2 rounded bg-muted-foreground/10 mt-auto">
                          <div className={`h-2 rounded bg-primary/40`} style={{ width: `${[70, 30, 50][i]}%` }} />
                        </div>
                      </div>
                    ))}
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

export default SceneBreakdownHero;
