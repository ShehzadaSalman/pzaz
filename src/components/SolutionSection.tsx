import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import SolutionCard from "@/components/SolutionCard";
import cardIconScript from "@/assets/card-icon-script.svg";
import solutionCardPreview from "@/assets/solution-card-preview.png";
import cardIconSchedule from "@/assets/card-icon-schedule.svg";
import solutionCardSchedule from "@/assets/solution-card-schedule.png";
import cardIconBudget from "@/assets/card-icon-budget.svg";
import solutionCardBudget from "@/assets/solution-card-budget.png";
import cardIconTeam from "@/assets/card-icon-team.svg";
import solutionCardTeam from "@/assets/solution-card-team.png";

const benefits = [
  {
    trigger: "Write a scene",
    result: "the breakdown updates.",
    icon: cardIconScript,
    image: solutionCardPreview,
  },
  {
    trigger: "Adjust a scene",
    result: "schedules and budgets stay aligned.",
    icon: cardIconSchedule,
    image: solutionCardSchedule,
  },
  {
    trigger: "Build your budget",
    result: "AI pre-fills the structure.",
    icon: cardIconBudget,
    image: solutionCardBudget,
  },
  {
    trigger: "Share with your team",
    result: "everyone works from the same version, live.",
    icon: cardIconTeam,
    image: solutionCardTeam,
  },
];

const outcomes = [
  "Reduce mistakes before they happen.",
  "Cut handoffs between departments.",
  "Save time on every change.",
  "Avoid unnecessary costs.",
];

const SolutionSection = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text="The Solution" className="bg-primary/10 text-primary mb-0" />
          <h2 className="font-lato font-extrabold text-[48px] tracking-normal mb-0 py-[10px] text-balance">
            One connected <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">production system.</span>
          </h2>
          <p className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-center text-[#878787] max-w-3xl mx-auto">
            Pzaz keeps your film together. Not three apps. Not ten tools. One live environment where script, schedule, budget, storyboard, and team stay in sync.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-[45px] max-w-6xl mx-auto mb-16"
        >
          {benefits.map((benefit, index) => (
            <SolutionCard
              key={benefit.trigger}
              icon={benefit.icon}
              trigger={benefit.trigger}
              result={benefit.result}
              image={benefit.image}
              index={index}
            />
          ))}
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-2xl font-semibold text-foreground mb-2">
            No re-entry. No version chaos.
          </p>
          <p className="text-lg text-muted-foreground">
            You stay in control. The system handles the coordination.
          </p>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-center mb-6">Work smarter. Stay stress-free.</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={outcome} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-muted-foreground font-medium">
              All your tools, working together, from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
