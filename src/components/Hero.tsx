import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import banner1 from "@/assets/home-banner/banner1.png";
import banner2 from "@/assets/home-banner/banner2.png";
import banner3 from "@/assets/home-banner/banner3.png";
import banner4 from "@/assets/home-banner/banner4.png";
import banner5 from "@/assets/home-banner/banner5.png";
import banner6 from "@/assets/home-banner/banner6.png";

const heroSlides = [
  {
    image: banner1,
    imageAlt: "AI generator view",
  },
  {
    image: banner2,
    imageAlt: "Characters view",
  },
  {
    image: banner3,
    imageAlt: "Ideation board view",
  },
  {
    image: banner4,
    imageAlt: "Scene properties view",
  },
  {
    image: banner5,
    imageAlt: "Script editor view",
  },
  {
    image: banner6,
    imageAlt: "Updated budget view",
  },
];

const Hero = () => {
  const [targetSlide, setTargetSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<boolean[]>(
    heroSlides.map((_, index) => index === 0)
  );

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTargetSlide((previousSlide) => (previousSlide + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    heroSlides.forEach((slide, index) => {
      if (index === 0) return;
      const image = new Image();
      image.src = slide.image;
      image.onload = () => {
        setLoadedSlides((previousLoaded) => {
          if (previousLoaded[index]) return previousLoaded;
          const nextLoaded = [...previousLoaded];
          nextLoaded[index] = true;
          return nextLoaded;
        });
      };
    });
  }, []);

  useEffect(() => {
    if (!loadedSlides[targetSlide]) return;
    setCurrentSlide(targetSlide);
  }, [loadedSlides, targetSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[60px]">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-lato font-extrabold text-5xl leading-[50px] md:text-[64px]  md:leading-[70px] md:tracking-normal text-center mb-6 text-balance md:pt-[60px]"
          >
            Screen productions break down when teams lose alignment.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-center max-w-3xl mx-auto mb-10 text-muted-foreground"
          >
            Screen productions don't break creatively. They fail operationally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link to="/pricing">
              <Button size="lg" className="group px-8">
                Start Free
                <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
              </Button>
            </Link>
            <a href="https://calendly.com/pzaz-tv/30min" target="_blank" rel="noopener noreferrer">
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
                Book a Demo
              </Button>
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-lato font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#878787]"
          >
            No credit card. Up and running in 15 minutes.
          </motion.p>
        </div>

        {/* Hero Visual Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 lg:mt-24 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src={heroSlides[0].image}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="w-full h-auto opacity-0 pointer-events-none select-none"
            />
            {heroSlides.map((slide, index) => (
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.imageAlt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => {
                  setLoadedSlides((previousLoaded) => {
                    if (previousLoaded[index]) return previousLoaded;
                    const nextLoaded = [...previousLoaded];
                    nextLoaded[index] = true;
                    return nextLoaded;
                  });
                }}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.015,
                }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;
