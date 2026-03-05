import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const points = [
  "Rewrites remain inside a living production context, where structural elements are surfaced as you develop.",
  "Feedback stays attached to the scenes it concerns.",
  "Early planning signals emerge while choices are still flexible, not after they've calcified into commitments.",
];

const PlanningHandoff = () => {
  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatedSectionHeader
            wrapperClassName="text-center"
            pillText="The Shift"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                From Isolated Writing to{" "}
                <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Structured Preproduction
                </span>
              </>
            }
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[38px] border border-[#D4BAF4] p-8 md:p-12 mb-10"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Without structure, development tends to culminate in a ceremonial moment: the script is declared "finished," exported, and handed over as if it were a completed object. Only then does production begin the real translation. And it's at that translation stage that misalignment politely reveals itself.
            </p>
            <p className="text-xl font-semibold text-[#4D029B] mb-8">
              Planning Pro removes the drama of the handoff entirely.
            </p>

            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-4 p-4 bg-[#F7F2FD] rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-[#A805FF] flex-shrink-0 mt-2" />
                  <p className="font-lato text-[18px] text-foreground leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xl font-bold text-foreground">
              You're not polishing a document for delivery. You're constructing a production from the inside out.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanningHandoff;
