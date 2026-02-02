import React from "react";
import { motion } from "framer-motion";
import { FileText, DollarSign, FileOutput, MapPin, Globe } from "lucide-react";

const integrations = [
  { name: "Final Draft", icon: FileText },
  { name: "Movie Magic", icon: DollarSign },
  { name: "PDF & CSV export", icon: FileOutput },
  { name: "Google Maps", icon: MapPin },
  { name: "Multilingual", icon: Globe },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Works with your existing tools
          </h2>
          <p className="text-lg text-muted-foreground">
            No lock-in. No barriers. Just filmmaking.
          </p>
        </motion.div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <integration.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{integration.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
