import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import cardIconBudget from "@/assets/card-icon-budget.svg";
import solutionCardPreview from "@/assets/solution-card-preview.png";

const features = [
  { title: "Autosave & cloud storage", image: solutionCardPreview },
  { title: "Secure script storage", image: solutionCardPreview },
  { title: "Flexible import & export", subtitle: "FDX, PDF, RTF, TXT, Fountain", image: solutionCardPreview },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader
              pillText="Essential Features"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Everything you need.{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Nothing you don't.
                  </span>
                </>
              }
            />
          </motion.div>

          {/* Features grid - 4x2 using Critical Reframe card style */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[45px] mb-20">
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
                <div className="flex items-center gap-3 px-[34px] pt-[34px] pb-4">
                  <img src={cardIconBudget} alt="" className="w-[45px] h-[45px] flex-shrink-0" />
                  <div>
                    <span className="font-lato font-bold text-[20px] leading-[23px] text-foreground">
                      {feature.title}
                    </span>
                    {feature.subtitle && (
                      <p className="font-lato text-[14px] text-[#878787] mt-1">{feature.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Image area */}
                <div className="mt-auto px-[34px] pb-0">
                  <div className="rounded-t-xl overflow-hidden">
                    <img src={feature.image} alt={`${feature.title} preview`} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SectionHeader
              pillText="Core Experience"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Complete Script{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Lifecycle Solution
                  </span>
                </>
              }
              description="One platform. The complete script lifecycle. Everything your script needs — from the first idea to production — in one intuitive workspace."
            />
          </motion.div>

          {/* Core feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[45px]">
            {[
              {
                title: "From concept to screen",
                description: "A complete scriptwriting ecosystem. Brainstorm ideas, draft scripts, and move seamlessly into production planning.",
              },
              {
                title: "Focus on the story",
                description: "Automatic industry-standard formatting. Formatting happens automatically, so you stay immersed in your narrative.",
              },
              {
                title: "Every version. Always safe.",
                description: "Track changes, compare drafts, and restore previous versions instantly. Nothing is ever lost.",
              },
              {
                title: "Write together, in real time",
                description: "Co-write and edit scripts live with your team, no matter where they are in the world.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-8 rounded-[38px] border-2 border-[#D4BAF4] transition-all hover:shadow-lg"
                style={{ background: "radial-gradient(circle, #D1CFFF, #FFFFFF)" }}
              >
                <h4 className="font-lato font-bold text-[30px] leading-[42px] text-[#4D029B] mb-3">{item.title}</h4>
                <p className="font-lato font-normal text-[16px] leading-[24px] text-[#878787]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptFeatures;
