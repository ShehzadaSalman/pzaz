import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const coreFeatures = [
  {
    title: "From concept to screen",
    description:
      "A complete scriptwriting ecosystem. Brainstorm ideas, draft scripts, and move seamlessly into production planning.",
  },
  {
    title: "Focus on the story",
    description:
      "Automatic industry-standard formatting. Formatting happens automatically, so you stay immersed in your narrative.",
  },
  {
    title: "Every version. Always safe.",
    description: "Track changes, compare drafts, and restore previous versions instantly. Nothing is ever lost.",
  },
  {
    title: "Write together, in real time",
    description: "Co-write and edit scripts live with your team, no matter where they are in the world.",
  },
];

const ScriptCoreFeatures = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Core Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SectionHeader
              pillText="Core Experience"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Complete Script{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Lifecycle Solution
                  </span>
                </>
              }
              description="One platform. The complete script lifecycle. Everything your script needs — from the first idea to production — in one intuitive workspace."
            />
          </motion.div>

          {/* Core feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px]">
            {coreFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-8 rounded-[38px] border-2 border-[#D4BAF4] transition-all hover:shadow-lg"
                style={{ background: "linear-gradient(180deg, #EEE7FF 0%, #F8F4FF 35%, #FFFFFF 100%)" }}
              >
                <h4 className="font-lato font-bold text-[20px] text-[#4D029B] mb-3">{item.title}</h4>
                <p className="font-lato font-normal text-[16px] leading-[24px] text-[#878787]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptCoreFeatures;
