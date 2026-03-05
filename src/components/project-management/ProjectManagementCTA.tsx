import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ArrowIcon from "@/components/ui/ArrowIcon";
import SectionHeader from "@/components/SectionHeader";
import iconStar from "@/assets/material-symbols_family-star.svg";

const ProjectManagementCTA = () => {
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
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
            />
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-8 md:p-16 md:py-24 pb-12 text-center">
              <SectionHeader
                pillText="Project Management"
                pillClassName="bg-white text-primary mb-0"
                pillIcon={<img src={iconStar} alt="" className="w-4 h-4" />}
                title="If you want to keep making films, make Pzaz your co-pilot."
                titleClassName="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground"
                description="With Pzaz, the system supporting your production finally works with you — not against you."
                descriptionClassName="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-4"
              />

              <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
                Start managing your projects with clarity. Create without friction.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/pricing">
                  <Button
                    size="xl"
                    variant="outline"
                    className="group bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px] px-8"
                    postfixIcon={<ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />}
                  >
                    Start Managing Your Projects
                  </Button>
                </Link>
                <a href="https://calendly.com/pzaz-tv/30min" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="xl"
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-[10px] px-8"
                  >
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementCTA;
