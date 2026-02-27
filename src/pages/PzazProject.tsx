import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Instantly Organized, Completely Free",
    description:
      "Start building your project with Boards, Docs, Messaging, and Drive — instantly, with full access and zero commitments. Instead of learning new tools, your team gets one place where everything stays organized automatically. Files, ideas, conversations and tasks all land exactly where they belong.",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-production-budgeting-cost-tracking.png.webp",
    imageAlt: "Film production budgeting interface on Pzaz.io showing equipment costs, rental rates, and expense tracking",
  },
  {
    title: "A Unified Workspace for Every Team",
    description:
      "Scripts, docs, assets, and boards stay linked across your entire production. Every update flows naturally.",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-production-expenses-budget-tracking.png.webp",
    imageAlt: "Film production budgeting interface on Pzaz.io showing expenses for lighting, sound gear, and camera lenses",
  },
  {
    title: "Smart Inbox as Your Central Brain",
    description:
      "All project activity — notes, comments, messages, file updates — lands in one clean, filterable hub.",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-production-equipment-scheduling-dashboard.png.webp",
    imageAlt: "Film production equipment layout with cameras alongside Pzaz.io scheduling interface",
  },
  {
    title: "Real-Time Collaboration in 30+ Languages",
    description:
      "Your team works together instantly, across countries, devices, and disciplines.",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-production-task-management-collaboration.png.webp",
    imageAlt: "Laptop with Pzaz.io platform showing team collaboration, equipment purchasing tasks, and crew member assignments",
  },
  {
    title: "Built to Scale with Your Production",
    description:
      "Future-ready with Address Book, Calendar, and Gantt on the way. Plus a 7-day AI trial to preview everything Pzaz can do.",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-crew-permissions-management-dashboard.png.webp",
    imageAlt: "Film crew on set using Pzaz.io to manage user permissions, access rights, and production item details",
  },
];

const uniquePoints = [
  {
    title: "One Flow Philosophy",
    description: "All your tools connect — everything updates automatically, eliminating rework, redundancy, and uncertainty.",
  },
  {
    title: "AI That Assists, Not Replaces",
    description: "Use your 7-day AI credit trial to see how Pzaz enhances your workflow while keeping the creative decisions human.",
  },
  {
    title: "Real-Time Collaboration",
    description: "Invite your team, share updates instantly, and work across languages and locations.",
  },
  {
    title: "Modular & Scalable",
    description: "Start free. Grow into scripts, budgeting, scheduling, casting, and more — whenever your project needs it.",
  },
  {
    title: "Human-Centric Design",
    description: "Created by filmmakers who know how productions work under pressure.",
  },
];

const testimonials = [
  {
    quote: "Pzaz has totally changed how I manage my shoots. With everything from script breakdowns to scheduling in one place, I am not searching for details all the time. It's organised and efficient, exactly what I need.",
    name: "Alex T.",
    role: "Screenwriter, France",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/09/rew_3.png.webp",
  },
  {
    quote: "As a director, having clear communication and cohesive vision is everything. Pzaz feels like it's made for indie filmmakers like me, who must wear many hats on set. It's helped us stay organised and stay in budget, no matter the project size.",
    name: "Jamie R.",
    role: "Film Director, UK",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/09/rew_1.png.webp",
  },
  {
    quote: "For screenwriters, Pzaz is truly refreshing. The breakdown tools bring my ideas to life in a way that's quickly useful for production team. And with scheduling and location scouting there as well, it has all I need in one place.",
    name: "Marta L.",
    role: "Independent Producer, Italy",
    image: "https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/09/rew_2.png.webp",
  },
];

const PzazProject = () => {
  return (
    <>
      <SEO
        title="Pzaz Project – Your Film Production Command Center"
        description="Pzaz Project unifies your entire film production into one connected workspace. Boards, Docs, Messaging, Drive, and Smart Inbox — all in one place. Free to start."
        url="https://pzaz.io/pzaz-project"
        canonical="https://pzaz.io/pzaz-project"
        keywords={[
          "film production software",
          "film project management",
          "collaborative filmmaking tool",
          "production workspace",
          "pzaz project",
          "indie film tools",
          "film team collaboration",
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[#F8F8FC] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#4E2273] uppercase tracking-widest mb-3">Step 0 of the Pzaz Flow</p>
            <h1 className="font-lato font-extrabold text-4xl md:text-5xl leading-tight text-[#20124D] mb-6">
              Why Your Production Deserves a True Creative Hub
            </h1>
            <p className="text-lg text-[#4E4E6A] mb-4">
              Every film relies on communication, organization, and coordination. Yet most productions juggle scattered tools — Chats in one place. Documents in another. Boards somewhere else. Files lost in the void.
            </p>
            <p className="text-lg text-[#4E4E6A] mb-4">
              When information is fragmented, creativity slows and the entire production suffers.
            </p>
            <p className="text-lg font-semibold text-[#20124D] mb-8">
              <strong>Pzaz Project</strong> fixes that.
            </p>
            <p className="text-base text-[#4E4E6A] mb-8">
              Step 0 of the Pzaz Filmmaking Flow — Project — is your all-in-one command center for organizing your production, collaborating with your team, and keeping every asset, script and update connected.
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
              src="https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-budget-management-dashboard.png.webp"
              alt="Pzaz.io film production dashboard showing budgets, scene breakdowns, and department management"
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
              Current filmmaking workflows are scattered.
            </h2>
            <p className="text-[#4E4E6A] mb-4">
              Teams switch between apps just to share files, track feedback, update boards, take notes, and keep conversation flowing. Key details slip out of alignment as your tools fail to stay connected.
            </p>
            <p className="text-[#4E4E6A]">
              And when every department uses something different, production becomes a game of digital hide-and-seek.
            </p>
          </div>
          <img
            src="https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-production-multiple-tools-overload.png.webp"
            alt="Icons of various film production and spreadsheet apps with alert symbols showing the challenges of multiple disconnected tools"
            className="w-full rounded-2xl shadow-md"
            loading="lazy"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mt-20">
          <img
            src="https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/10/pzaz-io-film-production-budget-equipment-tracking.png.webp"
            alt="Pzaz.io film production dashboard showing equipment budgets, scene breakdowns, and department management"
            className="w-full rounded-2xl shadow-md order-2 md:order-1"
            loading="lazy"
          />
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4E2273] mb-2">The Solution</p>
            <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] mb-6">
              Pzaz Project the Solution
            </h2>
            <p className="text-[#4E4E6A] mb-4">
              Pzaz Project unifies every part of your workflow into one connected workspace.
            </p>
            <p className="text-[#4E4E6A] mb-4">
              Your messages, team boards, docs, drive, personal inbox, and scripts all live together — automatically linked, always up-to-date, ready for real-time collaboration in 30+ languages.
            </p>
            <p className="font-semibold text-[#20124D]">Everything organized. Everything connected. Everything in one place.</p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-[#F8F8FC]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-16">
            Project: Your Filmmaking Command Center
          </h2>
          <div className="space-y-20">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
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

      {/* What Makes Pzaz Unique */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-12">
            What Makes Pzaz Unique at the Project Stage
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniquePoints.map((point) => (
              <div key={point.title} className="bg-[#F8F8FC] rounded-2xl p-8 border border-[#e0e0e0]">
                <h3 className="font-bold text-lg text-[#20124D] mb-3">{point.title}</h3>
                <p className="text-[#4E4E6A] text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-[#F8F8FC]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-4">
            Key Benefits
          </h2>
          <p className="text-center text-[#878787] text-lg mb-14">One Workspace. Zero Friction.</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0]">
              <h3 className="font-bold text-xl text-[#20124D] mb-4">One Workspace. Zero Friction.</h3>
              <p className="text-[#4E4E6A] mb-4">Stop hopping between apps. Pzaz brings everything into one place:</p>
              <ul className="space-y-2 text-[#4E4E6A] text-sm">
                <li>• <strong>Projects</strong> — Your production's home base.</li>
                <li>• <strong>Boards</strong> — Visual task boards for every department.</li>
                <li>• <strong>Docs</strong> — Collaborative creative and production documents.</li>
                <li>• <strong>Drive (20GB included)</strong> — All your files, organized and linked.</li>
                <li>• <strong>Messages</strong> — Topic-based conversations that stay clear.</li>
                <li>• <strong>Smart Inbox</strong> — A single feed for every update.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0]">
              <h3 className="font-bold text-xl text-[#20124D] mb-4">Smart Inbox for Complete Clarity</h3>
              <p className="text-[#4E4E6A] mb-4">Every update, organized:</p>
              <ul className="space-y-2 text-[#4E4E6A] text-sm">
                <li>• All messages, comments, mentions, and tasks</li>
                <li>• Filter by project, topic, or collaborator</li>
                <li>• Never miss a change, deadline, or request</li>
              </ul>
              <p className="mt-4 font-semibold text-[#20124D] text-sm">Your inbox becomes your production assistant.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0]">
              <h3 className="font-bold text-xl text-[#20124D] mb-4">Real-Time Collaboration in 30+ Languages</h3>
              <p className="text-[#4E4E6A] mb-4">Film is global — your tools should be too:</p>
              <ul className="space-y-2 text-[#4E4E6A] text-sm">
                <li>• Automatic language support</li>
                <li>• Cross-border teamwork</li>
                <li>• Seamless communication and comments</li>
                <li>• Instant syncing across devices</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0]">
              <h3 className="font-bold text-xl text-[#20124D] mb-4">Drive Built for Production Assets</h3>
              <p className="text-[#4E4E6A] mb-4">Upload files, share cuts, store paperwork:</p>
              <ul className="space-y-2 text-[#4E4E6A] text-sm">
                <li>• 20GB free storage</li>
                <li>• Easy folder structures</li>
                <li>• Linked to boards, docs, and messages</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://pzaz.io/wp-content/webp-express/webp-images/uploads/2025/11/Pzaz_Built_for.png.webp"
              alt="Pzaz Project built for professional film production teams"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-lato font-extrabold text-3xl md:text-4xl text-[#20124D] text-center mb-12">
            Trusted by Industry Professionals.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F8F8FC] rounded-2xl p-8 border border-[#e0e0e0] flex flex-col gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
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
            From Chaos to Clarity.
          </h2>
          <p className="text-[#c4b5d9] text-lg mb-4">
            Pzaz Project turns your film into one unified, organised ecosystem — where communication flows, files stay accessible, and your team operates as one.
          </p>
          <p className="text-[#c4b5d9] mb-8">
            Great films are built on great collaboration. Pzaz Project gives your production a home.
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

export default PzazProject;
