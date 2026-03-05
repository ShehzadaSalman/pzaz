import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ArrowIcon from "@/components/ui/ArrowIcon";

const SceneBreakdownHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 0%, hsl(var(--primary)/0.12) 0%, transparent 60%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "hsl(var(--primary)/0.08)", color: "hsl(var(--primary))" }}
          >
            Scene Breakdown
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Scenes Don't Break Down{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Because of Detail.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Tag, Organise, Prepare: Break down scenes, add shots, assign teams, and track progress. All in one seamless platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <Link to="/pricing">
              <Button
                size="xl"
                className="group rounded-[10px] px-8"
                postfixIcon={<ArrowIcon className="w-12 h-12 group-hover:translate-x-1" />}
              >
                Start Free
              </Button>
            </Link>
            <Button size="xl" variant="outline" className="rounded-[10px] px-8">
              Watch Video
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm"
            style={{ color: "#878787" }}
          >
            Break down your first scene.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SceneBreakdownHero;
