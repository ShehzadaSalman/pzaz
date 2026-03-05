import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const stats = [
  {
    number: "80%",
    label: "of first-time filmmakers don't make a second film.",
    note: "Not because of creativity. Because of burnout, overwhelm, and disorganisation.",
  },
  {
    number: "1 in 3",
    label: "productions stall before completion.",
    note: "The creative challenge is rarely the film itself. It's the system — or lack of one — behind it.",
  },
  {
    number: "100%",
    label: "of successful productions run on clear infrastructure.",
    note: "Behind every smooth shoot is a quiet system keeping the creative process moving forward.",
  },
];

const ProjectManagementStats = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #F9F5FE 0%, #FFFFFF 60%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="The Numbers Tell the Story"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              The real creative challenge{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                is rarely the film itself.
              </span>
            </>
          }
          description="After working with hundreds of filmmakers, one pattern appears again and again."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="rounded-[38px] border-2 border-[#D4BAF4] bg-white p-10 text-center hover:shadow-lg transition-all duration-300"
            >
              <p
                className="font-lato font-extrabold text-[64px] leading-none mb-4 bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #8B1DFF 0%, #409DFF 100%)" }}
              >
                {s.number}
              </p>
              <p className="font-lato font-bold text-[18px] text-foreground mb-3 leading-snug">{s.label}</p>
              <p className="font-lato text-[14px] text-[#878787] leading-relaxed italic">{s.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto rounded-[28px] bg-[#F7F2FD] border border-[#D4BAF4] p-8 md:p-12 text-center"
        >
          <p className="font-lato font-bold text-[20px] text-[#4D029B] leading-relaxed italic">
            "Investors walk. Distributors bail. Or worse: you get the film made, but you're so exhausted and disillusioned, you don't even want to be near it again."
          </p>
          <p className="font-lato text-[14px] text-[#878787] mt-4">
            The creative challenge wasn't the film. It was the system behind it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectManagementStats;
