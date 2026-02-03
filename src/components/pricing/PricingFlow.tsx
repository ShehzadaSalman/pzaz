import React, { useState } from "react";
import { motion } from "framer-motion";

const flowSteps = [
  { id: "script", label: "Script", stage: "writing" },
  { id: "breakdown", label: "Breakdown", stage: "writing" },
  { id: "budget", label: "Budget", stage: "planning" },
  { id: "schedule", label: "Schedule", stage: "planning" },
  { id: "shoot", label: "Shoot", stage: "producing" },
  { id: "finish", label: "Finish", stage: "producing" }
];

const stageOrder = ["writing", "planning", "producing", "studio"];

const PricingFlow = () => {
  const [activeStage] = useState("planning");

  const isActive = (stepStage: string) => {
    const activeIndex = stageOrder.indexOf(activeStage);
    const stepIndex = stageOrder.indexOf(stepStage);
    return stepIndex <= activeIndex;
  };

  return (
    <section id="flow" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One flow. No re-entry.{" "}
            <span className="gradient-text">No broken handovers.</span>
          </h2>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 hidden sm:block" />
            <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-accent -translate-y-1/2 hidden sm:block" 
                 style={{ width: "66%" }} />

            {/* Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {flowSteps.map((step, index) => {
                const active = isActive(step.stage);
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center relative"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`mt-3 font-medium text-sm ${
                      active ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {step.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-xl mx-auto"
        >
          Every step stays connected. Upgrade unlocks more — your work never resets.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingFlow;
