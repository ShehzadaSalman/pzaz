import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const features = [
  { title: "Unlimited AI-Assisted Shots", description: "Generate unlimited AI-assisted shots within a scene to rapidly explore visual directions." },
  { title: "Non-Destructive Iteration", description: "Iterate on an existing frame without losing composition or continuity." },
  { title: "Frame Control", description: "Adjust framing, scale, and camera distance with precision." },
  { title: "Style Switching", description: "Switch between black-and-white and colour outputs to match your creative intent." },
  { title: "Reusable Elements", description: "Design reusable characters, locations and visual elements that persist across your project." },
  { title: "Animatic Creation", description: "Create and edit animatics directly from any scene, adjust shot timing and preview pacing instantly." },
  { title: "Secure Sharing", description: "Share secure, view-only animatic links with stakeholders for fast, frictionless feedback." },
  { title: "Continuous Visual Workflow", description: "These tools are not isolated — they are part of a continuous workflow that supports experimentation first and precision later." },
];

const StoryboardFeatures = () => {
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
                Real Creative Work
              </span>
            </>
          }
          description="Storyboarding inside Pzaz combines flexibility with control — everything you need to move from rough concept to production-ready boards."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default StoryboardFeatures;
