import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";

interface ArticleHeroProps {
  article: BlogPost;
}

const ArticleHero = ({ article }: ArticleHeroProps) => {
  const heroImage = article.featuredImage;

  return (
    <section className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt={article.title}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Back button */}
        <div className="container mx-auto px-6 pt-28">
          <Link to="/producer-blog">
            <Button variant="ghost" size="sm" className="gap-2 text-white/90 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
