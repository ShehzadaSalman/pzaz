import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const TaskManagementProblem = () => {
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
                  When Task Coordination Is Fragmented,{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Work Slows Down
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
              Most productions rely on improvised systems to manage tasks. Each system works on its own. Together, this creates confusion.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Who actually owns this task? Is it finished? Has it even started? Maybe the schedule changed?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Teams spend time chasing answers instead of moving the work forward.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              This is not a productivity problem. It is a coordination problem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagementProblem;
