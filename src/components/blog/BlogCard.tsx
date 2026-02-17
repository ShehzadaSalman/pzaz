import React from "react";
import { Link } from "react-router-dom";
import { CornerUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  href: string;
}

const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  image,
  imageAlt,
  href,
}: BlogCardProps) => {
  return (
    <article className="mx-auto w-full max-w-[980px]">
      <Link
        to={href}
        className="group block overflow-hidden rounded-[24px] border border-[#D8D9DE] bg-[#ECECEF] shadow-[0_18px_50px_rgba(18,18,30,0.08)]"
      >
        <div className="relative bg-[#1D0F4F]">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[16/9] w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D0F4F]/20 via-transparent to-transparent" />
        </div>

        <div className="bg-[#ECECEF] px-6 py-8 md:px-12 md:py-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 md:gap-5">
              <span className="rounded-[10px] bg-[#D7D7DC] px-4 py-2 text-sm font-medium text-[#4F2BA6]">
                {category}
              </span>
              <span className="text-[28px] leading-none text-[#A3A3A8]">·</span>
              <span className="text-xl text-[#8C8C92]">{date}</span>
            </div>
            <CornerUpRight className="h-8 w-8 text-[#5E2AB5] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <h2 className="mb-6 font-lato text-[48px] font-black leading-[1.05] text-[#4A4A4F] md:text-[60px]">
            {title}
          </h2>

          <p className="max-w-[800px] text-[28px] leading-[1.35] text-[#4A4A4F] md:text-[44px]">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
