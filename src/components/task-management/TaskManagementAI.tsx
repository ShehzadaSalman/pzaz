import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const TaskManagementAI = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
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
              pillText="The Future of Task Management"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  AI That Supports{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Human Decisions
                  </span>
                </>
              }
              description="AI can generate lists quickly. But lists alone rarely coordinate a production."
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
              Inside Pzaz, AI operates within the context of your project. It can assist with organising tasks, surfacing dependencies, and helping teams prioritise work based on production structure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It does not decide what should happen next. That remains the responsibility of producers and department heads.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              AI simply helps teams stay organised while all decisions remain human.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagementAI;
