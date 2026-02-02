import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, DollarSign, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Layers,
    name: "Pzaz Studio",
    tagline: "All-in-one production system",
    description: "For full productions and teams that need everything connected in real time. Script, schedule, budget, storyboard, and collaboration in one live workspace.",
    highlight: true,
  },
  {
    icon: DollarSign,
    name: "Pzaz Budget",
    tagline: "Professional budgeting & cost control",
    description: "For producers and line producers who need clarity and confidence. Turn your script into a structured production budget that stays in sync as plans change.",
    highlight: false,
  },
  {
    icon: Film,
    name: "Pzaz Storyboard",
    tagline: "Visualize the film before you shoot",
    description: "For directors and visual storytellers. Turn scenes into storyboards in seconds and refine shots collaboratively before production starts.",
    highlight: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Built for filmmakers who <span className="gradient-text">actually finish films.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pzaz is made for filmmaker entrepreneurs, directors, producers, and teams who understand that making a film isn't just about creativity — it's about execution.
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-xl font-semibold mb-12"
        >
          Start with everything — or just what you need.
        </motion.p>

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                product.highlight 
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/30 hover:border-primary/50" 
                  : "bg-card border-border/50 hover:border-primary/30"
              }`}
            >
              {product.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                product.highlight ? "gradient-bg" : "bg-primary/10"
              }`}>
                <product.icon className={`w-7 h-7 ${product.highlight ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-primary font-medium mb-4">{product.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
              
              <Button variant={product.highlight ? "default" : "outline"} className="group/btn w-full">
                Explore {product.name.split(" ")[1]}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Upgrade notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Upgrade anytime. Your project stays intact.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
