import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign up in seconds",
    description: "Create your free account and get instant access to all tools and templates.",
  },
  {
    number: "02",
    title: "Choose your style",
    description: "Pick from hundreds of professionally designed templates or start from scratch.",
  },
  {
    number: "03",
    title: "Customize everything",
    description: "Use our intuitive editor to make it uniquely yours. No code required.",
  },
  {
    number: "04",
    title: "Launch & grow",
    description: "Publish with one click and watch your audience grow with built-in analytics.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            From zero to <span className="gradient-text">stunning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes, not hours. Our streamlined process gets you live fast.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-8 items-start group"
                >
                  {/* Number badge */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl gradient-hero-bg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-display font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover-lift">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute left-[30px] -bottom-2 w-5 h-5 text-primary hidden md:block" style={{ transform: 'rotate(90deg)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
