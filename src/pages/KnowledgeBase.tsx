import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { KBArticle, kbCategories, getArticlesByCategory } from "@/data/knowledgeBaseData";
import { kbCategoriesUr, kbArticlesUr } from "@/data/knowledgeBaseDataUr";
import { kbCategoriesFr, kbArticlesFr } from "@/data/knowledgeBaseDataFr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KBSearchBar from "@/components/knowledge-base/KBSearchBar";
import SEO from "@/components/SEO";
import { useLocale } from "@/hooks/use-locale";

const categoryOrder: Array<KBArticle["category"]> = [
  "getting-started",
  "functions",
  "tools-and-features",
];

const KnowledgeBase = () => {
  const { locale, prefix } = useLocale();
  const isUr = locale === "ur";
  const isFr = locale === "fr";
  const cats = isUr ? kbCategoriesUr : isFr ? kbCategoriesFr : kbCategories;
  const getArticles = (catId: KBArticle["category"]) =>
    isUr
      ? kbArticlesUr.filter((a) => a.category === catId)
      : isFr
        ? kbArticlesFr.filter((a) => a.category === catId)
        : getArticlesByCategory(catId);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={isUr ? "نالج بیس – Pzaz" : "Knowledge Base – Pzaz"}
        description={isUr ? "Pzaz فلم پروڈکشن سافٹ ویئر کی گائیڈز اور ٹیوٹوریلز براؤز کریں۔" : "Browse guides, tutorials, and references for Pzaz film production software."}
        url={`https://pzaz.io${prefix}/knowledge-base`}
        canonical={`https://pzaz.io${prefix}/knowledge-base`}
      />
      <Header variant="sticky" />

      {/* Hero */}
      <section className="pt-28 pb-16 text-center px-6" style={{ background: "var(--gradient-hero)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {isUr ? "نالج بیس" : "Knowledge Base"}
        </h1>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          {isUr
            ? "Pzaz سے زیادہ سے زیادہ فائدہ اٹھانے کے لیے گائیڈز، ٹیوٹوریلز اور جوابات تلاش کریں۔"
            : "Find guides, tutorials, and answers to get the most out of Pzaz."}
        </p>
        <KBSearchBar />
      </section>

      {/* Category Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryOrder.map((catId) => {
            const cat = cats.find((c) => c.id === catId)!;
            const articles = getArticles(catId);
            return (
              <div
                key={catId}
                className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] flex flex-col gap-6"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-lg font-bold text-card-foreground">{cat.title}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
                  </div>
                </div>

                {/* Article Links */}
                <ul className="flex flex-col gap-1">
                  {articles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        to={`${prefix}/knowledge-base/${article.slug}`}
                        className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1.5 group"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgeBase;
