import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const shifts = [
  {
    title: "Ownership becomes clear.",
    description: "Every task has a clear owner, so no one is left wondering who is responsible for what.",
  },
  {
    title: "Deadlines feel realistic.",
    description: "Deadlines reflect actual production timing, not aspirational estimates disconnected from the schedule.",
  },
  {
    title: "Less checking, more doing.",
    description: "Teams spend less time checking status and more time completing work that moves the production forward.",
  },
];

const TaskManagementShift = () => {
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
                Tasks Have Context
              </span>
            </>
          }
          description="When task management sits inside the production environment, behaviour shifts."
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
          Tasks stop being reminders.{" "}
          <span className="font-semibold text-foreground">They become signals that keep the whole production moving.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TaskManagementShift;
