import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const CollaborationCraft = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText="Familiar by Design"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Familiar Collaboration.{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Better Structure.
                  </span>
                </>
              }
              description="Production teams have always collaborated through conversation, notes, and shared documents."
              align="left"
              className="mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pzaz does not aim to replace that human process.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It simply provides a structure where conversations, decisions, files, and planning remain connected instead of scattered.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              If the collaboration feels familiar, the coordination becomes far stronger.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationCraft;
