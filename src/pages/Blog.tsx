import React, { useEffect } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <BlogHeader />
      <main>
        <BlogHero />
        <BlogFeatured />
        <BlogGrid />
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
