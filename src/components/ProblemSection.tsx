import React from "react";
import { motion } from "framer-motion";
import { FileText, Calculator, Calendar, MessagesSquare } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      {/* Background accent */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" /> */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-lato font-extrabold text-5xl leading-[70px] tracking-normal">
              Plans change. <span className="font-lato font-extrabold text-[48px] leading-[70px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r to-[#409DFF] from-[#3207BC]">Productions break.</span>
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
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Fragmented tools */}
            <div className="bg-transparent py-8 px-[60px] border border-[#D4BAF4] rounded-[38px]">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                This is no longer a tooling problem.
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <FileText className="w-5 h-5 text-destructive" />
                  <span className="text-sm">Scripts live in one tool.</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <Calculator className="w-5 h-5 text-destructive" />
                  <span className="text-sm">Budgets in another.</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <Calendar className="w-5 h-5 text-destructive" />
                  <span className="text-sm">Schedules somewhere else.</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <MessagesSquare className="w-5 h-5 text-destructive" />
                  <span className="text-sm">Files and feedback everywhere.</span>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >

            {/* The result */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                It's an AI and workflow problem.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every change creates rework. Every rework costs time, money, and energy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This isn't a talent problem. It's a workflow problem.
              </p>
              <p className="text-foreground leading-relaxed font-medium">
                Film is still a human craft, but the tools behind it are fragmented. When one scene changes, everything else should update automatically.
              </p>
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
              Today, it doesn't. <span className="text-foreground font-semibold not-italic">But with Pzaz, it will.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
