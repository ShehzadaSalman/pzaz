import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogData";

const BlogFeatured = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2);

  if (featuredPosts.length === 0) return null;

  const mainPost = featuredPosts[0];
  const secondaryPost = featuredPosts[1];

  return (
    <section className="py-12 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <Link to={`/producer-blog/${mainPost.slug}`}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={mainPost.featuredImage}
                  alt={mainPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{mainPost.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{mainPost.readingTime} min read</span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {mainPost.title}
                </h3>

                <p className="text-muted-foreground line-clamp-2">
                  {mainPost.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-foreground">
                    {mainPost.authorName
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{mainPost.authorName}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(mainPost.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Secondary Featured Post */}
          {secondaryPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Link to={`/producer-blog/${secondaryPost.slug}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-accent/20 to-primary/20">
                  <img
                    src={secondaryPost.featuredImage}
                    alt={secondaryPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{secondaryPost.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{secondaryPost.readingTime} min read</span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {secondaryPost.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-2">
                    {secondaryPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-foreground">
                      {secondaryPost.authorName
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{secondaryPost.authorName}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(secondaryPost.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
