import React from "react";
import { motion } from "framer-motion";
import iconWarning from "@/assets/icon-warning.svg";
import fragmentedTools from "@/assets/fragmented-tools.png";
import aiWorkflowPuzzle from "@/assets/ai-workflow-puzzle.png";

const ProblemSection = () => {
  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      {/* Background accent */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" /> */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
             <h2 className="font-lato font-extrabold text-5xl tracking-normal py-[10px]">
               Plans change. <span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r to-[#409DFF] from-[#3207BC]">Productions break.</span>
            </h2>
            <p className="text-lg text-[#878787] max-w-2xl mx-auto leading-relaxed">
              Film productions don't slow down because of creativity. They slow down because every change triggers manual rework.
            </p>
          </motion.div>

          {/* Problem visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2  mb-12 md:mb-[112px]"
          >
            {/* Fragmented tools */}
            <div className="bg-white/30 py-8  px-[60px] pb-[50px] border border-[#D4BAF4] rounded-[38px] relative z-10">
              <h3 className="font-lato font-bold text-2xl pt-4 pb-8 tracking-normal text-foreground">
                This is no longer a tooling problem.
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                   <img src={iconWarning} alt="" className="w-6 h-6" />
                   <span className="text-[20px] font-lato">Scripts live in one tool.</span>
                 </div>
                 <div className="flex items-center gap-4 h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                   <img src={iconWarning} alt="" className="w-6 h-6" />
                   <span className="text-[20px] font-lato">Budgets in another.</span>
                 </div>
                 <div className="flex items-center gap-4 h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                   <img src={iconWarning} alt="" className="w-6 h-6" />
                   <span className="text-[20px] font-lato">Schedules somewhere else.</span>
                 </div>
                 <div className="flex items-center gap-4 h-[70px] p-6 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                  <img src={iconWarning} alt="" className="w-6 h-6" />
                  <span className="text-[20px] font-lato">Files and feedback everywhere.</span>
                </div>
              </div>
            </div>

            {/* Fragmented tools illustration */}
            <div className="flex items-center justify-center -ml-[80px]">
              <img src={fragmentedTools} alt="Fragmented tools illustration" className="max-w-full h-auto" />
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 items-center mb-12 md:mb-[112px]"
          >

            {/* The result */}
            <div className="bg-card rounded-[38px] pt-12 px-[60px] pb-[60px] border border-[#D4BAF4] relative z-10">
              <h3 className="font-lato font-bold text-2xl leading-normal tracking-normal text-[#A805FF] pb-8">
                It's an AI and workflow problem.
              </h3>
              <p className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-[#878787] mb-6">
                Every change creates rework. Every rework costs time, money, and energy.
              </p>
              <p className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-[#878787] mb-6">
                This isn't a talent problem. It's a workflow problem.
              </p>
              <div className="bg-[#F7F2FD] rounded-[12px] py-[21px] pl-[36px] pr-[8px]">
                <p className="font-lato font-normal text-[20px] leading-[30px] tracking-normal text-[#5C28A3]">
                  Film is still a human craft, but the tools behind it are fragmented. When one scene changes, everything else should update automatically.
                </p>
              </div>
            </div>

            {/* Divider + AI workflow illustration */}
            <div className="flex items-center justify-center -ml-[80px] overflow-hidden">
              <div className="w-[150px] min-w-[150px] h-[4px] border-[4px] border-solid border-[#AF55FB]" />
              <div className="relative">
                <div className="absolute inset-0 bg-radial-shadow scale-125 pointer-events-none" />
                <img src={aiWorkflowPuzzle} alt="AI workflow puzzle illustration" className="relative w-[383px] h-[430px] object-contain" />
              </div>
            </div>

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
              Changes break productions. <span className="text-foreground font-semibold not-italic"> Pzaz keeps it together.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
