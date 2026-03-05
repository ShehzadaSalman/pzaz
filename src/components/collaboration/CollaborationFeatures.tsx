import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const features = [
  { title: "Real-Time Team Chat", description: "Communicate instantly through real-time team chat, keeping everyone on the same page." },
  { title: "Contextual Conversations", description: "Attach conversations directly to scenes, scripts, and tasks so feedback never drifts." },
  { title: "Secure File Sharing", description: "Share files with secure cloud storage and version control across the entire team." },
  { title: "Task Boards & Goals", description: "Track progress through project goals and task boards connected to real production work." },
  { title: "Asset Comments", description: "Comment directly on creative and production assets to keep feedback precise and useful." },
  { title: "Smart Notifications", description: "Receive updates and notifications tied to real work, not noise." },
  { title: "Cross-Department Collaboration", description: "Collaborate live across departments and locations without losing coordination." },
  { title: "Connected Workflow", description: "Keep communication connected to the wider production workflow — never in isolation." },
];

const CollaborationFeatures = () => {
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
                Real Film Teams
              </span>
            </>
          }
          description="Pzaz collaboration tools are designed for the practical rhythm of filmmaking, where creative discussion and operational clarity must coexist."
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
          Together, they create something more valuable:{" "}
          <span className="font-semibold text-foreground">collaboration at its best.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default CollaborationFeatures;
