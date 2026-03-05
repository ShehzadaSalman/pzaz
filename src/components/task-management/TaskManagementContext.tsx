import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const TaskManagementContext = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 order-2 md:order-1"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tasks live inside the same environment as scripts, scenes, schedules, and planning. Assignments remain connected to the work they support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Updates appear where they matter. Departments stay aligned without constant clarification.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              When a task changes, the team sees it. When a deadline moves, responsibilities adjust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText="The Solution"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Task Management Inside{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    the Production Environment
                  </span>
                </>
              }
              description="Pzaz approaches task management as part of the production system, not a separate productivity tool."
              align="left"
              className="mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagementContext;
