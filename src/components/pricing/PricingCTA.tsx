import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PricingCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 gradient-hero-bg animate-gradient" />
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* Glow effect */}
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-12 sm:p-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Start free today</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Start your film.
                <br />Not another tool stack.
              </h2>

              <p className="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10">
                Your work stays connected forever. No rebuilding, no re-entry, no broken handovers.
              </p>

              <Button
                variant="outline"
                size="xl"
                className="group bg-white/10 text-white border-white/30 hover:bg-white/20"
                postfixIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              >
                Start free
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
