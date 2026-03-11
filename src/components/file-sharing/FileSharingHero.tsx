import React from "react";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import aiResearchIcon from "@/assets/ai-research-icon.svg";
import { Link } from "react-router-dom";

const FileSharingHero = () => {
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
              text="File Sharing & Media Storage for Film Teams"
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
            Centralise, Share &{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
              Protect Your Production Assets.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Film productions generate enormous amounts of material. Files live in cloud drives, private folders, email threads, and messaging apps. Different versions circulate. Links expire. Teams ask the same question repeatedly: which file is the real one?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link to="/pricing">
              <Button size="lg" className="group px-8"
                prefixIcon={<FolderOpen className="w-5 h-5" />}
              >
                Start Free
                <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
              </Button>
            </Link>
            <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
                prefixIcon={
                  <img src={ctaPlayIcon} alt="" className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]" />
                }
              >
                Watch Demo
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

        {/* Hero Visual — media library mockup */}
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
                  {/* Sidebar */}
                  <div className="w-16 lg:w-52 border-r border-border/50 p-3 hidden sm:block">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-medium hidden lg:block">Media Library</span>
                    </div>
                    <div className="space-y-2">
                      {["Scripts", "Storyboards", "Reference Imgs", "Raw Footage", "Exports"].map((f, i) => (
                        <div key={i} className={`h-6 px-2 rounded text-[10px] flex items-center ${i === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                          <span className="truncate hidden lg:block">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Grid */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-3 bg-primary/20 rounded w-32" />
                      <div className="h-3 bg-muted rounded w-20" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { name: "scene-12-ref.jpg", type: "img", color: "bg-purple-100" },
                        { name: "script_v4_FINAL.pdf", type: "pdf", color: "bg-blue-50" },
                        { name: "moodboard-v2.png", type: "img", color: "bg-pink-50" },
                        { name: "call-sheet-week3.xlsx", type: "doc", color: "bg-green-50" },
                        { name: "shot-list-D12.pdf", type: "pdf", color: "bg-yellow-50" },
                        { name: "costume-ref.jpg", type: "img", color: "bg-orange-50" },
                        { name: "budget_draft_v5.xlsx", type: "doc", color: "bg-teal-50" },
                        { name: "storyboard-act2.png", type: "img", color: "bg-purple-50" },
                      ].map((file, i) => (
                        <div key={i} className={`rounded-lg border border-border/40 ${file.color} p-2 flex flex-col gap-1 hidden lg:flex`}>
                          <div className="w-full aspect-square rounded bg-white/60 flex items-center justify-center">
                            <div className="w-4 h-5 rounded-sm bg-current opacity-20" />
                          </div>
                          <p className="text-[7px] text-foreground/60 truncate leading-tight">{file.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right Panel */}
                  <div className="w-16 lg:w-56 border-l border-border/50 p-3 hidden md:block">
                    <div className="text-xs font-medium mb-3 hidden lg:block">File Details</div>
                    <div className="space-y-2">
                      {["Scene", "Version", "Shared with", "Updated"].map((f, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="text-[10px] text-muted-foreground hidden lg:block">{f}</span>
                          <span className="text-[10px] font-medium text-primary">{["Scene 12", "v4 FINAL", "All Depts", "2h ago"][i]}</span>
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

export default FileSharingHero;
