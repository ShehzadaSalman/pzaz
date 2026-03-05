import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const capabilities = [
  {
    title: "Unified Financial Visibility",
    description: "Budget structures remain consistent, forecasts evaluated across the slate, deviations surface early — not at the end of a reporting cycle.",
  },
  {
    title: "Cross-Project Resource Coordination",
    description: "Availability, workload and overlap reviewed structurally. Production leaders plan with confidence. Teams operate with clarity.",
  },
  {
    title: "Standardised Project Structures",
    description: "Unified project structures across your entire slate with standardised budgeting and workflow logic keeping every production aligned.",
  },
  {
    title: "Access Governance",
    description: "Access remains controlled through clear governance while leadership gains centralised oversight without micromanaging individual teams.",
  },
  {
    title: "Executive Oversight",
    description: "Leadership sees the full slate — each production operates independently, but never in isolation from the broader strategic picture.",
  },
  {
    title: "Multi-Currency and Compliance",
    description: "Build multi-currency budgets for international productions with taxes, fringes, and regional compliance rules configured across the slate.",
  },
];

const StudioProFeatures = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="What You Get"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Standardised Logic Across{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Every Production
              </span>
            </>
          }
          description="Institutional alignment requires consistency. Studio Pro establishes unified logic across your entire slate. Each production still operates independently, but never in isolation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-white rounded-[30px] border border-[#D4BAF4] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F2FD] border border-[#D4BAF4] flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[18px] text-foreground mb-2">{cap.title}</h3>
              <p className="font-lato text-[15px] text-[#878787] leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg font-semibold text-[#4D029B] mt-12 italic"
        >
          Structure replaces improvisation.
        </motion.p>
      </div>
    </section>
  );
};

export default StudioProFeatures;
