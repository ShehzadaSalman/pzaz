import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const bundles = [
  {
    name: "Pzaz Suite",
    price: "€129",
    tagline: "All-in-one production suite",
    description: "Unified workspace for full production teams. All Pzaz tools in one connected environment.",
    features: [
      "All core modules included",
      "One subscription, one login",
      "Fully modular — scale from indie to studio",
      "Live updates and real-time sync",
      "Multilingual collaboration",
      "Cloud-based storage and version control"
    ],
    apps: ["Project", "Budget", "Casting", "Location", "Scheduling", "Storyboard"],
    cta: "Start with Suite",
    popular: true
  },
  {
    name: "AI Producer",
    price: "€99",
    tagline: "Your AI production partner",
    description: "From storyboard to screen in record time with AI-driven visuals and automation.",
    features: [
      "AI-driven storyboard generation",
      "Character builder with AI voices",
      "Location & sky designers",
      "Weather simulation",
      "AudioPilot for tone previews",
      "Private AI that learns your style"
    ],
    apps: ["Storyboard PLUS", "Character Builder", "AudioPilot"],
    cta: "Try AI Producer",
    tag: "NEW"
  },
  {
    name: "Pzaz Ultimate",
    price: "€199",
    tagline: "The ultimate filmmaking ecosystem",
    description: "Everything Pzaz, united — optimized for multi-user, multi-project environments.",
    features: [
      "All tools plus advanced integrations",
      "Multi-user, multi-project optimized",
      "Cloud collaboration & version tracking",
      "Dedicated private LLM included",
      "API access for custom workflows",
      "Priority support"
    ],
    apps: ["All Modules", "Private AI", "API Access", "Priority Support"],
    cta: "Contact Sales",
    tag: "STUDIO"
  }
];

const PricingBundles = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Bundles & Flagship Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready-to-go packages for every stage
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get more value with our curated bundles — everything you need, nothing you don't.
          </p>
        </motion.div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl border-2 p-8 flex flex-col ${
                bundle.popular
                  ? "border-primary bg-card shadow-xl"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular badge */}
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tag */}
              {bundle.tag && (
                <span className={`absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-bold ${
                  bundle.tag === "NEW" ? "bg-accent/20 text-accent-foreground" : "bg-primary/20 text-primary"
                }`}>
                  {bundle.tag}
                </span>
              )}

              {/* Glow for popular */}
              {bundle.popular && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-50 -z-10" />
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{bundle.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{bundle.tagline}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold gradient-text">{bundle.price}</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <p className="text-muted-foreground text-sm">{bundle.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {bundle.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Apps included */}
              <div className="mb-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Includes:</p>
                <div className="flex flex-wrap gap-1">
                  {bundle.apps.map((app, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button 
                size="lg" 
                variant={bundle.popular ? "default" : "outline"}
                className="w-full"
              >
                {bundle.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingBundles;
