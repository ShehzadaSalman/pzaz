import React from "react";
import { motion } from "framer-motion";

const ScriptPromise = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
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
              <h3 className="font-lato font-extrabold text-[48px] leading-[70px] tracking-normal text-primary-foreground mb-4">
                Pzaz doesn't replace writing tools.
              </h3>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
                It turns scripts into productions.
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Pzaz Script is tool-agnostic, production-first script intelligence. You don't change how writers write.
                You change how scripts move into production.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScriptPromise;
