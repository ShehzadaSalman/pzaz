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
  const { t } = useTranslation('home');
  const { symbol, getPrice } = useCurrency();

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            pillText={t("products.pill")}
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                {t("products.title1")}{" "}
                <span className="gradient-text">{t("products.title2")}</span>
              </>
            }
            description={t("products.description")}
          />
        </motion.div>

        {/* Divider text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg font-semibold text-foreground">
            {t("products.divider")}{" "}
            <span className="text-muted-foreground font-normal">{t("products.divider_sub")}</span>
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.shortName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative rounded-2xl p-6 border ${
                product.highlight
                  ? "border-primary bg-white shadow-lg"
                  : "border-border bg-white"
              }`}
            >
              {product.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {t("products.most_popular")}
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <img src={product.customIcon} alt="" className="w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-foreground">
                  {symbol}{getPrice(product.eurPrice)}
                </span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <Button
                variant={product.highlight ? "default" : "outline"}
                className="w-full group"
                asChild
              >
                <Link to={product.href}>
                  {t("products.explore_btn", { name: product.shortName })}
                  <ArrowIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Explore all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/pricing">
              {t("products.explore_all")}
              <ArrowIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">{t("products.upgrade_note")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
