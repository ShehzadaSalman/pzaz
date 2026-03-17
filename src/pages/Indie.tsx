import React from "react";
import IndieHero from "@/components/indie/IndieHero";
import IndieConfidence from "@/components/indie/IndieConfidence";
import IndieHome from "@/components/indie/IndieHome";
import IndieShift from "@/components/indie/IndieShift";
import IndieFree from "@/components/indie/IndieFree";
import IndieWhatYouGet from "@/components/indie/IndieWhatYouGet";
import IndieAI from "@/components/indie/IndieAI";
import IndieFunding from "@/components/indie/IndieFunding";
import IndieCTA from "@/components/indie/IndieCTA";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Indie = () => {
  return (
    <PageLayout>
      <SEO
        title="Pzaz Indie – Free Film Production Platform for Independent Filmmakers"
        description="Make your independent film look ready. Indie gives you a free, permanent production workspace where your script, ideas, planning and collaborators come together."
        url="https://pzaz.io/indie-filmmaking-software"
        keywords={[
          "indie film production",
          "independent filmmaker tools",
          "free film production platform",
          "script development",
          "film project management",
          "Pzaz Indie",
          "production workspace",
        ]}
        canonical="https://pzaz.io/indie-filmmaking-software"
      />
      <IndieHero />
      <IndieConfidence />
      <IndieHome />
      <IndieShift />
      <IndieFree />
      <IndieWhatYouGet />
      <IndieAI />
      <IndieFunding />
      <IndieCTA />
    </PageLayout>
  );
};

export default Indie;
