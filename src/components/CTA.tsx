import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import languagesImg from "@/assets/languages.png";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
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
                <span className="text-sm font-medium text-primary-foreground">Free 14-day trial</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Ready to add some
                <br />pizzazz?
              </h2>

              <p className="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10">
                Join 10,000+ creators who've already transformed their digital presence. Start free, no credit card required.
              </p>

              <div className="mx-auto mb-10 w-full max-w-md">
                <img src={languagesImg} alt="Languages" className="w-full h-auto" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero-outline" size="xl" className="group bg-white/10">
                  Get started free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
