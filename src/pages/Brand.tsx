import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

// Logo & Icon
import logoIcon from "@/assets/brand/logo-icon.webp";
// Colours
import colours from "@/assets/brand/colours.webp";
// Avoid images
import avoid1 from "@/assets/brand/avoid-1.webp";
import avoid2 from "@/assets/brand/avoid-2.webp";
import avoid3 from "@/assets/brand/avoid-3.webp";
import avoid4 from "@/assets/brand/avoid-4.webp";
import avoid5 from "@/assets/brand/avoid-5.webp";
import avoid6 from "@/assets/brand/avoid-6.webp";
import avoid7 from "@/assets/brand/avoid-7.webp";
import avoid8 from "@/assets/brand/avoid-8.webp";
import avoid9 from "@/assets/brand/avoid-9.webp";
import avoid10 from "@/assets/brand/avoid-10.webp";
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

const avoidImages = [avoid1, avoid2, avoid3, avoid4, avoid5, avoid6, avoid7, avoid8, avoid9, avoid10];

const assets = [
  { name: "Artwork", preview: assetArtwork, icon: assetArtworkIcon, url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-artwork.zip" },
  { name: "Stickers", preview: assetStickers, icon: assetStickersIcon, url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-stickers.zip" },
  { name: "Puppet", preview: assetPuppet, icon: assetPuppetIcon, url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-puppet.zip" },
  { name: "Imagery", preview: assetImagery, icon: assetImageryIcon, url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-images.zip" },
  { name: "Screenshots", preview: assetScreenshots, icon: assetScreenshotsIcon, url: "https://pzaz.io/wp-content/uploads/2025/10/Pzaz-screenshots.zip" },
  { name: "Stories in Motion Book", preview: assetStories, icon: assetStoriesIcon, url: "https://pzaz.io/wp-content/uploads/2025/10/Stories-in-Motion-Print.pdf" },
];

const Brand = () => {
  const [showAvoid, setShowAvoid] = useState(false);
  const { t } = useTranslation("brand");

  const avoidLabels = t("brand.avoid_items", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t("brand.seo_title")}
        description={t("brand.seo_desc")}
        url="https://pzaz.io/brand"
      />
      <Header />
      <main className="min-h-screen bg-[#faf9fb]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 text-center">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Lato'] leading-tight">
              <span className="bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent">
                {t("brand.hero_title_1")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent">
                {t("brand.hero_title_2")}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#4E2273] max-w-3xl mx-auto leading-relaxed">
              {t("brand.hero_desc")}
            </p>
          </motion.div>
        </section>

        {/* Logo & Icon */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-3">
                {t("brand.logo_title")}
              </h2>
              <p className="text-[#4E2273] font-medium mb-4">{t("brand.logo_subtitle")}</p>
              <p className="text-[#4E2273]/80 leading-relaxed mb-8">{t("brand.logo_desc")}</p>
              <div className="flex flex-col items-start gap-4">
                <a href="https://pzaz.io/wp-content/uploads/2025/10/Pzaz-logo-Icon.zip" download className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5C28A4] text-[#5C28A4] font-semibold hover:bg-[#5C28A4] hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                  {t("brand.logo_download")}
                </a>
                <button onClick={() => setShowAvoid(!showAvoid)} className="text-[#5C28A4] hover:text-[#E84FAD] font-medium underline underline-offset-4 transition-colors cursor-pointer text-sm">
                  {t("brand.logo_avoid_link")}
                </button>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <img src={logoIcon} alt="Pzaz logo and icon variants" className="w-full max-w-md mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Things to Avoid */}
        <AnimatePresence>
          {showAvoid && (
            <motion.section initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden bg-white">
              <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center justify-between mb-12">
                    <div className="text-center flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-4">
                        {t("brand.avoid_title")}
                      </h2>
                      <p className="text-[#4E2273]/80 max-w-2xl mx-auto">{t("brand.avoid_desc")}</p>
                    </div>
                    <button onClick={() => setShowAvoid(false)} className="ml-4 w-10 h-10 rounded-full bg-[#F7F2FD] flex items-center justify-center hover:bg-[#E8DFF5] transition-colors shrink-0">
                      <X className="w-5 h-5 text-[#5C28A4]" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {avoidLabels.map((label, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl bg-[#F7F2FD] border border-[#E8DFF5] overflow-hidden flex flex-col">
                        <div className="aspect-[408/213] overflow-hidden">
                          <img src={avoidImages[i]} alt={label} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col items-center text-center gap-2">
                          <span className="text-xs font-bold text-red-500 uppercase">No</span>
                          <p className="text-sm text-[#20124D] font-medium">{label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Colours */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-['Lato'] bg-gradient-to-r from-[#5C28A4] to-[#E84FAD] bg-clip-text text-transparent mb-4">
                {t("brand.colours_title")}
              </h2>
              <p className="text-[#4E2273]/80 leading-relaxed">{t("brand.colours_desc")}</p>
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
                {t("brand.assets_title")}
              </h2>
              <p className="text-[#4E2273]/80">{t("brand.assets_desc")}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {assets.map((asset, i) => (
                <motion.a key={asset.name} href={asset.url} download target="_blank" rel="noopener noreferrer" {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="group rounded-2xl overflow-hidden border border-[#E8DFF5] bg-[#F7F2FD] hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={asset.preview} alt={asset.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
