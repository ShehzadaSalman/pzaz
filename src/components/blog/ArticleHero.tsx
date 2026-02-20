import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/producer-blog"
            className="mb-4 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
