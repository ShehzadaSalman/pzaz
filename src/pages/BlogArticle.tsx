import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleRelated from "@/components/blog/ArticleRelated";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const displayArticle = loadedArticle || article;

  return (
    <PageLayout>
      <SEO
        title={`${article.title} | Pzaz`}
        description={article.excerpt}
        image={article.featuredImage}
        url={`https://pzaz-sparkle-showcase.lovable.app/producer-blog/${slug}`}
        type="article"
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
