import React, { useState, useCallback, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import SharedCTA from "@/components/SharedCTA";
import ctaPlayIcon from "@/assets/cta-play-icon.svg";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import aboutHeroBg from "@/assets/about-hero-bg.webp";
import aboutLogo from "@/assets/about-logo.webp";
import aboutCause from "@/assets/about-cause.webp";
import aboutNorthstar from "@/assets/about-northstar.webp";
import slide1 from "@/assets/about-carousel/slide1.webp";
import slide2 from "@/assets/about-carousel/slide2.webp";
import slide3 from "@/assets/about-carousel/slide3.webp";
import slide4 from "@/assets/about-carousel/slide4.webp";
import slide5 from "@/assets/about-carousel/slide5.webp";
import slide6 from "@/assets/about-carousel/slide6.webp";
import slide7 from "@/assets/about-carousel/slide7.webp";
import slide8 from "@/assets/about-carousel/slide8.webp";
import slide9 from "@/assets/about-carousel/slide9.webp";
import slide10 from "@/assets/about-carousel/slide10.webp";
import slide11 from "@/assets/about-carousel/slide11.webp";
import slide12 from "@/assets/about-carousel/slide12.webp";
import slide13 from "@/assets/about-carousel/slide13.webp";
import slide14 from "@/assets/about-carousel/slide14.webp";
import slide15 from "@/assets/about-carousel/slide15.webp";
import slide16 from "@/assets/about-carousel/slide16.webp";
import slide17 from "@/assets/about-carousel/slide17.webp";
import slide18 from "@/assets/about-carousel/slide18.webp";
import slide19 from "@/assets/about-carousel/slide19.webp";
import slide20 from "@/assets/about-carousel/slide20.webp";
import slide21 from "@/assets/about-carousel/slide21.webp";
import slide22 from "@/assets/about-carousel/slide22.webp";
import { useTranslation } from "react-i18next";

const carouselSlides = [
  { src: slide1, caption: '"Before Pzaz, filmmaking was a maze."' },
  { src: slide2, caption: '"A thousand apps, endless chaos. Ideas slipped through the cracks, and dreams drowned in logistics."' },
  { src: slide3, caption: 'Director: "Where\'s the latest script draft?!"' },
  { src: slide4, caption: 'Producer (panicking): "Budget\'s outdated! And the storyboard\'s... gone?"' },
  { src: slide5, caption: 'Editor: groans "Scene 4 has no sound again?!"' },
  { src: slide6, caption: "We're over 20 creators across 20 countries," },
  { src: slide7, caption: "building the most loved, inclusive, and accessible film platform on the planet." },
  { src: slide8, caption: 'Narrator (or Hypno): "At Pzaz, film is more than storytelling. It\'s capturing emotion, dreams, and struggle."' },
  { src: slide9, caption: 'Filmmaker in Morocco: "Finally, a tool that gets me!"' },
  { src: slide10, caption: 'Indie producer in Brazil: "Now I can manage my entire shoot from one place."' },
  { src: slide11, caption: '"And then came Pzaz—the all-in-one producer platform made for filmmakers by filmmakers."' },
  { src: slide12, caption: 'Hypno (mascot): "Let\'s bring Pzaz to this production!"' },
  { src: slide13, caption: 'System pop-ups: "Script. ✔️ Budget. ✔️ Stripboard. ✔️ Collaboration. ✔️"' },
  { src: slide14, caption: '"From idea to launch, Pzaz unifies every step. No more switching tools. No more lost files. Just you and your vision—fully aligned."' },
  { src: slide15, caption: 'Director: "Wait... everything\'s in one place?"' },
  { src: slide16, caption: 'Cinematographer: "This syncs with the shot list too?"' },
  { src: slide17, caption: 'Hypno (winks): "Yep. That\'s Pzaz."' },
  { src: slide18, caption: '"We\'re not a tool. We\'re your creative partner. We\'ve walked in your shoes. We see you. We believe in your story."' },
  { src: slide19, caption: 'Filmmaker: "I didn\'t just make a film—I made a dream come true."' },
  { src: slide20, caption: 'Team in chat window: "Wrap party in 10 mins! 🥳 #GetPzazzed!"' },
  { src: slide21, caption: '"Join the movement. Join the culture. Get Pzazzed."' },
  { src: slide22, caption: 'Hypno (spinning): "One platform. Every vision. All the Pzaz."' },
];

const CarouselShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;
    intervalRef.current = setInterval(() => { emblaApi.scrollNext(); }, 2500);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  useEffect(() => { return () => stopAutoplay(); }, [stopAutoplay]);

  const handleToggle = useCallback(() => {
    if (isPlaying) { stopAutoplay(); setIsPlaying(false); } else { startAutoplay(); setIsPlaying(true); }
  }, [isPlaying, startAutoplay, stopAutoplay]);

  const scrollTo = useCallback((index: number) => { emblaApi?.scrollTo(index); }, [emblaApi]);

  return (
    <div className="rounded-[24px] border-2 border-dashed border-[#D4BAF4] bg-[#F3F3F3] p-6 md:p-10">
      <div className="relative rounded-[16px] overflow-hidden cursor-pointer" onClick={handleToggle}>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {carouselSlides.map((slide, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <div className="relative aspect-video bg-[#E8E0F0] flex items-center justify-center rounded-[16px] overflow-hidden">
                  <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#5C28A4]/75 backdrop-blur-sm px-6 py-4 md:px-10 md:py-5">
                    <p className="font-lato text-white text-base md:text-xl lg:text-2xl font-semibold text-center leading-snug">{slide.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-1"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z" fill="#8B1DFF" /></svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {carouselSlides.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} aria-label={`Go to slide ${i + 1}`} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === i ? "bg-[#8B1DFF] scale-125" : "bg-[#D4BAF4] hover:bg-[#B491E4]"}`} />
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  const { t } = useTranslation("about");

  return (
    <PageLayout>
      <SEO
        title={t("about.seo_title")}
        description={t("about.seo_desc")}
        url="https://pzaz.io/about-us"
        canonical="https://pzaz.io/about-us"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-[60px]">
        <div className="absolute inset-0">
          <img src={aboutHeroBg} alt="Red carpet premiere scene" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <motion.img src={aboutLogo} alt="Pzaz icon" className="w-20 h-20 mb-8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-lato text-lg text-muted-foreground mb-2">
              {t("about.hero_subtitle")}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-lato font-extrabold text-5xl md:text-[64px] md:leading-[70px] mb-8">
              {t("about.hero_title_1")}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
                {t("about.hero_title_2")}
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-lato text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl">
              {t("about.hero_desc")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-[45px]">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[38px] border border-[#D4BAF4] bg-[#F7F2FD] overflow-hidden">
              <div className="pt-8 px-8 md:px-[60px] pb-[60px]">
                <p className="font-lato font-bold text-[#A805FF] text-sm uppercase tracking-wider mb-2">{t("about.vision_label")}</p>
                <h2 className="font-lato font-bold text-2xl text-foreground mb-[30px]">{t("about.vision_title")}</h2>
                <p className="font-lato text-base leading-relaxed text-muted-foreground">{t("about.vision_desc")}</p>
              </div>
              <div className="flex justify-center px-8">
                <img src={aboutCause} alt="Pzaz scripts and writing interface" className="w-full max-w-sm object-contain" loading="lazy" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-[38px] border border-[#D4BAF4] bg-[#F7F2FD] overflow-hidden">
              <div className="pt-8 px-8 md:px-[60px] pb-[60px]">
                <p className="font-lato font-bold text-[#A805FF] text-sm uppercase tracking-wider mb-2">{t("about.mission_label")}</p>
                <h2 className="font-lato font-bold text-2xl text-foreground mb-[30px]">{t("about.mission_title")}</h2>
                <p className="font-lato text-base leading-relaxed text-muted-foreground">{t("about.mission_desc")}</p>
              </div>
              <div className="flex justify-center px-8">
                <img src={aboutNorthstar} alt="Pzaz collaborative filmmaking ecosystem" className="w-full max-w-sm object-contain" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-lato font-extrabold text-4xl md:text-[48px] leading-tight mb-6">
              {t("about.benefit_title_1")}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)" }}>
                {t("about.benefit_title_2")}
              </span>
            </h2>
            <p className="font-lato text-lg md:text-xl leading-relaxed text-muted-foreground mb-10">{t("about.benefit_desc")}</p>
            <p className="font-lato font-bold text-xl text-[#A805FF]">
              {t("about.benefit_manifesto_1")}
              <span className="text-foreground">{t("about.benefit_manifesto_2")}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-10 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <CarouselShowcase />
        </div>
      </section>

      <SharedCTA
        pillText={t("about.cta_pill")}
        title={<>{t("about.cta_title_1")}<br />{t("about.cta_title_2")}</>}
        description={t("about.cta_desc")}
        primaryButtonText={t("about.cta_primary")}
        primaryButtonPrefixIcon={<img src={ctaPlayIcon} alt="" className="w-5 h-5" />}
        secondaryButtonText={t("about.cta_secondary")}
        showLanguagesImage={false}
        backgroundStyle={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
      />
    </PageLayout>
  );
};

export default AboutUs;
