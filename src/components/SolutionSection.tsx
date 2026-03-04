import React from "react";
import { motion } from "framer-motion";
import SolutionCard from "@/components/SolutionCard";
import SectionHeader from "@/components/SectionHeader";
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

// const outcomes = [
//   "Reduce mistakes before they happen.",
//   "Cut handoffs between departments.",
//   "Save time on every change.",
//   "Avoid unnecessary costs.",
// ];

const SolutionSection = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            pillText="The Solution"
            pillClassName="bg-primary/10 text-primary mb-0"
            title={
              <>
                One connected{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                  production system.
                </span>
              </>
            }
            titleClassName="mb-0 text-balance"
            description="Pzaz keeps creative, operational and financial reality connected inside one living production system."
            descriptionClassName="text-center"
          />
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-[45px] max-w-6xl mx-auto mb-16 md:mb-[112px]"
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

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xl text-muted-foreground italic">
            You stay in control. <span className="text-foreground font-semibold not-italic"> The system handles the coordination.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
