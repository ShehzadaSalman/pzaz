import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useCurrency } from "@/hooks/use-currency";
import { useTranslation } from "react-i18next";

interface Tier {
  id: string;
  nameKey: string;
  basePrice: number | null;
  priceSuffix?: string;
  taglineKey: string;
  featureKeys: string[];
  ctaKey: string;
  checkoutUrl: string;
  highlighted?: boolean;
  badgeKey?: string;
  hasUserSelector?: boolean;
  disabled?: boolean;
  detailKeys?: string[];
  includesKey?: string;
  footerKey?: string;
  footerIsContact?: boolean;
}

const BASE_CHECKOUT = "https://projector.pzaz.io/checkout";
const EXTRA_USER_PRICE = 49;

const section1Tiers: Tier[] = [
  {
    id: "indie",
    nameKey: "pricing.tier_indie_name",
    basePrice: null,
    taglineKey: "pricing.tier_indie_tagline",
    featureKeys: Array.from({ length: 9 }, (_, i) => `pricing.tier_indie_f${i + 1}`),
    ctaKey: "pricing.tier_indie_cta",
    highlighted: true,
    badgeKey: "pricing.tier_indie_badge",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&addons=indie_free&currency=EUR`,
    includesKey: "pricing.includes",
    detailKeys: Array.from({ length: 4 }, (_, i) => `pricing.tier_indie_d${i + 1}`),
    footerKey: "pricing.tier_indie_footer",
  },
  {
    id: "planning-pro",
    nameKey: "pricing.tier_planning_name",
    basePrice: 129,
    priceSuffix: "/ month",
    taglineKey: "pricing.tier_planning_tagline",
    featureKeys: Array.from({ length: 5 }, (_, i) => `pricing.tier_planning_f${i + 1}`),
    ctaKey: "pricing.tier_planning_cta",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&bundles=pzaz_studio&currency=EUR`,
    hasUserSelector: true,
    includesKey: "pricing.includes_indie_plus",
    detailKeys: Array.from({ length: 4 }, (_, i) => `pricing.tier_planning_d${i + 1}`),
    footerKey: "pricing.tier_planning_footer",
  },
  {
    id: "studio-pro",
    nameKey: "pricing.tier_studio_name",
    basePrice: 199,
    priceSuffix: "/ month",
    taglineKey: "pricing.tier_studio_tagline",
    featureKeys: Array.from({ length: 5 }, (_, i) => `pricing.tier_studio_f${i + 1}`),
    ctaKey: "pricing.tier_studio_cta",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&bundles=private_ai_cloud&currency=EUR`,
    hasUserSelector: true,
    includesKey: "pricing.includes_planning_plus",
    detailKeys: Array.from({ length: 4 }, (_, i) => `pricing.tier_studio_d${i + 1}`),
    footerKey: "pricing.tier_studio_footer_prefix",
    footerIsContact: true,
  },
];

const section2Tiers: Tier[] = [
  {
    id: "budget",
    nameKey: "pricing.tier_budget_name",
    basePrice: 49,
    priceSuffix: "/ month",
    taglineKey: "pricing.tier_budget_tagline",
    featureKeys: Array.from({ length: 6 }, (_, i) => `pricing.tier_budget_f${i + 1}`),
    ctaKey: "pricing.tier_budget_cta",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&addons=budget_addon&currency=EUR`,
    footerKey: "pricing.tier_budget_footer",
  },
  {
    id: "storyboard",
    nameKey: "pricing.tier_storyboard_name",
    basePrice: 49,
    priceSuffix: "/ month",
    taglineKey: "pricing.tier_storyboard_tagline",
    featureKeys: Array.from({ length: 8 }, (_, i) => `pricing.tier_storyboard_f${i + 1}`),
    ctaKey: "pricing.tier_storyboard_cta",
    checkoutUrl: `https://projector.pzaz.io/checkout?plan=indie&period=month&addons=storyboard_addon&currency=EUR`,
    footerKey: "pricing.tier_storyboard_footer",
  },
  {
    id: "private-llm",
    nameKey: "pricing.tier_llm_name",
    basePrice: 249,
    priceSuffix: "/ month",
    taglineKey: "pricing.tier_llm_tagline",
    featureKeys: Array.from({ length: 5 }, (_, i) => `pricing.tier_llm_f${i + 1}`),
    ctaKey: "pricing.tier_llm_cta",
    checkoutUrl: "",
    disabled: false,
    footerKey: "pricing.tier_llm_footer",
  },
];

const UserSelector = ({
  users,
  onChange,
  onContactClick,
  symbol,
  extraUserDisplayPrice,
  t,
}: {
  users: number;
  onChange: (n: number) => void;
  onContactClick: () => void;
  symbol: string;
  extraUserDisplayPrice: number;
  t: (key: string) => string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Users className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="text-sm font-medium text-foreground">{t("pricing.number_of_users")}</span>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:border-primary/50 transition-colors"
        >
          <span>{users} {users === 1 ? t("pricing.user_singular") : t("pricing.user_plural")}</span>
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
                {n} {n === 1 ? t("pricing.user_singular") : t("pricing.user_plural")}
                {n > 1 && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    +{symbol}{(n - 1) * extraUserDisplayPrice}{t("pricing.mo")}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        {t("pricing.need_more_users")}{" "}
        <button
          type="button"
          onClick={onContactClick}
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          {t("pricing.contact_us")}
        </button>
      </p>
    </div>
  );
};

const PricingStageSelector = () => {
  const { t } = useTranslation("pricing");
  const [userCounts, setUserCounts] = useState<Record<string, number>>({
    "planning-pro": 1,
    "studio-pro": 1,
  });
  const [contactOpen, setContactOpen] = useState(false);
  const { symbol, getPrice, currency } = useCurrency();

  const getDisplayPrice = (tier: Tier) => {
    if (tier.basePrice === null) return t("pricing.free_label");
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
        {tier.badgeKey && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            {t(tier.badgeKey)}
          </span>
        )}

        <h3 className="text-xl font-bold text-foreground mb-2">{t(tier.nameKey)}</h3>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-4xl font-bold gradient-text">{getDisplayPrice(tier)}</span>
          {tier.basePrice === null && (
            <span className="text-sm text-muted-foreground ml-1">{t("pricing.always")}</span>
          )}
          {tier.basePrice !== null && (
            <span className="text-muted-foreground text-sm">{t("pricing.per_month")}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-6">{t(tier.taglineKey)}</p>

        {tier.includesKey && (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t(tier.includesKey)}</p>
        )}

        <ul className="space-y-3 mb-6 flex-1">
          {tier.featureKeys.map((fk, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{t(fk)}</span>
            </li>
          ))}
        </ul>

        {tier.detailKeys && (
          <div className="border-t border-border pt-5 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t("pricing.plan_details")}</p>
            <ul className="space-y-2 text-sm text-foreground">
              {tier.detailKeys.map((dk, i) => (
                <li key={i}>{t(dk)}</li>
              ))}
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
            t={t}
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
          {t(tier.ctaKey)}
          {!tier.disabled && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
        </Button>

        {tier.footerKey && !tier.footerIsContact && (
          <p className="text-xs text-muted-foreground text-center mt-4">{t(tier.footerKey)}</p>
        )}
        {tier.footerKey && tier.footerIsContact && (
          <p className="text-xs text-muted-foreground text-center mt-4">
            {t(tier.footerKey)}{" "}
            <button type="button" onClick={() => setContactOpen(true)} className="underline text-primary hover:text-primary/80 transition-colors">
              {t("pricing.contact_us")}
            </button>
          </p>
        )}
      </motion.div>
    );
  };

  return (
    <>
      <section id="plans" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("pricing.section1_title")}{" "}
              <span className="gradient-text">{t("pricing.section1_title_gradient")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("pricing.section1_subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            {section1Tiers.map((tier, index) => renderTierCard(tier, index))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">{t("pricing.section2_title_gradient")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("pricing.section2_subtitle")}
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
