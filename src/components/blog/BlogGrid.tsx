import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogData";
import BlogCard from "@/components/blog/BlogCard";

const POSTS_PER_PAGE = 9;

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || 
      (Array.isArray(post.category) ? post.category.includes(activeCategory as any) : post.category === activeCategory);
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [activeCategory, searchQuery]);

  const hasMore = visibleCount < filteredPosts.length;
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, filteredPosts.length));
  }, [filteredPosts.length]);



  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={post.id + post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % POSTS_PER_PAGE) * 0.05 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center pt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="rounded-full"
            >
              Load More Articles
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
