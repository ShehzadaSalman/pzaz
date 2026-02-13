import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogHeader from "@/components/blog/BlogHeader";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleAuthor from "@/components/blog/ArticleAuthor";
import ArticleRelated from "@/components/blog/ArticleRelated";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogPosts.find((post) => post.slug === slug);

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | Pzaz</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} | Pzaz`} />
        <meta property="og:description" content={article.excerpt} />
      </Helmet>
      <BlogHeader />
      <article>
        <ArticleHero article={article} />
        <ArticleContent article={article} />
        <ArticleAuthor author={article.author} />
        <ArticleRelated currentSlug={slug || ""} category={article.category} />
      </article>
      <BlogNewsletter />
      <Footer />
    </div>
  );
};

export default BlogArticle;
