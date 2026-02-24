import React from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";
import iconSurvey from "@/assets/icon-survey.svg";
import LanguageDropdown from "@/components/LanguageDropdown";
import ContactModal from "@/components/ContactModal";

interface NavItem {
  label: string;
  to: string;
  isHash?: boolean;
  isDropdown?: boolean;
  children?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "About", to: "/about-us" },
  { label: "Blog", to: "/producer-blog" },
  {
    label: "Products",
    to: "/#products",
    isHash: true,
    isDropdown: true,
    children: [
      { label: "All Products", to: "/#products", isHash: true },
      { label: "Script", to: "/script" },
    ],
  },
  { label: "Pricing", to: "/pricing" },
];

const blogNavItems: NavItem[] = [
  { label: "About", to: "/about-us" },
  { label: "Blog", to: "/producer-blog" },
  {
    label: "Products",
    to: "/#products",
    isHash: true,
    isDropdown: true,
    children: [
      { label: "All Products", to: "/#products", isHash: true },
      { label: "Script", to: "/script" },
    ],
  },
  { label: "Pricing", to: "/pricing" },
];

interface HeaderProps {
  variant?: "fixed" | "sticky";
}

const Header = ({ variant = "fixed" }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isScriptPage = location.pathname === "/script";
  const isBlogRelated = location.pathname.startsWith("/blog") || location.pathname.startsWith("/producer-blog");
  const isPricingPage = location.pathname === "/pricing";
  const isAboutPage = location.pathname === "/about-us";

  const navItems = isBlogRelated ? blogNavItems : defaultNavItems;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.to === "/about-us") return isAboutPage;
    if (item.to === "/producer-blog") return isBlogRelated;
    if (item.to === "/script") return isScriptPage;
    if (item.to === "/pricing") return isPricingPage;
    if (item.isDropdown) return isScriptPage;
    return false;
  };

  return (
    <>
    <header className={`${variant === "fixed" ? "fixed top-0 left-0 right-0" : "sticky top-0"} z-50 glass`} style={{ borderBottom: '1px solid #D4BAF4' }}>
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
              item.isDropdown ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center gap-1 transition-colors"
                    style={{
                      color: isActive(item) ? "#5C28A4" : "#20124D",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: isActive(item) ? 700 : 400,
                      fontSize: 14,
                      lineHeight: "24px",
                    }}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 py-2 min-w-[160px] rounded-lg border bg-background shadow-lg"
                        style={{ borderColor: "#D4BAF4" }}
                      >
                        {item.children?.map((child) =>
                          child.isHash ? (
                            <a
                              key={child.label}
                              href={child.to}
                              onClick={() => setProductsOpen(false)}
                              className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                              style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.to}
                              onClick={() => setProductsOpen(false)}
                              className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                              style={{
                                color: isActive(child) ? "#5C28A4" : "#20124D",
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: isActive(child) ? 700 : 400,
                              }}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.isHash ? (
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
            <button
              onClick={() => setContactOpen(true)}
              className="transition-colors"
              style={{ color: "#20124D", fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "24px" }}
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://projector.pzaz.io/sign-in">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </a>
            <Link to="/pricing">
              <Button variant="default" size="sm">
                Start for Free
              </Button>
            </Link>
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
                item.isDropdown ? (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-foreground font-medium py-2">{item.label}</span>
                    {item.children?.map((child) =>
                      child.isHash ? (
                        <a key={child.label} href={child.to} className="text-foreground/70 font-medium py-1.5 pl-4">{child.label}</a>
                      ) : (
                        <Link key={child.label} to={child.to} className="text-foreground/70 font-medium py-1.5 pl-4">{child.label}</Link>
                      )
                    )}
                  </div>
                ) : item.isHash ? (
                  <a key={item.label} href={item.to} className="text-foreground font-medium py-2">{item.label}</a>
                ) : (
                  <Link key={item.label} to={item.to} className="text-foreground font-medium py-2">{item.label}</Link>
                )
              )}
              <button onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }} className="text-foreground font-medium py-2 text-left">Contact</button>
              <hr className="border-border/50" />
              <a href="https://projector.pzaz.io/sign-in"><Button variant="ghost" className="justify-start">Log in</Button></a>
              <Link to="/pricing"><Button variant="default">Start for Free</Button></Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>
    <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>);
};

export default Header;
