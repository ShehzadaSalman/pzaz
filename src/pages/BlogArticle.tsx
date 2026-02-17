import React from "react";
import { useParams } from "react-router-dom";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleAuthor from "@/components/blog/ArticleAuthor";
import ArticleRelated from "@/components/blog/ArticleRelated";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import PageLayout from "@/components/layout/PageLayout";
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
    <PageLayout>
      <article>
        <ArticleHero article={article} />
        <ArticleContent article={article} />
        {/* <ArticleAuthor author={article.author} /> */}
        <ArticleRelated currentSlug={slug || ""} category={article.category} />
      </article>
      {/* <BlogNewsletter /> */}
    </PageLayout>
  );
};

export default BlogArticle;
