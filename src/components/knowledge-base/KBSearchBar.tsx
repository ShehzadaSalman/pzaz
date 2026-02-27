import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { kbArticles, KBArticle } from "@/data/knowledgeBaseData";

interface KBSearchBarProps {
  placeholder?: string;
  autoFocus?: boolean;
}

const KBSearchBar = ({ placeholder = "Search the knowledge base…", autoFocus = false }: KBSearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<KBArticle[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    const matched = kbArticles.filter((a) =>
      a.title.toLowerCase().includes(q) || a.category.replace(/-/g, " ").includes(q)
    );
    setResults(matched.slice(0, 8));
    setOpen(matched.length > 0);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (slug: string) => {
    setQuery("");
    setOpen(false);
    navigate(`/knowledge-base/${slug}`);
  };

  const categoryLabel: Record<string, string> = {
    "getting-started": "Getting Started",
    "functions": "Functions",
    "tools-and-features": "Tools & Features",
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-[var(--shadow-md)] focus-within:ring-2 focus-within:ring-ring transition-all">
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
        {query && (
          <button onClick={() => { setQuery(""); setOpen(false); }} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl border border-border bg-background shadow-[var(--shadow-lg)] overflow-hidden">
          {results.map((article) => (
            <button
              key={article.slug}
              onClick={() => handleSelect(article.slug)}
              className="flex items-center justify-between w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors gap-4 border-b border-border/50 last:border-b-0"
            >
              <span className="font-medium text-foreground">{article.title}</span>
              <span className="text-xs text-muted-foreground shrink-0">
                {categoryLabel[article.category]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default KBSearchBar;
