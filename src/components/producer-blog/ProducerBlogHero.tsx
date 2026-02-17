import React from "react";
import { motion } from "framer-motion";
import { CornerUpRight } from "lucide-react";
import { categories } from "@/data/blogData";

interface ProducerBlogHeroProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const ProducerBlogHero = ({ activeCategory, onCategoryChange }: ProducerBlogHeroProps) => {
  return (
    <section className="pt-28 md:pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0EAFF] via-[#F5F5F7] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-gloock font-medium text-[64px] md:text-[96px] leading-[1] bg-clip-text text-transparent mb-4"
          style={{ backgroundImage: 'linear-gradient(91deg, #5C28A4 9.57%, #00D1FF 85.93%)' }}
        >
          The Film Maker Entrepreneur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-gloock font-medium text-[46px] text-black mb-10"
        >
          Interviews, Industry and Info. Get Pzazzed !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-[10px] px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-brand-purple text-white"
                  : "bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20"
              }`}
            >
              {category.label}
            </button>
          ))}
          <button className="rounded-[10px] bg-brand-purple/10 px-5 py-2.5 text-sm font-medium text-brand-purple hover:bg-brand-purple/20 inline-flex items-center gap-1.5 transition-colors">
            Share
            <CornerUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProducerBlogHero;
