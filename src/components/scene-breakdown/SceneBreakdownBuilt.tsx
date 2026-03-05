import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const SceneBreakdownBuilt = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              pillText="Designed for Filmmakers"
              title="Designed for Filmmakers, Built with Creators"
              description="Pzaz was shaped alongside directors, producers and coordinators who deal with the practical reality of turning scripts into shootable scenes."
              descriptionClassName="text-lg text-muted-foreground max-w-2xl mx-auto"
            />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you are preparing a short film or a larger production, it helps you see and organise each scene in a way that keeps creative intent aligned with what production actually requires.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownBuilt;
