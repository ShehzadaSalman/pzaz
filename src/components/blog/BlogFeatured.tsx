import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogData";
import BlogCard from "@/components/blog/BlogCard";

const BlogFeatured = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2);

  if (featuredPosts.length === 0) return null;

  return (
    <section className="py-12 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
        </div>

        <div className="flex flex-col gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} featured />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
