import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCurrency } from "@/hooks/use-currency";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import cardIconBudget from "@/assets/card-icon-budget-product.svg";
import cardIconStoryboard from "@/assets/card-icon-storyboard.svg";
import cardIconStudio from "@/assets/card-icon-studio.svg";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
  const { t } = useTranslation('home');
  const { symbol, getPrice } = useCurrency();
  const indieCheckoutUrl = useIndieCheckoutUrl();
  const videoRef = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [videoRef.current, video2Ref.current].filter(Boolean) as HTMLVideoElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  const products = [
    {
      customIcon: cardIconBudget,
      name: t("products.budget_name"),
      shortName: "Budget",
      eurPrice: 49,
      tagline: t("products.budget_tagline"),
      description: t("products.budget_desc"),
      highlight: false,
      href: "/budget",
    },
    {
      customIcon: cardIconStoryboard,
      name: t("products.storyboard_name"),
      shortName: "Storyboard",
      eurPrice: 39,
      tagline: t("products.storyboard_tagline"),
      description: t("products.storyboard_desc"),
      highlight: false,
      href: "/storyboard",
    },
    {
      customIcon: cardIconStudio,
      name: t("products.studio_name"),
      shortName: "Studio",
      eurPrice: 199,
      tagline: t("products.studio_tagline"),
      description: t("products.studio_desc"),
      highlight: true,
      href: "/studio-pro",
    },
  ];

  return (
    <section id="products" className="section-padding bg-[#F9F4FF] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-[60px]"
        >
          <div className="rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/videos/products-section.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <div className="mb-[87px]" />
        <hr className="border-0 border-t border-[#E3D6F5] max-w-6xl mx-auto" />

        {/* Part 2 Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mt-[55px] mb-[74px]"
        >
          <div className="rounded-2xl overflow-hidden">
            <video
              ref={video2Ref}
              className="w-full"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/videos/products-section-p2.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;
