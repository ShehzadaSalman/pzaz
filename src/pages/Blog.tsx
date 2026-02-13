import React from "react";
import { Helmet } from "react-helmet-async";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | Pzaz</title>
        <meta name="description" content="Insights, interviews, and guides for filmmakers. Stay up to date with production tips, industry trends, and Pzaz product news." />
        <meta property="og:title" content="Blog | Pzaz" />
        <meta property="og:description" content="Insights, interviews, and guides for filmmakers. Stay up to date with production tips, industry trends, and Pzaz product news." />
      </Helmet>
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
