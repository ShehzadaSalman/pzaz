import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import workSmarter from "@/assets/work-smarter.png";

const outcomes = [
  "Reduce mistakes before they happen.",
  "Cut handoffs between departments.",
  "Save time on every change.",
  "Avoid unnecessary costs.",
];

const WorkSmarterSection = () => {
  return (
    <section className="bg-[#FBFBFB] pt-[138px] pb-[190px] border-t border-[#E3D6F5]">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl mx-auto"
      >

      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="font-lato font-extrabold text-[48px] leading-[70px] tracking-normal">
            Work Smarter. Stay Stress Free
          </h2>
          <p className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-center text-[#878787] max-w-3xl mx-auto">
            All your tools, working together, from day one.
          </p>
          <img
            src={workSmarter}
            alt="Work smarter workflow preview"
            className="mt-[70px] w-full max-w-6xl mx-auto h-auto"
          />
        </div>

      </div>
      </motion.div>
    </section>
  );
};

export default WorkSmarterSection;
