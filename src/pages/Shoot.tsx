import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const coreFeatures = [
  {
    title: "Industry-Standard Formatting.",
    description:
      "Proper screenplay formatting is automatic. Focus on the story, not spacing or margins.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10127021.png",
    imageAlt: "Pzaz.io industry-standard shoot day formatting interface",
  },
  {
    title: "Real-Time Collaboration.",
    description:
      "Write together with co-writers in real time. Leave comments, make suggestions, track changes — just like in Google Docs, but for scripts.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10127025.png",
    imageAlt: "Pzaz.io real-time on-set collaboration interface",
  },
  {
    title: "Import & Export Flexibility.",
    description:
      "Import from Final Draft or other major formats with full compatibility. Export to PDF for sharing, or CSV for production tools, budgeting, or breakdowns.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10127024.png",
    imageAlt: "Pzaz.io import and export flexibility for shoot day files",
  },
  {
    title: "Built-In AI Research Assistant.",
    description:
      "Stuck on a scene? Need a quick lookup or spark of inspiration? Use AI to refine dialogue, brainstorm ideas or clarify structure.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10127023.png",
    imageAlt: "Pzaz.io built-in AI research assistant for shoot day decisions",
  },
  {
    title: "Scene-by-Scene Syncing.",
    description:
      "Each scene is automatically synced with your breakdown, storyboard, stripboard and budget. When you rewrite a scene, your entire project stays up to date.",
    image: "https://pzaz.io/wp-content/uploads/2025/10/Group-10127022.png",
    imageAlt: "Pzaz.io scene-by-scene syncing across all production tools on shoot day",
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

const Shoot = () => {
  return (
    <>
      <SEO
        title="Pzaz Shoot – Real-Time On-Set Production Command Center"
        description="Pzaz Shoot is your real-time command center for shoot days. Instant call sheet updates, live team alignment, script changes, and on-set collaboration — all in one place."
        url="https://pzaz.io/shoot"
        canonical="https://pzaz.io/shoot"
        keywords={[
          "on-set production tools",
          "film shoot management",
          "real-time call sheets",
          "shoot day software",
          "pzaz shoot",
          "film production command center",
          "on-set collaboration",
          "indie film shoot tools",
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[#F8F8FC] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#4E2273] uppercase tracking-widest mb-3">
              Pzaz Shoot
            </p>
            <h1 className="font-lato font-extrabold text-4xl md:text-5xl leading-tight text-[#20124D] mb-6">
              Why Real-Time Tools Matter Most During the Shoot.
            </h1>
            <p className="text-lg text-[#4E4E6A] mb-4">
              Shooting days are controlled chaos. Time is tight, emotions are high, and every second counts. One delay, one wrong version of the call sheet or one miscommunication can cost thousands — or worse, kill momentum.
            </p>
            <p className="text-lg font-semibold text-[#20124D] mb-8">
              That's why during production, you need more than a planning tool — you need a real-time command center. That's what Pzaz delivers.
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
              src="https://pzaz.io/wp-content/uploads/2025/10/1-2.png"
              alt="Pzaz.io shoot day production dashboard showing real-time collaboration and on-set management tools"
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
              Clarity in the Heat of Production
            </h2>
            <p className="text-[#4E4E6A]">
              When you're on set, you don't have time to open five apps or send ten messages. You need instant clarity.
            </p>
          </div>
          <img
            src="https://pzaz.io/wp-content/uploads/2025/10/pzaz-io-film-production-tool-multiple-apps-overload.jpg.png"
            alt="Icons of messaging, project management, and spreadsheet apps with alert symbols representing creative teams overwhelmed by too many tools"
            className="w-full rounded-2xl shadow-md"
            loading="lazy"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mt-20">
          <img
            src="https://pzaz.io/wp-content/uploads/2025/10/pzaz-io-film-production-collaboration-script-feedback-dashboard.jpg.png"
            alt="Collaborative film production workspace on Pzaz.io showing script breakdown, team chat, comments, and visual storyboard panels"
            className="w-full rounded-2xl shadow-md order-2 md:order-1"
            loading="lazy"
          />
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4E2273] mb-2">The Solution</p>
            <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] mb-6">
              Stay Aligned, No Matter What Changes
            </h2>
            <p className="text-[#4E4E6A]">
              With Pzaz, your shoot stays on track — even when things change. From last-minute script tweaks to location shifts to cast changes — Pzaz updates everything instantly, notifies the right people, and keeps everyone aligned. It's like having a digital AD in your pocket.
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
              <div key={feature.title} className="grid md:grid-cols-2 gap-12 items-center">
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
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-4">
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
            Your Shoot Deserves a Real-Time Command Center.
          </h2>
          <p className="text-[#c4b5d9] text-lg mb-8">
            Stop relying on scattered apps and outdated call sheets. Pzaz keeps your entire crew aligned — instantly, on every device, in 30+ languages.
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

export default Shoot;
