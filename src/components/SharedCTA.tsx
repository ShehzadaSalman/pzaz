import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import iconStar from "@/assets/material-symbols_family-star.svg";
import languagesImg from "@/assets/languages.png";

interface SharedCTAProps {
  pillText?: string;
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showLanguagesImage?: boolean;
  backgroundStyle?: React.CSSProperties;
}

const SharedCTA = ({
  pillText = "Free 14-day trial",
  title = <>Ready to add some pizzazz?</>,
  description = "Join 10,000+ creators who've already transformed their digital presence. Start free, no credit card required.",
  primaryButtonText = "Get started free",
  secondaryButtonText = "Schedule a demo",
  showLanguagesImage = true,
  backgroundStyle,
}: SharedCTAProps) => {
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

            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* Glow effect */}
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-16 md:py-24 pb-12 text-center">
              <SectionHeader
                pillText={pillText}
                pillClassName="bg-white text-primary mb-0"
                pillIcon={<img src={iconStar} alt="" className="w-4 h-4" />}
                title={title}
                titleClassName="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-0"
                description={description}
                descriptionClassName="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10"
              />

              {showLanguagesImage && (
                <div className="mx-auto mb-10 w-full max-w-md">
                  <img src={languagesImg} alt="Languages" className="w-full h-auto" />
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="xl"
                  className="group bg-white/10 text-white border-white/30 hover:bg-white/20"
                  postfixIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                >
                  {primaryButtonText}
                </Button>
                <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/10">
                  {secondaryButtonText}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SharedCTA;
