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
      <Route path="/indie" element={<Indie />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/studio-pro" element={<StudioPro />} />
      <Route path="/storyboard" element={<Storyboard />} />
      <Route path="/scene-breakdown" element={<SceneBreakdown />} />
      <Route path="/collaboration-tools" element={<CollaborationTools />} />
      <Route path="/task-management" element={<TaskManagement />} />
      <Route path="/file-sharing" element={<FileSharing />} />
      <Route path="/project-management" element={<ProjectManagement />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/directors-producers" element={<DirectorsProducers />} />
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
