import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const features = [
  "Generate scene lists directly from storyboards",
  "Add unlimited shots to explore visual ideas",
  "Attach images, notes and scene metadata",
  "Assign cast, crew and departments to scenes",
  "Track filming progress directly in the stripboard",
  "Switch between visual, framed and list views",
  "Collaborate live with your production team",
  "Keep scene planning connected to the wider workflow",
];

const SceneBreakdownFeatures = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader
              pillText="Features"
              title="Built for Real Production Work."
              description="Pzaz Scene Breakdown supports the practical rhythm of filmmaking, where creative thinking and logistical clarity need to coexist rather than take turns."
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 p-5 rounded-2xl border bg-background"
                style={{ borderColor: "hsl(var(--primary)/0.15)" }}
              >
                <div
                  className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "hsl(var(--primary)/0.12)" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--primary))" }} />
                </div>
                <p className="text-foreground leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10 text-muted-foreground text-lg"
          >
            Each feature is useful on its own. Together, they create something more valuable:{" "}
            <span className="font-semibold text-foreground">alignment.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownFeatures;
