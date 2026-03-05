import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const risks = [
  "Updates travel through Slack threads and spreadsheets.",
  "Financial visibility is assembled manually.",
  "Capacity is estimated rather than known.",
  "Risks reveal themselves late — when the cost of adjustment is highest.",
];

const StudioProProblem = () => {
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
                  When Scale Meets{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Fragmentation
                  </span>
                </>
              }
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At the level of a single project, fragmentation is tolerable. At the level of a slate, it multiplies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Each production begins to operate inside its own small ecosystem. Executives end up relying on informal updates instead of structural clarity.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              This isn't a project problem. It's a slate problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {risks.map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#D4BAF4]"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-lato text-[18px] text-foreground leading-relaxed">{risk}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioProProblem;
