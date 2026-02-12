import React from "react";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import integrationsHub from "@/assets/integrations-hub.png";

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Pill text="Integrations" className="bg-primary/10 text-primary mb-4" />
          <h2 className="font-lato font-extrabold text-[48px] tracking-normal py-[10px]">
            Works with your existing tools
          </h2>
          <p className="text-lg text-muted-foreground">
            No lock-in. No barriers. Just filmmaking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <img
            src={integrationsHub}
            alt="Integrations hub showing Final Draft, Google Maps, PDF, and CSV connections"
            className="max-w-2xl w-full h-auto"
          />

          <Button variant="outline" className="mt-10">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
