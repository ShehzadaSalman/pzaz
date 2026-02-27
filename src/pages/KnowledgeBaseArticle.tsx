import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, kbCategories } from "@/data/knowledgeBaseData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KBSearchBar from "@/components/knowledge-base/KBSearchBar";
import SEO from "@/components/SEO";
import NotFound from "./NotFound";

const categoryLabel: Record<string, string> = {
  "getting-started": "Getting Started",
  "functions": "Functions",
  "tools-and-features": "Tools & Features",
};

const renderContent = (content: string): React.ReactNode[] => {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={index} className="mt-8 mb-3 text-xl font-semibold text-foreground">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={index} className="mt-10 mb-4 text-2xl font-bold text-foreground">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("> ")) {
      elements.push(
        <blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-muted-foreground">
          {trimmed.slice(2)}
        </blockquote>
      );
    } else if (trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
      const text = trimmed.replace(/^-\s/, "").replace(/^\d+\.\s/, "");
      elements.push(
        <li
          key={index}
          className="ml-5 mb-1.5 list-disc text-foreground/85 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
        />
      );
    } else {
      const formatted = trimmed
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">$1</a>');
      elements.push(
        <p
          key={index}
          className="mb-4 text-foreground/85 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    }
  });

  return elements;
};

const KnowledgeBaseArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const related = getRelatedArticles(article);
  const catLabel = categoryLabel[article.category];
  const catMeta = kbCategories.find((c) => c.id === article.category);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} – Pzaz Knowledge Base`}
        description={`Learn about ${article.title} in Pzaz.`}
        url={`https://pzaz.io/knowledge-base/${article.slug}`}
        canonical={`https://pzaz.io/knowledge-base/${article.slug}`}
      />
      <Header variant="sticky" />

      <div className="max-w-5xl mx-auto px-6 pt-10 pb-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/knowledge-base" className="hover:text-foreground transition-colors">Knowledge Base</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            to={`/knowledge-base`}
            className="hover:text-foreground transition-colors"
          >
            {catLabel}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium truncate max-w-[200px]">{article.title}</span>
        </nav>

        {/* Search */}
        <div className="mb-10">
          <KBSearchBar placeholder="Search the knowledge base…" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Article */}
          <article className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-card)]">
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {catMeta?.icon} {catLabel}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="prose-custom">
              {renderContent(article.content)}
            </div>
          </article>

          {/* Related Articles */}
          {related.length > 0 && (
            <aside>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sticky top-24">
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Related Articles
                </h3>
                <ul className="flex flex-col gap-1">
                  {related.map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        to={`/knowledge-base/${rel.slug}`}
                        className="flex items-start gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-2 group"
                      >
                        <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        {rel.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-border">
                  <Link
                    to="/knowledge-base"
                    className="text-xs text-primary hover:underline"
                  >
                    ← Back to Knowledge Base
                  </Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KnowledgeBaseArticle;
