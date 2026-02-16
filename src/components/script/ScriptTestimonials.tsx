import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

const testimonials = [
  {
    quote: "Pzaz keeps my writing fast, focused, and formatted.",
    author: "Alex Chen",
    role: "Screenwriter",
  },
  {
    quote: "Real-time collaboration is a game-changer for our team.",
    author: "Maria Rodriguez",
    role: "Producer",
  },
  {
    quote: "Finally, a tool that connects scriptwriting to production planning.",
    author: "James Mitchell",
    role: "Line Producer",
  },
];

const ScriptTestimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <AnimatedSectionHeader
            wrapperClassName="text-center mb-16"
            pillText="Trusted by Creators"
            pillClassName="bg-primary/10 text-primary"
            title={
              <>
                Used by{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                  industry professionals
                </span>
              </>
            }
            description="From screenwriters to directors, creative teams rely on Pzaz to work faster, stay focused, and move seamlessly into production."
          />

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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

export default ScriptTestimonials;
