import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileX, RefreshCcw, Users, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import iconWarning from "@/assets/icon-warning.svg";
import fragmentedTools from "@/assets/fragmented-tools.png";


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
    <section className="section-padding bg-[#fbfbfb] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader
            pillText="The Studio Reality"
            pillIcon={<AlertTriangle className="w-4 h-4" />}
            pillClassName="bg-[#FF404017] text-[#EB5757] [&>span:first-child>svg]:text-[#FF4040]"
            title={
              <>
                Studios don’t struggle with writing.{" "}
                <span className="text-[#FF4040]">They struggle with translation.</span>
              </>
            }
            description="Scripts arrive as PDFs or Final Draft files. Production begins somewhere else — in breakdowns, schedules, budgets, and spreadsheets."
            className="mb-12"
          />

          {/* Problem visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2  mb-12 md:mb-[112px]"
          >
            {/* Fragmented tools */}
            <div className="bg-white/30 py-8 px-8 md:px-[60px] md:pb-[50px] border border-[#D4BAF4] rounded-[38px] relative z-10">
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
