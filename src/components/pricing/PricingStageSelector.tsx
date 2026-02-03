import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, ClipboardList, Clapperboard, Building2, ChevronDown, Check, Star } from "lucide-react";

interface Stage {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  recommended: {
    name: string;
    price: string;
    tagline: string;
    features: string[];
    apps: string[];
    cta: string;
    popular?: boolean;
  };
  alternatives: {
    name: string;
    price: string;
    description: string;
  }[];
}

const stages: Stage[] = [
  {
    id: "writing",
    icon: <PenTool className="w-6 h-6" />,
    title: "Writing & Developing",
    description: "Scripts, ideas, early visuals",
    recommended: {
      name: "Project",
      price: "€49",
      tagline: "The filmmaker's command center for managing all production workflows.",
      features: [
        "Free entry point — get organized instantly",
        "Projects, Boards, Docs, and Messaging in one workspace",
        "Scripts and assets stay automatically linked",
        "Smart Inbox unifies updates from all tools",
        "Real-time teamwork in 30+ languages"
      ],
      apps: ["Inbox", "Message", "Address", "Docs", "Drive"],
      cta: "Start for free"
    },
    alternatives: [
      { name: "Storyboard", price: "€39/mo", description: "Visual storytelling and pre-visualization" },
      { name: "AI Producer", price: "€99/mo", description: "AI-driven storyboards and character builder" }
    ]
  },
  {
    id: "planning",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Planning a Production",
    description: "Breakdown, budget, locations, casting",
    recommended: {
      name: "Pzaz Suite",
      price: "€129",
      tagline: "All-in-one production suite — unified workspace for full production teams.",
      features: [
        "All Pzaz tools in one connected environment",
        "One subscription, one login — no scattered software",
        "Fully modular — scale from indie to studio",
        "Live updates and real-time sync between departments",
        "Multilingual collaboration with cloud storage"
      ],
      apps: ["Project", "Budget", "Casting", "Location", "Scheduling", "Storyboard"],
      cta: "Start planning",
      popular: true
    },
    alternatives: [
      { name: "Budget", price: "€49/mo", description: "AI-powered budgeting with MovieMagic export" },
      { name: "Casting", price: "€19/mo", description: "Smart casting and talent management" },
      { name: "Location", price: "€19/mo", description: "Visual location boards and logistics" }
    ]
  },
  {
    id: "producing",
    icon: <Clapperboard className="w-6 h-6" />,
    title: "Actively Producing",
    description: "Scheduling, call sheets, team coordination",
    recommended: {
      name: "Pzaz Suite",
      price: "€129",
      tagline: "All-in-one production suite with scheduling and call sheet automation.",
      features: [
        "Dynamic Gantt and stripboard views",
        "Auto-generates call sheets linked to departments",
        "Built-in Day-Out-Of-Days (DOOD) tracking",
        "Predicts scheduling conflicts automatically",
        "Syncs with Budget, Casting, and Storyboard"
      ],
      apps: ["Project", "Budget", "Casting", "Location", "Scheduling", "Storyboard"],
      cta: "Start producing",
      popular: true
    },
    alternatives: [
      { name: "Scheduling", price: "€39/mo", description: "End-to-end scheduling and call sheets" },
      { name: "AI Producer", price: "€99/mo", description: "AI storyboards and weather simulation" }
    ]
  },
  {
    id: "studio",
    icon: <Building2 className="w-6 h-6" />,
    title: "Running a Studio",
    description: "Multiple projects, teams, scale",
    recommended: {
      name: "Pzaz Ultimate",
      price: "€199",
      tagline: "Everything Pzaz, united — the ultimate filmmaking ecosystem.",
      features: [
        "All tools plus advanced integrations",
        "Optimized for multi-user, multi-project environments",
        "Cloud-based collaboration and version tracking",
        "Designed for teams that need speed, scale, and precision",
        "Dedicated private LLM — data never leaves your ecosystem"
      ],
      apps: ["All Modules", "Private AI", "Priority Support", "API Access"],
      cta: "Contact sales"
    },
    alternatives: [
      { name: "Private LLM", price: "€249/mo", description: "Fully isolated AI for NDA compliance" },
      { name: "Extra Users", price: "€29/user", description: "Add collaborators to any plan" }
    ]
  }
];

const PricingStageSelector = () => {
  const [selectedStage, setSelectedStage] = useState<string>("planning");
  const [showApps, setShowApps] = useState<boolean>(false);

  const currentStage = stages.find(s => s.id === selectedStage) || stages[1];

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
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select your stage and we'll recommend the perfect plan for you.
          </p>
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
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Recommended Card */}
              <div className="md:col-span-2">
                {/* Recommended Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Recommended for your stage
                  </span>
                  {currentStage.recommended.popular && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Main Pricing Card */}
                <div className="relative rounded-3xl border-2 border-primary bg-card p-8 shadow-xl h-full">
                  {/* Gradient glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10" />

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{currentStage.recommended.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-5xl font-bold gradient-text">{currentStage.recommended.price}</span>
                      <span className="text-muted-foreground">/ month</span>
                    </div>
                    <p className="text-muted-foreground">{currentStage.recommended.tagline}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {currentStage.recommended.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button size="lg" className="w-full group">
                    {currentStage.recommended.cta}
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </Button>

                  {/* Expandable Apps */}
                  <div className="mt-6">
                    <button
                      onClick={() => setShowApps(!showApps)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Apps included
                      <ChevronDown className={`w-4 h-4 transition-transform ${showApps ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {showApps && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                            {currentStage.recommended.apps.map((app, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Alternatives */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">Or pick individual tools:</p>
                {currentStage.alternatives.map((alt, index) => (
                  <motion.div
                    key={alt.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">{alt.name}</span>
                      <span className="text-sm font-medium text-primary">{alt.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{alt.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PricingStageSelector;
