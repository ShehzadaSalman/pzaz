import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Film, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Pzaz Journal</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Insights for Modern
            <span className="gradient-text"> Filmmakers</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Industry analysis, filmmaker interviews, production tips, and the latest 
            in film technology. Your resource for smarter production.
          </p>

          {/* Topic pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/blog/category/industry-insights" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors">
              <Film className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Industry Insights</span>
            </Link>
            <Link to="/blog/category/production-tips" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Production Tips</span>
            </Link>
            <Link to="/blog/category/filmmaker-interviews" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors">
              <Newspaper className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Filmmaker Interviews</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
