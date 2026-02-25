import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "id_1", num: "1", title: "Welcome to Pzaz",
    content: `Pzaz is your platform for connecting and collaborating with film industry professionals. By accessing our website, apps, or any of our services, you agree to these Terms of Service ("Terms"). Your continued use signifies your acceptance of any updates. Please review these Terms regularly.`,
  },
  {
    id: "id_2", num: "2", title: "Acceptance of Terms",
    content: "By using Pzaz, you agree to abide by these Terms and any additional rules we may publish. We may modify these Terms at any time without prior notice. Continued use after changes constitutes acceptance. If you disagree with updates, you must discontinue using our services immediately.",
  },
  {
    id: "id_3", num: "3", title: "Eligibility and Account Registration",
    content: "You must be of legal age (typically 18+) to enter into a binding contract. If using Pzaz on behalf of a business, you must have the authority to do so. When registering, you must provide accurate, up-to-date information. You are responsible for safeguarding your account credentials and all activities under your account.",
  },
  {
    id: "id_4", num: "4", title: "Services and Usage",
    content: "Pzaz offers tools and services for film professionals, including networking and project management features. We may modify or discontinue any of our services without notice.\n\nYou agree to use our services responsibly, lawfully, and in compliance with our Content Standards (see Section 5).\n\nPzaz is not liable for any data loss or damage resulting from misuse, including sabotage or unauthorised deletions by team members. We recommend implementing security measures to safeguard your work.",
  },
  {
    id: "id_5", num: "5", title: "Content Standards & Prohibited Uses",
    content: "When using Pzaz, you agree not to create, upload, share, or promote any content that:",
    bullets: [
      { label: "Child Safety", text: "depicts, promotes, or facilitates sexual abuse or exploitation of children; involves grooming; or depicts minors in a sexual manner." },
      { label: "Violence & Extremism", text: "contains graphic violence, gore, torture, or promotes violent extremism." },
      { label: "Sexually Explicit Content", text: "contains sexually explicit acts, pornographic material, or non-consensual intimate imagery (NCII)." },
      { label: "Hateful Conduct", text: "promotes hate, discrimination, harassment, or violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or similar protected characteristics." },
      { label: "Self-Harm", text: "encourages suicide, self-injury, or disordered eating." },
      { label: "Privacy Violations", text: "includes someone's personal data, likeness, or private information without their consent." },
      { label: "Intellectual Property Infringement", text: "violates copyright, trademark, or other proprietary rights." },
      { label: "Deceptive or Fraudulent Activity", text: "involves impersonation, scams, false representation of affiliation, or other fraudulent acts." },
    ],
    footer: "Enforcement: We use automated tools and human review to enforce these standards. Violations may result in warning, suspension, or termination without notice. Where required by law, we will report illegal content (e.g., child sexual abuse material) to relevant authorities.",
  },
  {
    id: "id_6", num: "6", title: "Content Ownership & Licensing",
    content: "When you post content on Pzaz, you grant us a worldwide, royalty-free, non-exclusive license to use, distribute, and display your content solely to provide and promote our services.\n\nYou are responsible for ensuring you have rights to share any content you post.\n\nPzaz retains ownership of all platform content, excluding user-generated content. You may not use our logos, branding, or proprietary materials without express permission.",
  },
  {
    id: "id_7", num: "7", title: "Privacy and Confidentiality",
    content: "Your privacy matters to us. Please review our Privacy Policy to understand how we handle your information. If we share confidential information with you, you must keep it secure and not disclose it without our consent.",
    privacyLink: true,
  },
  {
    id: "id_8", num: "8", title: "Fees, Cancellation, and Termination",
    content: "We offer free and paid services. Your payment details will be handled securely. You may cancel at any time, but cancellation may result in loss of access to your data—please back up your work.\n\nWe reserve the right to terminate your access for any reason. Certain provisions will survive termination.",
  },
  {
    id: "id_9", num: "9", title: "Warranties and Liability",
    content: "Pzaz is provided \"as is\", without warranties of any kind. We do not guarantee uninterrupted or error-free services. We are not liable for issues from your use, including security breaches, data loss, or third-party actions.",
  },
  {
    id: "id_10", num: "10", title: "Indemnification",
    content: "You agree to indemnify and hold Pzaz harmless from claims, damages, or expenses arising from your use of our services or violation of these Terms.",
  },
  {
    id: "id_11", num: "11", title: "Dispute Resolution",
    content: "We encourage resolving disputes informally. If necessary, disputes will be resolved through mediation or arbitration, not in court.",
  },
  {
    id: "id_12", num: "12", title: "Governing Law & Entire Agreement",
    content: "These Terms are governed by the laws of the United Kingdom. They constitute the entire agreement between you and Pzaz. If any part is invalid, the rest remains in effect. You may not transfer your rights without our consent; we may transfer ours without yours.",
  },
  {
    id: "id_13", num: "13", title: "Contact Information",
    content: "Questions? Email us at ",
    email: "support@pzaz.io",
  },
];

const Terms = () => (
  <PageLayout>
    <SEO
      title="Terms of Service | Pzaz"
      description="Read the Pzaz Terms of Service to understand your rights and responsibilities when using the Pzaz film production platform."
      url="https://pzaz.io/terms"
      canonical="https://pzaz.io/terms/"
      keywords={["terms of service", "terms of use", "pzaz terms", "user agreement"]}
    />

    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#20124D] mb-2">Pzaz Terms of Service</h1>
      <p className="text-sm text-[#4E2273]/60 mb-10">Effective Date: 13 August 2025</p>

      <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
        {/* Table of Contents */}
        <aside className="sticky top-28 hidden md:block">
          <div className="bg-[#F8F2FF] rounded-2xl p-6 border border-[#D4BAF4]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5C28A3] mb-4">Contents</p>
            <nav className="flex flex-col gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
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
            <section key={section.id} id={section.id} className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-[#20124D] mb-3">
                {section.num}. {section.title}
              </h2>
              {section.content && (
                <p className="text-[#4E2273] leading-relaxed mb-3 whitespace-pre-line">
                  {section.content}
                  {section.email && (
                    <a href={`mailto:${section.email}`} className="text-[#5C28A3] underline">{section.email}</a>
                  )}
                  {section.privacyLink && (
                    <> <Link to="/privacy" className="text-[#5C28A3] underline">Privacy Policy</Link></>
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

export default Terms;
