import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const shifts = [
  {
    title: "Teams communicate less, but understand more.",
    description:
      "When context is always visible, teams don't need to chase updates. Decisions move faster because the information is already there.",
  },
  {
    title: "Creative work flows without friction.",
    description:
      "Administrative overhead disappears. The system handles the coordination so the team can focus on the film.",
  },
  {
    title: "The film still needs talent, persistence, and vision.",
    description:
      "But at long last, the system supporting it no longer works against you. It becomes your co-pilot.",
  },
];

const ProjectManagementShift = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="The Shift You Need to Make"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Filmmaking is both an art{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                and an operation.
              </span>
            </>
          }
          description="The story matters. But the structure that carries it matters just as much."
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
          Pzaz is for filmmaker entrepreneurs.{" "}
          <span className="font-semibold text-foreground">
            For those who understand that creating a film is just one part of the job. The rest is execution.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectManagementShift;
