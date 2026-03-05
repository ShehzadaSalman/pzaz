import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StoryboardProblem = () => {
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
              pillText="The Problem"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  When Creativity Slows Down,{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Productions Drift
                  </span>
                </>
              }
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
              Traditional storyboarding is powerful but slow. Once drawn, boards can become rigid. Iteration takes time. Collaboration happens outside the frame.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI-only tools move fast, but often without continuity or control. They generate options, not direction. Creative teams are left sorting through outputs instead of shaping intent.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              This is not just a tooling issue. It is a creative workflow issue.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryboardProblem;
