import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { BlogCategoryId, blogPosts } from "@/data/blogData";

interface ArticleRelatedProps {
  currentSlug: string;
  category: BlogCategoryId;
}

const ArticleRelated = ({ currentSlug, category }: ArticleRelatedProps) => {
  const categoryMatchedPosts = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === category)
    .slice(0, 3);

  const fallbackPosts = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  const relatedPosts = categoryMatchedPosts.length > 0 ? categoryMatchedPosts : fallbackPosts;

  if (relatedPosts.length === 0) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
              <Link to="/producer-blog" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-muted-foreground">More articles coming soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
            <Link to="/producer-blog" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-muted to-muted/50">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">
                        {post.category}
                      </span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleRelated;
