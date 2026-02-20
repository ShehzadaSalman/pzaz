import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Inbox, Calculator, Users, MapPin, Calendar, Palette, Bot, Cloud, Coins, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePricingCart } from "@/contexts/PricingCartContext";

const modules = [
  { name: "Project", icon: <Inbox className="w-5 h-5" />, description: "The filmmaker's command center", price: 49, apps: "Inbox, Message, Address, Docs, Drive", usps: ["Free entry point", "Real-time collaboration", "30+ languages"] },
  { name: "Budget", icon: <Calculator className="w-5 h-5" />, description: "Complete budgeting and cost-tracking", price: 49, apps: "Script, Breakdown, Production, Budget", usps: ["AI-powered budgets", "MovieMagic export", "Xero & QuickBooks sync"] },
  { name: "Casting", icon: <Users className="w-5 h-5" />, description: "Smart casting and talent management", price: 19, apps: "Casting App", usps: ["Actor profiles linked to roles", "Collaborative shortlisting", "Auto-sync with schedule"] },
  { name: "Location", icon: <MapPin className="w-5 h-5" />, description: "Location management and logistics", price: 19, apps: "Location App", usps: ["Visual location boards", "Compare & approve", "Risk tracking"] },
  { name: "Scheduling", icon: <Calendar className="w-5 h-5" />, description: "End-to-end scheduling and call sheets", price: 39, apps: "Scheduling App", usps: ["Dynamic Gantt & stripboards", "Auto call sheets", "Conflict prediction"] },
  { name: "Storyboard", icon: <Palette className="w-5 h-5" />, description: "Visual storytelling and pre-visualization", price: 39, apps: "Storyboard, AudioPilot", usps: ["AI storyboard generation", "700 images + 1500 video credits", "Real-time collaboration"] }
];

const addons = [
  { icon: <Bot className="w-5 h-5" />, name: "AI Producer", description: "AI production partner — storyboard to screen in record time", price: 99, tag: "NEW", usps: ["AI-driven storyboards", "Character & voice builder", "Weather simulation"] },
  { icon: <Cloud className="w-5 h-5" />, name: "Private LLM", description: "Fully isolated AI environment for studios with NDAs", price: 249, tag: "ENTERPRISE", usps: ["Dedicated AI instance", "Total data privacy", "NDA-compliant"] },
  { icon: <Music className="w-5 h-5" />, name: "AudioPilot", description: "AI soundscapes and atmospheres per scene", price: 29, tag: "NEW", usps: ["AI soundscapes per scene", "Matches tone & mood", "Pairs with Storyboard"] },
  { icon: <Users className="w-5 h-5" />, name: "Extra User", description: "Expand your team — inherits all purchased tools", price: 29, usps: ["Inherits all tools", "Expanded storage", "Video conferencing"] },
  { icon: <Coins className="w-5 h-5" />, name: "AI Credits", description: "Scalable AI usage across tools — pay per use", price: 0, priceLabel: "Pay per use", usps: ["Flexible credit system", "Track consumption", "Multi-tool compatible"] }
];

const PricingBuildYourOwn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [hoveredAddon, setHoveredAddon] = useState<string | null>(null);
  const { toggleItem, hasItem, totalPrice, items } = usePricingCart();

  const selectedModules = items.filter(i => i.type === "module");
  const selectedAddons = items.filter(i => i.type === "addon");

  const suitePrice = 129;
  const savings = totalPrice > suitePrice ? totalPrice - suitePrice : 0;

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Accordion Header */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors flex items-center justify-between group"
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground">Want to build your own setup?</h3>
              <p className="text-muted-foreground text-sm mt-1">Pick only the modules you need — pay for what you use</p>
            </div>
            <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Accordion Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 border border-t-0 border-border rounded-b-2xl bg-card">
                  {/* Module Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {modules.map((module) => {
                      const isSelected = hasItem(module.name);
                      const isHovered = hoveredModule === module.name;
                      return (
                        <button
                          key={module.name}
                          onClick={() => toggleItem({ name: module.name, price: module.price, type: "module", icon: module.icon })}
                          onMouseEnter={() => setHoveredModule(module.name)}
                          onMouseLeave={() => setHoveredModule(null)}
                          className={`p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                            isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}>
                              {module.icon}
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected ? "bg-primary border-primary" : "border-muted-foreground"
                            }`}>
                              {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-foreground">{module.name}</span>
                            <span className="text-lg font-bold text-primary">€{module.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                          
                          <AnimatePresence>
                            {(isHovered || isSelected) && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                                <div className="pt-3 border-t border-border space-y-1">
                                  {module.usps.map((usp, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <Check className="w-3 h-3 text-primary" />
                                      {usp}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      );
                    })}
                  </div>

                  {/* Add-ons & Extras */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Bot className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">Add-ons & Extras</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {addons.map((addon) => {
                        const isSelected = hasItem(addon.name);
                        const isHovered = hoveredAddon === addon.name;
                        return (
                          <button
                            key={addon.name}
                            onClick={() => toggleItem({ name: addon.name, price: addon.price, type: "addon", icon: addon.icon })}
                            onMouseEnter={() => setHoveredAddon(addon.name)}
                            onMouseLeave={() => setHoveredAddon(null)}
                            className={`p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                              isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                              }`}>
                                {addon.icon}
                              </div>
                              <div className="flex items-center gap-2">
                                {addon.tag && (
                                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                                    addon.tag === "NEW" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent-foreground"
                                  }`}>
                                    {addon.tag}
                                  </span>
                                )}
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                  isSelected ? "bg-primary border-primary" : "border-muted-foreground"
                                }`}>
                                  {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-foreground">{addon.name}</span>
                              <span className="text-lg font-bold text-primary">
                                {(addon as any).priceLabel || `€${addon.price}`}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{addon.description}</p>
                            
                            <AnimatePresence>
                              {(isHovered || isSelected) && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                                  <div className="pt-3 border-t border-border space-y-1">
                                    {addon.usps.map((usp, i) => (
                                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Check className="w-3 h-3 text-primary" />
                                        {usp}
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Savings tip */}
                  {savings > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center"
                    >
                      <p className="text-sm text-primary font-medium">
                        💡 Tip: Get all modules with Pzaz Suite for €129/mo (save €{savings})
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingBuildYourOwn;
