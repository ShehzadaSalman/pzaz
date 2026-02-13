import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import workSmarter from "@/assets/work-smarter.png";
import SectionHeader from "@/components/SectionHeader";

const outcomes = [
  "Reduce mistakes before they happen.",
  "Cut handoffs between departments.",
  "Save time on every change.",
  "Avoid unnecessary costs.",
];

const WorkSmarterSection = () => {
  return (
    <section className="bg-[#FBFBFB] py-12 md:pt-[138px] md:pb-[190px] border-t border-[#E3D6F5]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader
            title="Work Smarter. Stay Stress Free"
            titleClassName=""
            description="All your tools, working together, from day one."
          />

          <img
            src={workSmarter}
            alt="Work smarter workflow preview"
            className="mt-[70px] w-full max-w-6xl mx-auto h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSmarterSection;
