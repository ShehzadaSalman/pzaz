import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import FileSharingHero from "@/components/file-sharing/FileSharingHero";
import FileSharingProblem from "@/components/file-sharing/FileSharingProblem";
import FileSharingContext from "@/components/file-sharing/FileSharingContext";
import FileSharingAI from "@/components/file-sharing/FileSharingAI";
import FileSharingCoreFeatures from "@/components/file-sharing/FileSharingCoreFeatures";
import FileSharingUSPs from "@/components/file-sharing/FileSharingUSPs";
import FileSharingCraft from "@/components/file-sharing/FileSharingCraft";
import FileSharingModern from "@/components/file-sharing/FileSharingModern";
import FileSharingCTA from "@/components/file-sharing/FileSharingCTA";

const FileSharing = () => {
  return (
    <PageLayout>
      <SEO
        title="File Sharing & Media Storage – Pzaz | Centralise Your Production Assets"
        description="Centralise, share, and protect your film production assets inside Pzaz. Keep scripts, storyboards, footage, and references connected to the production — not scattered across drives."
        url="https://pzaz.io/file-sharing"
        canonical="https://pzaz.io/file-sharing"
        keywords={["file sharing", "media storage", "film production", "asset management", "production files", "pzaz"]}
      />
      <FileSharingHero />
      <FileSharingProblem />
      <FileSharingContext />
      <FileSharingAI />
      <FileSharingCoreFeatures />
      <FileSharingUSPs />
      <FileSharingCraft />
      <FileSharingModern />
      <FileSharingCTA />
    </PageLayout>
  );
};

export default FileSharing;
