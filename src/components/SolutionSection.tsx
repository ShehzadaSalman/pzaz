import React from "react";
import { motion } from "framer-motion";
import SolutionCard from "@/components/SolutionCard";
import SectionHeader from "@/components/SectionHeader";
import cardIconClarity from "@/assets/card-icon-clarity.svg";
import solutionCardClarity from "@/assets/solution-card-clarity.png";
import cardIconSchedule from "@/assets/card-icon-schedule.svg";
import solutionCardSchedule from "@/assets/solution-card-schedule.png";
import cardIconBudget from "@/assets/card-icon-budget.svg";
import solutionCardBudget from "@/assets/solution-card-budget.png";
import cardIconTeam from "@/assets/card-icon-team.svg";
import solutionCardTeam from "@/assets/solution-card-team.png";

const benefits = [
  {
    trigger: "Work with clarity,\nnot chaos.",
    result: "",
    icon: cardIconClarity,
    image: solutionCardClarity,
    hideArrow: true,
  },
  {
    trigger: "Adjust a scene",
    result: "schedules and budgets stay aligned.",
    icon: cardIconSchedule,
    image: solutionCardSchedule,
  },
  {
    trigger: "Deliver without\nlast-minute panic.",
    result: "",
    icon: cardIconBudget,
    image: solutionCardBudget,
    hideArrow: true,
  },
  {
    trigger: "Protect your margins\nwith fewer surprises.",
    result: "",
    icon: cardIconTeam,
    image: solutionCardTeam,
    hideArrow: true,
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
                One Ecosystem.{" "}
                <span className="font-lato font-extrabold md:text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                  Total Alignment.
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
              hideArrow={'hideArrow' in benefit ? benefit.hideArrow : false}
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
