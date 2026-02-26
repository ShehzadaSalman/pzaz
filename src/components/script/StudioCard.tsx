import React from "react";
import { motion } from "framer-motion";
import studioCardIcon from "@/assets/studio-card-icon.svg";

interface StudioCardProps {
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  icon?: string;
  index?: number;
}

const StudioCard = ({ title, tagline, description, highlight, icon, index = 0 }: StudioCardProps) => {
  const iconSrc = icon ?? studioCardIcon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group relative rounded-[38px] p-8 border-2 border-[#D4BAF4] bg-white transition-all duration-300 hover:shadow-xl flex flex-col"
    >
      {/* Icon */}
      <div className="mb-5 w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center">
        <img src={iconSrc} alt="" className="w-4 h-4" />
      </div>

      {/* Tagline */}
      <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-2">{tagline}</p>

      {/* Title */}
      <h3 className="font-lato font-bold text-[20px] text-black mb-4">{title}</h3>

      {/* Description */}
      <p className="font-lato font-normal text-[16px] text-[#878787] leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Highlight quote */}
      <div className="rounded-[12px] bg-[#F7F2FD] p-[22px]">
        <p className="font-lato font-normal text-[16px] text-[#4D029B] italic leading-relaxed">
          "{highlight}"
        </p>
      </div>
    </motion.div>
  );
};

export default StudioCard;
