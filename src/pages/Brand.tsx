import React from "react";
import { motion } from "framer-motion";
import { Download, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Logo & Icon
import logoIcon from "@/assets/brand/logo-icon.webp";
// Colours
import colours from "@/assets/brand/colours.webp";
// Asset previews
import assetArtwork from "@/assets/brand/asset-artwork.webp";
import assetArtworkIcon from "@/assets/brand/asset-artwork-icon.webp";
import assetStickers from "@/assets/brand/asset-stickers.webp";
import assetStickersIcon from "@/assets/brand/asset-stickers-icon.webp";
import assetPuppet from "@/assets/brand/asset-puppet.webp";
import assetPuppetIcon from "@/assets/brand/asset-puppet-icon.webp";
import assetImagery from "@/assets/brand/asset-imagery.webp";
import assetImageryIcon from "@/assets/brand/asset-imagery-icon.webp";
import assetScreenshots from "@/assets/brand/asset-screenshots.webp";
import assetScreenshotsIcon from "@/assets/brand/asset-screenshots-icon.webp";
import assetStories from "@/assets/brand/asset-stories.webp";
import assetStoriesIcon from "@/assets/brand/asset-stories-icon.webp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const thingsToAvoid = [
  "Don't change the color",
  "Don't stretch",
  "Don't add effects",
  "Don't place over busy backgrounds",
  "Don't rotate",
  "Don't make ribbons",
  "Don't flip",
  "Don't use an old version",
  "Don't use pixelated logo",
  "Don't add outlines",
];

const assets = [
  {
    name: "Artwork",
    preview: assetArtwork,
    icon: assetArtworkIcon,
    url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-artwork.zip",
  },
  {
    name: "Stickers",
    preview: assetStickers,
    icon: assetStickersIcon,
    url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-stickers.zip",
  },
  {
    name: "Puppet",
    preview: assetPuppet,
    icon: assetPuppetIcon,
    url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-puppet.zip",
  },
  {
    name: "Imagery",
    preview: assetImagery,
    icon: assetImageryIcon,
    url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-images.zip",
  },
  {
    name: "Screenshots",
    preview: assetScreenshots,
    icon: assetScreenshotsIcon,
    url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-screenshots.zip",
  },
  {
    name: "Stories in Motion Book",
    preview: assetStories,
    icon: assetStoriesIcon,
    url: "https://pzaz.io/wp-content/uploads/2025/10/Stories-in-Motion-Print.pdf",
  },
];

const Brand = () => {
  return (
    <>
      <SEO
        title="Brand Guidelines – Pzaz"
        description="Pzaz brand guidelines: logo usage, colour palette, and downloadable assets for partners and press."
        url="https://pzaz.io/brand"
      />
      <Header />
      <main className="min-h-screen bg-[#faf9fb]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 text-center">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Lato'] leading-tight">
              <span className="bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent">
                How to get your audience to use
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent">
                Pzaz: Channel guidelines.
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#4E2273] max-w-3xl mx-auto leading-relaxed">
              Pzaz channel live? Great news! Now it's time to indulge your audience into your (and other channels')
              binge-worthy TV – films, shows, series, sports and more! In this guide we'll explore some hints, tips
              and best practices to ensure your audience has a seamless onboarding experience in Pzaz, and show you how
              to make your channel stand-out in the Pzaz Channel Store!
            </p>
          </motion.div>
        </section>

        {/* Logo & Icon */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-3">
                Logo & Icon.
              </h2>
              <p className="text-[#4E2273] font-medium mb-4">Our brand logo & Icon</p>
              <p className="text-[#4E2273]/80 leading-relaxed mb-8">
                We are very proud of our logo. Follow these guidelines to
                ensure it always looks its best.
              </p>
              <a
                href="https://pzaz.io/wp-content/uploads/2025/10/Pzaz-logo-Icon.zip"
                download
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5C28A4] text-[#5C28A4] font-semibold hover:bg-[#5C28A4] hover:text-white transition-colors"
              >
                <Download className="w-5 h-5" />
                DOWNLOAD
              </a>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <img src={logoIcon} alt="Pzaz logo and icon variants" className="w-full max-w-md mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Things to Avoid */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-4">
                Things To Avoid.
              </h2>
              <p className="text-[#4E2273]/80 max-w-2xl mx-auto">
                Using our logos consistently ensures brand recognition and allows for creativity elsewhere. Avoid these usages.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {thingsToAvoid.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl bg-[#F7F2FD] border border-[#E8DFF5] p-6 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-xs font-bold text-red-500 uppercase">No</span>
                  <p className="text-sm text-[#20124D] font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Colours */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-4">
                Using our colours.
              </h2>
              <p className="text-[#4E2273]/80 leading-relaxed">
                While embracing a vibrant and colourful language in our brand communications,
                Pzaz pink and primary purple serve as our signature colours, used whenever
                Pzaz's elements need to be easily recognisable.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <img src={colours} alt="Pzaz brand colour palette" className="w-full max-w-md mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Pzaz Assets */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-4">
                Pzaz Assets.
              </h2>
              <p className="text-[#4E2273]/80">
                Use these Pzaz assets in your partnership for marketing purposes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {assets.map((asset, i) => (
                <motion.a
                  key={asset.name}
                  href={asset.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden border border-[#E8DFF5] bg-[#F7F2FD] hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={asset.preview}
                      alt={asset.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <img src={asset.icon} alt="" className="w-10 h-10 rounded-lg shadow-md bg-white" />
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#20124D] font-['Lato']">{asset.name}</span>
                    <Download className="w-4 h-4 text-[#5C28A4] group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Brand;
