import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import featureCard1 from "@/assets/breakdown/feature-card-1.png";
import featureCard2 from "@/assets/breakdown/feature-card-2.png";
import featureCard3 from "@/assets/breakdown/feature-card-3.png";
import featureCard4 from "@/assets/breakdown/feature-card-4.png";
import featureCard5 from "@/assets/breakdown/feature-card-5.png";
import featureCard6 from "@/assets/breakdown/feature-card-6.png";
import featureCard7 from "@/assets/breakdown/feature-card-7.png";
import featureCard8 from "@/assets/breakdown/feature-card-8.png";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconLock from "@/assets/script/icon-lock.svg";
import iconDownload from "@/assets/script/icon-download.svg";
import iconRefresh from "@/assets/script/icon-refresh.svg";
import iconThList from "@/assets/script/icon-th-list.svg";
import iconFullscreen from "@/assets/script/icon-fullscreen.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconDrag from "@/assets/script/icon-drag.svg";

const features = [
  { title: "Autosave & cloud storage", image: featureCard1, icon: iconCloud },
  { title: "Secure script storage", image: featureCard2, icon: iconLock },
  { title: "Flexible import & export", image: featureCard3, icon: iconDownload },
  { title: "Scene undo & renumbering", image: featureCard4, icon: iconRefresh },
  { title: "Script indexing for fast navigation", image: featureCard5, icon: iconThList },
  { title: "Full-screen, distraction-free writing", image: featureCard6, icon: iconFullscreen },
  { title: "Free updates & upgrades — always", image: featureCard7, icon: iconListCheck },
  { title: "Drag & drop scene structure", image: featureCard8, icon: iconDrag },
];

const ScriptFeatures = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="Essential Features"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Everything you need.{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  Nothing you don't.
                </span>
              </>
            }
          />

          {/* Features grid - 4x2 using Critical Reframe card style */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[45px]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group rounded-2xl bg-[#F6FCFC] border border-[#E6D7F7] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Title row */}
                <div className="flex items-center gap-3 px-[19px] pt-[19px] pb-1">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} alt="" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-lato font-bold text-[16px] leading-[23px] text-[#e3a4d]">
                      {feature.title}
                    </span>
                  </div>
                </div>

                {/* Image area */}
                <div className="mt-auto px-[19px] pb-0">
                  <div className="rounded-t-xl overflow-hidden">
                    <img src={feature.image} alt={`${feature.title} preview`} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptFeatures;
