import React from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Database, 
  GitBranch, 
  Brain, 
  Layers, 
  BarChart3, 
  Users, 
  Shield, 
  Building2, 
  Zap, 
  FileCheck,
  Target
} from "lucide-react";

const usps = [
  {
    icon: Upload,
    title: "Tool-Agnostic Script Intake",
    tagline: "No Writer Lock-In",
    description: "Import scripts from Final Draft, Celtx, and standard formats without forcing writers to change tools.",
    highlight: "Zero friction at development stage. Freedom to work with any writer, agent, or partner.",
  },
  {
    icon: Database,
    title: "Script as Single Source of Truth",
    tagline: "Every Department Aligned",
    description: "One script drives breakdowns, schedules, budgets, casting, locations, and workflows.",
    highlight: "No duplicate interpretations. No silent mismatches. Every department pulls from the same live script data.",
  },
  {
    icon: GitBranch,
    title: "Production-Stage Version Control",
    tagline: "Development → Delivery",
    description: "Development drafts, shooting drafts, and locked scripts — clearly separated and tracked.",
    highlight: "Always know which version is active, approved, and what changed, when, and why.",
  },
  {
    icon: Brain,
    title: "AI for Production Reality",
    tagline: "Think Like a Production Team",
    description: "AI analyzes scripts for scope, complexity, location intensity, feasibility, and cost drivers.",
    highlight: "Studios greenlight with insight — not gut feeling. This happens before budgets are locked.",
  },
  {
    icon: Layers,
    title: "Automatic Script Breakdown",
    tagline: "Instant & Structured",
    description: "Elements are detected automatically, breakdowns are generated consistently, departments receive structured data.",
    highlight: "What used to take days now takes minutes. A script instantly becomes a production plan.",
  },
  {
    icon: BarChart3,
    title: "Department-Ready Data",
    tagline: "Actionable Production Data",
    description: "Script elements feed directly into scheduling, budgeting, location planning, and crew preparation.",
    highlight: "No duplication. No re-entry. No guessing. The script feeds production.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    tagline: "Decisions in Context",
    description: "Producers, line producers, ADs, and coordinators collaborate on the same script context.",
    highlight: "Fewer emails. No PDF chaos. Comments tied to scenes. Approvals tracked.",
  },
  {
    icon: Shield,
    title: "Reduced Greenlight Risk",
    tagline: "Scope & Cost Visibility",
    description: "Scripts become measurable early. Production complexity is visible before money is committed.",
    highlight: "Understand scope and cost before saying yes. Cost implications surface sooner.",
  },
  {
    icon: Building2,
    title: "Built to Scale",
    tagline: "From Film to Slate",
    description: "Works for single productions, multiple concurrent projects, and long-term studio workflows.",
    highlight: "Your process stays consistent. Institutional knowledge stays inside the system.",
  },
  {
    icon: Zap,
    title: "Speed Without Chaos",
    tagline: "Faster Time-to-Production",
    description: "Shorten the path from script delivery to day one of shooting without cutting corners.",
    highlight: "Better crew availability. Better location options. Lower development overhead.",
  },
  {
    icon: FileCheck,
    title: "Goodbye PDF Hell",
    tagline: "Live Scripts Replace Static Files",
    description: "No outdated PDFs floating around. No confusion over approvals. No lost revision history.",
    highlight: "Always know what was approved, when, and by whom. Cleaner legal and audit trails.",
  },
  {
    icon: Target,
    title: "Built for Production Reality",
    tagline: "Not Writing Comfort",
    description: "Pzaz treats the script as a production engine, not a word processor.",
    highlight: "Writing tools end at FADE OUT. Pzaz starts there.",
  },
];

const ScriptUSPs = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Studios Choose Pzaz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            12 Ways Pzaz Script{" "}
            <span className="gradient-text">Transforms Production</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed for producers, line producers, production managers, 
            and executives who need scripts to work in the real world.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group relative rounded-2xl p-6 bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <usp.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-primary mb-1">{usp.tagline}</p>
                  <h3 className="text-lg font-bold mb-2">{usp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{usp.description}</p>
                  <p className="text-sm text-foreground/80 font-medium italic">"{usp.highlight}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScriptUSPs;
