import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const features = [
  {
    title: "Live, Interconnected Scenes",
    description: "Write and revise with scenes that remain live and interconnected rather than drifting into static versions.",
  },
  {
    title: "Structured Version Control",
    description: "Maintain structured version control that reflects evolution instead of chaos.",
  },
  {
    title: "Element Detection",
    description: "Key production elements are detected as you develop, not weeks later during a frantic breakdown.",
  },
  {
    title: "Visual Thinking Connected",
    description: "Early visual thinking connects directly to the scenes it affects, so aesthetic ambition and practical implication grow side by side.",
  },
  {
    title: "Anchored Feedback",
    description: "Feedback stays anchored to exact moments in the script, not scattered across emails and documents.",
  },
  {
    title: "Continuous Environment",
    description: "Your script doesn't move through disconnected stages. It evolves inside one continuous production environment.",
  },
];

const PlanningFeatures = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="What You Get"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Built for{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Preproduction Discipline
              </span>
            </>
          }
          description="Planning Pro provides a structured environment for writer-directors who are not just drafting a screenplay, but preparing a film to be made."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[18px] text-foreground mb-2">{feature.title}</h3>
              <p className="font-lato text-[15px] text-[#878787] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg font-semibold text-[#4D029B] mt-12 italic"
        >
          Each capability reinforces alignment between what you intend creatively and what will be required operationally.
        </motion.p>
      </div>
    </section>
  );
};

export default PlanningFeatures;
