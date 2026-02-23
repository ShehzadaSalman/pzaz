import React from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";
import iconSurvey from "@/assets/icon-survey.svg";
import LanguageDropdown from "@/components/LanguageDropdown";

interface NavItem {
  label: string;
  to: string;
  isHash?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: "Blog", to: "/producer-blog" },
  { label: "Script", to: "/script" },
  { label: "Pricing", to: "/pricing" },
  { label: "Products", to: "/#products", isHash: true },
];

const blogNavItems: NavItem[] = [
  { label: "Blog", to: "/producer-blog" },
  { label: "Script", to: "/script" },
  { label: "Pricing", to: "/pricing" },
  { label: "Products", to: "/#products", isHash: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isScriptPage = location.pathname === "/script";
  const isBlogRelated = location.pathname.startsWith("/blog") || location.pathname.startsWith("/producer-blog");
  const isPricingPage = location.pathname === "/pricing";

  const navItems = isBlogRelated ? blogNavItems : defaultNavItems;

  const isActive = (item: NavItem) => {
    if (item.to === "/producer-blog") return isBlogRelated;
    if (item.to === "/script") return isScriptPage;
    if (item.to === "/pricing") return isPricingPage;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: '1px solid #D4BAF4' }}>
      <div className="max-w-6xl mx-auto px-2  py-4">
        <nav className="flex items-center justify-between">
          {/* Logo + Language */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center group" style={{ gap: 16 }}>
              <img src={pzazLogo} alt="Pzaz" className="h-8" />
              {isScriptPage && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "#5C28A3", backgroundColor: "#F7F2FD" }}>
                  Script
                </span>
              )}
            </a>
            <LanguageDropdown />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isHash ? (
                <a
                  key={item.label}
                  href={item.to}
                  className="transition-colors"
                  style={{ color: "#20124D", fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "24px" }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="transition-colors"
                  style={{
                    color: isActive(item) ? "#5C28A4" : "#20124D",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: isActive(item) ? 700 : 400,
                    fontSize: 14,
                    lineHeight: "24px",
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://projector.pzaz.io/sign-in">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </a>
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
              {navItems.map((item) =>
                item.isHash ? (
                  <a key={item.label} href={item.to} className="text-foreground font-medium py-2">{item.label}</a>
                ) : (
                  <Link key={item.label} to={item.to} className="text-foreground font-medium py-2">{item.label}</Link>
                )
              )}
              <hr className="border-border/50" />
              <a href="https://projector.pzaz.io/sign-in"><Button variant="ghost" className="justify-start">Log in</Button></a>
              <Button variant="default">Start for Free</Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);
};

export default Header;
