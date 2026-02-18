import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleAuthorProps {
  authorName: string;
}

const ArticleAuthor = ({ authorName }: ArticleAuthorProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-muted flex-shrink-0 flex items-center justify-center text-xl font-semibold text-foreground">
                {authorName
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-primary font-medium mb-1">Written by</p>
                <h3 className="text-xl font-bold text-foreground mb-4">{authorName}</h3>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="w-9 h-9">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-9 h-9">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleAuthor;
