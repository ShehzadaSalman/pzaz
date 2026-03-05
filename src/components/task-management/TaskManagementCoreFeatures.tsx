import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const coreCapabilities = [
  {
    title: "One board, whole production",
    description: "Tasks live inside the same environment as scripts and schedules. No separate tool, no context switching.",
  },
  {
    title: "Ownership that sticks",
    description: "Every task has a named owner connected to a real department, not just a name in a spreadsheet.",
  },
  {
    title: "Deadlines that mean something",
    description: "Dates reflect actual production timing because they exist inside the scheduling context.",
  },
  {
    title: "AI that helps — not decides",
    description: "AI surfaces dependencies and helps prioritise based on production structure. Humans still make the calls.",
  },
];

const TaskManagementCoreFeatures = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-12"
            pillText="Core Experience"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Complete Task{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Coordination System
                </span>
              </>
            }
            description="One platform. The complete production task lifecycle. Everything your team needs — from assignment to completion — in one connected workspace."
            motionProps={{ initial: { opacity: 0, y: 30 } }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px]">
            {coreCapabilities.map((item, index) => (
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

export default TaskManagementCoreFeatures;
