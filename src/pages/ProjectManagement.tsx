import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import ProjectManagementHero from "@/components/project-management/ProjectManagementHero";
import ProjectManagementProblem from "@/components/project-management/ProjectManagementProblem";
import ProjectManagementOS from "@/components/project-management/ProjectManagementOS";
import ProjectManagementStats from "@/components/project-management/ProjectManagementStats";
import ProjectManagementShift from "@/components/project-management/ProjectManagementShift";
import ProjectManagementUSPs from "@/components/project-management/ProjectManagementUSPs";
import ProjectManagementCTA from "@/components/project-management/ProjectManagementCTA";

const ProjectManagement = () => {
  return (
    <PageLayout>
      <SEO
        title="Project Management – Pzaz | The Work OS for Filmmakers"
        description="Stop coordinating a film across scattered tools. Pzaz gives filmmakers one unified environment where scripts, schedules, budgets, tasks, and communication all live together."
        url="https://pzaz.io/film-project-management"
        canonical="https://pzaz.io/film-project-management"
        keywords={[
          "project management",
          "film production",
          "filmmaker tools",
          "production software",
          "indie filmmaking",
          "pzaz",
        ]}
      />
      <ProjectManagementHero />
      <ProjectManagementProblem />
      <ProjectManagementOS />
      <ProjectManagementStats />
      <ProjectManagementShift />
      <ProjectManagementUSPs />
      <ProjectManagementCTA />
    </PageLayout>
  );
};

export default ProjectManagement;
