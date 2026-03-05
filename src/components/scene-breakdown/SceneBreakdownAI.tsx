import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const SceneBreakdownAI = () => {
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
              Inside Pzaz, AI operates within the context of your scenes and storyboards. It can help generate synthetic shots, explore visual ideas and iterate on frames without detaching them from the production structure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It does not decide what the film should look like. That remains firmly human territory.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              Humans decide. AI strengthens the clarity.
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
              pillText="AI"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Built-In Intelligence.{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    AI Inside Creative Context.
                  </span>
                </>
              }
              description="AI is very good at generating images. Productions, unfortunately, require something slightly more complicated than images."
              align="left"
              className="mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownAI;
