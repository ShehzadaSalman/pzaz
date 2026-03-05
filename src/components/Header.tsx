import React from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";
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
  {
    label: "Solutions",
    to: "/#products",
    isHash: true,
    isDropdown: true,
    children: [
      { label: "Pzaz Indie", to: "/indie" },
      { label: "Pzaz Planning Pro", to: "/planning" },
      { label: "Pzaz Studio Pro", to: "/studio-pro" },
      { label: "Pzaz Budget", to: "/budget" },
      { label: "Pzaz Storyboard", to: "/storyboard" },
    ],
  },
  {
    label: "Features",
    to: "/script",
    isDropdown: true,
    children: [
      { label: "Scriptwriting", to: "/script" },
      { label: "Scene Breakdown", to: "/scene-breakdown" },
      { label: "Collaboration Tools", to: "/collaboration-tools" },
      { label: "Task Management", to: "/task-management" },
    ],
  },
  { label: "Pricing", to: "/pricing" },
];

const blogNavItems: NavItem[] = [
  {
    label: "Solutions",
    to: "/#products",
    isHash: true,
    isDropdown: true,
    children: [
      { label: "Pzaz Indie", to: "/indie" },
      { label: "Pzaz Planning Pro", to: "/planning" },
      { label: "Pzaz Studio Pro", to: "/studio-pro" },
      { label: "Pzaz Budget", to: "/budget" },
      { label: "Pzaz Storyboard", to: "/storyboard" },
    ],
  },
  {
    label: "Features",
    to: "/script",
    isDropdown: true,
    children: [
      { label: "Scriptwriting", to: "/script" },
      { label: "Scene Breakdown", to: "/scene-breakdown" },
      { label: "Collaboration Tools", to: "/collaboration-tools" },
      { label: "Task Management", to: "/task-management" },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isScriptPage = location.pathname === "/script";
  const isIndiePage = location.pathname === "/indie";
  const isPlanningPage = location.pathname === "/planning";
  const isStudioProPage = location.pathname === "/studio-pro";
  const isStoryboardPage = location.pathname === "/storyboard";
  const isBlogRelated = location.pathname.startsWith("/blog") || location.pathname.startsWith("/producer-blog");
  const isPricingPage = location.pathname === "/pricing";
  const isAboutPage = location.pathname === "/about-us";

  const navItems = isBlogRelated ? blogNavItems : defaultNavItems;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isKnowledgeBase = location.pathname.startsWith("/knowledge-base");

  const isSolutionsActive = isIndiePage || isPlanningPage || isStudioProPage || isStoryboardPage || location.pathname === "/budget";
  const isSceneBreakdownPage = location.pathname === "/scene-breakdown";
  const isCollaborationToolsPage = location.pathname === "/collaboration-tools";
  const isTaskManagementPage = location.pathname === "/task-management";
  const isFeaturesActive = isScriptPage || isSceneBreakdownPage || isCollaborationToolsPage || isTaskManagementPage;

  const isActive = (item: NavItem) => {
    if (item.to === "/about-us") return isAboutPage;
    if (item.to === "/producer-blog") return isBlogRelated;
    if (item.to === "/script") return isScriptPage;
    if (item.to === "/pricing") return isPricingPage;
    if (item.to === "/knowledge-base") return isKnowledgeBase;
    if (item.label === "Solutions") return isSolutionsActive;
    if (item.label === "Features") return isFeaturesActive;
    return false;
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
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
              {isIndiePage && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "#5C28A3", backgroundColor: "#F7F2FD" }}>
                  Indie
                </span>
              )}
              {isPlanningPage && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "#5C28A3", backgroundColor: "#F7F2FD" }}>
                  Planning Pro
                </span>
              )}
              {isStudioProPage && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "#5C28A3", backgroundColor: "#F7F2FD" }}>
                  Studio Pro
                </span>
              )}
              {location.pathname === "/budget" && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "#5C28A3", backgroundColor: "#F7F2FD" }}>
                  Budget
                </span>
              )}
              {isStoryboardPage && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "#5C28A3", backgroundColor: "#F7F2FD" }}>
                  Storyboard
                </span>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" ref={navRef}>
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
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
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 py-2 min-w-[180px] rounded-lg border bg-background shadow-lg"
                        style={{ borderColor: "#D4BAF4" }}
                      >
                        {item.children?.map((child) =>
                          child.isHash ? (
                            <a
                              key={child.label}
                              href={child.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-sm transition-colors"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-sm transition-colors"
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
