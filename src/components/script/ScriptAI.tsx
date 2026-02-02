import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Wand2, FileSearch, PenTool, MessageSquare } from "lucide-react";

const aiFeatures = [
  {
    icon: Wand2,
    title: "Auto-Insert",
    description: "Intelligent scene element suggestions that adapt to your writing style and context.",
  },
  {
    icon: PenTool,
    title: "Auto-Complete",
    description: "Smart completions for dialogue, action lines, and transitions that feel natural.",
  },
  {
    icon: FileSearch,
    title: "Intelligent Imports",
    description: "Automatically parse and structure scripts from any format with high accuracy.",
  },
  {
    icon: MessageSquare,
    title: "Scene Analysis",
    description: "Get production insights on scope, complexity, and feasibility for each scene.",
  },
];

const ScriptAI = () => {
  return (
    <section id="ai" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Built-In Intelligence
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Smart AI tools for{" "}
                <span className="gradient-text">effortless scriptwriting</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                AI tools like Auto-Insert, Auto-Complete, and intelligent script imports 
                adapt to your writing style. Each assistant supports a specific part of 
                your workflow — from scene building to dialogue — creating a more personal, 
                efficient experience.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                <div className="absolute inset-0 gradient-hero-bg opacity-5" />
                <div className="p-6">
                  {/* Mock AI suggestion interface */}
                  <div className="bg-background rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                      <span>AI Assistant Active</span>
                    </div>
                    
                    {/* Script line */}
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">INT. OFFICE - DAY</p>
                      <p className="text-sm">SARAH enters, coffee in hand. She notices—</p>
                    </div>

                    {/* AI suggestion */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="relative p-4 rounded-lg bg-primary/10 border border-primary/20"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                          <Wand2 className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-primary mb-1">Suggested continuation</p>
                          <p className="text-sm text-foreground italic">
                            —the files scattered across MARK's desk. He's nowhere to be seen.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">Accept</button>
                        <button className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">Regenerate</button>
                      </div>
                    </motion.div>

                    {/* Elements detected */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">Auto-detected elements:</p>
                      <div className="flex flex-wrap gap-2">
                        {['SARAH', 'MARK', 'Coffee cup', 'Files', 'Office desk'].map((el) => (
                          <span key={el} className="px-2 py-1 text-xs bg-muted rounded-md">{el}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptAI;
