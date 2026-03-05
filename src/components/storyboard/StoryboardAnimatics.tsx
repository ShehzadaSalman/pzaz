import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StoryboardAnimatics = () => {
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
              From any scene, you can adjust shot duration, preview pacing, and step through sequences frame by frame.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rhythm becomes visible early, when it can still influence decisions.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              You are not simply arranging images. You are shaping the experience.
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
              pillText="Animatics"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Animatics That Support{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    the Creative Flow
                  </span>
                </>
              }
              description="Once shots are defined, they move naturally into animatics."
              align="left"
              className="mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryboardAnimatics;
