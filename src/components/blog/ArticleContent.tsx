import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogData";

interface ArticleContentProps {
  article: BlogPost;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  // Simple markdown-like parsing for demo
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inBlockquote = false;
    let inList = false;
    let listItems: string[] = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Headers
      if (trimmedLine.startsWith("## ")) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      }
      // Blockquotes
      else if (trimmedLine.startsWith("> ")) {
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-muted-foreground">
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
      }
      // Bold text (standalone lines starting with **)
      else if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        elements.push(
          <p key={index} className="font-semibold text-foreground my-4">
            {trimmedLine.replace(/\*\*/g, "")}
          </p>
        );
      }
      // List items
      else if (trimmedLine.startsWith("- ") || trimmedLine.match(/^\d+\./)) {
        inList = true;
        listItems.push(trimmedLine.replace(/^-\s/, "").replace(/^\d+\.\s/, ""));
      }
      // Regular paragraphs
      else if (trimmedLine.length > 0) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        // Handle inline bold
        const formattedLine = trimmedLine.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-foreground font-semibold">$1</strong>'
        );
        elements.push(
          <p
            key={index}
            className="text-lg text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        );
      }
    });

    // Flush remaining list items
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm font-medium text-foreground mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleContent;
