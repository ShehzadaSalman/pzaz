import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Film, Lightbulb, Newspaper } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts, majorCategories } from "@/data/blogData";
import type { MajorCategoryId } from "@/data/blogData";

const categoryIcons: Record<string, React.ReactNode> = {
  "industry-insights": <Film className="w-5 h-5" />,
  "production-tips": <Lightbulb className="w-5 h-5" />,
  "filmmaker-interviews": <Newspaper className="w-5 h-5" />,
};

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [categorySlug]);

  const category = majorCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const posts = blogPosts.filter((p) => p.majorCategory === category.id);

  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <SEO
        title={`${category.id} – Pzaz Blog`}
        description={category.description}
        url={`https://pzaz-sparkle-showcase.lovable.app/blog/category/${category.slug}`}
      />
      <BlogHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 mx-auto">
                <span className="text-primary">{categoryIcons[category.slug]}</span>
                <span className="text-sm font-medium text-primary">{category.id}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {category.id}
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground mb-8">
              {posts.length} article{posts.length !== 1 ? "s" : ""}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default BlogCategory;
