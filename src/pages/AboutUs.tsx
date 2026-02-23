import React, { useState, useCallback, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import aboutHeroBg from "@/assets/about-hero-bg.webp";
import aboutLogo from "@/assets/about-logo.webp";
import aboutCause from "@/assets/about-cause.webp";
import aboutNorthstar from "@/assets/about-northstar.webp";

const placeholders = Array.from({ length: 5 }, (_, i) => i);

const CarouselShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className="rounded-[24px] border-2 border-dashed border-[#D4BAF4] bg-white/60 p-6 md:p-10">
      {/* Carousel viewport */}
      <div className="relative rounded-[16px] overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {placeholders.map((i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <div className="aspect-video bg-[#E8E0F0] flex items-center justify-center rounded-[16px]">
                  <span className="font-lato text-muted-foreground text-lg">
                    Slide {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Play button overlay */}
        <button
          onClick={scrollNext}
          className="absolute inset-0 flex items-center justify-center group cursor-pointer"
          aria-label="Next slide"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-1">
              <path
                d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z"
                fill="#8B1DFF"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {placeholders.map((i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "bg-[#8B1DFF] scale-125"
                : "bg-[#D4BAF4] hover:bg-[#B491E4]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <PageLayout>
      <SEO
        title="About Us – Pzaz"
        description="Learn about Pzaz, the world's most loved, culturally diverse, and all-inclusive filmmaker platform built by twenty-plus film aficionados across twenty countries."
        url="https://pzaz.io/about-us"
        canonical="https://pzaz.io/about-us"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-[60px]">
        <div className="absolute inset-0">
          <img
            src={aboutHeroBg}
            alt="Red carpet premiere scene"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.img
              src={aboutLogo}
              alt="Pzaz icon"
              className="w-20 h-20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-lato text-lg text-muted-foreground mb-2"
            >
              About us at Pzaz.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-lato font-extrabold text-5xl md:text-[64px] md:leading-[70px] mb-8"
            >
              Film as it{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)",
                }}
              >
                should be.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-lato text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl"
            >
              Pzaz is where filmmaker entrepreneurs thrive. A team of twenty-plus
              film aficionados across twenty countries is creating Pzaz, the
              world's most loved, culturally diverse, and all-inclusive filmmaker
              platform.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-[45px]">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[38px] border border-[#D4BAF4] bg-[#F7F2FD] overflow-hidden"
            >
              <div className="pt-8 px-8 md:px-[60px] pb-[60px]">
                <p className="font-lato font-bold text-[#A805FF] text-sm uppercase tracking-wider mb-2">
                  Our vision.
                </p>
                <h2 className="font-lato font-bold text-2xl text-foreground mb-[30px]">
                  Our just cause.
                </h2>
                <p className="font-lato text-base leading-relaxed text-muted-foreground">
                  Pzaz strives to become the world's most loved all-in-one A to Z
                  filmmaking platform—where creativity is unlimited. We envision a
                  future where filmmaking is accessible, efficient, and inclusive for
                  all. Film is more than storytelling; it's the art of capturing
                  emotions, dreams, and struggles. At Pzaz, we empower every
                  filmmaker to bring their vision to life and connect with audiences
                  in meaningful ways.
                </p>
              </div>
              <div className="flex justify-center px-8">
                <img
                  src={aboutCause}
                  alt="Pzaz scripts and writing interface"
                  className="w-full max-w-sm object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[38px] border border-[#D4BAF4] bg-[#F7F2FD] overflow-hidden"
            >
              <div className="pt-8 px-8 md:px-[60px] pb-[60px]">
                <p className="font-lato font-bold text-[#A805FF] text-sm uppercase tracking-wider mb-2">
                  Our mission.
                </p>
                <h2 className="font-lato font-bold text-2xl text-foreground mb-[30px]">
                  Our Northstar.
                </h2>
                <p className="font-lato text-base leading-relaxed text-muted-foreground">
                  We promise to empower filmmakers through a cohesive, cutting-edge
                  ecosystem that unifies the entire filmmaking process. By
                  simplifying workflows and fostering collaboration, Pzaz removes
                  barriers, enabling creators to focus on what truly matters—bringing
                  their stories to life.
                </p>
              </div>
              <div className="flex justify-center px-8">
                <img
                  src={aboutNorthstar}
                  alt="Pzaz collaborative filmmaking ecosystem"
                  className="w-full max-w-sm object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6">
          <CarouselShowcase />
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6">
              Who can benefit from{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)",
                }}
              >
                Pzaz?
              </span>
            </h2>
            <p className="font-lato text-lg md:text-xl leading-relaxed text-muted-foreground mb-10">
              At Pzaz, we see you. We know the relentless passion, the sleepless
              nights, the tight budgets, and the last-minute changes that define
              the filmmaker's journey. Whether you're a seasoned professional, a
              visionary indie creator, or a producer juggling multiple projects, we
              understand what it takes to bring stories to life.
            </p>
            <p className="font-lato font-bold text-xl text-[#A805FF]">
              Get Pzazzed! –{" "}
              <span className="text-foreground">The Pzaz Manifesto</span>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
