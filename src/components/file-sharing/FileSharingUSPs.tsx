import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import StudioCard from "@/components/script/StudioCard";
import iconSprint from "@/assets/script/icon-sprint.svg";
import iconFlow from "@/assets/script/icon-flow.svg";
import iconUserGroup from "@/assets/script/icon-user-group.svg";
import iconTesting from "@/assets/script/icon-testing.svg";
import iconEngine from "@/assets/script/icon-engine.svg";
import iconAiResearch from "@/assets/script/icon-ai-research.svg";
import iconLock from "@/assets/script/icon-lock.svg";
import iconRefresh from "@/assets/script/icon-refresh.svg";

const FileSharingUSPs = () => {
  const { t } = useTranslation("file-sharing");

  const usps = [
    { title: t("file_sharing.usp1_title"), tagline: t("file_sharing.usp1_tagline"), description: t("file_sharing.usp1_desc"), highlight: t("file_sharing.usp1_highlight"), icon: iconLock },
    { title: t("file_sharing.usp2_title"), tagline: t("file_sharing.usp2_tagline"), description: t("file_sharing.usp2_desc"), highlight: t("file_sharing.usp2_highlight"), icon: iconSprint },
    { title: t("file_sharing.usp3_title"), tagline: t("file_sharing.usp3_tagline"), description: t("file_sharing.usp3_desc"), highlight: t("file_sharing.usp3_highlight"), icon: iconFlow },
    { title: t("file_sharing.usp4_title"), tagline: t("file_sharing.usp4_tagline"), description: t("file_sharing.usp4_desc"), highlight: t("file_sharing.usp4_highlight"), icon: iconUserGroup },
    { title: t("file_sharing.usp5_title"), tagline: t("file_sharing.usp5_tagline"), description: t("file_sharing.usp5_desc"), highlight: t("file_sharing.usp5_highlight"), icon: iconRefresh },
    { title: t("file_sharing.usp6_title"), tagline: t("file_sharing.usp6_tagline"), description: t("file_sharing.usp6_desc"), highlight: t("file_sharing.usp6_highlight"), icon: iconAiResearch },
    { title: t("file_sharing.usp7_title"), tagline: t("file_sharing.usp7_tagline"), description: t("file_sharing.usp7_desc"), highlight: t("file_sharing.usp7_highlight"), icon: iconTesting },
    { title: t("file_sharing.usp8_title"), tagline: t("file_sharing.usp8_tagline"), description: t("file_sharing.usp8_desc"), highlight: t("file_sharing.usp8_highlight"), icon: iconEngine },
  ];

  return (
    <section id="capabilities" className="section-padding bg-[#FBFBFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSectionHeader wrapperClassName="text-center mb-16" pillText={t("file_sharing.usps_pill")} pillClassName="bg-primary/10 text-primary"
          title={<>{t("file_sharing.usps_title")}{" "}<span className="font-lato font-extrabold text-[48px] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3207BC] to-[#409DFF]">{t("file_sharing.usps_title_highlight")}</span></>}
          description={t("file_sharing.usps_desc")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[46px] max-w-7xl mx-auto">
          {usps.map((usp, index) => (
            <StudioCard key={usp.title} title={usp.title} tagline={usp.tagline} description={usp.description} highlight={usp.highlight} icon={usp.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FileSharingUSPs;