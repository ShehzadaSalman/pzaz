import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const BlogHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-foreground">
              Pzaz<span className="gradient-text">.io</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/blog" className="text-foreground font-medium text-sm">
              Blog
            </Link>
            <Link to="/script" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Script
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Pricing
            </Link>
            <a href="/#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Products
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="default" size="sm">
              Start for Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border/50"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link to="/blog" className="text-foreground font-medium py-2">Blog</Link>
              <Link to="/script" className="text-foreground font-medium py-2">Script</Link>
              <Link to="/pricing" className="text-foreground font-medium py-2">Pricing</Link>
              <a href="/#products" className="text-foreground font-medium py-2">Products</a>
              <hr className="border-border/50" />
              <Button variant="ghost" className="justify-start">Log in</Button>
              <Button variant="default">Start for Free</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default BlogHeader;
