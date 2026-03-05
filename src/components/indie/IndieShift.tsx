import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const IndieShift = () => {
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
                From Passion Project{" "}
                <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  to Prepared Project
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
              Most independent filmmakers compensate with effort. More messages. More revisions. More late nights trying to organise everything before a call.
            </p>
            <p className="text-xl font-semibold text-[#4D029B] mb-8">
              Indie changes this feeling.
            </p>

            <div className="space-y-4">
              {[
                "Your development lives next to your planning.",
                "Your ideas connect to your breakdown.",
                "Your collaborators see the same evolving context.",
              ].map((point, i) => (
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
            className="text-center space-y-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              You're not scrambling to assemble your film before every meeting.
            </p>
            <p className="text-xl font-bold text-foreground">
              Instead, you're building it steadily, visibly, confidently.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieShift;
