import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import TaskManagementHero from "@/components/task-management/TaskManagementHero";
import TaskManagementProblem from "@/components/task-management/TaskManagementProblem";
import TaskManagementContext from "@/components/task-management/TaskManagementContext";
import TaskManagementShift from "@/components/task-management/TaskManagementShift";
import TaskManagementAI from "@/components/task-management/TaskManagementAI";
import TaskManagementFeatures from "@/components/task-management/TaskManagementFeatures";
import TaskManagementCraft from "@/components/task-management/TaskManagementCraft";
import TaskManagementModern from "@/components/task-management/TaskManagementModern";
import TaskManagementCTA from "@/components/task-management/TaskManagementCTA";

const TaskManagement = () => {
  return (
    <PageLayout>
      <SEO
        title="Task Management – Pzaz | Clear Ownership for Film Productions"
        description="Keep every department aligned with task management built into the production environment. Assign work, track deadlines, and keep production momentum going with Pzaz."
        url="https://pzaz.io/task-management"
        canonical="https://pzaz.io/task-management"
        keywords={["task management", "film production", "production planning", "team coordination", "pzaz"]}
      />
      <TaskManagementHero />
      <TaskManagementProblem />
      <TaskManagementContext />
      <TaskManagementShift />
      <TaskManagementAI />
      <TaskManagementFeatures />
      <TaskManagementCraft />
      <TaskManagementModern />
      <TaskManagementCTA />
    </PageLayout>
  );
};

export default TaskManagement;
