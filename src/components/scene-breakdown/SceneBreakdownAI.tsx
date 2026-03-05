import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const SceneBreakdownAI = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                pillText="AI"
                align="left"
                title="Built-In Intelligence. AI Inside Creative Context."
                titleClassName="text-3xl sm:text-4xl font-display font-bold text-foreground"
                description="AI is very good at generating images. Productions, unfortunately, require something slightly more complicated than images."
                descriptionClassName="text-lg text-muted-foreground"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5"
            >
              <p className="text-muted-foreground leading-relaxed">
                Inside Pzaz, AI operates within the context of your scenes and storyboards. It can help generate synthetic shots, explore visual ideas and iterate on frames without detaching them from the production structure.
              </p>
              <div
                className="p-5 rounded-2xl border"
                style={{ borderColor: "hsl(var(--primary)/0.2)", background: "hsl(var(--primary)/0.04)" }}
              >
                <p className="text-foreground font-medium">
                  It does not decide what the film should look like.{" "}
                  <span className="text-muted-foreground font-normal">That remains firmly human territory.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownAI;
