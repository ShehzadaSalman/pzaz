import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, User, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";

interface ArticleContentProps {
  article: BlogPost;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  const categories = Array.isArray(article.category) ? article.category : [article.category];

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(article.title);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url: shareUrl });
      } catch {
        // User cancelled
      }
    } else {
      setShowShareMenu((prev) => !prev);
    }
  };

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listItems: string[] = [];
    const imagePattern = /^!\[(.*?)\]\((https?:\/\/.+?)\)$/;

    const flushList = (key: string) => {
      if (!inList || listItems.length === 0) return;
      elements.push(
        <ul key={key} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const imageMatch = trimmedLine.match(imagePattern);

      if (imageMatch) {
        flushList(`list-before-image-${index}`);
        const [, alt, src] = imageMatch;
        elements.push(
          <figure key={`image-${index}`} className="my-8">
            <img
              src={src}
              alt={alt || "Article image"}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full rounded-xl border border-border/60"
            />
          </figure>
        );
        return;
      }

      if (trimmedLine.startsWith("### ")) {
        flushList(`list-${index}`);
        elements.push(
          <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("## ")) {
        flushList(`list-${index}`);
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("> ")) {
        flushList(`list-${index}`);
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-muted-foreground">
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
      } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        flushList(`list-${index}`);
        elements.push(
          <p key={index} className="font-semibold text-foreground my-4">
            {trimmedLine.replace(/\*\*/g, "")}
          </p>
        );
      } else if (trimmedLine.startsWith("- ") || trimmedLine.match(/^\d+\.\s/)) {
        inList = true;
        listItems.push(trimmedLine.replace(/^-\s/, "").replace(/^\d+\.\s/, ""));
      } else if (trimmedLine.length > 0) {
        flushList(`list-${index}`);
        const formattedLine = trimmedLine
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        elements.push(
          <p
            key={index}
            className="text-lg text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        );
      }
    });

    flushList("final-list");
    return elements;
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category badge */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-primary">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: "#5C28A4" }}>
            {article.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{article.authorName}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime} min read</span>
            </div>
            <div className="relative ml-auto" ref={shareMenuRef}>
              <Button variant="ghost" size="sm" className="gap-1.5" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-44 rounded-md border border-border bg-background p-2 shadow-md z-20">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted">Facebook</a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`} target="_blank" rel="noopener noreferrer" className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted">X (Twitter)</a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted">LinkedIn</a>
                  <a href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted">WhatsApp</a>
                </div>
              )}
            </div>
          </div>

          {/* YouTube embed if applicable */}
          {article.youtubeVideoId && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10" style={{
              backgroundImage: article.videoBgImage ? `url(${article.videoBgImage})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <iframe
                src={`https://www.youtube.com/embed/${article.youtubeVideoId}`}
                title={article.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>

          {/* Tags / categories at bottom */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
            {categories.map((cat) => (
              <Badge key={cat} variant="outline" className="text-muted-foreground">
                {cat}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleContent;
