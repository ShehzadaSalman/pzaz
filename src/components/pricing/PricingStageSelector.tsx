import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePricingCart } from "@/contexts/PricingCartContext";

interface Tier {
  id: string;
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

// Section 1: Indie + Standalone Products
const section1Tiers: Tier[] = [
  {
    id: "indie",
    name: "Indie",
    price: "Free",
    tagline: "Professional workspace for solo filmmakers starting a project.",
    features: [
      "Full access to core workflow foundation",
      "1 user workspace",
      "Up to 3 collaborators",
      "Centralized project dashboard",
      "Access to Inbox, Ideation, and core system tools",
    ],
    cta: "Start Free",
  },
  {
    id: "budget",
    name: "Budget",
    price: "€49",
    priceSuffix: "/ month",
    tagline: "Professional film budgeting system fully integrated into your workflow.",
    features: [
      "Dedicated budgeting environment",
      "Built specifically for film and video production",
      "Linked to production elements and resources",
      "Clear cost breakdown and financial overview",
      "Works seamlessly alongside Planning and Production Suites",
    ],
    cta: "Get Budget",
  },
  {
    id: "storyboard",
    name: "Storyboard",
    price: "€49",
    priceSuffix: "/ month",
    tagline: "Visual planning tool for building structured storyboards inside Pzaz.",
    features: [
      "Native storyboard builder",
      "Integrated with script and planning tools",
      "Visual shot and sequence development",
      "Drag-and-drop visual workflow",
      "Eliminates need for external storyboard software",
    ],
    cta: "Get Storyboard",
  },
];

// Section 2: Professional Suite
const section2Tiers: Tier[] = [
  {
    id: "planning-pro",
    name: "Planning Pro",
    price: "€129",
    priceSuffix: "/ month",
    tagline: "Advanced planning suite for writers, directors, and creative leads.",
    features: [
      "Designed for writer-directors and creative owners",
      "Full script development and versioning workflow",
      "Scene-to-shot structured planning",
      "Integrated collaboration with producers and team",
      "Professional-grade planning tools in one suite",
    ],
    cta: "Start Planning",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "studio-pro",
    name: "Studio Pro",
    price: "€199",
    priceSuffix: "/ month",
    tagline: "Multi-project operations suite for production houses and creative agencies managing a slate.",
    features: [
      "Slate overview with pipeline and greenlight tracking",
      "Standardised templates and workflows across teams",
      "Cross-project resource planning (crew, equipment, budgets)",
      "Executive monitoring of burn rate, schedule risk, and bottlenecks",
      "Reporting layer for financial summaries and delivery timelines",
    ],
    cta: "Get Studio Pro",
  },
];

// IDs that are base plans (only one selectable at a time)
const BASE_PLAN_IDS = ["indie", "planning-pro", "studio-pro", "budget", "storyboard"];

const PricingStageSelector = () => {
  const { packages, addPackage, removePackage, hasPackage } = usePricingCart();

  // Derive selected base plan id (if any)
  const selectedBasePlanId = packages.find(p => BASE_PLAN_IDS.includes(p.id))?.id ?? null;

  const handleTierClick = (tier: Tier) => {
    const pkgId = tier.id;
    if (hasPackage(pkgId)) {
      removePackage(pkgId);
    } else {
      // Remove any existing base plan first
      if (selectedBasePlanId) removePackage(selectedBasePlanId);
      if (tier.price === "Free") {
        addPackage({
          id: pkgId,
          name: tier.name,
          price: 0,
          type: "package",
          modules: tier.features.map(f => ({ name: f, price: 0 })),
        });
      } else {
        addPackage({
          id: pkgId,
          name: tier.name,
          price: parseInt(tier.price.replace("€", "")),
          type: "package",
          modules: tier.features.map(f => ({ name: f, price: 0 })),
        });
      }
    }
  };


  const hasAnyBasePlan = selectedBasePlanId !== null;

  const renderTierCard = (tier: Tier, index: number) => {
    const inCart = hasPackage(tier.id);
    const isDisabled = !inCart && hasAnyBasePlan;
    return (
      <motion.div
        key={tier.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`relative rounded-3xl border-2 p-8 flex flex-col transition-colors ${
          inCart
            ? "border-primary bg-primary/5 shadow-xl"
            : tier.highlighted
            ? "border-primary bg-card shadow-xl"
            : "border-border bg-card"
        } ${isDisabled ? "opacity-50" : ""}`}
      >
        {tier.highlighted && !inCart && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10" />
        )}
        {tier.badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            {tier.badge}
          </span>
        )}
        <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-4xl font-bold gradient-text">{tier.price}</span>
          {tier.priceSuffix && (
            <span className="text-muted-foreground text-sm">{tier.priceSuffix}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>
        <ul className="space-y-3 mb-8 flex-1">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{f}</span>
            </li>
          ))}
        </ul>
        <Button
          size="lg"
          variant={inCart ? "default" : tier.highlighted ? "default" : "outline"}
          className="w-full group"
          onClick={() => handleTierClick(tier)}
        >
          {inCart ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              {tier.cta}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </motion.div>
    );
  };

  return (
    <section id="plans" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section 1 Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose the plan that fits{" "}
            <span className="gradient-text">your production.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free and scale as your productions grow.
          </p>
        </motion.div>

        {/* Section 1: Indie, Budget, Storyboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {section1Tiers.map((tier, index) => renderTierCard(tier, index))}
        </div>

        {/* Section 2: Professional Suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Suite</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Advanced tools for serious productions and growing teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
          {section2Tiers.map((tier, index) => renderTierCard(tier, index))}
        </div>

      </div>
    </section>
  );
};

export default PricingStageSelector;
