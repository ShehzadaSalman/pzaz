import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import { X, Check } from "lucide-react";

const without = [
  "Project managers report status manually.",
  "Producers reconcile inconsistencies production by production.",
  "Executives piece together slate performance across separate systems.",
];

const with_ = [
  "Every production follows the same coordination model.",
  "Financial, operational and creative data stay structurally aligned.",
  "Leadership operates from shared operational clarity.",
];

const StudioProShift = () => {
  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="The Shift"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              From Project-by-Project to{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Institutional Alignment
              </span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[30px] border border-[#D4BAF4] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-lato font-bold text-[20px] text-foreground">Without Studio Pro</h3>
            </div>
            <div className="space-y-4">
              {without.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2.5" />
                  <p className="font-lato text-[16px] text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-[30px] border border-[#D4BAF4] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#F7F2FD] flex items-center justify-center">
                <Check className="w-4 h-4 text-[#A805FF]" />
              </div>
              <h3 className="font-lato font-bold text-[20px] text-foreground">With Studio Pro</h3>
            </div>
            <div className="space-y-4">
              {with_.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F7F2FD] rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A805FF] flex-shrink-0 mt-2.5" />
                  <p className="font-lato text-[16px] text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xl font-bold text-foreground mt-12"
        >
          You stop relying on informal updates. You start operating with institutional visibility, and growth becomes controlled instead of reactive.
        </motion.p>
      </div>
    </section>
  );
};

export default StudioProShift;
