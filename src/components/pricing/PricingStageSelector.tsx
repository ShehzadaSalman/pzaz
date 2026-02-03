import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, ClipboardList, Clapperboard, Building2, ChevronDown, Check } from "lucide-react";

interface Stage {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  plan: {
    name: string;
    price: string;
    tagline: string;
    features: string[];
    modules: string[];
    cta: string;
  };
  nextStage?: string;
}

const stages: Stage[] = [
  {
    id: "writing",
    icon: <PenTool className="w-6 h-6" />,
    title: "Writing & Developing",
    description: "Scripts, ideas, early visuals",
    plan: {
      name: "Development Workspace",
      price: "€49",
      tagline: "Everything you need to turn a script into a clear, visual plan — without chaos.",
      features: [
        "Central project workspace",
        "Script writing & breakdown",
        "Storyboarding & visual previews",
        "Notes, files, and collaboration",
        "Real-time updates across tools"
      ],
      modules: ["Project", "Script", "Storyboard", "Inbox", "Docs", "Drive"],
      cta: "Start developing"
    },
    nextStage: "Planning a Production"
  },
  {
    id: "planning",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Planning a Production",
    description: "Breakdown, budget, locations, casting",
    plan: {
      name: "Production Planning",
      price: "€149",
      tagline: "From script breakdown to budget and schedule — all connected, all in sync.",
      features: [
        "Full breakdown automation",
        "Budget builder with categories",
        "Location & casting management",
        "Schedule templates",
        "Team collaboration tools"
      ],
      modules: ["Project", "Script", "Storyboard", "Budget", "Schedule", "Inbox", "Docs", "Drive"],
      cta: "Start planning"
    },
    nextStage: "Actively Producing"
  },
  {
    id: "producing",
    icon: <Clapperboard className="w-6 h-6" />,
    title: "Actively Producing",
    description: "Scheduling, call sheets, team coordination",
    plan: {
      name: "Production Suite",
      price: "€299",
      tagline: "Run your shoot with precision — from call sheets to wrap, everything flows.",
      features: [
        "Advanced scheduling & strips",
        "Call sheet generation",
        "Team assignments & notifications",
        "Daily reports & tracking",
        "Vendor & resource management"
      ],
      modules: ["Project", "Script", "Storyboard", "Budget", "Schedule", "Call Sheets", "Reports", "Team", "Inbox", "Docs", "Drive"],
      cta: "Start producing"
    },
    nextStage: "Running a Studio"
  },
  {
    id: "studio",
    icon: <Building2 className="w-6 h-6" />,
    title: "Running a Studio",
    description: "Multiple projects, teams, scale",
    plan: {
      name: "Studio Suite",
      price: "€499",
      tagline: "Manage multiple productions, teams, and workflows from one command center.",
      features: [
        "Multi-project dashboard",
        "Cross-project resource sharing",
        "Team roles & permissions",
        "Analytics & reporting",
        "Custom integrations & API"
      ],
      modules: ["All modules", "Studio Dashboard", "Analytics", "API Access", "Priority Support"],
      cta: "Contact sales"
    }
  }
];

const PricingStageSelector = () => {
  const [selectedStage, setSelectedStage] = useState<string>("writing");
  const [showModules, setShowModules] = useState<boolean>(false);

  const currentStage = stages.find(s => s.id === selectedStage) || stages[0];

  return (
    <section id="stages" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Where are you in your film right now?
          </h2>
        </motion.div>

        {/* Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {stages.map((stage, index) => (
            <motion.button
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedStage(stage.id)}
              className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                selectedStage === stage.id
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                selectedStage === stage.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {stage.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Dynamic Pricing Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            {/* Recommended Badge */}
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Check className="w-4 h-4" />
                Recommended for your stage
              </span>
            </div>

            {/* Main Pricing Card */}
            <div className="relative rounded-3xl border-2 border-primary bg-card p-8 sm:p-10 shadow-xl">
              {/* Gradient glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10" />

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{currentStage.plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold gradient-text">{currentStage.plan.price}</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <p className="text-muted-foreground max-w-md mx-auto">{currentStage.plan.tagline}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {currentStage.plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button size="xl" className="w-full group">
                {currentStage.plan.cta}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>

              {/* Expandable Modules */}
              <div className="mt-6">
                <button
                  onClick={() => setShowModules(!showModules)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
                >
                  What's included exactly?
                  <ChevronDown className={`w-4 h-4 transition-transform ${showModules ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {showModules && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 justify-center mt-4 pt-4 border-t border-border">
                        {currentStage.plan.modules.map((module, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* What's Next Card */}
            {currentStage.nextStage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-6 rounded-2xl bg-muted/50 border border-border text-center"
              >
                <p className="text-muted-foreground mb-2">
                  When you move into planning or production, your project upgrades instantly — no rebuilding, no re-entry.
                </p>
                <button className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  See {currentStage.nextStage} plan →
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PricingStageSelector;
