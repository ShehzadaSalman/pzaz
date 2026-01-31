import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-hero-bg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">
              pzaz<span className="gradient-text">.io</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How it works
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Testimonials
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
