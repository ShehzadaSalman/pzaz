import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import cardIconBudget from "@/assets/card-icon-budget.svg";
import solutionCardPreview from "@/assets/solution-card-preview.png";

const features = [
  { title: "Autosave & cloud storage", image: solutionCardPreview },
  { title: "Secure script storage", image: solutionCardPreview },
  { title: "Flexible import & export", image: solutionCardPreview },
  { title: "Scene undo & renumbering", image: solutionCardPreview },
  { title: "Script indexing for fast navigation", image: solutionCardPreview },
  { title: "Full-screen, distraction-free writing", image: solutionCardPreview },
  { title: "Free updates & upgrades — always", image: solutionCardPreview },
  { title: "Drag & drop scene structure", image: solutionCardPreview },
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
                  <img src={cardIconBudget} alt="" className="w-[36px] h-[36px] flex-shrink-0" />
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
