import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const features = [
  { title: "Scene Lists from Storyboards", description: "Generate scene lists directly from storyboards, keeping visual planning and breakdown in sync." },
  { title: "Unlimited Shots", description: "Add unlimited shots to explore visual ideas without restrictions." },
  { title: "Scene Metadata", description: "Attach images, notes and scene metadata for a complete picture of every scene." },
  { title: "Team Assignment", description: "Assign cast, crew and departments to scenes to keep everyone aligned." },
  { title: "Stripboard Progress Tracking", description: "Track filming progress directly in the stripboard as production moves forward." },
  { title: "Flexible Views", description: "Switch between visual, framed and list views to match how you think and work." },
  { title: "Live Collaboration", description: "Collaborate in real time with your production team, wherever they are." },
  { title: "Connected Workflow", description: "Keep scene planning connected to the wider production workflow — no isolated silos." },
];

const SceneBreakdownFeatures = () => {
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
                Real Production Work
              </span>
            </>
          }
          description="Pzaz Scene Breakdown supports the practical rhythm of filmmaking, where creative thinking and logistical clarity need to coexist rather than take turns."
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-lg text-[#878787]"
        >
          Each feature is useful on its own. Together, they create something more valuable:{" "}
          <span className="font-semibold text-foreground">alignment.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default SceneBreakdownFeatures;
