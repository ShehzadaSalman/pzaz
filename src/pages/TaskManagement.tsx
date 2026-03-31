import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import TaskManagementHero from "@/components/task-management/TaskManagementHero";
import TaskManagementProblem from "@/components/task-management/TaskManagementProblem";
import TaskManagementContext from "@/components/task-management/TaskManagementContext";
import TaskManagementCoreFeatures from "@/components/task-management/TaskManagementCoreFeatures";
import TaskManagementUSPs from "@/components/task-management/TaskManagementUSPs";
import TaskManagementCTA from "@/components/task-management/TaskManagementCTA";

const TaskManagement = () => {
  return (
    <PageLayout>
      <SEO
        title="Film Collaboration Software | Align Teams & Workflows | Pzaz"
        description="Keep every department aligned with task management built into the production environment. Assign work, track deadlines, and keep production momentum going with Pzaz."
        url="https://pzaz.io/film-production-tool/task-management-software"
        canonical="https://pzaz.io/film-production-tool/task-management-software"
        keywords={["task management", "film production", "production planning", "team coordination", "pzaz"]}
      />
      <TaskManagementHero />
      <TaskManagementProblem />
      <TaskManagementContext />
      <TaskManagementCoreFeatures />
      <TaskManagementUSPs />
      <TaskManagementCTA />
    </PageLayout>
  );
};

export default TaskManagement;
