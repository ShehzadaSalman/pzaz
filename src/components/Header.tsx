import React, { useState, useRef, useEffect } from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useLocale } from "@/hooks/use-locale";
import { useTranslation } from "react-i18next";
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

const useNavItems = (t: (key: string) => string, prefix: string) => {
  const p = prefix; // locale prefix e.g. "" or "/fr"
  const sharedChildren = {
    products: [
      { label: t("nav.nav_pzaz_indie"), to: `${p}/film-production-software/indie-filmmakers` },
      { label: t("nav.nav_planning_pro"), to: `${p}/film-production-software/production-planning` },
      { label: t("nav.nav_studio_pro"), to: `${p}/film-production-software/studio-management` },
      { label: t("nav.nav_budget"), to: `${p}/film-production-software/film-budgeting` },
      { label: t("nav.nav_storyboard"), to: `${p}/film-production-software/storyboarding` },
    ],
    features: [
      { label: t("nav.nav_scriptwriting"), to: `${p}/film-production-tool/script-writing-software` },
      { label: t("nav.nav_scene_breakdown"), to: `${p}/film-production-tool/scene-breakdown-software` },
      { label: t("nav.nav_collaboration"), to: `${p}/film-production-tool/collaboration-software` },
      { label: t("nav.nav_task_management"), to: `${p}/film-production-tool/task-management-software` },
      { label: t("nav.nav_file_sharing"), to: `${p}/film-production-tool/data-sharing-software` },
      { label: t("nav.nav_project_management"), to: `${p}/film-production-tool/project-management-software` },
    ],
    solutions: [
      { label: t("nav.nav_empowering"), to: `${p}/film-production-solution/filmmaking-software` },
      { label: t("nav.nav_indie_filmmakers"), to: `${p}/film-production-solution/software-for-indie-filmmakers` },
      { label: t("nav.nav_film_schools"), to: `${p}/film-production-solution/film-school-production-software` },
      { label: t("nav.nav_directors"), to: `${p}/film-production-solution/software-for-directors-producers` },
      { label: t("nav.nav_documentary"), to: `${p}/film-production-solution/documentary-filmmaking-software` },
      { label: t("nav.nav_cinematographers"), to: `${p}/film-production-solution/software-for-cinematographers` },
      { label: t("nav.nav_agencies"), to: `${p}/film-production-solution/creative-agency-production-software` },
      { label: t("nav.nav_production_teams"), to: `${p}/film-production-solution/film-production-team-software` },
      { label: t("nav.nav_screenwriters"), to: `${p}/film-production-solution/screenwriting-software` },
      { label: t("nav.nav_tv_series"), to: `${p}/film-production-solution/tv-production-software` },
      { label: t("nav.nav_investors"), to: `${p}/film-production-solution/film-budgeting-software` },
      { label: t("nav.nav_production_managers"), to: `${p}/film-production-solution/software-for-production-managers` },
    ],
  };

  const defaultNavItems: NavItem[] = [
    { label: t("nav.products"), to: `${p}/#products`, isHash: true, isDropdown: true, children: sharedChildren.products },
    { label: t("nav.features"), to: `${p}/film-production-tool/script-writing-software`, isDropdown: true, children: sharedChildren.features },
    { label: t("nav.solutions"), to: `${p}/film-production-solution/film-school-production-software`, isDropdown: true, children: sharedChildren.solutions },
    { label: t("nav.pricing"), to: `${p}/pricing` },
  ];

  const blogNavItems: NavItem[] = [
    { label: t("nav.products"), to: `${p}/#products`, isHash: true, isDropdown: true, children: sharedChildren.products },
    { label: t("nav.features"), to: `${p}/film-production-tool/script-writing-software`, isDropdown: true, children: sharedChildren.features },
    { label: t("nav.solutions"), to: `${p}/film-production-solution/film-school-production-software`, isDropdown: true, children: sharedChildren.solutions },
    { label: t("nav.pricing"), to: `${p}/pricing` },
  ];

  return { defaultNavItems, blogNavItems };
};

interface HeaderProps {
  variant?: "fixed" | "sticky";
}


const Header = ({ variant = "fixed" }: HeaderProps) => {
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const indieCheckoutUrl = useIndieCheckoutUrl();
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const { prefix } = useLocale();

  // Strip locale prefix for page detection
  const bare = location.pathname.replace(/^\/(ur|fr|es|de)(\/|$)/, "/");
  const isScriptPage = bare === "/film-production-tool/script-writing-software";
  const isIndiePage = bare === "/film-production-software/indie-filmmakers";
  const isPlanningPage = bare === "/film-production-software/production-planning";
  const isStudioProPage = bare === "/film-production-software/studio-management";
  const isStoryboardPage = bare === "/film-production-software/storyboarding";
  const isBlogRelated = bare.startsWith("/blog") || bare.startsWith("/producer-blog");
  const isPricingPage = bare === "/pricing";
  const isAboutPage = bare === "/about-us";

  const { defaultNavItems, blogNavItems } = useNavItems(t, prefix);
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

  const isKnowledgeBase = bare.startsWith("/knowledge-base");

  const isSolutionsActive = isIndiePage || isPlanningPage || isStudioProPage || isStoryboardPage || bare === "/film-production-software/film-budgeting";
  const isSceneBreakdownPage = bare === "/film-production-tool/scene-breakdown-software";
  const isCollaborationToolsPage = bare === "/film-production-tool/collaboration-software";
  const isTaskManagementPage = bare === "/film-production-tool/task-management-software";
  const isFileSharingPage = bare === "/film-production-tool/data-sharing-software";
  const isProjectManagementPage = bare === "/film-production-tool/project-management-software";
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
          <div className="flex items-center gap-3">
            <a href={`${prefix}/`} className="flex items-center group" style={{ gap: 16 }}>
              <img src={pzazLogo} alt="Pzaz" className="h-8" width="109" height="32" fetchPriority="high" />
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
              {bare === "/film-budgeting-software" && (
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
            <LanguageDropdown />
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
                        className="absolute top-full left-0 mt-2 py-2 min-w-[180px] rounded-lg border bg-background shadow-lg whitespace-nowrap"
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
              {t("nav.contact")}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://projector.pzaz.io/sign-in">
              <Button variant="ghost" size="sm">
                {t("nav.login")}
              </Button>
            </a>
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                {t("nav.start_free")}
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
                  {t("nav.contact")}
                </button>
                <div className="flex flex-col gap-3 pt-4 pb-2">
                  <div className="pb-1">
                    <LanguageDropdown />
                  </div>
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
                      {t("nav.login")}
                    </button>
                  </a>
                  <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="w-full">
                    <Button variant="default" className="w-full">{t("nav.start_free")}</Button>
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
