import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const SceneBreakdownFreedom = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              pillText="Creative Freedom"
              title="Creative Exploration Without Administrative Weight."
              description="Pzaz keeps scene planning structured but flexible inside a modern, cloud-based environment where directors, producers and departments can work naturally together."
            />
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { label: "Shots evolve", desc: "Ideas develop fluidly without starting over." },
                { label: "Scenes grow", desc: "Layer detail progressively as production develops." },
                { label: "Structure holds", desc: "The system organises so you can stay creative." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border bg-background text-left"
                  style={{ borderColor: "hsl(var(--primary)/0.15)" }}
                >
                  <p className="font-semibold text-foreground mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownFreedom;
