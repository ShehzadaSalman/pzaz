import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation("terms");

  const sections = t("terms.sections", { returnObjects: true }) as Array<{
    num: string;
    title: string;
    content?: string;
    bullets?: Array<{ label: string; text: string }>;
    footer?: string;
    privacyLink?: boolean;
  }>;

  return (
    <PageLayout>
      <SEO
        title={t("terms.seo_title")}
        description={t("terms.seo_desc")}
        url="https://pzaz.io/terms"
        canonical="https://pzaz.io/terms/"
        keywords={["terms of service", "terms of use", "pzaz terms", "user agreement"]}
      />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#20124D] mb-2">{t("terms.page_title")}</h1>
        <p className="text-sm text-[#4E2273]/60 mb-10">{t("terms.date")}</p>

        <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
          {/* Table of Contents */}
          <aside className="sticky top-28 hidden md:block">
            <div className="bg-[#F8F2FF] rounded-2xl p-6 border border-[#D4BAF4]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#5C28A3] mb-4">{t("terms.toc_label")}</p>
              <nav className="flex flex-col gap-2">
                {sections.map((s) => (
                  <a
                    key={s.num}
                    href={`#term_${s.num}`}
                    className="text-sm text-[#20124D] hover:text-[#5C28A3] transition-colors leading-snug"
                  >
                    {s.num}. {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article>
            {sections.map((section) => (
              <section key={section.num} id={`term_${section.num}`} className="mb-10 scroll-mt-28">
                <h2 className="text-xl font-bold text-[#20124D] mb-3">
                  {section.num}. {section.title}
                </h2>
                {section.content && (
                  <p className="text-[#4E2273] leading-relaxed mb-3 whitespace-pre-line">
                    {section.content}
                    {section.num === "13" && (
                      <a href="mailto:support@pzaz.io" className="text-[#5C28A3] underline">support@pzaz.io</a>
                    )}
                    {section.privacyLink && (
                      <> <Link to="/privacy" className="text-[#5C28A3] underline">{t("terms.privacy_policy_link")}</Link></>
                    )}
                  </p>
                )}
                {section.bullets && (
                  <ol className="space-y-2 mb-3 list-decimal list-inside">
                    {section.bullets.map((b) => (
                      <li key={b.label} className="text-[#4E2273] leading-relaxed">
                        <strong className="text-[#20124D]">{b.label}</strong> – {b.text}
                      </li>
                    ))}
                  </ol>
                )}
                {section.footer && (
                  <p className="text-[#4E2273] leading-relaxed mt-3 p-4 bg-[#F8F2FF] rounded-xl border border-[#D4BAF4] text-sm">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
