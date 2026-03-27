import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AIContextSection = () => {
  const { t } = useTranslation('home');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-lato font-extrabold text-[48px] leading-[56px] text-foreground text-center mb-12"
        >
          {t("ai_context.heading")}
        </motion.h2>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/videos/ai-context-section.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Caption below video */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-lato font-normal text-[20px] leading-[30px] text-[#878787] text-center mt-8"
          dangerouslySetInnerHTML={{ __html: t("ai_context.caption") }}
        />
      </div>
    </section>
  );
};

export default AIContextSection;
