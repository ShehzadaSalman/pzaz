import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCurrency } from "@/hooks/use-currency";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { Quote, Star, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import SharedCTA from "@/components/SharedCTA";
import ArrowIcon from "@/components/ui/ArrowIcon";

import heroDashboard from "@/assets/breakdown/hero-dashboard.webp";
import problemTools from "@/assets/breakdown/problem-tools.webp";
import solutionAssets from "@/assets/breakdown/solution-assets.webp";
import featureFormatting from "@/assets/breakdown/feature-formatting.webp";
import featureCollaboration from "@/assets/breakdown/feature-collaboration.webp";
import featureImportExport from "@/assets/breakdown/feature-import-export.webp";
import featureAiResearch from "@/assets/breakdown/feature-ai-research.webp";
import featureSceneSyncing from "@/assets/breakdown/feature-scene-syncing.webp";

import cardIconBudget from "@/assets/card-icon-budget-product.svg";
import cardIconStoryboard from "@/assets/card-icon-storyboard.svg";
import cardIconStudio from "@/assets/card-icon-studio.svg";

/* ───────── data ───────── */

const featurePills = [
  "Standard formatting",
  "Real-Time Collaboration",
  "Import & Export",
  "AI Research Assistant",
  "Scene-by-Scene Syncing",
];

const coreFeatures = [
  {
    title: "Industry-Standard Formatting.",
    description:
      "Proper screenplay formatting is automatic. Focus on the story, not spacing or margins.",
    image: featureFormatting,
    alt: "Pzaz scene breakdowns and asset tracking interface",
  },
  {
    title: "Real-Time Collaboration.",
    description:
      "Write together with co-writers in real time. Leave comments, make suggestions, track changes — just like in Google Docs, but for scripts.",
    image: featureCollaboration,
    alt: "Pzaz budget and asset management interface",
  },
  {
    title: "Import & Export Flexibility.",
    description:
      "Import from Final Draft or other major formats with full compatibility. Export to PDF for sharing, or CSV for production tools, budgeting, or breakdowns.",
    image: featureImportExport,
    alt: "Pzaz schedule and equipment budget interface",
  },
  {
    title: "Built-In AI Research Assistant.",
    description:
      "Stuck on a scene? Need a quick lookup or spark of inspiration? Use AI to refine dialogue, brainstorm ideas or clarify structure.",
    image: featureAiResearch,
    alt: "Pzaz casting, auditions and task management tools",
  },
  {
    title: "Scene-by-Scene Syncing.",
    description:
      "Each scene is automatically synced with your breakdown, storyboard, stripboard and budget. When you rewrite a scene, your entire project stays up to date.",
    image: featureSceneSyncing,
    alt: "Pzaz location scouting map tool",
  },
];

const products = [
  {
    icon: cardIconBudget,
    name: "Pzaz Budget",
    tagline: "Professional budgeting & cost control",
    description:
      "For producers and line producers who need clarity and confidence. Turn your script into a structured production budget that stays in sync as plans change.",
    priceMonthly: 49,
    priceAnnual: 59,
  },
  {
    icon: cardIconStoryboard,
    name: "Pzaz Storyboard",
    tagline: "Visualise the film before you shoot",
    description:
      "For directors and visual storytellers. Turn scenes into storyboards in seconds and refine shots collaboratively before production starts.",
    priceMonthly: 39,
    priceAnnual: 49,
  },
  {
    icon: cardIconStudio,
    name: "Pzaz Studio",
    tagline: "All-in-one production system",
    description:
      "For full productions and teams that need everything connected in real time. Script, schedule, budget, storyboard, and collaboration in one live workspace.",
    priceMonthly: 199,
    priceAnnual: 199,
    featured: true,
  },
];

const testimonials = [
  {
    quote:
      "Pzaz has totally changed how I manage my shoots. With everything from script breakdowns to scheduling in one place, I am not searching for details all the time. It's organised and efficient, exactly what I need.",
    author: "Alex T.",
    role: "Screenwriter, France",
  },
  {
    quote:
      "As a director, having clear communication and cohesive vision is everything. Pzaz feels like it's made for indie filmmakers like me, who must wear many hats on set. It's helped us stay organised and stay in budget, no matter the project size.",
    author: "Jamie R.",
    role: "Film Director, UK",
  },
  {
    quote:
      "For screenwriters, Pzaz is truly refreshing. The breakdown tools bring my ideas to life in a way that's quickly useful for production team. And with scheduling and location scouting there as well, it has all I need in one place.",
    author: "Marta L.",
    role: "Independent Producer, Italy",
  },
];

/* ───────── page ───────── */

const Breakdown = () => (
  <PageLayout>
    <SEO
      title="Pzaz Breakdown – AI Script Breakdown for Film Production"
      description="Break down your script in one click. Pzaz automatically identifies characters, props, wardrobe, and more — turning your screenplay into a production-ready plan."
      url="https://pzaz.io/breakdown"
      canonical="https://pzaz.io/breakdown"
      keywords={[
        "script breakdown software",
        "film production breakdown",
        "AI script breakdown",
        "pre-production planning",
        "automated breakdown",
        "Pzaz Breakdown",
        "screenplay breakdown tool",
      ]}
    />

    {/* ── Hero ── */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16 lg:pb-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 30% 40%, rgba(170,166,255,0.18) 0%, rgba(170,166,255,0) 80%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-6">
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
                Why
              </span>{" "}
              Breakdown Is the Backbone of Pre-Production.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              You've got your script — but until it's broken down, you don't have a production. The breakdown transforms the story into logistics: what you need, where you need it, and who needs to do it. Yet for most filmmakers, breakdowns are tedious, manual, and error-prone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Pzaz automates the heavy lifting. With smart breakdowns and seamless integration into your scheduling, casting, budgeting, and location planning, your script doesn't just live on the page. It becomes your production engine.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Link to="/pricing">
                <Button size="lg" className="group px-8">
                  Try Pzaz Scriptwriting
                  <ArrowIcon className="w-12 h-12 group-hover:translate-x-1 text-white" />
                </Button>
              </Link>
              <span className="text-sm text-muted-foreground leading-tight">
                TRY FOR FREE.<br />NO CREDIT CARD.
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Trusted by 5,000+ film makers from all around the globe.</p>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={heroDashboard}
              alt="Pzaz film production dashboard showing a detailed script breakdown with scene titles, locations, and shoot sequences."
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── Problem ── */}
    <section className="section-padding bg-[#fbfbfb]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSectionHeader
          wrapperClassName="mb-12"
          pillText="The Problem"
          pillClassName="bg-[#FF404017] text-[#EB5757]"
          title={
            <>
              Stop Repeating Work and{" "}
              <span className="text-[#FF4040]">Start Creating</span>
            </>
          }
          description="Breakdowns are where the real planning begins. But why spend hours tagging the same things over and over, or rewriting spreadsheets by hand?"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={problemTools}
            alt="Icons of film production, budgeting, and spreadsheet apps with warning signs showing disconnected tools."
            className="max-w-full md:max-w-2xl h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

    {/* ── Solution ── */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSectionHeader
          wrapperClassName="mb-12"
          pillText="The Solution"
          pillClassName="bg-primary/10 text-primary"
          title="Turn Your Script into a Production Plan Instantly"
          description="With Pzaz, you can break down your script in one click — automatically identifying characters, props, wardrobe, set pieces, and more. From there, you assign responsibilities, prep your schedule, organize your cast, and build your budget. It's fast, accurate, and totally integrated."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <img
            src={solutionAssets}
            alt="Pzaz film production interface showing asset management for props, costumes, and equipment alongside scene breakdowns."
            className="max-w-full h-auto rounded-2xl shadow-md"
            loading="lazy"
          />
        </motion.div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {featurePills.map((pill) => (
            <Pill key={pill} text={pill} className="bg-primary/10 text-primary border border-primary/20" />
          ))}
        </div>
      </div>
    </section>

    {/* ── Core Features ── */}
    <section className="section-padding bg-[#fbfbfb]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSectionHeader
          wrapperClassName="mb-16"
          pillText="Core Features"
          pillClassName="bg-primary/10 text-primary"
          title="Everything You Need in One Place."
        />

        <div className="space-y-24">
          {coreFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </div>
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-auto rounded-2xl shadow-md"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Products ── */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSectionHeader
          wrapperClassName="mb-4"
          pillText="Products"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Built for filmmakers who{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
                actually finish films.
              </span>
            </>
          }
          description="Pzaz is made for filmmaker entrepreneurs, directors, producers, and teams who understand that making a film isn't just about creativity; it's about execution."
        />
        <p className="text-center text-muted-foreground mb-12">
          <strong>Start with everything —</strong> <em>or just what you need.</em>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border p-8 flex flex-col ${product.featured ? "border-primary shadow-lg" : "border-border/50"} bg-card`}
            >
              <img src={product.icon} alt="" className="w-10 h-10 mb-4" />
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-foreground">{symbol}{convertPrice(product.priceMonthly)}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground line-through mb-4">{symbol}{convertPrice(product.priceAnnual)}/mo</p>
              <h3 className="text-xl font-bold mb-1 text-foreground">{product.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{product.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{product.description}</p>
              <Link to="/pricing">
                <Button variant={product.featured ? "default" : "outline"} className="w-full group">
                  Explore {product.name.replace("Pzaz ", "")}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground mt-3 text-center">Upgrade anytime. Your project stays intact.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Testimonials ── */}
    <section className="section-padding bg-[#fbfbfb]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="Trusted by Creators"
          pillClassName="bg-primary/10 text-primary"
          title="Trusted by Industry Professionals."
          description="From screenwriters to directors, Pzaz is the go-to tool for bringing stories to life and ensuring your creative vision reaches the screen easily."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <SharedCTA
      pillText="Free for 7 days"
      title={
        <>
          Break down your script.
          <br />
          Build your production.
        </>
      }
      description="Your story deserves a tool built for the future. Start breaking down today — it's free, no credit card required."
      primaryButtonText="Get Started Free"
      secondaryButtonText="Book a demo"
      showLanguagesImage={false}
      backgroundStyle={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
    />

    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Pzaz Breakdown",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web",
          description:
            "AI-powered script breakdown tool for film production. Automatically identifies characters, props, wardrobe, and more.",
          url: "https://pzaz.io/breakdown",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free trial, no credit card required",
          },
        }),
      }}
    />
  </PageLayout>
);

export default Breakdown;
