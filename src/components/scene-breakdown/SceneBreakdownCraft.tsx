import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const SceneBreakdownCraft = () => {
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
              pillText="The Craft"
              title="Respecting the Craft. Improving the Structure."
              description="Scene breakdown has always been part of the filmmaking craft. For years it has been managed through documents, spreadsheets and a great deal of experience."
            />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Pzaz doesn't attempt to reinvent that practice.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              It simply places the breakdown inside a connected production environment where creative ideas, operational planning and collaboration remain part of the same conversation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownCraft;
