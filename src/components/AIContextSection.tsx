import React from "react";
import { motion } from "framer-motion";
import aiContextIllustration from "@/assets/ai-context-illustration.svg";

const AIContextSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-lato font-extrabold text-[48px] leading-[56px] text-foreground text-center mb-12"
        >
          AI without context is guesswork.
        </motion.h2>

        {/* Two-column description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-52 max-w-5xl mx-auto relative z-10 mb-[-80px]"
        >
          <p className="font-lato font-normal text-[20px] leading-[30px] text-[#878787]">
            AI can generate impressive answers in seconds. But impressive answers don't run productions. Without full production context, outputs don't connect, decisions don't propagate, and teams fall out of alignment.
          </p>
          <p className="font-lato font-normal text-[20px] leading-[30px] text-[#878787]">
            That's why AI-first tools look powerful, yet still leave productions fragmented. It's also why 95% of companies fail to unlock real AI value.
            <br /><br />
            Pzaz connects your full production context so your tools, AI agents and your teams work together in harmony.
          </p>
        </motion.div>

        {/* Illustration — slides up behind the text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center relative z-0"
        >
          <img src={aiContextIllustration} alt="AI context illustration" className="w-full max-w-3xl h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default AIContextSection;
