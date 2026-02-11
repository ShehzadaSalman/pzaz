import React from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pzazLogo from "@/assets/pzaz-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group" style={{ gap: 16 }}>
            <img src={pzazLogo} alt="Pzaz" className="h-8" />
            <Pill text="Script" style={{ backgroundColor: "#F7F2FD", color: "#20124D" }} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="transition-colors font-medium text-sm" style={{ color: "#20124D" }}>
              Features
            </a>
            <a href="#products" className="transition-colors font-medium text-sm" style={{ color: "#20124D" }}>
              Products
            </a>
            <a href="#workflow" className="transition-colors font-medium text-sm" style={{ color: "#20124D" }}>
              Workflow
            </a>
            <a href="#integrations" className="transition-colors font-medium text-sm" style={{ color: "#20124D" }}>
              Integrations
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border/50">

            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <a href="#features" className="text-foreground font-medium py-2">Features</a>
              <a href="#products" className="text-foreground font-medium py-2">Products</a>
              <a href="#workflow" className="text-foreground font-medium py-2">Workflow</a>
              <a href="#integrations" className="text-foreground font-medium py-2">Integrations</a>
              <hr className="border-border/50" />
              <Button variant="ghost" className="justify-start">Log in</Button>
              <Button variant="default">Start for Free</Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Header;