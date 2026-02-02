import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Trusted by Creators
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Used by{" "}
              <span className="gradient-text">industry professionals</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From screenwriters to directors, creative teams rely on Pzaz to work faster, 
              stay focused, and move seamlessly into production.
            </p>
          </motion.div>

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
