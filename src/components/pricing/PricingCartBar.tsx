import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePricingCart } from "@/contexts/PricingCartContext";

const PricingCartBar = () => {
  const { items, totalPrice, itemCount, removeItem } = usePricingCart();

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
        >
          <div className="rounded-2xl border border-primary/20 bg-secondary/80 backdrop-blur-xl shadow-2xl px-6 py-4">
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
                    {itemCount} app{itemCount !== 1 ? "s" : ""} selected
                  </p>
                </div>

                {/* Selected app icons */}
                <div className="hidden sm:flex items-center gap-2 overflow-x-auto max-w-[300px] lg:max-w-[500px]">
                  {items.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex-shrink-0 group relative"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        {item.icon || (
                          <span className="text-xs font-bold">
                            {item.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.name)}
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                </div>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingCartBar;
