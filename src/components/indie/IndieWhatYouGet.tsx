import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import iconDocument from "@/assets/script/icon-document.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconCloud from "@/assets/script/icon-cloud.svg";
import iconTextLine from "@/assets/script/icon-text-line.svg";
import iconShapes from "@/assets/script/icon-shapes.svg";
import iconListCheck from "@/assets/script/icon-list-check.svg";
import iconThList from "@/assets/script/icon-th-list.svg";
import iconSprint from "@/assets/script/icon-sprint.svg";

const features = [
  { icon: iconCloud, title: "A shared production workspace" },
  { icon: iconUserGroup, title: "Inbox and team chat" },
  { icon: iconFlow, title: "Calendar and scheduling" },
  { icon: iconDocument, title: "File management and document hub" },
  { icon: iconTextLine, title: "Script development and narrative tools" },
  { icon: iconShapes, title: "Ideation boards and moodboards" },
  { icon: iconThList, title: "Breakdown and stripboard planning" },
  { icon: iconListCheck, title: "Task coordination with notes and attachments" },
  { icon: iconSprint, title: "Production essentials like call sheets" },
];

const IndieWhatYouGet = () => {
  return (
    <section id="features" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader
          wrapperClassName="text-center mb-16"
          pillText="Everything Included"
          pillClassName="bg-primary/10 text-primary"
          title={
            <>
              What You{" "}
              <span className="font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">
                Get
              </span>
            </>
          }
          description="Everything you need to prepare your film properly:"
        />

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group rounded-[30px] p-6 border-2 border-[#D4BAF4] bg-white transition-all duration-300 hover:shadow-lg flex items-start gap-4"
            >
              <div className="w-[41px] h-[41px] rounded-full bg-[#A805FF] flex items-center justify-center flex-shrink-0">
                <img src={feature.icon} alt="" className="w-4 h-4" />
              </div>
              <p className="font-lato font-semibold text-[16px] text-foreground leading-relaxed pt-2">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Plan limits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center bg-white rounded-[38px] border-2 border-[#D4BAF4] p-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The plan includes <span className="font-semibold text-foreground">1 core user</span>, up to <span className="font-semibold text-foreground">3 external collaborators</span>, and <span className="font-semibold text-foreground">1 active project</span> at a time. You also receive <span className="font-semibold text-foreground">100 AI credits per month</span> to support structured development inside your film's working environment.
          </p>
          <p className="text-lg font-semibold text-[#4D029B] italic">
            Enough to build something serious. Simple enough to stay clear.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndieWhatYouGet;
