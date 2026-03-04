import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import cardIconBudget from "@/assets/card-icon-budget-product.svg";
import cardIconStoryboard from "@/assets/card-icon-storyboard.svg";
import cardIconStudio from "@/assets/card-icon-studio.svg";
import featureIcon1 from "@/assets/feature-icon-1.svg";
import featureIcon2 from "@/assets/feature-icon-2.png";
import featureIcon3 from "@/assets/feature-icon-3.svg";
import featureIcon4 from "@/assets/feature-icon-4.svg";
import featureIcon5 from "@/assets/feature-icon-5.svg";
import featureIcon6 from "@/assets/feature-icon-6.svg";
import featureIcon7 from "@/assets/feature-icon-7.svg";
import featureIcon8 from "@/assets/feature-icon-8.svg";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";

const featureCards = [
  { icon: featureIcon7, label: "Feature films" },
  { icon: featureIcon5, label: "Episodic television" },
  { icon: featureIcon4, label: "Animation and VFX productions" },
  { icon: featureIcon3, label: "Commercial and branded campaigns" },
  { icon: featureIcon8, label: "Digital-first and vertical series" },
  { icon: featureIcon1, label: "And more..." },
];

const products = [
  {
    customIcon: cardIconBudget,
    name: "Pzaz Budget",
    price: "€49/mo",
    tagline: "Professional budgeting & cost control",
    description: "For producers and line producers who need clarity and confidence. Turn your script into a structured production budget that stays in sync as plans change.",
    highlight: false,
  },
  {
    customIcon: cardIconStoryboard,
    name: "Pzaz Storyboard",
    price: "€39/mo",
    tagline: "Visualize the film before you shoot",
    description: "For directors and visual storytellers. Turn scenes into storyboards in seconds and refine shots collaboratively before production starts.",
    highlight: false,
  },
  {
    customIcon: cardIconStudio,
    name: "Pzaz Studio",
    price: "€129/mo",
    tagline: "All-in-one production system",
    description: "For full productions and teams that need everything connected in real time. Script, schedule, budget, storyboard, and collaboration in one live workspace.",
    highlight: true,
  },
];

const ProductsSection = () => {
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
          className="text-center mb-9"
        >
          <SectionHeader
            pillText="Products"
            pillClassName="bg-white text-primary mb-0"
            title={
              <>
                Built for teams who{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#409DFF] to-[#3207BC]">
                  deliver under pressure.
                </span>
              </>
            }
            titleClassName="text-balance"
            description="Pzaz is built for production teams who know that great ideas are not enough."
            descriptionClassName="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          />
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[37px] max-w-6xl mx-auto mb-[60px]">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex items-center gap-[23px] bg-white border border-[#D4BAF4] rounded-[30px] px-[31px] py-[28px]"
            >
              <img src={card.icon} alt={card.label} className="w-[40px] h-[40px] shrink-0" />
              <span className="font-lato font-bold text-[20px] leading-tight">{card.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Feature cards description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-lato font-normal text-[20px] text-[#878787] text-center max-w-3xl mx-auto mt-8 mb-8 leading-relaxed"
        >
          Whether you're running a feature film or managing multiple client productions, alignment is not optional.{" "}
          Pzaz is built for teams who need coordination at production scale.
        </motion.p>

        {/* Watch Video button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-[60px]"
        >
          <Button
            variant="outline"
            size="lg"
            className="group px-8 font-lato font-black text-xl leading-[25px] text-primary hover:text-primary-foreground"
            prefixIcon={
              <img
                src={ctaPlayIcon}
                alt=""
                className="w-5 h-5 transition-all group-hover:[filter:brightness(0)_invert(1)]"
              />
            }
          >
            Watch Video
          </Button>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-lato font-bold mb-12 text-[24px] tracking-normal text-center md:mb-[74px]"
        >
          Start with everything —{" "}
          <span className="font-lato font-normal italic text-[24px] tracking-normal text-[#878787]">
            or just what you need.
          </span>
        </motion.p>

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 gap-[46px] max-w-6xl mx-auto">
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
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <img src={product.customIcon} alt={product.name} className="w-[60px] h-[60px]" />
                <span className="font-lato font-normal text-[24px] text-[#4D029B]">{product.price}</span>
              </div>
              
              <h3 className="font-lato font-bold text-[32px] text-[#4D029B] mb-2">{product.name}</h3>
              <p className="font-lato font-bold text-[16px] text-[#A805FF] mb-4">{product.tagline}</p>
              <p className="font-lato font-normal text-[16px] text-[#878787] leading-relaxed mb-6 flex-grow">{product.description}</p>
              
              <Button variant={product.highlight ? "product-card-gradient" : "product-card"} size="product-card" className="group/btn mt-auto">
                Explore {product.name.split(" ")[1]}
                <ArrowIcon className={`ml-2 group-hover/btn:translate-x-1 ${product.highlight ? "text-white" : "text-[#4827AF] group-hover/btn:text-white"}`} />
              </Button>
              {(index === 0 || index === 1) && (
                <p className="font-lato font-normal text-[14px] text-[#878787] text-center mt-3">
                  Upgrade anytime. Your project stays intact.
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
          <Button variant="thin-cta" size="thin-cta" className="group/btn">
            Explore All Products
            <ArrowIcon className="ml-2 text-white group-hover/btn:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
