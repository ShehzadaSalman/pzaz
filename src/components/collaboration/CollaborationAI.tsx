import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const CollaborationAI = () => {
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
              pillText="AI"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  AI Inside{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Team Context
                  </span>
                </>
              }
              description="AI tools can generate ideas quickly. But creativity without team context rarely helps real productions move forward."
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
              Inside Pzaz, AI operates within the full project environment. It can assist with script development, visual exploration, and early planning while remaining aware of the project's structure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It does not replace creative voices, and neither does it replace collaboration.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              It simply helps teams move faster without losing alignment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationAI;
