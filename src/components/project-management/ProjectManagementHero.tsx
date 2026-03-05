import React from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import { Link } from "react-router-dom";

const ProjectManagementHero = () => {
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Pill
              text="Project Management for Film Productions"
              className="text-primary mb-8 mt-[15px] bg-[#E4E4FE] border border-[#8651EF42]"
              icon={<img src={aiResearchIcon} alt="" className="w-4 h-4" />}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-[48px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
          >
            The Mistake Most Filmmakers{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}
            >
              Don't Even Know They're Making.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            It's not distribution, nor budgeting. It's not even getting your script right.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl font-semibold text-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            It's project management — and hardly anybody talks about it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link to="/pricing">
              <Button
                size="lg"
                className="group px-8"
                prefixIcon={<LayoutDashboard className="w-5 h-5" />}
              >
                Manage Your First Project
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
            Up and running in minutes.
          </motion.p>
        </div>

        {/* Hero Visual — command center mockup */}
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
                  {/* Left sidebar */}
                  <div className="w-16 lg:w-52 border-r border-border/50 p-3 hidden sm:block">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                        <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold hidden lg:block">My Project</span>
                    </div>
                    <div className="space-y-1 mb-4">
                      {["Overview", "Script", "Breakdown", "Schedule", "Budget", "Files", "Tasks", "Team"].map(
                        (item, i) => (
                          <div
                            key={i}
                            className={`h-6 px-2 rounded text-[10px] flex items-center cursor-pointer ${
                              i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            <span className="truncate hidden lg:block">{item}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 bg-primary/30 rounded w-28" />
                        <div className="h-3 bg-muted rounded w-16" />
                      </div>
                      <div className="flex gap-1">
                        {["Script", "Schedule", "Budget"].map((t) => (
                          <div key={t} className="h-5 px-2 rounded-full bg-muted text-[9px] flex items-center text-muted-foreground hidden lg:flex">{t}</div>
                        ))}
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { label: "Shoot Days", val: "18", color: "bg-primary/10 text-primary" },
                        { label: "Open Tasks", val: "24", color: "bg-amber-50 text-amber-600" },
                        { label: "Budget Used", val: "62%", color: "bg-green-50 text-green-600" },
                        { label: "Scenes Done", val: "41", color: "bg-purple-50 text-purple-600" },
                      ].map((s) => (
                        <div key={s.label} className={`rounded-xl p-3 ${s.color} border border-current/20`}>
                          <p className="text-[14px] font-bold hidden lg:block">{s.val}</p>
                          <p className="text-[8px] opacity-70 hidden lg:block">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Timeline strip */}
                    <div className="rounded-lg border border-border/40 bg-muted/20 p-3 mb-3">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wide mb-2 hidden lg:block">
                        Production Timeline
                      </p>
                      <div className="flex gap-1">
                        {["Pre-Prod", "Week 1", "Week 2", "Week 3", "Post", "Delivery"].map((ph, i) => (
                          <div
                            key={ph}
                            className={`flex-1 h-5 rounded text-[7px] flex items-center justify-center font-medium hidden lg:flex ${
                              i < 2
                                ? "bg-primary/70 text-white"
                                : i === 2
                                ? "bg-primary/30 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {ph}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity feed */}
                    <div className="space-y-1.5">
                      {[
                        { msg: "Script v4 locked by Director", time: "2m ago", dot: "bg-green-400" },
                        { msg: "Call sheet sent — Shoot Day 3", time: "1h ago", dot: "bg-primary" },
                        { msg: "Budget updated by Line Producer", time: "3h ago", dot: "bg-amber-400" },
                      ].map((a) => (
                        <div key={a.msg} className="flex items-center gap-2 p-2 rounded-lg bg-muted/40 hidden lg:flex">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                          <p className="text-[9px] text-foreground flex-1">{a.msg}</p>
                          <p className="text-[8px] text-muted-foreground">{a.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="w-16 lg:w-52 border-l border-border/50 p-3 hidden md:block">
                    <div className="text-xs font-bold mb-3 hidden lg:block">Project Health</div>
                    <div className="space-y-2 mb-4">
                      {[
                        { label: "Script", pct: 100, color: "bg-green-400" },
                        { label: "Schedule", pct: 75, color: "bg-primary" },
                        { label: "Budget", pct: 62, color: "bg-amber-400" },
                        { label: "Tasks", pct: 48, color: "bg-purple-400" },
                      ].map((p) => (
                        <div key={p.label} className="hidden lg:block">
                          <div className="flex justify-between mb-0.5">
                            <span className="text-[9px] text-muted-foreground">{p.label}</span>
                            <span className="text-[9px] font-medium">{p.pct}%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-[9px] font-bold text-muted-foreground mb-2 hidden lg:block">
                      TEAM ONLINE
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {["D", "P", "A", "C", "E"].map((initial, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white hidden lg:flex ${
                            ["bg-primary", "bg-purple-500", "bg-teal-500", "bg-amber-500", "bg-pink-500"][i]
                          }`}
                        >
                          {initial}
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

export default ProjectManagementHero;
