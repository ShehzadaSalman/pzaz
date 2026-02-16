import React from "react";
import SharedCTA from "@/components/SharedCTA";
import iconImportScript from "@/assets/icon-import-script.svg";

const ScriptCTA = () => {
  return (
    <SharedCTA
      pillText="Free for 7 days"
      title={
        <>
          Write your script.
          <br />
          Your way. With Pzaz.
        </>
      }
      description="Your story deserves a tool built for the future. Start writing today — it's free, no credit card required."
      primaryButtonText="Import a Script"
      primaryButtonPrefixIcon={<img src={iconImportScript} alt="" className="w-5 h-5" />}
      secondaryButtonText="Book a demo"
      showLanguagesImage={false}
      backgroundStyle={{ background: "radial-gradient(88.07% 62.52% at 50% 0%, #9D87FF 0%, #5C28A4 95%)" }}
    />
  );
};

export default ScriptCTA;
