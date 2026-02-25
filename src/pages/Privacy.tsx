import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const sections = [
  { id: "id_1", title: "Collecting and Using Your Information", content: "We collect various data types, including personal details like your name and contact information, demographic data such as age and occupation, and location data from your device or IP address. We also gather usage and technical data about your interactions with our services and the devices you use. Our use of cookies and tracking technologies helps us understand service usage patterns. For transactions, we collect payment details and store any information you share in communications with us. Additionally, we may receive data from your social media interactions and other information you provide for service delivery.\n\nWe only take what we need to offer our services." },
  { id: "id_2", title: "Your Rights Under GDPR", content: "We follow GDPR, and you have rights over your data, like accessing, correcting, deleting it, limiting how we use it, objecting to our use, transferring it elsewhere, withdrawing consent, and complaining to authorities. You can ask for any of this by contacting us." },
  { id: "id_3", title: "Data Transfer", content: "Your data might be stored or processed outside your area, where different laws might apply, but we'll protect it as stated in this policy." },
  {
    id: "id_4", title: "Disclosing Data",
    content: "We might share your personal data for the following reasons:",
    bullets: [
      { label: "Legal Compliance", text: "To comply with legal requirements, such as court orders." },
      { label: "Protection", text: "To protect and defend Pzaz, our property, users, and the company." },
      { label: "Investigation", text: "To investigate or prevent potential wrongdoing related to the Service." },
      { label: "Safety", text: "To ensure the safety of users and the company." },
      { label: "Business Transactions", text: "If Pzaz is part of a business transaction like a merger or sale." },
    ],
  },
  {
    id: "id_5", title: "Data Security",
    content: "We take several measures to protect your data, including:",
    bullets: [
      { label: "Encryption", text: "We encrypt your data during transmission, reception, and storage." },
      { label: "Regular Audits", text: "We regularly check our system for safety and security vulnerabilities." },
      { label: "Access Control", text: "We restrict access to your data to authorised personnel only." },
    ],
  },
  { id: "id_6", title: "Using Service Providers", content: "We hire others to help run our service. These providers can access your data only to do their jobs for us, such as payment processing. They are obligated to protect your data and abide by privacy standards." },
  { id: "id_7", title: "External Links", content: "Our service may link to other sites. We're not responsible for their privacy practices, so always be cautious and review the privacy policies of any external sites you visit." },
  { id: "id_8", title: "Payments", content: "We process subscription payments securely and in line with GDPR and use trusted payment gateways. Your payment data is handled with the utmost security and confidentiality." },
  { id: "id_9", title: "Policy Changes", content: "We might change this policy. Check back here for updates. Your continued service use after changes signifies your acceptance of the new terms." },
  { id: "id_10", title: "Contact Us", content: "Questions or want to exercise your rights? Email us at ", email: "support@pzaz.io" },
  {
    id: "id_11", title: "Cookie Policy",
    content: "Cookies are small files that websites place on your device to remember your preferences. We use cookies to understand and remember your preferences, improve our site, and offer a personalised experience. There are different types of cookies:",
    bullets: [
      { label: "Essential", text: "For website functionality." },
      { label: "Performance", text: "To improve the site." },
      { label: "Functionality", text: "To remember your preferences." },
      { label: "Targeting", text: "Used by advertisers." },
    ],
    footer: "You can disable and delete cookies in your browser, which may impact how our website functions. For detailed information on cookies, visit aboutcookies.org.\n\nQuestions about cookies? Email us at support@pzaz.io.",
  },
];

const tocItems = [
  { id: "id_1", label: "Collecting and Using Your Information" },
  { id: "id_2", label: "Your Rights Under GDPR" },
  { id: "id_3", label: "Data Transfer" },
  { id: "id_4", label: "Disclosing Data" },
  { id: "id_5", label: "Data Security" },
  { id: "id_6", label: "Using Service Providers" },
  { id: "id_7", label: "External Links" },
  { id: "id_8", label: "Payments" },
  { id: "id_9", label: "Policy Changes" },
  { id: "id_10", label: "Contact Us" },
  { id: "id_11", label: "Cookie Policy" },
];

const Privacy = () => (
  <PageLayout>
    <SEO
      title="Privacy Policy | Pzaz"
      description="Read the Pzaz Privacy Policy to understand how we collect, use, and protect your personal data in accordance with GDPR."
      url="https://pzaz.io/privacy"
      canonical="https://pzaz.io/privacy/"
      keywords={["privacy policy", "GDPR", "data protection", "pzaz privacy"]}
    />

    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#20124D] mb-2">Pzaz Privacy Policy</h1>
      <p className="text-sm text-[#4E2273]/60 mb-10">Date: January 12, 2024</p>

      <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
        {/* Table of Contents */}
        <aside className="sticky top-28 hidden md:block">
          <div className="bg-[#F8F2FF] rounded-2xl p-6 border border-[#D4BAF4]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5C28A3] mb-4">Contents</p>
            <nav className="flex flex-col gap-2">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-[#20124D] hover:text-[#5C28A3] transition-colors leading-snug"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="prose prose-sm max-w-none">
          <p className="text-base text-[#4E2273] leading-relaxed mb-10">
            Welcome to Pzaz! Our Privacy Policy explains how we handle your information when you use Pzaz, following the General Data Protection Regulation (GDPR). By using Pzaz, you're agreeing to this policy.
          </p>

          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-[#20124D] mb-3">{section.title}</h2>
              {section.content && (
                <p className="text-[#4E2273] leading-relaxed mb-3">
                  {section.content}
                  {section.email && (
                    <a href={`mailto:${section.email}`} className="text-[#5C28A3] underline">{section.email}</a>
                  )}
                </p>
              )}
              {section.bullets && (
                <ul className="space-y-2 mb-3">
                  {section.bullets.map((b) => (
                    <li key={b.label} className="text-[#4E2273] leading-relaxed">
                      <strong className="text-[#20124D]">{b.label}:</strong> {b.text}
                    </li>
                  ))}
                </ul>
              )}
              {section.footer && (
                <p className="text-[#4E2273] leading-relaxed whitespace-pre-line">{section.footer}</p>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  </PageLayout>
);

export default Privacy;
