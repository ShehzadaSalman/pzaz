import React, { useEffect } from "react";
import Header from "@/components/Header";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <SEO
        title="Pzaz Blog – Filmmaker Interviews, Industry Insights & Production Tips"
        description="The Film Maker Entrepreneur blog by Pzaz. Interviews, industry insights, production tips, film business advice and the latest in film production technology."
        url="https://pzaz-sparkle-showcase.lovable.app/blog"
      />
      <Header />
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
