import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProducerBlogHero from "@/components/producer-blog/ProducerBlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogData";

const ProducerBlog = () => {
  const displayPosts = blogPosts.slice(0, 6);

  return (
    <PageLayout>
      <ProducerBlogHero />

      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.publishedAt}
              image={post.featuredImage}
              imageAlt={post.title}
              href={`/blog/${post.slug}`}
              variant="grid"
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default ProducerBlog;
