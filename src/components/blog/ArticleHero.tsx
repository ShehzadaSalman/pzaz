import React from "react";
import { BlogPost } from "@/data/blogData";

interface ArticleHeroProps {
  article: BlogPost;
}

const ArticleHero = ({ article }: ArticleHeroProps) => {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden md:h-[335px]">
      <img
        src={article.featuredImage}
        alt={article.title}
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
  );
};

export default ArticleHero;
