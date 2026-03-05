import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StoryboardMomentum = () => {
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
              Directors can explore ideas quickly. Teams can brainstorm visually. Shots evolve without starting from scratch.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What begins as a rough concept can be refined, layered, and developed into something production-ready.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              The process feels fluid. Ideas move forward instead of getting stuck.
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
                  A Creative Process{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Designed for Momentum
                  </span>
                </>
              }
              description="Pzaz Storyboarding is built for rapid visual development inside a structured production environment."
              align="left"
              className="mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryboardMomentum;
