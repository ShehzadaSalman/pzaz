import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const features = [
  { title: "Clear Assignments", description: "Assign tasks clearly across departments so every piece of work has a defined owner." },
  { title: "Deadline Tracking", description: "Track deadlines and production milestones connected to the actual schedule." },
  { title: "Task Boards", description: "Organise work using task boards and priority lists that reflect production reality." },
  { title: "Sprint Planning", description: "Plan focused work periods with sprint-style planning designed for production rhythms." },
  { title: "Drag-and-Drop", description: "Adjust workloads quickly with simple drag-and-drop planning when priorities shift." },
  { title: "Connected Workflow", description: "Keep task coordination connected to the wider production — no silos, no drift." },
];

const TaskManagementFeatures = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="What You Get"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Built for{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Real Production Workflows
              </span>
            </>
          }
          description="Pzaz task management tools reflect the rhythm of filmmaking, where many departments move in parallel and coordination matters more than checklists."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[16px] text-foreground mb-2">{feature.title}</h3>
              <p className="font-lato text-[14px] text-[#878787] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 text-lg text-[#878787]"
        >
          Each capability supports clarity.{" "}
          <span className="font-semibold text-foreground">Together, they create alignment across the team.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TaskManagementFeatures;
