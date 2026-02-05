import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ScriptPricing = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Simple Pricing
          </span>

          {/* Price display */}
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl font-bold text-foreground">€29</span>
            <span className="text-xl text-muted-foreground">/month</span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Get Pzaz Script with everything you need to turn screenplays into production-ready data.
          </p>

          {/* Quick benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {["Unlimited scripts", "Auto breakdown", "Version control", "AI scene analysis"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group text-base px-8">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base px-8">
              <Link to="/pricing">
                View All Plans
              </Link>
            </Button>
          </div>

          {/* Upsell hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Need Budget, Storyboard & Scheduling too?{" "}
            <Link to="/pricing" className="text-primary hover:underline font-medium">
              Check out Pzaz Suite →
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScriptPricing;
