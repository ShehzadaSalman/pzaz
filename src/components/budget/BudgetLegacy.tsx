import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const BudgetLegacy = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 30%, #FFFFFF 100%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Respecting the Standard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8 md:p-10"
          >
            <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center mb-6">
              <span className="text-white text-lg font-bold">✓</span>
            </div>
            <h3 className="font-lato font-bold text-[28px] text-foreground mb-2">Respecting the Standard.</h3>
            <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-6">Evolving the System.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Industry-standard tools like Movie Magic Budgeting have earned their place over decades. They provide deep financial logic and are familiar to line producers and accountants across the industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Pzaz does not try to replace that foundation.
            </p>
            <p className="text-lg font-semibold text-foreground leading-relaxed">
              It simply places budgeting inside the wider production environment. Instead of a financial file moving between specialists, the budget stays connected to the script, breakdown and schedule.
            </p>
          </motion.div>

          {/* Modern Power */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8 md:p-10"
          >
            <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center mb-6">
              <span className="text-white text-lg font-bold">→</span>
            </div>
            <h3 className="font-lato font-bold text-[28px] text-foreground mb-2">Modern Power.</h3>
            <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-6">No Legacy Friction.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Financial depth should not require complexity. Legacy budgeting systems are powerful, but they often carry the weight of older software — desktop-bound, training-heavy, and difficult to navigate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Pzaz keeps the financial discipline, but removes the friction.
            </p>
            <p className="text-lg font-semibold text-foreground leading-relaxed">
              It delivers the same level of control inside a modern, cloud-based environment where producers, department heads, and accountants can work together without barriers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetLegacy;
