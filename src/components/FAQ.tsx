import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "Does Pzaz support multiple script formats?",
    answer:
      "Yes. Pzaz supports formats for film, TV, and commercials. Whether you're working on a feature screenplay, episodic content, or branded content, formatting is handled automatically.",
  },
  {
    question: "Can I collaborate in real-time?",
    answer:
      "Absolutely. Writers, directors, producers, and crew can work together live. Changes sync instantly so everyone stays aligned.",
  },
  {
    question: "Is my work safe?",
    answer:
      "Yes. Pzaz auto-saves your scripts in a secure cloud environment with enterprise-grade encryption. Your work is backed up continuously, and you can restore any previous version at any time.",
  },
  {
    question: "Can I import and export scripts from other tools?",
    answer:
      "Yes. You can import popular script formats and export to production-friendly outputs, so your workflow is never locked to one platform.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (question: string) => {
    setOpenItem((current) => (current === question ? null : question));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItem === item.question;

            return (
              <article
                key={item.question}
                className={[
                  "rounded-2xl border transition-all duration-200",
                  "px-5 py-5 md:px-6",
                  isOpen
                    ? "border-[#D4BAF4] bg-white"
                    : "border-[#E8E8E8] bg-[#FAFAFA]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.question)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-lato font-black text-[18px] leading-[28px] text-[#2B2B2B]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-[#404040]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#404040]" />
                  )}
                </button>

                <div
                  className={[
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="font-lato text-[17px] leading-[31px] text-[#8C8C96]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
