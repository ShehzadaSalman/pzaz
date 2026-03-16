import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useCurrency } from "@/hooks/use-currency";

interface Tier {
  id: string;
  name: string;
  basePrice: number | null; // null = Free
  priceSuffix?: string;
  tagline: string;
  features: string[];
  cta: string;
  checkoutUrl: string;
  highlighted?: boolean;
  badge?: string;
  hasUserSelector?: boolean;
  disabled?: boolean;
}

const BASE_CHECKOUT = "https://projector.pzaz.io/checkout";
const EXTRA_USER_PRICE = 49;

// Section 1: Indie + Standalone Products
// Section 1: Indie + Pro Plans
const section1Tiers: Tier[] = [
  {
    id: "indie",
    name: "Indie",
    basePrice: null,
    tagline: "Everything you need to start and coordinate your screen project. No cost or lock-in.",
    features: [
      "Shared production workspace",
      "Inbox & team chat",
      "Calendar & scheduling",
      "File management & document hub",
      "Script development & narrative tools",
      "Ideation & moodboards",
      "Breakdown & stripboard planning",
      "Task coordination with notes & attachments",
      "Call sheets & production essentials",
    ],
    cta: "Start Free",
    highlighted: true,
    badge: "Most Popular",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&addons=indie_free&currency=EUR`,
  },
  {
    id: "planning-pro",
    name: "Planning Pro",
    basePrice: 129,
    priceSuffix: "/ month",
    tagline: "Structured development aligned with production reality. For writer-directors and creative leads who need coordination, not chaos.",
    features: [
      "Advanced script & rewrite control",
      "Structured development workflows",
      "Production-ready planning framework",
      "Deeper collaboration visibility",
      "Expanded coordination capacity",
    ],
    cta: "Get Started",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&bundles=pzaz_studio&currency=EUR`,
    hasUserSelector: true,
  },
  {
    id: "studio-pro",
    name: "Studio Pro",
    basePrice: 199,
    priceSuffix: "/ month",
    tagline: "Slate-level coordination for growing production companies. Built for teams managing multiple projects, departments, and delivery timelines.",
    features: [
      "Multi-project oversight",
      "Executive-level visibility",
      "Standardised workflows across teams",
      "Cross-project alignment",
      "Scalable studio coordination infrastructure",
    ],
    cta: "Get Started",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&bundles=private_ai_cloud&currency=EUR`,
    hasUserSelector: true,
  },
];

// Section 2: Standalone Products
const section2Tiers: Tier[] = [
  {
    id: "budget",
    name: "Budget",
    basePrice: 49,
    priceSuffix: "/ month",
    tagline: "Integrated financial alignment inside your production environment.",
    features: [
      "Production-aware budgeting structure",
      "Real-time cost visibility connected to planning",
      "Department-level budget tracking",
      "Scenario planning & financial adjustments",
      "Context-linked financial oversight",
      "Shares project AI credit allocation",
    ],
    cta: "Get Started",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&addons=pzaz_budget&currency=EUR`,
  },
  {
    id: "storyboard",
    name: "Pzaz Storyboard",
    basePrice: 49,
    priceSuffix: "/ month",
    tagline: "Visual planning tool for building structured storyboards directly inside Pzaz.",
    features: [
      "Native storyboard builder",
      "Visual shot and sequence development",
      "Drag-and-drop storyboard workflow",
      "Integrated with script and planning tools",
      "Connected to schedule and budget",
      "Production-integrated storyboarding",
      "Context-aware visual planning",
      "Eliminates need for external storyboard software",
    ],
    cta: "Get Started",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&addons=pzaz_storyboard&currency=EUR`,
  },
  {
    id: "private-llm",
    name: "Private LLM Add-On",
    basePrice: 249,
    priceSuffix: "/ month",
    tagline: "",
    features: [
      "Dedicated private AI instance",
      "Isolated model environment",
      "Custom internal knowledge layer",
      "Governed AI access controls",
      "Separate credit allocation",
    ],
    cta: "Contact Us",
    checkoutUrl: "",
    disabled: false,
  },
];

const UserSelector = ({
  users,
  onChange,
  onContactClick,
  symbol,
  extraUserDisplayPrice,
}: {
  users: number;
  onChange: (n: number) => void;
  onContactClick: () => void;
  symbol: string;
  extraUserDisplayPrice: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Users className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="text-sm font-medium text-foreground">Number of users</span>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:border-primary/50 transition-colors"
        >
          <span>{users} {users === 1 ? "user" : "users"}</span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-border bg-card shadow-lg z-50 overflow-hidden">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => { onChange(n); setOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted ${
                  users === n ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                {n} {n === 1 ? "user" : "users"}
                {n > 1 && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    +{symbol}{(n - 1) * extraUserDisplayPrice}/mo
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        Need more than 10 users?{" "}
        <button
          type="button"
          onClick={onContactClick}
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          Contact us
        </button>
      </p>
    </div>
  );
};

const PricingStageSelector = () => {
  const [userCounts, setUserCounts] = useState<Record<string, number>>({
    "planning-pro": 1,
    "studio-pro": 1,
  });
  const [contactOpen, setContactOpen] = useState(false);
  const { symbol, getPrice, currency } = useCurrency();

  const getDisplayPrice = (tier: Tier) => {
    if (tier.basePrice === null) return "Free";
    const extraUsers = (userCounts[tier.id] ?? 1) - 1;
    const baseDisplay = getPrice(tier.basePrice, tier.id);
    const extraUserDisplay = getPrice(EXTRA_USER_PRICE, "extra-user");
    const total = baseDisplay + extraUsers * extraUserDisplay;
    return `${symbol}${total}`;
  };

  const getCheckoutUrl = (tier: Tier) => {
    if (!tier.checkoutUrl) return "";
    return tier.checkoutUrl.replace("currency=EUR", `currency=${currency}`);
  };

  const renderTierCard = (tier: Tier, index: number) => {
    return (
      <motion.div
        key={tier.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`relative rounded-3xl border-2 p-8 flex flex-col transition-colors ${
          tier.highlighted
            ? "border-primary bg-card shadow-xl"
            : "border-border bg-card"
        }`}
      >
        {tier.highlighted && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10" />
        )}
        {tier.badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            {tier.badge}
          </span>
        )}

        <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-4xl font-bold gradient-text">{getDisplayPrice(tier)}</span>
          {tier.basePrice === null && (
            <span className="text-sm text-muted-foreground ml-1">Always.</span>
          )}
          {tier.priceSuffix && tier.basePrice !== null && (
            <span className="text-muted-foreground text-sm">{tier.priceSuffix}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

        {/* Includes header */}
        {tier.id === "indie" && (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Includes</p>
        )}
        {tier.id === "planning-pro" && (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Includes everything in Indie, plus:</p>
        )}
        {tier.id === "studio-pro" && (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Includes everything in Planning Pro, plus:</p>
        )}

        <ul className="space-y-3 mb-6 flex-1">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        {/* Plan Details for Indie */}
        {tier.id === "indie" && (
          <div className="border-t border-border pt-5 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Plan Details</p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>1 core user included</li>
              <li>3 external collaborators included</li>
              <li>1 active project</li>
              <li>100 AI credits per month</li>
            </ul>
          </div>
        )}

        {/* Plan Details for Planning Pro */}
        {tier.id === "planning-pro" && (
          <div className="border-t border-border pt-5 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Plan Details</p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>3 users included</li>
              <li>10 external collaborators included</li>
              <li>Unlimited projects</li>
              <li>500 AI credits per month</li>
            </ul>
          </div>
        )}

        {/* Plan Details for Studio Pro */}
        {tier.id === "studio-pro" && (
          <div className="border-t border-border pt-5 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Plan Details</p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>5 users included</li>
              <li>Unlimited external collaborators</li>
              <li>Unlimited projects</li>
              <li>1,000 AI credits per month</li>
            </ul>
          </div>
        )}

        {tier.hasUserSelector && (
          <UserSelector
            users={userCounts[tier.id] ?? 1}
            onChange={(n) => setUserCounts((prev) => ({ ...prev, [tier.id]: n }))}
            onContactClick={() => setContactOpen(true)}
            symbol={symbol}
            extraUserDisplayPrice={getPrice(EXTRA_USER_PRICE, "extra-user")}
          />
        )}

        <Button
          size="lg"
          variant={tier.highlighted ? "default" : "outline"}
          className="w-full group"
          onClick={() => {
            if (tier.id === "private-llm") {
              setContactOpen(true);
            } else if (!tier.disabled && tier.checkoutUrl) {
              window.open(getCheckoutUrl(tier), "_blank");
            }
          }}
          disabled={tier.disabled}
        >
          {tier.cta}
          {!tier.disabled && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
        </Button>

        {/* Footer text */}
        {tier.id === "indie" && (
          <p className="text-xs text-muted-foreground text-center mt-4">No lock-in. No pressure. Ever.</p>
        )}
        {tier.id === "planning-pro" && (
          <p className="text-xs text-muted-foreground text-center mt-4">Up and running in 15 minutes.</p>
        )}
        {tier.id === "studio-pro" && (
          <p className="text-xs text-muted-foreground text-center mt-4">More than 10 additional users?{" "}
            <button type="button" onClick={() => setContactOpen(true)} className="underline text-primary hover:text-primary/80 transition-colors">Contact us</button>
          </p>
        )}
        {tier.id === "budget" && (
          <p className="text-xs text-muted-foreground text-center mt-4">Financial clarity without fragmentation.</p>
        )}
        {tier.id === "storyboard" && (
          <p className="text-xs text-muted-foreground text-center mt-4">Visual storytelling, built into your workflow.</p>
        )}
        {tier.id === "private-llm" && (
          <p className="text-xs text-muted-foreground text-center mt-4">Protected and isolated. Under your control.</p>
        )}
      </motion.div>
    );
  };

  return (
    <>
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
              No credit card · Cancel anytime · Your work stays connected forever
            </p>
          </motion.div>

          {/* Section 1: Indie, Planning Pro, Studio Pro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            {section1Tiers.map((tier, index) => renderTierCard(tier, index))}
          </div>

          {/* Section 2: Standalone Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Standalone Products</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Add specific tools to power up your existing workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {section2Tiers.map((tier, index) => renderTierCard(tier, index))}
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default PricingStageSelector;
