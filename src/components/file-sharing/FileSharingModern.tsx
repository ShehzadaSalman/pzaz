import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const FileSharingModern = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
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
              pillText="Modern Production"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Built for{" "}
                  <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    Modern Film Teams
                  </span>
                </>
              }
              description="Wherever your team is, Pzaz keeps the whole production library in sync."
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
              Today's productions generate more media than ever, often across multiple locations and departments. Pzaz keeps production assets organised inside a cloud-based environment where everyone sees the same evolving library of files.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The right assets remain visible at the right moment, and creative teams stay focused on the work rather than the everlasting search.
            </p>
            <p className="text-xl font-bold text-[#4D029B] italic">
              Your files stay organised. Your project vision stays clear.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FileSharingModern;
