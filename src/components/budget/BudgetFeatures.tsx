import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconDownload from "@/assets/script/icon-download.svg";
import iconDocument from "@/assets/script/icon-document.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconRefresh from "@/assets/script/icon-refresh.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";

const features = [
  { icon: iconDownload, title: "Import and export budgets freely" },
  { icon: iconDocument, title: "Configure ledger structures for accountant compatibility" },
  { icon: iconCloud, title: "Build multi-currency budgets for international productions" },
  { icon: iconEngine, title: "Set taxes, fringes, and regional compliance rules" },
  { icon: iconRefresh, title: "Create scenario budgets with structured version control" },
  { icon: iconFlow, title: "Track forecasts against actuals in real time" },
  { icon: iconListCheck, title: "Attach documents directly to budget line items" },
  { icon: iconTesting, title: "Assign tasks within budget categories" },
  { icon: iconUserGroup, title: "Collaborate live across departments" },
];

const BudgetFeatures = () => {
  return (
    <section className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="Built for Modern Production Teams"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              Built for Modern{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Production Teams.
              </span>
            </>
          }
          description="Rigorous financial control without requiring budgeting to live in a separate silo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="rounded-[30px] p-6 border-2 border-[#D4BAF4] bg-white hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                <img src={feature.icon} alt="" className="w-4 h-4" />
              </div>
              <p className="font-lato font-semibold text-[16px] text-foreground leading-relaxed pt-2">{feature.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetFeatures;
