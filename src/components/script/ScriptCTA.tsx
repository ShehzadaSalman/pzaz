import React from "react";
import SharedCTA from "@/components/SharedCTA";
import { useTranslation } from "react-i18next";

const ScriptCTA = () => {
  const { t } = useTranslation('script');
  return (
    <SharedCTA
      pillText={t("script.cta_pill")}
      title={
        <>
          {t("script.cta_title_line1")}
          <br />
          {t("script.cta_title_line2")}
        </>
      }
      description={t("script.cta_desc")}
      primaryButtonText={t("script.cta_primary")}
      secondaryButtonText={t("script.cta_secondary")}
      showLanguagesImage={false}
      backgroundStyle={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
    />
  );
};

export default ScriptCTA;
