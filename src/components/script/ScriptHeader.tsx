import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";
import LanguageDropdown from "@/components/LanguageDropdown";

const ScriptHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: '1px solid #F7F2FD' }}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo + Language */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={pzazLogo} alt="Pzaz" className="h-8" />
              <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: '#5C28A3', backgroundColor: '#F7F2FD' }}>
                Script
              </span>
            </Link>
            <LanguageDropdown />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              How It Works
            </a>
            <a href="#ai" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              AI Tools
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="default" size="sm" className="group">
              <FileText className="w-4 h-4 mr-1" />
              Import a Script
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
              <a href="#features" className="text-foreground font-medium py-2">Features</a>
              <a href="#how-it-works" className="text-foreground font-medium py-2">How It Works</a>
              <a href="#ai" className="text-foreground font-medium py-2">AI Tools</a>
              <a href="#faq" className="text-foreground font-medium py-2">FAQ</a>
              <hr className="border-border/50" />
              <Button variant="ghost" className="justify-start">Log in</Button>
              <Button variant="default">
                <FileText className="w-4 h-4 mr-2" />
                Import a Script
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ScriptHeader;
