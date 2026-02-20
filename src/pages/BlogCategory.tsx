import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Film, Lightbulb, Newspaper, Search } from "lucide-react";
import Header from "@/components/Header";
import BlogCard from "@/components/blog/BlogCard";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts, majorCategories, categories } from "@/data/blogData";
import type { MajorCategoryId } from "@/data/blogData";

const categoryIcons: Record<string, React.ReactNode> = {
  "industry-insights": <Film className="w-5 h-5" />,
  "production-tips": <Lightbulb className="w-5 h-5" />,
  "filmmaker-interviews": <Newspaper className="w-5 h-5" />,
};

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveSubCategory("all");
    setSearchQuery("");
  }, [categorySlug]);

  const category = majorCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/producer-blog" replace />;
  }

  const majorPosts = blogPosts.filter((p) => p.majorCategory === category.id);

  const filteredPosts = majorPosts.filter((post) => {
    const matchesSubCategory =
      activeSubCategory === "all" ||
      (Array.isArray(post.category)
        ? post.category.includes(activeSubCategory as any)
        : post.category === activeSubCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubCategory && matchesSearch;
  });

  // Get sub-categories that actually have posts in this major category
  const relevantSubCategories = categories.filter(
    (cat) =>
      cat.id === "all" ||
      majorPosts.some((post) =>
        Array.isArray(post.category)
          ? post.category.includes(cat.id as any)
          : post.category === cat.id
      )
  );

  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <SEO
        title={`${category.id} – Pzaz Blog`}
        description={category.description}
        url={`https://pzaz-sparkle-showcase.lovable.app/producer-blog/category/${category.slug}`}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link
                to="/producer-blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>

              <div className="text-center">
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="flex flex-wrap gap-2">
                {relevantSubCategories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={activeSubCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveSubCategory(cat.id)}
                    className="rounded-full"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </p>

            <div className="flex flex-col gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <BlogCard post={post} featured />
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setActiveSubCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Clear filters
                </Button>
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
