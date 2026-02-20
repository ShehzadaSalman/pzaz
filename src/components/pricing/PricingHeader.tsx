import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";

const PricingHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={pzazLogo} alt="Pzaz" className="h-8" />
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              Pricing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#stages" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Plans
            </a>
            <a href="#flow" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              How It Works
            </a>
            <a href="#ai" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              AI Add-ons
            </a>
            <Link to="/script" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Script
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://projector.pzaz.io/sign-in">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </a>
            <Button variant="default" size="sm">
              Start Free
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
              <a href="#stages" className="text-foreground font-medium py-2">Plans</a>
              <a href="#flow" className="text-foreground font-medium py-2">How It Works</a>
              <a href="#ai" className="text-foreground font-medium py-2">AI Add-ons</a>
              <Link to="/script" className="text-foreground font-medium py-2">Script</Link>
              <hr className="border-border/50" />
              <a href="https://projector.pzaz.io/sign-in"><Button variant="ghost" className="justify-start">Log in</Button></a>
              <Button variant="default">Start Free</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PricingHeader;
