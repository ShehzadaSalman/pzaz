import React, { useState, useRef, useEffect } from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";
import LanguageDropdown from "@/components/LanguageDropdown";
import ContactModal from "@/components/ContactModal";
import { useIndieCheckoutUrl } from "@/lib/checkout";

interface MobileAccordionProps {
  item: NavItem;
  isActive: boolean;
  onLinkClick: () => void;
}

const MobileAccordion = ({ item, isActive, onLinkClick }: MobileAccordionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <span
          className="font-medium"
          style={{ color: isActive || open ? "#5C28A4" : "#20124D" }}
        >
          {item.label}
        </span>
        <ChevronDown
          className="w-4 h-4 transition-transform duration-200"
          style={{ color: "#5C28A4", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2 flex flex-col gap-0.5">
              {item.children?.map((child) =>
                child.isHash ? (
                  <a
                    key={child.label}
                    href={child.to}
                    onClick={onLinkClick}
                    className="pl-4 py-2.5 text-sm rounded-lg transition-colors"
                    style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
                  >
                    {child.label}
                  </a>
                ) : (
                  <Link
                    key={child.label}
                    to={child.to}
                    onClick={onLinkClick}
                    className="pl-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-[#F7F2FD]"
                    style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
                  >
                    {child.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavItem {
  label: string;
  to: string;
  isHash?: boolean;
  isDropdown?: boolean;
  children?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  {
    label: "Products",
    to: "/#products",
    isHash: true,
    isDropdown: true,
    children: [
      { label: "Pzaz Indie", to: "/indie-filmmaking-software" },
      { label: "Pzaz Planning Pro", to: "/film-preproduction-planning" },
      { label: "Pzaz Studio Pro", to: "/studio-pro-software" },
      { label: "Pzaz Budget", to: "/film-budgeting-software" },
      { label: "Pzaz Storyboard", to: "/storyboard-software" },
    ],
  },
  {
    label: "Features",
    to: "/script",
    isDropdown: true,
    children: [
      { label: "Scriptwriting", to: "/script" },
      { label: "Scene Breakdown", to: "/scene-breakdown-software" },
      { label: "Collaboration Tools", to: "/film-collaboration-software" },
      { label: "Task Management", to: "/production-task-management" },
      { label: "File Sharing & Storage", to: "/film-file-sharing-storage" },
      { label: "Project Management", to: "/film-project-management" },
    ],
  },
  {
    label: "Solutions",
    to: "/film-schools-software",
    isDropdown: true,
    children: [
      { label: "For Film Schools and Students", to: "/film-schools-software" },
      { label: "For Directors and Producers", to: "/software-for-directors-producers" },
      { label: "For Documentary Filmmakers", to: "/documentary-filmmaking-software" },
      { label: "For Cinematographers & Storyboard Artists", to: "/software-for-cinematographers" },
      { label: "For Creative Agencies", to: "/creative-agency-production-software" },
      { label: "For Production Teams", to: "/film-production-team-software" },
      { label: "For Screenwriters", to: "/screenwriting-software" },
      { label: "For TV & Series Creators", to: "/tv-series-production-software" },
      { label: "For Investors & Funding Partners", to: "/film-investment-software" },
    ],
  },
  { label: "Pricing", to: "/pricing" },
];

const blogNavItems: NavItem[] = [
  {
    label: "Products",
    to: "/#products",
    isHash: true,
    isDropdown: true,
    children: [
      { label: "Pzaz Indie", to: "/indie-filmmaking-software" },
      { label: "Pzaz Planning Pro", to: "/film-preproduction-planning" },
      { label: "Pzaz Studio Pro", to: "/studio-pro-software" },
      { label: "Pzaz Budget", to: "/film-budgeting-software" },
      { label: "Pzaz Storyboard", to: "/storyboard-software" },
    ],
  },
  {
    label: "Features",
    to: "/script",
    isDropdown: true,
    children: [
      { label: "Scriptwriting", to: "/script" },
      { label: "Scene Breakdown", to: "/scene-breakdown-software" },
      { label: "Collaboration Tools", to: "/film-collaboration-software" },
      { label: "Task Management", to: "/production-task-management" },
      { label: "File Sharing & Storage", to: "/film-file-sharing-storage" },
      { label: "Project Management", to: "/film-project-management" },
    ],
  },
  {
    label: "Solutions",
    to: "/film-schools-software",
    isDropdown: true,
    children: [
      { label: "For Film Schools and Students", to: "/film-schools-software" },
      { label: "For Directors and Producers", to: "/software-for-directors-producers" },
      { label: "For Documentary Filmmakers", to: "/documentary-filmmaking-software" },
      { label: "For Cinematographers & Storyboard Artists", to: "/software-for-cinematographers" },
      { label: "For Creative Agencies", to: "/creative-agency-production-software" },
      { label: "For Production Teams", to: "/film-production-team-software" },
      { label: "For Screenwriters", to: "/screenwriting-software" },
      { label: "For TV & Series Creators", to: "/tv-series-production-software" },
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
  const indieCheckoutUrl = useIndieCheckoutUrl();
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isScriptPage = location.pathname === "/script";
  const isIndiePage = location.pathname === "/indie-filmmaking-software";
  const isPlanningPage = location.pathname === "/film-preproduction-planning";
  const isStudioProPage = location.pathname === "/studio-pro-software";
  const isStoryboardPage = location.pathname === "/storyboard-software";
  const isBlogRelated = location.pathname.startsWith("/blog") || location.pathname.startsWith("/producer-blog");
  const isPricingPage = location.pathname === "/pricing";
  const isAboutPage = location.pathname === "/about-us";

  const navItems = isBlogRelated ? blogNavItems : defaultNavItems;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isKnowledgeBase = location.pathname.startsWith("/knowledge-base");

  const isSolutionsActive = isIndiePage || isPlanningPage || isStudioProPage || isStoryboardPage || location.pathname === "/film-budgeting-software";
  const isSceneBreakdownPage = location.pathname === "/scene-breakdown-software";
  const isCollaborationToolsPage = location.pathname === "/film-collaboration-software";
  const isTaskManagementPage = location.pathname === "/production-task-management";
  const isFileSharingPage = location.pathname === "/film-file-sharing-storage";
  const isProjectManagementPage = location.pathname === "/film-project-management";
  const isFeaturesActive = isScriptPage || isSceneBreakdownPage || isCollaborationToolsPage || isTaskManagementPage || isFileSharingPage || isProjectManagementPage;

  const isActive = (item: NavItem) => {
    if (item.to === "/about-us") return isAboutPage;
    if (item.to === "/producer-blog") return isBlogRelated;
    if (item.to === "/script") return isScriptPage;
    if (item.to === "/pricing") return isPricingPage;
    if (item.to === "/knowledge-base") return isKnowledgeBase;
    if (item.label === "Products") return isSolutionsActive;
    if (item.label === "Features") return isFeaturesActive;
    return false;
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
    <header ref={headerRef} className={`${variant === "fixed" ? "fixed top-0 left-0 right-0" : "sticky top-0"} z-50 glass`} style={{ borderBottom: '1px solid #D4BAF4' }}>
      <div className="max-w-6xl mx-auto px-2 py-4">
        <nav className="flex items-center justify-between relative">
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
              {location.pathname === "/film-budgeting-software" && (
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
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" ref={navRef}>
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
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Start for Free
              </Button>
            </a>
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
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border/50 overflow-hidden"
          >
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(100dvh - 72px)" }}
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
                {navItems.map((item) =>
                  item.isDropdown ? (
                    <MobileAccordion
                      key={item.label}
                      item={item}
                      isActive={isActive(item)}
                      onLinkClick={() => setMobileMenuOpen(false)}
                    />
                  ) : item.isHash ? (
                    <a
                      key={item.label}
                      href={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground font-medium py-3 border-b border-border/30"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground font-medium py-3 border-b border-border/30"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <button
                  onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
                  className="text-foreground font-medium py-3 text-left border-b border-border/30"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Contact
                </button>
                <div className="flex flex-col gap-3 pt-4 pb-2">
                  <a href="https://projector.pzaz.io/sign-in" className="w-full">
                    <button
                      className="w-full py-3 rounded-[10px] font-black text-sm border-2 transition-colors"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 900,
                        color: "#5C28A3",
                        borderColor: "#5C28A3",
                        background: "transparent",
                      }}
                    >
                      Log in
                    </button>
                  </a>
                  <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="w-full">
                    <Button variant="default" className="w-full">Start for Free</Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
    <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>);
};

export default Header;
