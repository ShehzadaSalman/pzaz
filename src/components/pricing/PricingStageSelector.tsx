import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";

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
}

const BASE_CHECKOUT = "https://projector.pzaz.io/checkout";
const EXTRA_USER_PRICE = 10;

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
    checkoutUrl: `${BASE_CHECKOUT}?plan=indie&period=month&currency=EUR`,
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
    checkoutUrl: `${BASE_CHECKOUT}?plan=indie&period=month&bundles=pzaz_planning&currency=EUR`,
    hasUserSelector: true,
  },
  {
    id: "studio-pro",
    name: "Studio Pro",
    basePrice: 199,
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
    checkoutUrl: `${BASE_CHECKOUT}?plan=indie&period=month&bundles=pzaz_studio&currency=EUR`,
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
    tagline: "Professional film budgeting system fully integrated into your workflow.",
    features: [
      "Dedicated budgeting environment",
      "Built specifically for film and video production",
      "Linked to production elements and resources",
      "Clear cost breakdown and financial overview",
      "Works seamlessly alongside Planning and Production Suites",
    ],
    cta: "Get Budget",
    checkoutUrl: `${BASE_CHECKOUT}?plan=indie&period=month&bundles=pzaz_budget&currency=EUR`,
  },
  {
    id: "storyboard",
    name: "Storyboard",
    basePrice: 49,
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
    checkoutUrl: `${BASE_CHECKOUT}?plan=indie&period=month&bundles=pzaz_storyboard&currency=EUR`,
  },
];

const UserSelector = ({
  users,
  onChange,
  onContactClick,
}: {
  users: number;
  onChange: (n: number) => void;
  onContactClick: () => void;
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
                    +€{(n - 1) * EXTRA_USER_PRICE}/mo
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

  const getDisplayPrice = (tier: Tier) => {
    if (tier.basePrice === null) return "Free";
    const extraUsers = (userCounts[tier.id] ?? 1) - 1;
    const total = tier.basePrice + extraUsers * EXTRA_USER_PRICE;
    return `€${total}`;
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

        {tier.hasUserSelector && (
          <UserSelector
            users={userCounts[tier.id] ?? 1}
            onChange={(n) => setUserCounts((prev) => ({ ...prev, [tier.id]: n }))}
            onContactClick={() => setContactOpen(true)}
          />
        )}

        <Button
          size="lg"
          variant={tier.highlighted ? "default" : "outline"}
          className="w-full group"
          onClick={() => window.open(tier.checkoutUrl, "_blank")}
        >
          {tier.cta}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Footer text */}
        {tier.id === "indie" && (
          <p className="text-xs text-muted-foreground text-center mt-4">No lock-in. No pressure. Ever.</p>
        )}
        {tier.id === "planning-pro" && (
          <p className="text-xs text-muted-foreground text-center mt-4">Up and running in 15 minutes.</p>
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

          {/* Indie narrative intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16 space-y-4 text-sm text-muted-foreground leading-relaxed"
          >
            <p>
              Independence often comes with hidden friction. Too many tools. Too many versions. Too many places to check. You compensate with effort. More messages. More searching. More re-explaining. Fragmentation becomes normal.
            </p>
            <p>
              Indie removes that structural disadvantage. One shared production environment. One evolving context. One place where your project lives. No subscriptions. No artificial limits. No forced upgrades.
            </p>
            <p>
              You don't adopt "professional software." You simply stop stitching tools together.
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
              Behavioural shift: From scattered independence → to aligned independence.
            </p>
            <p>
              This is not a stripped-down tier. It is the default coordination layer for independent screen production. AI, when used, operates inside your production context — assisting your workflow without disrupting your autonomy.
            </p>
            <p>
              You stay independent. But your production becomes structurally aligned.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {section2Tiers.map((tier, index) => renderTierCard(tier, index))}
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default PricingStageSelector;
