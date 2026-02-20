import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Inbox, Calculator, Users, MapPin, Calendar, Palette, Bot, Cloud, Coins, Music, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePricingCart } from "@/contexts/PricingCartContext";

const modules = [
  { name: "Project", icon: <Inbox className="w-5 h-5" />, description: "The filmmaker's command center", price: 49, usps: ["Free entry point", "Real-time collaboration", "30+ languages"] },
  { name: "Budget", icon: <Calculator className="w-5 h-5" />, description: "Complete budgeting and cost-tracking", price: 49, usps: ["AI-powered budgets", "MovieMagic export", "Xero & QuickBooks sync"] },
  { name: "Casting", icon: <Users className="w-5 h-5" />, description: "Smart casting and talent management", price: 19, usps: ["Actor profiles linked to roles", "Collaborative shortlisting", "Auto-sync with schedule"] },
  { name: "Location", icon: <MapPin className="w-5 h-5" />, description: "Location management and logistics", price: 19, usps: ["Visual location boards", "Compare & approve", "Risk tracking"] },
  { name: "Scheduling", icon: <Calendar className="w-5 h-5" />, description: "End-to-end scheduling and call sheets", price: 39, usps: ["Dynamic Gantt & stripboards", "Auto call sheets", "Conflict prediction"] },
  { name: "Storyboard", icon: <Palette className="w-5 h-5" />, description: "Visual storytelling and pre-visualization", price: 39, usps: ["AI storyboard generation", "700 images + 1500 video credits", "Real-time collaboration"] }
];

const addons = [
  { icon: <Bot className="w-5 h-5" />, name: "AI Producer", description: "AI production partner — storyboard to screen in record time", price: 99, tag: "COMING SOON", usps: ["AI-driven storyboards", "Character & voice builder", "Weather simulation"] },
  { icon: <Cloud className="w-5 h-5" />, name: "Private LLM", description: "Fully isolated AI environment for studios with NDAs", price: 249, tag: "COMING SOON", usps: ["Dedicated AI instance", "Total data privacy", "NDA-compliant"] },
  { icon: <Music className="w-5 h-5" />, name: "AudioPilot", description: "AI soundscapes and atmospheres per scene", price: 29, tag: "COMING SOON", usps: ["AI soundscapes per scene", "Matches tone & mood", "Pairs with Storyboard"] },
  { icon: <Users className="w-5 h-5" />, name: "Extra User", description: "Expand your team — inherits all purchased tools", price: 29, tag: "COMING SOON", usps: ["Inherits all tools", "Expanded storage", "Video conferencing"] },
  { icon: <Coins className="w-5 h-5" />, name: "AI Credits", description: "Scalable AI usage across tools — pay per use", price: 0, priceLabel: "Pay per use", tag: "COMING SOON", usps: ["Flexible credit system", "Track consumption", "Multi-tool compatible"] }
];

const PricingBuildYourOwn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [comingSoonBanner, setComingSoonBanner] = useState<string | null>(null);
  const { addCustomModule, removeCustomModule, hasCustomModule, customPackage, totalPrice } = usePricingCart();

  const suitePrice = 129;
  const customTotal = customPackage?.price || 0;
  const savings = customTotal > suitePrice ? customTotal - suitePrice : 0;

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
                      const isSelected = hasCustomModule(module.name);
                      const isHovered = hoveredModule === module.name;
                      return (
                        <button
                          key={module.name}
                          onClick={() => {
                            if (isSelected) {
                              removeCustomModule(module.name);
                            } else {
                              addCustomModule({ name: module.name, price: module.price, icon: module.icon });
                            }
                          }}
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

                  {/* Add-ons & Extras — Coming Soon */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Bot className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">Add-ons & Extras</h4>
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-muted text-muted-foreground">COMING SOON</span>
                    </div>

                    {/* Coming Soon Banner */}
                    <AnimatePresence>
                      {comingSoonBanner && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mb-4 p-3 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3"
                        >
                          <Clock className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                          <p className="text-sm text-accent-foreground">
                            <span className="font-semibold">{comingSoonBanner}</span> is coming soon! We're putting the finishing touches on this feature. Stay tuned.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {addons.map((addon) => (
                        <button
                          key={addon.name}
                          onClick={() => {
                            setComingSoonBanner(addon.name);
                            setTimeout(() => setComingSoonBanner(null), 3000);
                          }}
                          className="p-5 rounded-xl border-2 border-border text-left transition-all duration-200 opacity-60 hover:opacity-80 cursor-not-allowed relative"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted text-muted-foreground">
                              {addon.icon}
                            </div>
                            <span className="px-2 py-0.5 rounded text-xs font-bold bg-muted text-muted-foreground">
                              COMING SOON
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-foreground">{addon.name}</span>
                            <span className="text-lg font-bold text-muted-foreground">
                              {(addon as any).priceLabel || `€${addon.price}`}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{addon.description}</p>
                        </button>
                      ))}
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
