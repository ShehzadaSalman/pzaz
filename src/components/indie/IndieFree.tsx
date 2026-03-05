import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const IndieFree = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 30%, #FFFFFF 100%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <AnimatedSectionHeader
            wrapperClassName="text-center"
            pillText="Free. Always."
            pillClassName="bg-[#E4E4FE] border border-[#8651EF42] text-primary"
            title={
              <>
                Indie is free.{" "}
                <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Permanently.
                </span>
              </>
            }
            className="mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 text-left bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8 md:p-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built for independent reality, Indie is not a teaser tier. It is the structural foundation every independent film deserves.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "No subscriptions",
                "No artificial limits",
                "No lock-in's",
                "No upgrades to unlock",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#F7F2FD] rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#A805FF] flex-shrink-0" />
                  <span className="font-lato font-semibold text-[16px] text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-[#4D029B] pt-2 italic">
              With Indie, you don't need permission to operate like a professional.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieFree;
