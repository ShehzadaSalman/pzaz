import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const shifts = [
  {
    title: "Less time searching.",
    description: "Teams spend less time searching for information when everything lives in the same place.",
  },
  {
    title: "Clearer feedback.",
    description: "Feedback becomes clearer because it stays attached to the work itself rather than floating in threads.",
  },
  {
    title: "Decisions stay visible.",
    description: "Decisions remain visible long after the meeting ends, giving the whole team a shared reference.",
  },
];

const CollaborationShift = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="What Changes"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              What Changes When{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Collaboration Has Context
              </span>
            </>
          }
          description="When collaboration tools live inside the production environment, behaviour begins to shift."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {shifts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-8"
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-5">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[18px] text-foreground mb-3">{item.title}</h3>
              <p className="font-lato text-[14px] text-[#878787] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Communication stops being noise around the production.{" "}
          <span className="font-semibold text-foreground">Instead, it becomes part of the production itself.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default CollaborationShift;
