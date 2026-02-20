import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, ChevronUp, ChevronDown, Package, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePricingCart } from "@/contexts/PricingCartContext";

const PricingCartBar = () => {
  const { packages, totalPrice, totalModuleCount, removePackage, removeCustomModule, clearCart } = usePricingCart();
  const [expanded, setExpanded] = useState(false);

  const hasItems = packages.length > 0;

  return (
    <AnimatePresence>
      {hasItems && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-8 inset-x-4 sm:inset-x-6 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 z-50 lg:w-[calc(100%-4rem)] lg:max-w-5xl"
        >
          <div className="rounded-3xl border border-primary/20 bg-secondary/95 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Expanded view - package details */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pt-6 pb-3 space-y-4 max-h-[350px] overflow-y-auto">
                    {packages.map((pkg) => (
                      <div key={pkg.id} className="p-4 rounded-2xl bg-muted/50 border border-border">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Package className="w-5 h-5 text-primary" />
                            <span className="font-bold text-foreground text-base">{pkg.name}</span>
                            <span className="text-xs text-muted-foreground px-2.5 py-1 rounded-full bg-muted font-medium">
                              {pkg.type === "custom" ? "Custom" : "Package"}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-primary text-base">€{pkg.price}/mo</span>
                            <button
                              onClick={() => removePackage(pkg.id)}
                              className="w-7 h-7 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        {/* Module chips */}
                        <div className="flex flex-wrap gap-2">
                          {pkg.modules.map((mod) => (
                            <span
                              key={mod.name}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium group"
                            >
                              {mod.name}
                              {pkg.type === "custom" && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeCustomModule(mod.name);
                                  }}
                                  className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main bar */}
            <div className="px-8 py-5">
              <div className="flex items-center justify-between gap-6">
                {/* Left: icon + summary */}
                <div className="flex items-center gap-5 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-base">
                      Subscription Total
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {packages.length} package{packages.length !== 1 ? "s" : ""} · {totalModuleCount} module{totalModuleCount !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Center: expand toggle */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground text-sm font-medium transition-colors"
                >
                  {expanded ? "Hide" : "View"} details
                  {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>

                {/* Right: price + actions */}
                <div className="flex items-center gap-5 flex-shrink-0">
                  <button
                    onClick={clearCart}
                    className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors"
                    title="Clear all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-foreground">€{totalPrice}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <Button size="lg" className="whitespace-nowrap text-base px-8 py-6">
                    START FOR FREE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingCartBar;
