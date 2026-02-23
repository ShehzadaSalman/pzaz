import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleRelated from "@/components/blog/ArticleRelated";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { blogPosts, loadArticleContent } from "@/data/blogData";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogPosts.find((post) => post.slug === slug);
  const [loadedArticle, setLoadedArticle] = useState<typeof article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (!article) return;
    setLoading(true);
    loadArticleContent(article.slug).then((content) => {
      setLoadedArticle({ ...article, content });
      setLoading(false);
    });
  }, [slug, article]);

  if (!article) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/producer-blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const displayArticle = loadedArticle || article;

  return (
    <PageLayout>
      <SEO
        title={article.seo?.title || `${article.title} | Pzaz`}
        description={article.seo?.description || article.excerpt}
        image={article.seo?.ogImage || (article.featuredImage !== "/placeholder.svg" ? article.featuredImage : "https://pzaz.io/og-image.png")}
        url={`https://pzaz.io/producer-blog/${slug}`}
        type="article"
        keywords={article.seo?.keywords}
        canonical={article.seo?.canonical}
      />

      {/* JSON-LD Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: article.featuredImage !== "/placeholder.svg" ? article.featuredImage : "https://pzaz.io/og-image.png",
            author: { "@type": "Person", name: article.authorName },
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            url: `https://pzaz.io/producer-blog/${slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://pzaz.io/producer-blog/${slug}`,
            },
            publisher: {
              "@type": "Organization",
              name: "Pzaz",
              url: "https://pzaz.io",
              logo: {
                "@type": "ImageObject",
                url: "https://pzaz.io/og-image.png",
              },
            },
          }),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pzaz.io" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://pzaz.io/producer-blog" },
              { "@type": "ListItem", position: 3, name: article.title, item: `https://pzaz.io/producer-blog/${slug}` },
            ],
          }),
        }}
      />

      <article>
        <ArticleHero article={displayArticle!} />
        {loading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-pulse space-y-4 max-w-4xl w-full px-6">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-2/3" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-4/5" />
            </div>
          </div>
        ) : (
          <ArticleContent article={displayArticle!} />
        )}
        <ArticleRelated currentSlug={slug || ""} category={Array.isArray(article.category) ? article.category[0] : article.category} />
      </article>
    </PageLayout>
  );
};

export default BlogArticle;
