import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  icon: string;
  trigger: string;
  result: string;
  image: string;
  index?: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, trigger, result, image, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group rounded-2xl bg-[#F6FCFC] border border-[#E6D7F7] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Title row */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <img src={icon} alt="" className="w-[45px] h-[45px] flex-shrink-0" />
        <span className="font-lato font-bold text-[20px] leading-[23px] text-foreground">
          {trigger}
        </span>
        <ArrowRight className="w-5 h-5 text-[#5C28A3] flex-shrink-0" />
        <span className="font-lato font-normal text-[20px] leading-[23px] text-[#878787]">
          {result}
        </span>
      </div>

      {/* Preview image - bottom aligned */}
      <div className="mt-auto px-6 pb-0">
        <div className="rounded-t-xl overflow-hidden">
          <img
            src={image}
            alt={`${trigger} preview`}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
