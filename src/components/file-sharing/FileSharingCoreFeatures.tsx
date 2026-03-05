import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const coreCapabilities = [
  {
    title: "Production-connected storage",
    description: "Files live inside the same environment as scripts and scenes. No context switching, no disconnected folders.",
  },
  {
    title: "Version clarity built in",
    description: "One source of truth. Teams always see the latest version without chasing down which file is current.",
  },
  {
    title: "Instant, secure sharing",
    description: "Share scripts, references, and assets instantly with permission controls that keep the right people in — and others out.",
  },
  {
    title: "AI that assists — not decides",
    description: "AI supports visual exploration and asset generation within the project context. Creative direction always stays human.",
  },
];

const FileSharingCoreFeatures = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-12"
            pillText="Core Experience"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Complete Media{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Management System
                </span>
              </>
            }
            description="One platform. The complete production media lifecycle. Everything your team needs — from upload to delivery — in one connected workspace."
            motionProps={{ initial: { opacity: 0, y: 30 } }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px]">
            {coreCapabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-8 rounded-[38px] border-2 border-[#D4BAF4] transition-all hover:shadow-lg"
                style={{ background: "linear-gradient(180deg, #EEE7FF 0%, #F8F4FF 35%, #FFFFFF 100%)" }}
              >
                <h4 className="font-lato font-bold text-[20px] text-[#4D029B] mb-3">{item.title}</h4>
                <p className="font-lato font-normal text-[16px] leading-[24px] text-[#878787]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileSharingCoreFeatures;
