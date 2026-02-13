import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Clapperboard, DollarSign, MapPin, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const benefits = [
  { icon: Clapperboard, text: "Drive breakdowns" },
  { icon: DollarSign, text: "Inform budgets and schedules" },
  { icon: MapPin, text: "Reveal scope and risk early" },
  { icon: CheckCircle, text: "Remain authoritative from development through delivery" },
];

const ScriptShift = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* The Shift Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader
              pillText="The Critical Reframe"
              pillIcon={<Lightbulb className="w-4 h-4" />}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  A script isn't just a document.{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                    It's the foundation of every production decision.
                  </span>
                </>
              }
              description="For studios, the script should:"
              descriptionClassName="text-lg text-muted-foreground"
              className="mb-10"
            />

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-center">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground italic">
              Most tools stop at FADE OUT. Production reality starts after.
            </p>
          </motion.div>

          {/* The Promise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-hero-bg opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px] opacity-10" />
            
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Pzaz doesn't replace writing tools.
              </h3>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
                It turns scripts into productions.
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Pzaz Script is tool-agnostic, production-first script intelligence.
                You don't change how writers write. You change how scripts move into production.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScriptShift;
