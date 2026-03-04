import React from "react";
import { motion } from "framer-motion";
import SolutionCard from "@/components/SolutionCard";
import SectionHeader from "@/components/SectionHeader";
import cardIconClarity from "@/assets/card-icon-clarity.svg";
import solutionCardClarity from "@/assets/solution-card-clarity.png";
import cardIconBudget from "@/assets/card-icon-budget.svg";
import solutionCardBudget from "@/assets/solution-card-budget.png";
import cardIconTeam from "@/assets/card-icon-team.svg";
import solutionCardTeam from "@/assets/solution-card-team.png";

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
          className="grid md:grid-cols-2 gap-[45px] max-w-6xl mx-auto mb-16 md:mb-[112px] items-stretch"
        >
          {/* Card 1 */}
          <SolutionCard
            icon={cardIconClarity}
            trigger={"Work with clarity,\nnot chaos."}
            image={solutionCardClarity}
            index={0}
            hideArrow={true}
          />

          {/* Slot 2: two smaller stacked cards */}
          <div className="flex flex-col gap-[45px] h-full">
            <div className="rounded-2xl bg-[#F6FCFC] border border-[#E6D7F7] flex-1" />
            <div className="rounded-2xl bg-[#F6FCFC] border border-[#E6D7F7] flex-1" />
          </div>

          {/* Card 3 */}
          <SolutionCard
            icon={cardIconBudget}
            trigger={"Deliver without\nlast-minute panic."}
            image={solutionCardBudget}
            index={2}
            hideArrow={true}
          />

          {/* Card 4 */}
          <SolutionCard
            icon={cardIconTeam}
            trigger={"Protect your margins\nwith fewer surprises."}
            image={solutionCardTeam}
            index={3}
            hideArrow={true}
          />
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
