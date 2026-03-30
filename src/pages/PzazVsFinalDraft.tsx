import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIndieCheckoutUrl } from "@/lib/checkout";
import { useTranslation } from "react-i18next";

import heroImg from "@/assets/vs-final-draft/hero.webp";
import problemImg from "@/assets/vs-final-draft/problem.webp";
import solutionImg from "@/assets/vs-final-draft/solution.webp";
import iconIntegrationImg from "@/assets/vs-final-draft/icon-integration.webp";
import featureIntegrationImg from "@/assets/vs-final-draft/feature-integration.webp";
import iconCollaborationImg from "@/assets/vs-final-draft/icon-collaboration.webp";
import featureCollaborationImg from "@/assets/vs-final-draft/feature-collaboration.webp";
import slideStoryboardImg from "@/assets/vs-final-draft/slide-storyboard.webp";
import slidePlanningImg from "@/assets/vs-final-draft/slide-planning.webp";
import slideScheduleImg from "@/assets/vs-final-draft/slide-schedule.webp";
import builtForTeamsImg from "@/assets/vs-final-draft/built-for-teams.webp";
import finalVerdictImg from "@/assets/vs-final-draft/final-verdict.webp";

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#5C28A3" fillOpacity="0.12" />
    <path d="M6 10.5l2.5 2.5 5-5" stroke="#5C28A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#F3F3F3" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#BBBBBB" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CellValue = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <span className="text-sm text-[#20124D] font-medium">{value}</span>;
  }
  return value ? <CheckIcon /> : <CrossIcon />;
};

const PzazVsFinalDraft = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const indieCheckoutUrl = useIndieCheckoutUrl();
  const { t } = useTranslation("vs-final-draft");

  const comparisonRows = [
    { feature: t("vs.row_auto_format"), pzaz: true, finalDraft: true },
    { feature: t("vs.row_versioning"), pzaz: true, finalDraft: true },
    { feature: t("vs.row_collab"), pzaz: t("vs.row_collab_pzaz"), finalDraft: t("vs.row_collab_fd") },
    { feature: t("vs.row_sync"), pzaz: true, finalDraft: true },
    { feature: t("vs.row_storyboard"), pzaz: t("vs.row_storyboard_pzaz"), finalDraft: false },
    { feature: t("vs.row_scheduling"), pzaz: true, finalDraft: false },
    { feature: t("vs.row_breakdown"), pzaz: true, finalDraft: false },
    { feature: t("vs.row_shot_lists"), pzaz: true, finalDraft: false },
    { feature: t("vs.row_cloud"), pzaz: true, finalDraft: t("vs.row_cloud_fd") },
    { feature: t("vs.row_free"), pzaz: true, finalDraft: false },
    { feature: t("vs.row_ai"), pzaz: true, finalDraft: false },
    { feature: t("vs.row_media"), pzaz: t("vs.row_media_pzaz"), finalDraft: false },
  ];

  const slides = [
    {
      tab: t("vs.slide1_tab"),
      title: t("vs.slide1_title"),
      body: t("vs.slide1_body"),
      image: slideStoryboardImg,
    },
    {
      tab: t("vs.slide2_tab"),
      title: t("vs.slide2_title"),
      body: t("vs.slide2_body"),
      image: slidePlanningImg,
    },
    {
      tab: t("vs.slide3_tab"),
      title: t("vs.slide3_title"),
      body: t("vs.slide3_body"),
      image: slideScheduleImg,
    },
  ];

  return (
    <>
      <SEO
        title={t("vs.seo_title")}
        description={t("vs.seo_desc")}
        url="https://pzaz.io/pzaz-vs-final-draft/"
        canonical="https://pzaz.io/pzaz-vs-final-draft/"
        keywords={["pzaz vs final draft", "final draft alternative", "film production software", "screenwriting software comparison", "all-in-one filmmaking platform"]}
      />
      <Header />
      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] mb-4">
              {t("vs.hero_badge")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#20124D] leading-tight mb-6">
              {t("vs.hero_title")}
            </h1>
            <p className="text-[#4E2273] text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t("vs.hero_desc") }} />
            <div className="flex flex-wrap gap-4">
              <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">{t("vs.start_free")}</Button>
              </a>
              <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">{t("vs.book_demo")}</Button>
              </a>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="Pzaz film production hub" className="w-full rounded-2xl shadow-lg" />
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="bg-[#F8F2FF] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={problemImg} alt="Final Draft limitation" className="w-full rounded-2xl shadow" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] mb-3">{t("vs.problem_badge")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-5">
                {t("vs.problem_title")}
              </h2>
              <p className="text-[#4E2273] text-lg leading-relaxed">
                {t("vs.problem_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] mb-3">{t("vs.solution_badge")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-5">
                {t("vs.solution_title")}
              </h2>
              <p className="text-[#4E2273] text-lg leading-relaxed">
                {t("vs.solution_desc")}
              </p>
            </div>
            <div>
              <img src={solutionImg} alt="Pzaz all-in-one platform" className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="bg-[#F8F2FF] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] text-center mb-10">
              {t("vs.table_title")}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#D4BAF4] shadow-sm bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D4BAF4]">
                    <th className="text-left px-6 py-4 text-[#20124D] font-semibold w-1/2">{t("vs.table_feature")}</th>
                    <th className="px-6 py-4 text-[#5C28A3] font-bold text-center">Pzaz</th>
                    <th className="px-6 py-4 text-[#888] font-semibold text-center">Final Draft</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7FF]"}>
                      <td className="px-6 py-4 text-[#20124D] font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center"><CellValue value={row.pzaz} /></div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center"><CellValue value={row.finalDraft} /></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why Pzaz ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-5">
              {t("vs.why_title")}
            </h2>
            <p className="text-[#4E2273] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("vs.why_desc") }} />
          </div>

          {/* End-to-end Integration */}
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img src={iconIntegrationImg} alt="End-to-end integration icon" className="w-14 h-14 mb-5 object-contain" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#20124D] mb-4">{t("vs.integration_title")}</h3>
              <p className="text-[#4E2273] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("vs.integration_desc") }} />
            </div>
            <div>
              <img src={featureIntegrationImg} alt="Pzaz end-to-end integration" className="w-full rounded-2xl shadow" />
            </div>
          </div>

          {/* Real-time Collaboration */}
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img src={iconCollaborationImg} alt="Collaboration icon" className="w-14 h-14 mb-5 object-contain" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#20124D] mb-4">{t("vs.collab_title")}</h3>
              <p className="text-[#4E2273] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("vs.collab_desc") }} />
            </div>
            <div className="md:order-1">
              <img src={featureCollaborationImg} alt="Pzaz real-time collaboration" className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>

        {/* ── Unique Features Slider ── */}
        <section className="bg-[#F8F2FF] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5C28A3] text-center mb-3">{t("vs.unique_badge")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] text-center mb-10">
              {t("vs.unique_title")}
            </h2>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    activeSlide === i
                      ? "bg-[#5C28A3] text-white border-[#5C28A3] shadow-md"
                      : "bg-white text-[#20124D] border-[#D4BAF4] hover:border-[#5C28A3]"
                  }`}
                >
                  {slide.tab}
                </button>
              ))}
            </div>

            {/* Slide content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#20124D] mb-5">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-[#4E2273] text-lg leading-relaxed">
                  {slides[activeSlide].body}
                </p>
              </div>
              <div>
                <img
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Built for Teams ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20124D] mb-6">
                {t("vs.teams_title")}
              </h2>
              <p className="text-[#4E2273] text-lg leading-relaxed mb-8">
                {t("vs.teams_desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg">{t("vs.start_free")}</Button>
                </a>
                <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">{t("vs.book_demo")}</Button>
                </a>
              </div>
              <p className="text-xs text-[#888] mt-3">{t("vs.no_credit_card")}</p>
            </div>
            <div>
              <img src={builtForTeamsImg} alt="Pzaz built for teams" className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>

        {/* ── Final Verdict ── */}
        <section className="bg-[#20124D] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("vs.verdict_title")}
              </h2>
              <p className="text-[#D4BAF4] text-lg leading-relaxed mb-8">
                {t("vs.verdict_desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={indieCheckoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="bg-white text-[#20124D] hover:bg-white/90">{t("vs.start_free")}</Button>
                </a>
                <a href="https://calendly.com/filmmaking-app/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">{t("vs.book_demo")}</Button>
                </a>
              </div>
              <p className="text-xs text-[#D4BAF4]/70 mt-3">{t("vs.no_credit_card")}</p>
            </div>
            <div>
              <img src={finalVerdictImg} alt="Pzaz final verdict" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default PzazVsFinalDraft;
