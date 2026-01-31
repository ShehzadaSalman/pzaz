import { Palette, Zap, Layers, Wand2, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Beautiful by Default",
    description: "Stunning templates and components that look amazing out of the box. No design skills required.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance. Your pages load instantly with smooth 60fps animations.",
  },
  {
    icon: Layers,
    title: "Modular System",
    description: "Mix and match components to create unique experiences. Everything works together seamlessly.",
  },
  {
    icon: Wand2,
    title: "AI-Powered",
    description: "Let AI suggest the perfect colors, layouts, and animations for your brand.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Deploy worldwide with a single click. Your content reaches users in milliseconds.",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "SOC 2 compliant, SSO, and advanced security features for teams of all sizes.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Everything you need to <span className="gradient-text">shine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and features designed to make your digital presence unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero-bg flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
