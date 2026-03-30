import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import pzazLogo from "@/assets/pzaz-logo.png";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/use-locale";

const BlogHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const indieCheckoutUrl = useIndieCheckoutUrl();
  const { t } = useTranslation("blog");
  const { prefix } = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to={`${prefix}/`} className="flex items-center gap-2 group">
            <img src={pzazLogo} alt="Pzaz" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to={`${prefix}/about-us`} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              {t("blog.nav_about")}
            </Link>
            <Link to={`${prefix}/producer-blog`} className="text-foreground font-medium text-sm">
              {t("blog.nav_blog")}
            </Link>
            <Link to={`${prefix}/script`} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              {t("blog.nav_script")}
            </Link>
            <Link to={`${prefix}/pricing`} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              {t("blog.nav_pricing")}
            </Link>
            <a href={`${prefix}/#products`} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              {t("blog.nav_products")}
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://projector.pzaz.io/sign-in">
              <Button variant="ghost" size="sm">
                {t("blog.nav_login")}
              </Button>
            </a>
            <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                {t("blog.nav_start_free")}
              </Button>
            </a>
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
              <Link to={`${prefix}/about-us`} className="text-foreground font-medium py-2">{t("blog.nav_about")}</Link>
              <Link to={`${prefix}/producer-blog`} className="text-foreground font-medium py-2">{t("blog.nav_blog")}</Link>
              <Link to={`${prefix}/script`} className="text-foreground font-medium py-2">{t("blog.nav_script")}</Link>
              <Link to={`${prefix}/pricing`} className="text-foreground font-medium py-2">{t("blog.nav_pricing")}</Link>
              <a href={`${prefix}/#products`} className="text-foreground font-medium py-2">{t("blog.nav_products")}</a>
              <hr className="border-border/50" />
              <a href="https://projector.pzaz.io/sign-in"><Button variant="ghost" className="justify-start">{t("blog.nav_login")}</Button></a>
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer"><Button variant="default">{t("blog.nav_start_free")}</Button></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default BlogHeader;
