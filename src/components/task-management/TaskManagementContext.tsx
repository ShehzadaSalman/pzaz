import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import flowchartIcon from "@/assets/icon-flowchart.svg";
import iconBell from "@/assets/script/icon-bell.svg";
import iconShapes2 from "@/assets/script/icon-shapes-2.svg";
import iconMoneyBag from "@/assets/script/icon-money-bag.svg";
import iconSafetyCert from "@/assets/script/icon-safety-cert.svg";

const reframeCards = [
  {
    icon: iconShapes2,
    title: "Ownership becomes clear",
    description: "Every task has a named owner connected to the actual work, not just a name in a spreadsheet.",
  },
  {
    icon: iconMoneyBag,
    title: "Deadlines feel realistic",
    description: "Deadlines reflect actual production timing because they live inside the same scheduling context.",
  },
  {
    icon: iconBell,
    title: "Less chasing, more doing",
    description: "Teams spend less time checking status and more time completing the work that moves production forward.",
  },
  {
    icon: iconSafetyCert,
    title: "Tasks become signals",
    description: "Tasks stop being reminders — they become live signals that keep the whole production moving.",
  },
];

const TaskManagementContext = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F5FE 18.27%, #FFFFFF 100%)" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <AnimatedSectionHeader
              wrapperClassName="text-center"
              pillText="The Critical Reframe"
              pillIcon={<img src={flowchartIcon} alt="" className="w-4 h-4" />}
              pillClassName="bg-primary/10 text-primary"
              title={
                <>
                  A task isn't just a reminder.{" "}
                  <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-l from-[#409DFF] to-[#3207BC]">
                    It's the production
                  </span>
                </>
              }
              description="When task management lives inside the production environment, behaviour begins to shift."
              descriptionClassName="text-lg text-muted-foreground"
              className="mb-10"
            />

            <div className="grid md:grid-cols-2 gap-[45px] max-w-6xl mx-auto mb-12 md:mb-[80px]">
              {reframeCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group rounded-2xl bg-white border border-[#E6D7F7] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 px-[34px] pt-[34px] pb-4">
                    <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                      <img src={card.icon} alt="" className="w-4 h-4" />
                    </div>
                    <span className="font-lato font-bold text-[20px] leading-[23px] text-foreground text-left">
                      {card.title}
                    </span>
                  </div>
                  <div className="px-[34px] pb-[34px]">
                    <p className="font-lato text-[16px] text-[#878787] leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-muted-foreground italic">
              Tasks stop being noise around the production.{" "}
              <span className="text-foreground font-semibold not-italic">They become part of the production itself.</span>
            </p>
          </motion.div>

          {/* Promise Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background:
                "radial-gradient(132.4% 633.99% at 98.48% 95.5%, #01A7CC 0.96%, #7051F7 47.6%, #894FD9 95%)",
            }}
          >
            <div className="relative p-10 sm:p-16 text-center">
              <h3 className="font-lato font-extrabold text-2xl md:text-[48px] md:leading-[70px] tracking-normal text-primary-foreground mb-4">
                Pzaz doesn't add another tool to the pile.
              </h3>
              <p className="font-lato font-extrabold text-4xl md:text-[56px] md:leading-[70px] tracking-normal text-primary-foreground mb-8">
                It puts tasks inside the production.
              </p>
              <p className="font-lato font-normal md:text-[20px] md:leading-[30px] tracking-normal text-center text-[#ECECEC] max-w-2xl mx-auto">
                Task management should not be a separate app. It should be built into the same environment as your scripts, scenes, schedules, and planning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagementContext;
