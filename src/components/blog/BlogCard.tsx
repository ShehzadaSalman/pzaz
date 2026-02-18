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
  variant?: "featured" | "grid";
}

const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  image,
  imageAlt,
  href,
  variant = "featured",
}: BlogCardProps) => {
  const isGrid = variant === "grid";

  return (
    <article className={isGrid ? "w-full" : "mx-auto w-full max-w-[980px]"}>
      <Link
        to={href}
        className="group block overflow-hidden rounded-[24px] border border-[#D8D9DE] bg-white shadow-[0_18px_50px_rgba(18,18,30,0.08)] h-full"
      >
        <div className="relative bg-[#1D0F4F]">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[16/9] w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D0F4F]/20 via-transparent to-transparent" />
        </div>

        <div className={`bg-white ${isGrid ? "px-5 py-5" : "px-6 py-8 md:px-12 md:py-10"}`}>
          <div className={`${isGrid ? "mb-3" : "mb-6"} flex items-center justify-between gap-4`}>
            <div className="flex flex-wrap items-center gap-3 md:gap-5">
              <span className={`rounded-[5px] bg-[#e1e1e1] px-2 py-1 font-medium text-[#4F2BA6] ${isGrid ? "text-xs" : "text-sm"}`}>
                {category}
              </span>
              <span className={`text-[#8C8C92] ${isGrid ? "text-sm" : "text-xl"}`}>{new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <CornerUpRight className={`text-[#5E2AB5] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${isGrid ? "h-5 w-5" : "h-8 w-8"}`} />
          </div>

          <h2 className={`font-gloock font-semibold leading-[1.05] text-[#4A4A4F] ${isGrid ? "mb-3 text-[24px] md:text-[28px]" : "mb-6 text-[56px] md:text-[68px]"}`}>
            {title}
          </h2>

          <p className={`leading-[1.35] text-[#4A4A4F] ${isGrid ? "text-[14px] md:text-[15px] line-clamp-3" : "max-w-[800px] text-[28px] md:text-[44px]"}`}>
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
