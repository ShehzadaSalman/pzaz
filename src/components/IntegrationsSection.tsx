import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import integrationsHub from "@/assets/integrations-hub.png";
import ContactModal from "@/components/ContactModal";

const IntegrationsSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

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
          <SectionHeader
            pillText="Integrations"
            pillClassName="bg-primary/10 text-primary mb-0"
            title="Works with your existing tools"
            description="No lock-in. No barriers. Just filmmaking."
            descriptionClassName="text-lg text-muted-foreground"
          />
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
            className="max-w-2xl w-full h-auto mt-[70px]"
          />
          <Button
            variant="outline"
            size="lg"
            onClick={() => setContactOpen(true)}
            className=" px-8 mt-12 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default IntegrationsSection;
