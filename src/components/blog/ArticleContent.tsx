import React, { useRef, useState, useEffect } from "react";
import { Clock, Calendar, User, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogData";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/use-locale";

interface ArticleContentProps {
  article: BlogPost;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("blog");
  const { locale } = useLocale();

  const categories = Array.isArray(article.category) ? article.category : [article.category];

  const dateLocale = locale === "ur" ? "ur-PK" : "en-GB";
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(article.title);

  console.log("Rendering ArticleContent for:", article.title);
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
    const imagePattern = /^!\[(.*?)\]\((https?:\/\/.+?)\)$/;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      const imageMatch = trimmedLine.match(imagePattern);
      if (imageMatch) {
        const [, alt, src] = imageMatch;
        elements.push(
          <figure key={`image-${index}`} className="my-8">
            <img src={src} alt={alt || "Article image"} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="w-full rounded-xl border border-border/60" />
          </figure>
        );
        return;
      }

      if (trimmedLine.startsWith("### ")) {
        elements.push(<h3 key={index} className="mb-3 mt-8 text-xl font-semibold text-foreground">{trimmedLine.slice(4)}</h3>);
      } else if (trimmedLine.startsWith("## ")) {
        elements.push(<h2 key={index} className="mb-4 mt-10 text-2xl font-bold text-foreground">{trimmedLine.slice(3)}</h2>);
      } else if (trimmedLine.startsWith("> ")) {
        elements.push(<blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-muted-foreground">{trimmedLine.slice(2)}</blockquote>);
      } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        elements.push(<p key={index} className="mb-3 mt-6 font-semibold text-foreground">{trimmedLine.replace(/\*\*/g, "")}</p>);
      } else if (trimmedLine.startsWith("- ") || trimmedLine.match(/^\d+\.\s/)) {
        const text = trimmedLine.replace(/^-\s/, "").replace(/^\d+\.\s/, "");
        elements.push(
          <li
            key={index}
            className="ml-4 mb-1 list-disc text-foreground/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
        );
      } else {
        const formattedLine = trimmedLine
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        elements.push(
          <p key={index} className="mb-4 text-foreground/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        );
      }
    });

    return elements;
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mx-auto max-w-3xl">
        {/* Overlapping card */}
        <div className="-mt-16 relative z-10 rounded-2xl bg-card p-8 shadow-lg md:p-12">
          {/* Category badge */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="bg-primary/10 text-primary hover:bg-secondary/80">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold leading-tight text-card-foreground md:text-4xl">
            {article.title}
          </h1>

          {/* Meta row */}
          <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.authorName}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.publishedAt}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readingTime} {t("blog.min_read")}
            </span>
            <div className="relative ml-auto" ref={shareMenuRef}>
              <button onClick={() => setShowShareMenu((prev) => !prev)} className="flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80">
                <Share2 className="h-4 w-4" />
                {t("blog.share")}
              </button>
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

          {/* YouTube embed */}
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
          <div className="prose-custom">
            {renderContent(article.content)}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            {categories.map((cat) => (
              <Badge key={cat} variant="outline" className="text-foreground text-xs">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
