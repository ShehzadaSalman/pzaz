import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Users, Lock, Calculator, Palette, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tier {
  id: string;
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const tiers: Tier[] = [
  {
    id: "indie",
    name: "Indie",
    price: "Free",
    tagline: "Professional workspace for solo filmmakers starting a project.",
    features: [
      "Full access to core workflow foundation",
      "1 user workspace",
      "Up to 3 collaborators",
      "Centralized project dashboard",
      "Access to Inbox, Ideation, and core system tools",
    ],
    cta: "Start Free",
  },
  {
    id: "planning-pro",
    name: "Planning Pro",
    price: "€129",
    priceSuffix: "/ month",
    tagline: "Advanced planning suite for writers, directors, and creative leads.",
    features: [
      "Designed for writer-directors and creative owners",
      "Full script development and versioning workflow",
      "Scene-to-shot structured planning",
      "Integrated collaboration with producers and team",
      "Professional-grade planning tools in one suite",
    ],
    cta: "Start Planning",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "studio-pro",
    name: "Studio Pro",
    price: "€199",
    priceSuffix: "/ month",
    tagline: "Multi-project operations suite for production houses and creative agencies managing a slate.",
    features: [
      "Slate overview with pipeline and greenlight tracking",
      "Standardised templates and workflows across teams",
      "Cross-project resource planning (crew, equipment, budgets)",
      "Executive monitoring of burn rate, schedule risk, and bottlenecks",
      "Reporting layer for financial summaries and delivery timelines",
    ],
    cta: "Get Studio Pro",
  },
];

interface Extra {
  id: string;
  icon: React.ReactNode;
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  features: string[];
  tag?: string;
  note?: string;
}

const standaloneProducts: Extra[] = [
  {
    id: "budget",
    icon: <Calculator className="w-5 h-5" />,
    name: "Budget",
    price: "€49",
    priceSuffix: "/ month",
    tagline: "Professional film budgeting system fully integrated into your workflow.",
    features: [
      "Dedicated budgeting environment",
      "Built specifically for film and video production",
      "Linked to production elements and resources",
      "Clear cost breakdown and financial overview",
      "Works seamlessly alongside Planning and Production Suites",
    ],
    tag: "Standalone Product",
  },
  {
    id: "storyboard",
    icon: <Palette className="w-5 h-5" />,
    name: "Storyboard",
    price: "€49",
    priceSuffix: "/ month",
    tagline: "Visual planning tool for building structured storyboards inside Pzaz.",
    features: [
      "Native storyboard builder",
      "Integrated with script and planning tools",
      "Visual shot and sequence development",
      "Drag-and-drop visual workflow",
      "Eliminates need for external storyboard software",
    ],
    tag: "Standalone Product",
  },
];

const addons: Extra[] = [
  {
    id: "extra-users",
    icon: <Users className="w-5 h-5" />,
    name: "Extra Users",
    price: "€49",
    priceSuffix: "/ user / month",
    tagline: "Add additional team members to your Studio Pro environment.",
    features: [],
    tag: "Add-on",
    note: "For teams larger than 10 additional users, contact us for custom enterprise pricing.",
  },
  {
    id: "private-llm",
    icon: <Lock className="w-5 h-5" />,
    name: "Private LLM",
    price: "€249",
    priceSuffix: "/ month",
    tagline: "Secure private AI environment tailored to your production workflow.",
    features: [
      "Dedicated AI infrastructure reserved only for your organisation",
      "Completely isolated from public or shared AI environments",
      "No external model training on your scripts or production data",
      "Tailored to your internal terminology and workflow",
      "Enterprise-grade stability and control for high-value productions",
    ],
    tag: "Add-on for all plans",
  },
];

const PricingStageSelector = () => {
  const [expandedExtra, setExpandedExtra] = useState<string | null>(null);

  return (
    <section id="plans" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose the plan that fits{" "}
            <span className="gradient-text">your production.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free and scale as your productions grow.
          </p>
        </motion.div>

        {/* Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl border-2 p-8 flex flex-col ${
                tier.highlighted
                  ? "border-primary bg-card shadow-xl"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10" />
              )}
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {tier.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                {tier.priceSuffix && (
                  <span className="text-muted-foreground text-sm">{tier.priceSuffix}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full group"
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Standalone Products & Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
            Standalone Products & Add-ons
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Extend your setup with dedicated tools and advanced capabilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...standaloneProducts, ...addons].map((item, index) => {
              const isExpanded = expandedExtra === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => setExpandedExtra(isExpanded ? null : item.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{item.name}</span>
                        {item.tag && (
                          <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                      {item.priceSuffix && (
                        <span className="block text-xs text-muted-foreground">{item.priceSuffix}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{item.tagline}</p>

                  <AnimatePresence>
                    {isExpanded && item.features.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-3 border-t border-border space-y-2 mt-2">
                          {item.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {item.note && (
                    <p className="text-xs text-muted-foreground mt-3 italic">{item.note}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingStageSelector;
