import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleRelated from "@/components/blog/ArticleRelated";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { blogPosts as blogPostsFull } from "@/data/blogDataFull";
import { blogPostsUr } from "@/data/blogDataUr";
import { blogPostsFr } from "@/data/blogDataFr";
import { useLocale } from "@/hooks/use-locale";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, prefix } = useLocale();
  const isUr = locale === "ur";

  const isFr = locale === "fr";
  const posts = isUr ? blogPostsUr : isFr ? blogPostsFr : blogPosts;
  const article = posts.find((post) => post.slug === slug);

  // Full content lookup – Urdu/French articles have content inline; English uses blogDataFull
  const fullArticle = (isUr || isFr) ? null : blogPostsFull.find((post) => post.slug === slug);
  const displayArticle = article
    ? { ...article, content: fullArticle?.content || article.content }
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!article) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {isUr ? "مضمون نہیں ملا" : "Article Not Found"}
            </h1>
            <p className="text-muted-foreground mb-6">
              {isUr ? "آپ جو مضمون تلاش کر رہے ہیں وہ موجود نہیں۔" : "The article you're looking for doesn't exist."}
            </p>
            <Link to={`${prefix}/producer-blog`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {isUr ? "بلاگ پر واپس جائیں" : "Back to Blog"}
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const blogBase = `https://pzaz.io${prefix}/producer-blog`;

  return (
    <PageLayout headerVariant="sticky">
      <SEO
        title={article.seo?.title || `${article.title} | Pzaz`}
        description={article.seo?.description || article.excerpt}
        image={article.seo?.ogImage || (article.featuredImage !== "/placeholder.svg" ? article.featuredImage : "https://pzaz.io/og-image.png")}
        url={`${blogBase}/${slug}`}
        type="article"
        keywords={article.seo?.keywords}
        canonical={article.seo?.canonical}
      />

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
            url: `${blogBase}/${slug}`,
            mainEntityOfPage: { "@type": "WebPage", "@id": `${blogBase}/${slug}` },
            publisher: {
              "@type": "Organization",
              name: "Pzaz",
              url: "https://pzaz.io",
              logo: { "@type": "ImageObject", url: "https://pzaz.io/og-image.png" },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: isUr ? "ہوم" : "Home", item: `https://pzaz.io${prefix}` },
              { "@type": "ListItem", position: 2, name: isUr ? "بلاگ" : "Blog", item: blogBase },
              { "@type": "ListItem", position: 3, name: article.title, item: `${blogBase}/${slug}` },
            ],
          }),
        }}
      />

      <article>
        <ArticleHero article={displayArticle!} />
        <ArticleContent article={displayArticle!} />
        <ArticleRelated currentSlug={slug || ""} category={Array.isArray(article.category) ? article.category[0] : article.category} />
      </article>
    </PageLayout>
  );
};

export default BlogArticle;
