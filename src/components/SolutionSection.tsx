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
import cardIconFast from "@/assets/card-icon-fast.svg";
import solutionCardFast from "@/assets/solution-card-fast.png";
import cardIconAligned from "@/assets/card-icon-aligned.svg";
import solutionCardAligned from "@/assets/solution-card-aligned.png";

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
          {/* Row 1: Card 1 + nested 2 cards */}
          <SolutionCard
            icon={cardIconClarity}
            trigger={"Work with clarity,\nnot chaos."}
            image={solutionCardClarity}
            index={0}
            hideArrow={true}
          />
          <div className="flex flex-row gap-[22px] h-full">
            <SolutionCard
              icon={cardIconFast}
              trigger={"Move fast without\nlosing control."}
              image={solutionCardFast}
              index={1}
              hideArrow={true}
            />
            <SolutionCard
              icon={cardIconAligned}
              trigger={"Stay aligned, even when\nplans change."}
              image={solutionCardAligned}
              index={1}
              hideArrow={true}
            />
          </div>

          {/* Row 2: Card 3 + Card 4 */}
          <SolutionCard
            icon={cardIconBudget}
            trigger={"Deliver without\nlast-minute panic."}
            image={solutionCardBudget}
            index={2}
            hideArrow={true}
          />
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
