import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCurrency } from "@/hooks/use-currency";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import cardIconBudget from "@/assets/card-icon-budget-product.svg";
import cardIconStoryboard from "@/assets/card-icon-storyboard.svg";
import cardIconStudio from "@/assets/card-icon-studio.svg";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-[#F9F4FF] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <video
          className="w-full rounded-2xl shadow-lg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/products-section.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );

  /* COMMENTED OUT: Original products section content
  const { t } = useTranslation('home');
  const { symbol, getPrice } = useCurrency();
  ... (original content preserved in git history)
  */
};

export default ProductsSection;
