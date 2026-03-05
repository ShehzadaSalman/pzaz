import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const StudioProSlate = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="The Solution"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              One Coordination Layer.{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                An Entire Slate in View.
              </span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Studio Pro establishes shared structural logic across every production you run, so each project operates inside the same coordinated environment instead of its own scattered system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Script development, breakdown, scheduling, financial signals, and collaboration remain connected, allowing information to move naturally from production teams to executive oversight.
            </p>
            <p className="text-xl font-bold text-foreground">
              This is not another dashboard. It is production infrastructure designed for managing a slate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: "Scope shifts in Project A", outcome: "capacity implications become visible across the slate." },
              { label: "Financial pressure builds in Project B", outcome: "leadership sees it early, not after the quarter closes." },
              { label: "Resources overlap between productions", outcome: "structural clarity replaces assumption." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-white rounded-2xl border border-[#D4BAF4] p-5"
              >
                <p className="font-lato text-[16px] text-foreground leading-relaxed">
                  <span className="font-bold">When {item.label}, </span>
                  <span className="text-muted-foreground">{item.outcome}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioProSlate;
