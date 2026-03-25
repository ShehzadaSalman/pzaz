import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import iconStar from "@/assets/material-symbols_family-star.svg";
import languagesImg from "@/assets/languages.png";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import { useTranslation } from "react-i18next";

interface SharedCTAProps {
  pillText?: string;
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonPrefixIcon?: React.ReactNode;
  secondaryButtonText?: string;
  showLanguagesImage?: boolean;
  backgroundStyle?: React.CSSProperties;
}

const SharedCTA = ({
  pillText,
  title,
  description,
  primaryButtonText,
  primaryButtonPrefixIcon,
  secondaryButtonText,
  showLanguagesImage = true,
  backgroundStyle,
}: SharedCTAProps) => {
  const { t } = useTranslation();
  const indieCheckoutUrl = useIndieCheckoutUrl();

  const resolvedPill = pillText ?? t("cta.pill");
  const resolvedTitle = title ?? <>{t("cta.title")}</>;
  const resolvedDescription = description ?? t("cta.description");
  const resolvedPrimary = primaryButtonText ?? t("cta.primary");
  const resolvedSecondary = secondaryButtonText ?? t("cta.secondary");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[38px] overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0" style={backgroundStyle || undefined}>
              {!backgroundStyle && <div className="absolute inset-0 gradient-hero-bg animate-gradient" />}
            </div>

            {/* Glow effect */}
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-8 md:p-16 md:py-24 pb-12 text-center">
              <SectionHeader
                pillText={resolvedPill}
                pillClassName="bg-white text-primary mb-0"
                pillIcon={<img src={iconStar} alt="" className="w-4 h-4" />}
                title={resolvedTitle}
                titleClassName="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground"
                description={resolvedDescription}
                descriptionClassName="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10"
              />

              {showLanguagesImage && (
                <div className="mx-auto mb-10 w-full max-w-md">
                  <img src={languagesImg} alt="Languages" className="w-full h-auto" />
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="xl"
                    className="group bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px]"
                    prefixIcon={primaryButtonPrefixIcon}
                    postfixIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  >
                    {resolvedPrimary}
                  </Button>
                </a>
                <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/10 rounded-[10px]">
                    {resolvedSecondary}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SharedCTA;
