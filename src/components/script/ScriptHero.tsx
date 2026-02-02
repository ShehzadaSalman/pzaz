import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ScriptHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Scriptwriting Software for Film Productions</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
          >
            Turn scripts into productions.{" "}
            <span className="gradient-text">Faster. With less risk.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Pzaz Script transforms any screenplay — from any writing tool — into a production-ready 
            system of data, decisions, and workflows. Built for producers, line producers, and 
            production teams who need scripts that hold up in the real world.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button size="lg" className="group text-base px-8">
              <FileText className="w-4 h-4 mr-2" />
              Import a Script
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group text-base px-8">
              <Play className="w-4 h-4 mr-2" />
              Book a Studio Demo
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            Works with Final Draft, Celtx, and industry-standard formats.
          </motion.p>
        </div>

        {/* Hero Visual - Script Dashboard Mockup */}
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
                {/* Mock Script Editor UI */}
                <div className="absolute inset-4 bg-background rounded-lg shadow-inner flex">
                  {/* Sidebar - Scene Navigator */}
                  <div className="w-16 lg:w-56 border-r border-border/50 p-3 hidden sm:block">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-medium hidden lg:block">Scene Navigator</span>
                    </div>
                    <div className="space-y-2">
                      {['INT. OFFICE - DAY', 'EXT. STREET - NIGHT', 'INT. APARTMENT - EVENING', 'EXT. ROOFTOP - DAWN', 'INT. CAR - MOVING'].map((scene, i) => (
                        <div key={i} className={`h-6 px-2 rounded text-[10px] flex items-center ${i === 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          <span className="truncate hidden lg:block">{scene}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Main Script Content */}
                  <div className="flex-1 p-4 lg:p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-3 bg-primary/20 rounded w-24" />
                      <div className="h-3 bg-muted rounded w-16" />
                      <div className="h-3 bg-muted rounded w-20" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-muted-foreground/20 rounded w-1/3 mx-auto" />
                      <div className="h-2 bg-muted rounded w-full" />
                      <div className="h-2 bg-muted rounded w-5/6" />
                      <div className="mt-4 h-2 bg-muted-foreground/20 rounded w-1/4 mx-auto" />
                      <div className="h-2 bg-muted rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-muted rounded w-2/3 mx-auto" />
                    </div>
                  </div>
                  {/* Right Panel - Breakdown */}
                  <div className="w-16 lg:w-64 border-l border-border/50 p-3 hidden md:block">
                    <div className="text-xs font-medium mb-3 hidden lg:block">Auto Breakdown</div>
                    <div className="space-y-2">
                      {['Characters', 'Locations', 'Props', 'Wardrobe'].map((cat, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="text-[10px] text-muted-foreground hidden lg:block">{cat}</span>
                          <span className="text-[10px] font-medium text-primary">{[3, 2, 5, 1][i]}</span>
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

export default ScriptHero;
