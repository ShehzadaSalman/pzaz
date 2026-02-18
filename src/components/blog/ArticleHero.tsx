import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogData";

interface ArticleHeroProps {
  article: BlogPost;
}

const ArticleHero = ({ article }: ArticleHeroProps) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(article.title);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const redditUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`;
  const whatsappUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!shareMenuRef.current) return;
      if (!shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="pt-28 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/producer-blog">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category and meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary" className="text-primary">
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readingTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Author and share */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-foreground">
                  {article.authorName
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{article.authorName}</p>
                </div>
              </div>
              
              <div className="relative" ref={shareMenuRef}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={() => setShowShareMenu((previous) => !previous)}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-44 rounded-md border border-border bg-background p-2 shadow-md z-20">
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Share on Facebook
                    </a>
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Share on X
                    </a>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Share on LinkedIn
                    </a>
                    <a
                      href={redditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Share on Reddit
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Share on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={article.featuredImage}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
