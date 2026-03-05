import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const SceneBreakdownCraft = () => {
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
              pillText="The Craft"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Respecting the Craft.{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Improving the Structure.
                  </span>
                </>
              }
              description="Scene breakdown has always been part of the filmmaking craft. For years it has been managed through documents, spreadsheets and a great deal of experience."
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
              Pzaz doesn't attempt to reinvent that practice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It simply places the breakdown inside a connected production environment where creative ideas, operational planning and collaboration remain part of the same conversation.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              Structure serves the craft. Not the other way around.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownCraft;
