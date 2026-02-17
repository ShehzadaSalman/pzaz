import React, { useState } from "react";
import { motion } from "framer-motion";
import { CornerUpRight } from "lucide-react";

const categories = [
  "Comparisons & Analysis",
  "Discoveries & Beginnings",
  "Film Business School",
  "Filmmaker Interviews",
  "How-Tos & Insights",
  "News & Updates",
  "Production & Producing",
  "Art Of Film",
];

const ProducerBlogHero = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="pt-28 md:pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0EAFF] via-[#F5F5F7] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-lato font-black text-[48px] md:text-[72px] leading-[1.05] bg-gradient-to-r from-[#3207BC] to-[#409DFF] bg-clip-text text-transparent mb-4"
        >
          The Film Maker Entrepreneur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="italic text-[20px] md:text-[24px] text-[#4A4A4F] mb-10"
        >
          Interviews, Industry and Info. Get Pzazzed !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`rounded-[10px] px-5 py-2.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-[#4827AF] text-white"
                  : "bg-[#D7D7DC] text-[#4A4A4F] hover:bg-[#CCCCD2]"
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="rounded-[10px] bg-[#D7D7DC] px-5 py-2.5 text-sm font-medium text-[#4A4A4F] hover:bg-[#CCCCD2] inline-flex items-center gap-1.5 transition-colors">
            Share
            <CornerUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProducerBlogHero;
