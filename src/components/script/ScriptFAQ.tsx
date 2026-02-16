import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    question: "Does Pzaz support multiple script formats?",
    answer: "Yes, Pzaz supports formats for film, TV, and commercials. Whether you're working on a feature screenplay, episodic content, or commercial scripts, Pzaz handles the formatting automatically.",
  },
  {
    question: "Can I collaborate in real-time?",
    answer: "Absolutely. Collaborate live with writers, directors, and teams from anywhere in the world. Changes sync instantly, and you can see who's working on what in real-time.",
  },
  {
    question: "Is my work safe?",
    answer: "Yes. Pzaz auto-saves your scripts in a secure cloud environment with enterprise-grade encryption. Your work is backed up continuously, and you can restore any previous version at any time.",
  },
  {
    question: "How does Pzaz compare to Final Draft, Celtx, or StudioBinder?",
    answer: "Unlike others, Pzaz unifies writing, collaboration, AI tools, and production planning in one platform. Most tools stop at the script — Pzaz connects your script directly to breakdowns, schedules, and budgets.",
  },
  {
    question: "Can I import/export scripts from other platforms?",
    answer: "Yes, import from FDX (Final Draft), RTF, PDF, TXT, and Fountain formats. Export to PDF and SBX formats easily. Your work is never locked in.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "None. Pzaz is free forever with no limitations on core features. Premium features are available for teams and studios who need advanced production integration.",
  },
];

const ScriptFAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SectionHeader
              pillText="FAQs"
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  Frequently asked{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                    questions
                  </span>
                </>
              }
              description="Everything you need to know about Pzaz Script."
            />
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScriptFAQ;
