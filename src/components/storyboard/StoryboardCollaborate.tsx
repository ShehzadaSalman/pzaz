import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StoryboardCollaborate = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
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
              pillText="Collaboration"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Collaborate{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Inside the Frame
                  </span>
                </>
              }
              description="Storyboarding is rarely a solo process. Directors, cinematographers, producers and clients all need to see and respond to visual intent."
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
              Inside Pzaz, collaboration happens directly on the storyboard. Comments, refinements and discussions stay connected to the frame they refer to.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Animatics can be previewed instantly. Timing can be adjusted without exporting files. Feedback becomes constructive instead of fragmented.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              Creative alignment happens earlier.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryboardCollaborate;
