import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import aboutHeroBg from "@/assets/about-hero-bg.webp";
import aboutLogo from "@/assets/about-logo.webp";

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
        {/* Background image */}
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
            {/* Logo icon */}
            <motion.img
              src={aboutLogo}
              alt="Pzaz icon"
              className="w-20 h-20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Heading */}
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

            {/* Description */}
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
    </PageLayout>
  );
};

export default AboutUs;
