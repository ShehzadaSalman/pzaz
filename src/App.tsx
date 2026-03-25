import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MetaPixelTracker from "./components/MetaPixelTracker";
import LocaleWrapper from "./components/LocaleWrapper";

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
const Index = lazy(() => import("./pages/Index"));
const Script = lazy(() => import("./pages/Script"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const SalesTeam = lazy(() => import("./pages/SalesTeam"));
const Breakdown = lazy(() => import("./pages/Breakdown"));
const Brand = lazy(() => import("./pages/Brand"));
const Culture = lazy(() => import("./pages/Culture"));
const Imagine = lazy(() => import("./pages/Imagine"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Collaborate = lazy(() => import("./pages/Collaborate"));
const PzazVsFinalDraft = lazy(() => import("./pages/PzazVsFinalDraft"));
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"));
const KnowledgeBaseArticle = lazy(() => import("./pages/KnowledgeBaseArticle"));
const PzazProject = lazy(() => import("./pages/PzazProject"));
const Sell = lazy(() => import("./pages/Sell"));
const Shoot = lazy(() => import("./pages/Shoot"));
const Visualise = lazy(() => import("./pages/Visualise"));
const Write = lazy(() => import("./pages/Write"));
const Indie = lazy(() => import("./pages/Indie"));
const Budget = lazy(() => import("./pages/Budget"));
const Planning = lazy(() => import("./pages/Planning"));
const StudioPro = lazy(() => import("./pages/StudioPro"));
const Storyboard = lazy(() => import("./pages/Storyboard"));
const SceneBreakdown = lazy(() => import("./pages/SceneBreakdown"));
const CollaborationTools = lazy(() => import("./pages/CollaborationTools"));
const TaskManagement = lazy(() => import("./pages/TaskManagement"));
const FileSharing = lazy(() => import("./pages/FileSharing"));
const ProjectManagement = lazy(() => import("./pages/ProjectManagement"));
const Schools = lazy(() => import("./pages/Schools"));
const DirectorsProducers = lazy(() => import("./pages/DirectorsProducers"));
const DocumentaryFilmmakers = lazy(() => import("./pages/DocumentaryFilmmakers"));
const Cinematographers = lazy(() => import("./pages/Cinematographers"));
const CreativeAgencies = lazy(() => import("./pages/CreativeAgencies"));
const ProductionTeams = lazy(() => import("./pages/ProductionTeams"));
const InvestorsFunding = lazy(() => import("./pages/InvestorsFunding"));
const Screenwriters = lazy(() => import("./pages/Screenwriters"));
const TVSeriesCreators = lazy(() => import("./pages/TVSeriesCreators"));
const ProductionManagers = lazy(() => import("./pages/ProductionManagers"));
const EmpoweringFilmmaking = lazy(() => import("./pages/EmpoweringFilmmaking"));
const IndieFilmmakers = lazy(() => import("./pages/IndieFilmmakers"));
const VideoPlayer = lazy(() => import("./pages/VideoPlayer"));

/** Shared page routes — used inside both the default (English) and locale-prefixed wrappers */
const PageRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route index element={<Index />} />
      <Route path="script" element={<Script />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="sales-team" element={<SalesTeam />} />
      <Route path="breakdown" element={<Breakdown />} />
      <Route path="brand" element={<Brand />} />
      <Route path="culture" element={<Culture />} />
      <Route path="imagine" element={<Imagine />} />
      <Route path="collaborate" element={<Collaborate />} />
      <Route path="pzaz-vs-final-draft" element={<PzazVsFinalDraft />} />
      <Route path="knowledge-base" element={<KnowledgeBase />} />
      <Route path="knowledge-base/:slug" element={<KnowledgeBaseArticle />} />
      <Route path="pzaz-project" element={<PzazProject />} />
      <Route path="sell" element={<Sell />} />
      <Route path="shoot" element={<Shoot />} />
      <Route path="visualise" element={<Visualise />} />
      <Route path="write" element={<Write />} />
      {/* Products */}
      <Route path="indie-filmmaking-software" element={<Indie />} />
      <Route path="indie" element={<Navigate to="indie-filmmaking-software" replace />} />
      <Route path="film-budgeting-software" element={<Budget />} />
      <Route path="budget" element={<Navigate to="film-budgeting-software" replace />} />
      <Route path="film-preproduction-planning" element={<Planning />} />
      <Route path="planning" element={<Navigate to="film-preproduction-planning" replace />} />
      <Route path="studio-pro-software" element={<StudioPro />} />
      <Route path="studio-pro" element={<Navigate to="studio-pro-software" replace />} />
      <Route path="storyboard-software" element={<Storyboard />} />
      <Route path="storyboard" element={<Navigate to="storyboard-software" replace />} />
      {/* Features */}
      <Route path="scene-breakdown-software" element={<SceneBreakdown />} />
      <Route path="scene-breakdown" element={<Navigate to="scene-breakdown-software" replace />} />
      <Route path="film-collaboration-software" element={<CollaborationTools />} />
      <Route path="collaboration-tools" element={<Navigate to="film-collaboration-software" replace />} />
      <Route path="production-task-management" element={<TaskManagement />} />
      <Route path="task-management" element={<Navigate to="production-task-management" replace />} />
      <Route path="film-file-sharing-storage" element={<FileSharing />} />
      <Route path="file-sharing" element={<Navigate to="film-file-sharing-storage" replace />} />
      <Route path="film-project-management" element={<ProjectManagement />} />
      <Route path="project-management" element={<Navigate to="film-project-management" replace />} />
      {/* Solutions */}
      <Route path="film-schools-software" element={<Schools />} />
      <Route path="schools" element={<Navigate to="film-schools-software" replace />} />
      <Route path="software-for-directors-producers" element={<DirectorsProducers />} />
      <Route path="directors-producers" element={<Navigate to="software-for-directors-producers" replace />} />
      <Route path="documentary-filmmaking-software" element={<DocumentaryFilmmakers />} />
      <Route path="documentary-filmmakers" element={<Navigate to="documentary-filmmaking-software" replace />} />
      <Route path="software-for-cinematographers" element={<Cinematographers />} />
      <Route path="cinematographers" element={<Navigate to="software-for-cinematographers" replace />} />
      <Route path="creative-agency-production-software" element={<CreativeAgencies />} />
      <Route path="creative-agencies" element={<Navigate to="creative-agency-production-software" replace />} />
      <Route path="film-production-team-software" element={<ProductionTeams />} />
      <Route path="production-teams" element={<Navigate to="film-production-team-software" replace />} />
      <Route path="screenwriting-software" element={<Screenwriters />} />
      <Route path="tv-series-production-software" element={<TVSeriesCreators />} />
      <Route path="film-investment-software" element={<InvestorsFunding />} />
      <Route path="software-for-production-managers" element={<ProductionManagers />} />
      <Route path="empowering-filmmaking" element={<EmpoweringFilmmaking />} />
      <Route path="indie-filmmakers" element={<IndieFilmmakers />} />
      <Route path="demo-video" element={<VideoPlayer />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms-of-use" element={<Terms />} />
      <Route path="terms" element={<Navigate to="terms-of-use" replace />} />
      <Route path="producer-blog" element={<Blog />} />
      <Route path="producer-blog/category/:categorySlug" element={<BlogCategory />} />
      <Route path="producer-blog/:slug" element={<BlogArticle />} />
      <Route path="blog" element={<Navigate to="producer-blog" replace />} />
      <Route path="blog/category/:categorySlug" element={<BlogCategory />} />
      <Route path="blog/:slug" element={<BlogArticle />} />
    </Routes>
  </Suspense>
);

/**
 * AppRoutes contains all route definitions. It must be wrapped in a router
 * (BrowserRouter for client, StaticRouter for SSR).
 */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <MetaPixelTracker />
    <Routes>
      {/* Default locale (English) — no prefix */}
      <Route element={<LocaleWrapper />}>
        <Route path="/*" element={<PageRoutes />} />
      </Route>

      {/* Locale-prefixed routes — e.g. /ur/* */}
      <Route path="/:locale/*" element={<LocaleWrapper />}>
        <Route path="*" element={<PageRoutes />} />
      </Route>

      {/* Catch-all */}
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
