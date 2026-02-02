import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileX, RefreshCcw, Users, Clock } from "lucide-react";

const problems = [
  {
    icon: RefreshCcw,
    text: "Data is re-entered manually across tools",
  },
  {
    icon: FileX,
    text: "Versions drift out of sync between departments",
  },
  {
    icon: Users,
    text: "Assumptions get interpreted differently by each team",
  },
  {
    icon: Clock,
    text: "Costly mistakes appear late in production",
  },
];

const ScriptProblem = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              The Studio Reality
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">
            Studios don't struggle with writing.{" "}
            <span className="text-destructive">They struggle with translation.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Scripts arrive as PDFs or Final Draft files. Production begins somewhere else — 
            in breakdowns, schedules, budgets, and spreadsheets. Between those steps:
          </p>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-destructive/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{problem.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xl font-semibold text-foreground">
              The script stops being reliable the moment production starts.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScriptProblem;
