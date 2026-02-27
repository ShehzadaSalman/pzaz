import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const coreFeatures = [
  {
    title: "Industry-Standard Formatting.",
    description:
      "Proper screenplay formatting is automatic. Focus on the story, not spacing or margins.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10126685.png",
    imageAlt: "Pzaz.io industry-standard screenplay formatting interface",
  },
  {
    title: "Real-Time Collaboration.",
    description:
      "Write together with co-writers in real time. Leave comments, make suggestions, track changes — just like in Google Docs, but for scripts.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10126702.png",
    imageAlt: "Pzaz.io real-time script collaboration interface",
  },
  {
    title: "Import & Export Flexibility.",
    description:
      "Import from Final Draft or other major formats with full compatibility. Export to PDF for sharing, or CSV for production tools, budgeting, or breakdowns.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10126613.png",
    imageAlt: "Pzaz.io import and export script compatibility options",
  },
  {
    title: "Built-In AI Research Assistant.",
    description:
      "Stuck on a scene? Need a quick lookup or spark of inspiration? Use AI to refine dialogue, brainstorm ideas or clarify structure.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10126697.png",
    imageAlt: "Pzaz.io AI research assistant for screenwriters",
  },
  {
    title: "Scene-by-Scene Syncing.",
    description:
      "Each scene is automatically synced with your breakdown, storyboard, stripboard and budget. When you rewrite a scene, your entire project stays up to date.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10127006.png",
    imageAlt: "Pzaz.io scene-by-scene syncing across production tools",
  },
];

const testimonials = [
  {
    quote:
      "Pzaz has totally changed how I manage my shoots. With everything from script breakdowns to scheduling in one place, I am not searching for details all the time. It's organised and efficient, exactly what I need.",
    name: "Alex T.",
    role: "Screenwriter, France",
    image: "https://pzaz.io/wp-content/uploads/2025/09/rew_3.png",
  },
  {
    quote:
      "As a director, having clear communication and cohesive vision is everything. Pzaz feels like it's made for indie filmmakers like me, who must wear many hats on set. It's helped us stay organised and stay in budget, no matter the project size.",
    name: "Jamie R.",
    role: "Film Director, UK",
    image: "https://pzaz.io/wp-content/uploads/2025/09/rew_1.png",
  },
  {
    quote:
      "For screenwriters, Pzaz is truly refreshing. The breakdown tools bring my ideas to life in a way that's quickly useful for production team. And with scheduling and location scouting there as well, it has all I need in one place.",
    name: "Marta L.",
    role: "Independent Producer, Italy",
    image: "https://pzaz.io/wp-content/uploads/2025/09/rew_2.png",
  },
];

const Sell = () => {
  return (
    <>
      <SEO
        title="Pzaz Sell – Film Sales, Distribution & Marketing Workspace"
        description="Pzaz Sell is your mission control for film marketing, outreach, and distribution. Pitch your script, plan festivals, manage licensing, and deliver assets — all in one place."
        url="https://pzaz.io/sell"
        canonical="https://pzaz.io/sell"
        keywords={[
          "film distribution tools",
          "film sales workspace",
          "screenplay marketing",
          "film festival planning",
          "film licensing",
          "pzaz sell",
          "filmmaker entrepreneur",
          "film pitch tools",
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[#F8F8FC] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#4E2273] uppercase tracking-widest mb-3">
              Pzaz Sell
            </p>
            <h1 className="font-lato font-extrabold text-4xl md:text-5xl leading-tight text-[#20124D] mb-6">
              Why Filmmakers Need a Sales & Distribution Workspace.
            </h1>
            <p className="text-lg text-[#4E4E6A] mb-4">
              Creating something great is just the beginning.
            </p>
            <p className="text-lg text-[#4E4E6A] mb-4">
              In today's industry, a filmmaker isn't just an artist — they're an entrepreneur. That means you need to know how to pitch, package, promote, and close. Whether you're selling a script, licensing your finished film, or preparing for festivals, distribution is a full-time job and without the right tools, it becomes overwhelming fast.
            </p>
            <p className="text-lg font-semibold text-[#20124D] mb-8">
              That's why Pzaz includes <strong>Sell</strong>: your mission control for marketing, outreach, and distribution.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://pzaz.io/pricing-page/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4E2273] hover:bg-[#3a1857] text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Try Pzaz Free
              </a>
              <span className="text-sm text-[#878787]">No credit card. Trusted by 5,000+ filmmakers.</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://pzaz.io/wp-content/uploads/2025/10/pzaz-io-film-marketing-campaign-management-dashboard.png"
              alt="Pzaz.io marketing dashboard for filmmakers showing audience development, press and promotion tasks, and social media strategy planning"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#4E2273] mb-2">The Problem</p>
            <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] mb-6">
              From Final Cut to First Audience
            </h2>
            <p className="text-[#4E4E6A]">
              Most filmmakers stop at the final cut — but the industry doesn't. You still have to pitch, market, and distribute. And that requires clarity, coordination, and professionalism.
            </p>
          </div>
          <img
            src="https://pzaz.io/wp-content/uploads/2025/10/pzaz-io-film-marketing-tools-overload.png"
            alt="Icons of marketing and creative tools with alert notifications representing the challenge of managing multiple apps before using Pzaz.io"
            className="w-full rounded-2xl shadow-md"
            loading="lazy"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mt-20">
          <img
            src="https://pzaz.io/wp-content/uploads/2025/10/2-3.png"
            alt="Pzaz.io marketing dashboard for filmmakers showing audience development, press and promotion tasks, and social media strategy planning"
            className="w-full rounded-2xl shadow-md order-2 md:order-1"
            loading="lazy"
          />
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4E2273] mb-2">The Solution</p>
            <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] mb-6">
              Turn Your Finished Project into Real Opportunities
            </h2>
            <p className="text-[#4E4E6A]">
              Pzaz's Sell stage helps you go beyond the edit — supporting your funding outreach, festival planning, licensing process, and asset delivery. It's not just a tool for making things — it's a tool for making deals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-[#F8F8FC]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#4E2273] mb-3">Core Features</p>
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-16">
            Everything You Need in One Place.
          </h2>
          <div className="space-y-20">
            {coreFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <h3 className="font-lato font-bold text-2xl text-[#20124D] mb-4">{feature.title}</h3>
                  <p className="text-[#4E4E6A] leading-relaxed">{feature.description}</p>
                </div>
                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full rounded-2xl shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-12">
            Trusted by Industry Professionals.
          </h2>
          <p className="text-center text-[#878787] mb-12 max-w-2xl mx-auto">
            From screenwriters to directors, Pzaz is the go-to tool for bringing stories to life and ensuring your creative vision reaches the screen easily.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#F8F8FC] rounded-2xl p-8 border border-[#e0e0e0] flex flex-col gap-4"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="text-[#4E4E6A] text-sm leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-[#20124D] text-sm">{t.name}</p>
                  <p className="text-[#878787] text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#20124D] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl mb-6">
            Ready to Turn Your Film Into a Business?
          </h2>
          <p className="text-[#c4b5d9] text-lg mb-8">
            Pzaz Sell gives you everything you need to pitch, market, and distribute — all in one connected workspace alongside your scripts, schedules, and budgets.
          </p>
          <a
            href="https://pzaz.io/pricing-page/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#20124D] font-bold px-10 py-4 rounded-full hover:bg-[#f0eaf8] transition-colors text-lg"
          >
            Start For Free
          </a>
          <p className="mt-4 text-sm text-[#c4b5d9]">No credit card required.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sell;
