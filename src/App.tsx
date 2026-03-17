import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Script from "./pages/Script";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import BlogCategory from "./pages/BlogCategory";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import SalesTeam from "./pages/SalesTeam";
import Breakdown from "./pages/Breakdown";
import Brand from "./pages/Brand";
import Culture from "./pages/Culture";
import Imagine from "./pages/Imagine";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Collaborate from "./pages/Collaborate";
import PzazVsFinalDraft from "./pages/PzazVsFinalDraft";
import KnowledgeBase from "./pages/KnowledgeBase";
import KnowledgeBaseArticle from "./pages/KnowledgeBaseArticle";
import PzazProject from "./pages/PzazProject";
import Sell from "./pages/Sell";
import Shoot from "./pages/Shoot";
import Visualise from "./pages/Visualise";
import Write from "./pages/Write";
import Indie from "./pages/Indie";
import Budget from "./pages/Budget";
import Planning from "./pages/Planning";
import StudioPro from "./pages/StudioPro";
import Storyboard from "./pages/Storyboard";
import SceneBreakdown from "./pages/SceneBreakdown";
import CollaborationTools from "./pages/CollaborationTools";
import TaskManagement from "./pages/TaskManagement";
import FileSharing from "./pages/FileSharing";
import ProjectManagement from "./pages/ProjectManagement";
import Schools from "./pages/Schools";
import DirectorsProducers from "./pages/DirectorsProducers";
import DocumentaryFilmmakers from "./pages/DocumentaryFilmmakers";
import Cinematographers from "./pages/Cinematographers";
import CreativeAgencies from "./pages/CreativeAgencies";
import ProductionTeams from "./pages/ProductionTeams";
import Screenwriters from "./pages/Screenwriters";
import TVSeriesCreators from "./pages/TVSeriesCreators";
import ScrollToTop from "./components/ScrollToTop";

/**
 * AppRoutes contains all route definitions. It must be wrapped in a router
 * (BrowserRouter for client, StaticRouter for SSR).
 */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/script" element={<Script />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/sales-team" element={<SalesTeam />} />
      <Route path="/breakdown" element={<Breakdown />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/imagine" element={<Imagine />} />
      <Route path="/collaborate" element={<Collaborate />} />
      <Route path="/pzaz-vs-final-draft" element={<PzazVsFinalDraft />} />
      <Route path="/knowledge-base" element={<KnowledgeBase />} />
      <Route path="/knowledge-base/:slug" element={<KnowledgeBaseArticle />} />
      <Route path="/pzaz-project" element={<PzazProject />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/shoot" element={<Shoot />} />
      <Route path="/visualise" element={<Visualise />} />
      <Route path="/write" element={<Write />} />
      {/* Products */}
      <Route path="/indie-filmmaking-software" element={<Indie />} />
      <Route path="/indie" element={<Navigate to="/indie-filmmaking-software" replace />} />
      <Route path="/film-budgeting-software" element={<Budget />} />
      <Route path="/budget" element={<Navigate to="/film-budgeting-software" replace />} />
      <Route path="/film-preproduction-planning" element={<Planning />} />
      <Route path="/planning" element={<Navigate to="/film-preproduction-planning" replace />} />
      <Route path="/studio-pro-software" element={<StudioPro />} />
      <Route path="/studio-pro" element={<Navigate to="/studio-pro-software" replace />} />
      <Route path="/storyboard-software" element={<Storyboard />} />
      <Route path="/storyboard" element={<Navigate to="/storyboard-software" replace />} />
      {/* Features */}
      <Route path="/scene-breakdown-software" element={<SceneBreakdown />} />
      <Route path="/scene-breakdown" element={<Navigate to="/scene-breakdown-software" replace />} />
      <Route path="/film-collaboration-software" element={<CollaborationTools />} />
      <Route path="/collaboration-tools" element={<Navigate to="/film-collaboration-software" replace />} />
      <Route path="/production-task-management" element={<TaskManagement />} />
      <Route path="/task-management" element={<Navigate to="/production-task-management" replace />} />
      <Route path="/film-file-sharing-storage" element={<FileSharing />} />
      <Route path="/file-sharing" element={<Navigate to="/film-file-sharing-storage" replace />} />
      <Route path="/film-project-management" element={<ProjectManagement />} />
      <Route path="/project-management" element={<Navigate to="/film-project-management" replace />} />
      {/* Solutions */}
      <Route path="/film-schools-software" element={<Schools />} />
      <Route path="/schools" element={<Navigate to="/film-schools-software" replace />} />
      <Route path="/software-for-directors-producers" element={<DirectorsProducers />} />
      <Route path="/directors-producers" element={<Navigate to="/software-for-directors-producers" replace />} />
      <Route path="/documentary-filmmaking-software" element={<DocumentaryFilmmakers />} />
      <Route path="/documentary-filmmakers" element={<Navigate to="/documentary-filmmaking-software" replace />} />
      <Route path="/software-for-cinematographers" element={<Cinematographers />} />
      <Route path="/cinematographers" element={<Navigate to="/software-for-cinematographers" replace />} />
      <Route path="/creative-agency-production-software" element={<CreativeAgencies />} />
      <Route path="/creative-agencies" element={<Navigate to="/creative-agency-production-software" replace />} />
      <Route path="/film-production-team-software" element={<ProductionTeams />} />
      <Route path="/production-teams" element={<Navigate to="/film-production-team-software" replace />} />
      <Route path="/screenwriting-software" element={<Screenwriters />} />
      <Route path="/tv-series-production-software" element={<TVSeriesCreators />} />
      <Route path="/film-investment-software" element={<InvestorsFunding />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/terms-of-use" element={<Navigate to="/terms" replace />} />
      <Route path="/producer-blog" element={<Blog />} />
      <Route path="/producer-blog/category/:categorySlug" element={<BlogCategory />} />
      <Route path="/producer-blog/:slug" element={<BlogArticle />} />
      <Route path="/blog" element={<Navigate to="/producer-blog" replace />} />
      <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
