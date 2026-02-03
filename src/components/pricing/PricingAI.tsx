import React from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiOptions = [
  {
    icon: <Bot className="w-8 h-8" />,
    name: "AI Producer",
    description: "Your AI production partner that helps with breakdowns, scheduling suggestions, and creative decisions.",
    price: "€99",
    period: "/ month"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    name: "Private AI Cloud",
    description: "NDA-safe, isolated AI environment for sensitive productions and studio confidentiality.",
    price: "€249",
    period: "/ month"
  },
  {
    icon: <Coins className="w-8 h-8" />,
    name: "AI Credits",
    description: "Pay only for what you generate. Perfect for occasional AI assistance without commitment.",
    price: "Usage",
    period: "-based"
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
            Optional Add-on
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Add speed when you're ready
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            AI assists your creative decisions — it never replaces them.
          </p>
        </motion.div>

        {/* AI Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              <div className="relative p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{option.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{option.description}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-foreground">{option.price}</span>
                  <span className="text-muted-foreground">{option.period}</span>
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
