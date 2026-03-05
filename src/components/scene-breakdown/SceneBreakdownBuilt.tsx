import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const SceneBreakdownBuilt = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSectionHeader
              wrapperClassName=""
              pillText="For Filmmakers"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Designed for Filmmakers,{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Built with Creators
                  </span>
                </>
              }
              align="left"
              className="mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pzaz was shaped alongside directors, producers and coordinators who deal with the practical reality of turning scripts into shootable scenes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are preparing a short film or a larger production, it helps you see and organise each scene in a way that keeps creative intent aligned with what production actually requires.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownBuilt;
