import React from "react";
import SharedCTA from "@/components/SharedCTA";

const ScriptCTA = () => {
  return (
    <SharedCTA
      pillText="Free to start"
      title={
        <>
          Write your script.
          <br />
          Your way. With Pzaz.
        </>
      }
      description="Your story deserves a tool built for the future. Start writing today — it's free, no credit card required."
      primaryButtonText="Get started free"
      secondaryButtonText="Book a demo"
    />
  );
};

export default ScriptCTA;
