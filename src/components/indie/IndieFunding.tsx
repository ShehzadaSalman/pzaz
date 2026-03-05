import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const IndieFunding = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 40%, #FFFFFF 100%)" }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center"
          pillText="The Bigger Picture"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Funding Follows{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Preparation
              </span>
            </>
          }
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              When your film is organised, structurally thought through, and visibly coherent, the dynamic in the room begins to change in ways that are difficult to fake but easy to feel.
            </p>
          </div>

          <div className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              You're no longer pitching a fragile idea that needs protection; you're presenting a project that has weight, logic, and a form of forward momentum. Practical questions stop feeling like traps and start feeling like signals of interest, because you can answer them calmly, clearly and without searching through scattered notes or half-finished documents.
            </p>
          </div>

          <div className="bg-white rounded-[30px] border border-[#D4BAF4] p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Investors aren't put off by ambition, and they're not even put off by uncertainty. What unsettles them is ambiguity — the sense that the execution lives somewhere in the future rather than in the present.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#F7F2FD] rounded-[30px] border-2 border-[#D4BAF4] p-8 text-center"
          >
            <p className="font-lato font-bold text-[20px] text-[#4D029B] italic">
              Clarity reduces perceived risk, and perceived risk is often the real barrier to belief.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieFunding;
