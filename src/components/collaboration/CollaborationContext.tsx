import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const CollaborationContext = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 order-2 md:order-1"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of communication floating around the production, it lives inside the production structure itself. Scripts, scenes, tasks, files, and discussions exist in the same environment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Feedback stays attached to the work it refers to and teams operate from the same evolving context.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              So when a director comments on a scene, the team sees it immediately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText="The Solution"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Collaboration Inside{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    the Production Environment
                  </span>
                </>
              }
              description="Pzaz approaches collaboration differently."
              align="left"
              className="mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationContext;
