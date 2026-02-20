import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, ChevronUp, ChevronDown, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePricingCart } from "@/contexts/PricingCartContext";

const PricingCartBar = () => {
  const { packages, totalPrice, totalModuleCount, removePackage, removeCustomModule } = usePricingCart();
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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
        >
          <div className="rounded-2xl border border-primary/20 bg-secondary/95 backdrop-blur-xl shadow-2xl overflow-hidden">
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
                  <div className="px-6 pt-4 pb-2 space-y-3 max-h-[300px] overflow-y-auto">
                    {packages.map((pkg) => (
                      <div key={pkg.id} className="p-3 rounded-xl bg-muted/50 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-foreground text-sm">{pkg.name}</span>
                            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                              {pkg.type === "custom" ? "Custom" : "Package"}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-primary text-sm">€{pkg.price}/mo</span>
                            <button
                              onClick={() => removePackage(pkg.id)}
                              className="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        {/* Module chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.modules.map((mod) => (
                            <span
                              key={mod.name}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium group"
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
                                  <X className="w-3 h-3" />
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
            <div className="px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                {/* Left: icon + summary */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm">
                      Subscription Total
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {packages.length} package{packages.length !== 1 ? "s" : ""} · {totalModuleCount} module{totalModuleCount !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Expand/collapse toggle */}
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground text-xs font-medium transition-colors"
                  >
                    {expanded ? "Hide" : "View"} details
                    {expanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
                  </button>
                </div>

                {/* Right: price + CTA */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">€{totalPrice}</p>
                    <p className="text-xs text-muted-foreground">per month</p>
                  </div>
                  <Button size="lg" className="whitespace-nowrap">
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
