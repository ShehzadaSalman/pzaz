import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StudioCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  index?: number;
}

const StudioCard = ({ icon: Icon, title, tagline, description, highlight, index = 0 }: StudioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group relative rounded-[38px] p-8 border-2 border-[#D4BAF4] bg-white transition-all duration-300 hover:shadow-xl flex flex-col"
    >
      {/* Icon */}
      <div className="w-[60px] h-[60px] rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground mb-5">
        <Icon className="w-8 h-8" />
      </div>

      {/* Tagline */}
      <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-2">{tagline}</p>

      {/* Title */}
      <h3 className="font-lato font-bold text-[24px] text-[#4D029B] mb-4">{title}</h3>

      {/* Description */}
      <p className="font-lato font-normal text-[16px] text-[#878787] leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Highlight quote */}
      <div className="rounded-[12px] bg-[#F7F2FD] py-[21px] px-[24px]">
        <p className="font-lato font-normal text-[14px] text-[#4D029B] italic leading-relaxed">
          "{highlight}"
        </p>
      </div>
    </motion.div>
  );
};

export default StudioCard;
