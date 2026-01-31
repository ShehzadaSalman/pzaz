import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Now in public beta</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Add <span className="gradient-text">pizzazz</span> to
            <br />your digital presence
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform your brand with stunning visuals, seamless animations, and experiences that captivate your audience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="glow" size="xl" className="group">
              Start for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ creators worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <span className="text-2xl font-display font-bold">Stripe</span>
              <span className="text-2xl font-display font-bold">Notion</span>
              <span className="text-2xl font-display font-bold">Figma</span>
              <span className="text-2xl font-display font-bold hidden sm:block">Linear</span>
              <span className="text-2xl font-display font-bold hidden md:block">Vercel</span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-20 max-w-5xl mx-auto opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <div className="absolute inset-0 gradient-hero-bg opacity-10" />
            <div className="bg-card p-1">
              <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl gradient-hero-bg mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">Your stunning dashboard preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
