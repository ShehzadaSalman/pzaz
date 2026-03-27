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

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[46px] max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative rounded-[38px] p-8 ${index === 2 ? 'pb-[54px]' : 'pb-[17px]'} border-2 border-[#D4BAF4] bg-white transition-all duration-300 hover:shadow-xl flex flex-col`}
              style={index === 2 ? { background: "radial-gradient(181.71% 129% at 50% -66.48%, #D1CFFF 0%, #FFFFFF 95%)" } : undefined}
            >
              {product.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {t("products.most_popular")}
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <img src={product.customIcon} alt={product.name} className="w-[60px] h-[60px]" />
                <span className="font-lato font-normal text-[24px] text-[#4D029B]">{symbol}{getPrice(product.eurPrice, `product-${product.eurPrice}`)}/mo</span>
              </div>
              
              <h3 className="font-lato font-bold text-[32px] text-[#4D029B] mb-2">{product.name}</h3>
              <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-4">{product.tagline}</p>
              <p className="font-lato font-normal text-[16px] text-[#878787] leading-relaxed mb-6 flex-grow">{product.description}</p>
              
              <Link to={product.href}>
                <Button variant={product.highlight ? "product-card-gradient" : "product-card"} size="product-card" className="group/btn mt-auto w-full">
                  {t("products.explore_btn", { name: product.shortName })}
                  <ArrowIcon className={`ml-2 group-hover/btn:translate-x-1 ${product.highlight ? "text-white" : "text-[#4827AF] group-hover/btn:text-white"}`} />
                </Button>
              </Link>
              {(index === 0 || index === 1) && (
                <p className="font-lato font-normal text-[14px] text-[#878787] text-center mt-3">
                  {t("products.upgrade_note")}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-[60px]"
        >
          <Link to="/pricing">
            <Button variant="thin-cta" size="thin-cta" className="group/btn">
              {t("products.explore_all")}
              <ArrowIcon className="ml-2 text-white group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
