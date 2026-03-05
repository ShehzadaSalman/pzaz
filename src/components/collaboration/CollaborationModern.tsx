import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const CollaborationModern = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
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
              Film teams work across locations, time zones, and departments. Pzaz keeps collaboration simple and structured inside a cloud-based environment where everyone sees the same evolving picture of the production.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether the team is on set, in prep, or working remotely, communication stays connected to the work itself.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              Conversations remain anchored. Decisions stay visible. Context is always preserved.
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
              pillText="Modern Production"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Built for{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Modern Production Teams
                  </span>
                </>
              }
              description="Wherever your team is, Pzaz keeps everyone in sync."
              align="left"
              className="mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationModern;
