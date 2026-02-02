import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Lock, 
  FileInput, 
  RotateCcw, 
  Search, 
  Maximize, 
  Gift,
  GripVertical
} from "lucide-react";

const features = [
  { icon: Cloud, title: "Autosave & cloud storage" },
  { icon: Lock, title: "Secure script storage" },
  { icon: FileInput, title: "Flexible import & export", subtitle: "FDX, PDF, RTF, TXT, Fountain" },
  { icon: RotateCcw, title: "Scene undo & renumbering" },
  { icon: Search, title: "Script indexing for fast navigation" },
  { icon: Maximize, title: "Full-screen, distraction-free writing" },
  { icon: Gift, title: "Free updates & upgrades — always" },
  { icon: GripVertical, title: "Drag & drop scene structure" },
];

const ScriptFeatures = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Essential Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything you need.{" "}
              <span className="gradient-text">Nothing you don't.</span>
            </h2>
          </motion.div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{feature.title}</p>
                  {feature.subtitle && (
                    <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Core Experience
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Complete Script Lifecycle Solution
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One platform. The complete script lifecycle. Everything your script needs — 
              from the first idea to production — in one intuitive workspace.
            </p>
          </motion.div>

          {/* Core feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "From concept to screen",
                description: "A complete scriptwriting ecosystem. Brainstorm ideas, draft scripts, and move seamlessly into production planning.",
              },
              {
                title: "Focus on the story",
                description: "Automatic industry-standard formatting. Formatting happens automatically, so you stay immersed in your narrative.",
              },
              {
                title: "Every version. Always safe.",
                description: "Track changes, compare drafts, and restore previous versions instantly. Nothing is ever lost.",
              },
              {
                title: "Write together, in real time",
                description: "Co-write and edit scripts live with your team, no matter where they are in the world.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-gradient-to-b from-primary/5 to-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptFeatures;
