import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const FileSharingAI = () => {
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
              pillText="Your Entire Production Library in One Place"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  AI That Supports{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Human Creativity
                  </span>
                </>
              }
              description="AI tools can generate images and assets quickly. But without project context, those outputs rarely help a real production move forward."
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
              Inside Pzaz, AI operates within the full project environment. It can support visual exploration and asset generation while remaining connected to the scenes, shots, and creative structure of the production.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It does not replace creative direction or override production decisions. That remains the responsibility of the directors and producers.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              AI assists creativity — but the production always remains guided by the people.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FileSharingAI;
