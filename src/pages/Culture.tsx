import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

import heroBanner from "@/assets/culture/hero-banner.webp";
import principle1 from "@/assets/culture/principle-1.png";
import principle2 from "@/assets/culture/principle-2.png";
import principle3 from "@/assets/culture/principle-3.png";
import principle4 from "@/assets/culture/principle-4.png";
import culture1 from "@/assets/culture/culture-1.png";
import culture2 from "@/assets/culture/culture-2.png";
import culture3 from "@/assets/culture/culture-3.png";
import culture4 from "@/assets/culture/culture-4.png";
import culture5 from "@/assets/culture/culture-5.png";
import valuesLogo from "@/assets/culture/values-logo.png";
import dream1 from "@/assets/culture/dream-1.png";
import dream2 from "@/assets/culture/dream-2.png";
import dream3 from "@/assets/culture/dream-3.png";
import dream4 from "@/assets/culture/dream-4.png";
import dream5 from "@/assets/culture/dream-5.png";
import dream6 from "@/assets/culture/dream-6.png";

const principles = [
  { icon: principle1, title: "Clarity of Why.", desc: "We always know why we do what we do—because clarity inspires and builds trust and loyalty." },
  { icon: principle2, title: "Consistency of What.", desc: "What we do proves what we believe. We deliver top-quality services and aim to exceed expectations at every touchpoint." },
  { icon: principle3, title: "The Discipline of How.", desc: "Innovation drives us. Accountability guides us. Trust sustains us. We deliver what we promise and create groundbreaking solutions." },
  { icon: principle4, title: "The Cult of Amazement.", desc: "We're not just better than average—we aim to amaze. Everyday 'Wow' moments build trust, and occasional 'Pow' moments deepen connections." },
];

const cultureTraits = [
  { icon: culture1, text: "Employees make independent decisions." },
  { icon: culture2, text: "We share information openly and honestly." },
  { icon: culture3, text: "We prioritize candid communication." },
  { icon: culture4, text: "We avoid unnecessary rules." },
  { icon: culture5, text: "We keep only those that show they want it." },
];

const values = [
  { title: "Courage.", desc: "Speak up, take smart risks, and embrace vulnerability for the truth." },
  { title: "Curiosity.", desc: "Learn eagerly, think creatively, and seek diverse perspectives." },
  { title: "Impact.", desc: "Deliver results, make colleagues better, and prioritize what matters." },
  { title: "Selflessness.", desc: "Put Pzaz first, stay open-minded, and help others succeed." },
  { title: "Passion.", desc: "Inspire excellence, care deeply, and stay optimistic." },
  { title: "Integrity.", desc: "Be authentic, transparent, and respectful. Own mistakes." },
  { title: "Innovation.", desc: "Solve hard problems, simplify, and thrive on change." },
  { title: "Communication.", desc: "Clear, concise, and open. Listen well, adapt, and give timely feedback." },
];

const dreamTeam = [
  { icon: dream1, title: "Better.", desc: "We're always striving to improve, turning every experience into a step toward excellence." },
  { icon: dream2, title: "Capable.", desc: "It's not just about brilliance—it's about collaboration, creativity, and shared success. Rewards grow with achievements." },
  { icon: dream3, title: "Feedback.", desc: "Honesty over kindness, respect above all. Open communication fosters constant improvement." },
  { icon: dream4, title: "Stability & Sustainability.", desc: "We grow together in good times and stand strong in challenges, prioritizing sustainable success over speed." },
  { icon: dream5, title: "Trust.", desc: "Mutual support and belief in each other's skills drive our collective success." },
  { icon: dream6, title: "Unique.", desc: "We seek trailblazers—those unafraid of risks and eager to grow with us, shaping the future together." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Culture = () => {
  return (
    <PageLayout>
      <SEO
        title="Our Culture – Pzaz"
        description="Discover Pzaz's culture manifesto — our principles, values, and what makes our dream team tick."
        url="https://pzaz.io/culture"
        keywords={["pzaz culture", "film production culture", "pzaz values", "pzaz team"]}
      />

      {/* Hero */}
      <section className="pt-28 pb-0">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <span className="text-[#20124D]">Pzaz </span>
            <span className="bg-gradient-to-r from-[#8B1DFF] to-[#D946EF] bg-clip-text text-transparent">Culture.</span>
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8">
          <img src={heroBanner} alt="Pzaz Culture hero banner" className="w-full rounded-2xl" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#20124D]" style={{ fontFamily: "'Lato', sans-serif" }}>
            Our Culture Manifesto.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#4E2273]" style={{ fontFamily: "'Lato', sans-serif" }}>
            At Pzaz.io, we believe film culture is as essential as friendship—it connects us, inspires us, and creates shared experiences. That's why we're committed to support the creation and delivery of stories to audiences around the globe.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#4E2273] mt-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            Exceptional customer experiences drive everything we do, and we know that starts with an extraordinary employee culture. That's why we aim to be leaner, faster, more innovative, and better—every single day.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#4E2273] mt-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            If you're considering joining us, take a moment to understand how we operate. Our approach may not suit everyone, but it defines who we are: a team dedicated to insight, innovation, and making an impact.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#20124D]" style={{ fontFamily: "'Lato', sans-serif" }}>
            Our Principles.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/80 rounded-2xl p-8 text-center border border-[#D4BAF4]"
              >
                <img src={p.icon} alt={p.title} className="w-16 h-16 mx-auto mb-5" />
                <h3 className="text-lg font-bold text-[#20124D] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>{p.title}</h3>
                <p className="text-sm text-[#4E2273] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pzaz Culture */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#20124D]" style={{ fontFamily: "'Lato', sans-serif" }}>
            The Pzaz Culture.
          </h2>
          <p className="text-base md:text-lg text-[#4E2273] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            At Pzaz, people come first. We thrive on flexibility, creativity, and collaboration, making us a fun, happy and successful organisation.
          </p>
          <p className="text-base md:text-lg text-[#4E2273] mb-10" style={{ fontFamily: "'Lato', sans-serif" }}>
            We value integrity, excellence, respect, inclusion, and teamwork. What sets us apart:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cultureTraits.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3"
              >
                <img src={t.icon} alt={t.text} className="w-14 h-14" />
                <p className="text-sm font-medium text-[#20124D] text-center" style={{ fontFamily: "'Lato', sans-serif" }}>{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <img src={valuesLogo} alt="Pzaz values" className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
              Our Values.
            </h2>
            <p className="text-base md:text-lg text-[#4E2273]" style={{ fontFamily: "'Lato', sans-serif" }}>
              At Pzaz, our values shape who we reward and retain. If these resonate with you, you'll thrive here:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/80 rounded-2xl p-6 border border-[#D4BAF4]"
              >
                <h3 className="text-base font-bold text-[#20124D] mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>{v.title}</h3>
                <p className="text-sm text-[#4E2273] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Team */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
              The Dream Team.
            </h2>
            <p className="text-base md:text-lg text-[#4E2273] max-w-3xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              At Pzaz, our dream team is decentralized yet united by shared goals. We seek individuals who thrive independently but excel collaboratively, embodying a mindset of continuous growth, open feedback, and mutual respect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {dreamTeam.map((d, i) => (
              <motion.div
                key={d.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl p-8 bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5] border border-[#D4BAF4] text-center"
              >
                <img src={d.icon} alt={d.title} className="w-full rounded-xl mb-5" />
                <h3 className="text-lg font-bold text-[#20124D] mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>{d.title}</h3>
                <p className="text-sm text-[#4E2273] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Culture;
