import React from "react";
import { motion } from "framer-motion";
import { CreditCard, RefreshCcw, ArrowUpDown, Globe, Film } from "lucide-react";

const trustItems = [
  { icon: <CreditCard className="w-5 h-5" />, text: "Start free, no credit card" },
  { icon: <RefreshCcw className="w-5 h-5" />, text: "Cancel anytime" },
  { icon: <ArrowUpDown className="w-5 h-5" />, text: "Upgrade or downgrade instantly" },
  { icon: <Globe className="w-5 h-5" />, text: "Multilingual collaboration" },
  { icon: <Film className="w-5 h-5" />, text: "Built by filmmakers, for filmmakers" }
];

const PricingTrust = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrust;
