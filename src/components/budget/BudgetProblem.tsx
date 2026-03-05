import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconWarning from "@/assets/icon-warning.svg";

const siloProblems = [
  "Budgets live in one place while scripts evolve elsewhere.",
  "Schedules adjust in another system entirely.",
  "Information moves manually between files and departments.",
  "Versions multiply, visibility narrows.",
];

const BudgetProblem = () => {
  return (
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-12"
          pillText="The Core Problem"
          pillIcon={null}
          pillClassName="bg-[#FF404017] text-[#EB5757]"
          title={
            <>
              When Budgeting Lives in a Silo,{" "}
              <span className="text-[#FF4040]">Production Loses Clarity.</span>
            </>
          }
          description="Traditional budgeting tools are powerful, trusted, and built to support complex productions. But they often operate as standalone systems."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Problem cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white py-8 px-8 border border-[#D4BAF4] rounded-[38px]"
          >
            <h3 className="font-lato font-bold text-2xl pt-4 pb-8 text-foreground">
              Financial insight becomes reactive, not timely.
            </h3>
            <div className="space-y-4">
              {siloProblems.map((problem, i) => (
                <div key={i} className="flex items-center gap-4 min-h-[60px] p-5 bg-[#FDF2F5] rounded-lg border border-[#EF6F9B]">
                  <img src={iconWarning} alt="" className="w-6 h-6 flex-shrink-0" />
                  <span className="text-[18px] font-lato">{problem}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-[28px] border-2 border-[#D4BAF4] p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As information moves manually between files and departments, clarity begins to fade. Versions multiply, visibility narrows, and financial insight becomes reactive instead of timely.
              </p>
            </div>
            <div className="bg-[#F7F2FD] rounded-[28px] border-2 border-[#D4BAF4] p-8">
              <p className="font-lato font-bold text-[20px] text-[#4D029B] italic">
                This is not a spreadsheet problem. It is a coordination problem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetProblem;
