import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const PlanningProblem = () => {
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
                  When Preproduction Lives{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    in Pieces, Alignment Slips
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
              In most film workflows, writing enjoys a kind of glorious isolation. The draft comes first, planning politely waits its turn, and budget conversations only enter the room once the scope has already stretched itself comfortably beyond financial gravity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For a while, the script feels complete. Then breakdown begins. Then the arithmetic of reality arrives, and suddenly the elegant creative decisions made upstream turn out to have very practical downstream consequences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Structural adjustments at that point aren't impossible, but they are expensive — whether emotionally, financially, or politically.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              This isn't a failure of imagination. It's a failure of coordination.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanningProblem;
