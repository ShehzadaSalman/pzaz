import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  { name: "Script", description: "Write and manage your screenplay", price: "€29" },
  { name: "Storyboard", description: "Visualize your film before you shoot it", price: "€39" },
  { name: "Budget", description: "Build and track production budgets", price: "€49" },
  { name: "Schedule", description: "Plan your shoot day by day", price: "€49" },
  { name: "Call Sheets", description: "Generate and send daily call sheets", price: "€29" },
  { name: "Reports", description: "Track progress with daily reports", price: "€19" },
  { name: "Drive", description: "Store and share production files", price: "€19" },
  { name: "Inbox", description: "Centralized team communication", price: "€Free" }
];

const PricingBuildYourOwn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const toggleModule = (moduleName: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleName)
        ? prev.filter(m => m !== moduleName)
        : [...prev, moduleName]
    );
  };

  const totalPrice = selectedModules.reduce((sum, moduleName) => {
    const module = modules.find(m => m.name === moduleName);
    if (!module || module.price === "€Free") return sum;
    return sum + parseInt(module.price.replace("€", ""));
  }, 0);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Accordion Header */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors flex items-center justify-between group"
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground">Want to build your own setup?</h3>
              <p className="text-muted-foreground text-sm mt-1">Pick only the modules you need</p>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {modules.map((module) => {
                      const isSelected = selectedModules.includes(module.name);
                      return (
                        <button
                          key={module.name}
                          onClick={() => toggleModule(module.name)}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-semibold text-foreground">{module.name}</span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-primary border-primary"
                                : "border-muted-foreground"
                            }`}>
                              {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                          <span className={`text-sm font-medium ${module.price === "€Free" ? "text-primary" : "text-foreground"}`}>
                            {module.price}{module.price !== "€Free" && " / month"}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Summary */}
                  {selectedModules.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-xl bg-muted/50 border border-border flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                      <div>
                        <p className="text-muted-foreground text-sm">Your custom setup</p>
                        <p className="text-2xl font-bold text-foreground">
                          €{totalPrice} <span className="text-base font-normal text-muted-foreground">/ month</span>
                        </p>
                      </div>
                      <Button size="lg">
                        Start with {selectedModules.length} module{selectedModules.length > 1 ? "s" : ""}
                      </Button>
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
