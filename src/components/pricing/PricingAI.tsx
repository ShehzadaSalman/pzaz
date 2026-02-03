import React from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Coins, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiOptions = [
  {
    icon: <Bot className="w-8 h-8" />,
    name: "AI Producer",
    description: "Your AI production partner — from storyboard to screen in record time. Includes character builder with AI voices, location & sky designers, and AudioPilot.",
    price: "€99",
    period: "/ month",
    tag: "NEW",
    features: ["AI-driven storyboards", "Character & voice builder", "Weather simulation", "Private AI learning"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    name: "Private LLM",
    description: "Fully isolated AI environment — ideal for studios with NDAs or sensitive IP. Guarantees compliance with film financing and production confidentiality.",
    price: "€249",
    period: "/ month",
    tag: "ENTERPRISE",
    features: ["Dedicated AI instance", "Total data privacy", "NDA-compliant", "Enhanced performance"]
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: "AudioPilot",
    description: "Audio design companion for pre-visualization. Automatically generates soundscapes and atmospheres per scene to help align creative vision early.",
    price: "€29",
    period: "/ month",
    tag: "NEW",
    features: ["AI soundscapes per scene", "Matches tone & mood", "Pairs with Storyboard"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "Extra User",
    description: "Expand your team instantly — no new setup needed. Every user inherits all purchased tools with expanded storage and video conferencing.",
    price: "€29",
    period: "/ user / month",
    features: ["Inherits all tools", "Expanded storage", "Video conferencing", "Permission management"]
  },
  {
    icon: <Coins className="w-8 h-8" />,
    name: "AI Credits",
    description: "Scalable AI usage across tools — pay only for what you generate. Flexible credit system for text, image, and video generation.",
    price: "Pay",
    period: "per use",
    features: ["Flexible credit system", "Track consumption", "Multi-tool compatible"]
  }
];

const PricingAI = () => {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Add-ons & Extras
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Add speed when you're ready
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            AI assists your creative decisions — it never replaces them.
          </p>
        </motion.div>

        {/* AI Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aiOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-border bg-card h-full flex flex-col">
                {/* Tag */}
                {option.tag && (
                  <span className={`absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-bold ${
                    option.tag === "NEW" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent-foreground"
                  }`}>
                    {option.tag}
                  </span>
                )}
                
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground mb-5">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{option.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{option.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-5">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-foreground">{option.price}</span>
                  <span className="text-muted-foreground text-sm">{option.period}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Add to plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingAI;
