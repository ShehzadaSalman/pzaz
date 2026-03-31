import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MetaPixelTracker from "./components/MetaPixelTracker";
import LocaleWrapper from "./components/LocaleWrapper";

/** Branded loader shown while lazy pages + translations load */
const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
    <img
      src="/Pzaz_Logo.svg"
      alt="Pzaz"
      className="h-10 animate-pulse"
    />
  </div>
);

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

/** Shared product/feature/solution routes used by every locale block */
const ProductRoutes = () => (
  <>
    {/* Products */}
    <Route path="film-production-software/indie-filmmakers" element={<Indie />} />
    <Route path="film-production-software/production-planning" element={<Planning />} />
    <Route path="film-production-software/studio-management" element={<StudioPro />} />
    <Route path="film-production-software/film-budgeting" element={<Budget />} />
    <Route path="film-production-software/storyboarding" element={<Storyboard />} />
    {/* Features */}
    <Route path="film-production-tool/script-writing-software" element={<Script />} />
    <Route path="film-production-tool/scene-breakdown-software" element={<SceneBreakdown />} />
    <Route path="film-production-tool/collaboration-software" element={<CollaborationTools />} />
    <Route path="film-production-tool/task-management-software" element={<TaskManagement />} />
    <Route path="film-production-tool/data-sharing-software" element={<FileSharing />} />
    <Route path="film-production-tool/project-management-software" element={<ProjectManagement />} />
    {/* Solutions */}
    <Route path="film-production-solution/filmmaking-software" element={<EmpoweringFilmmaking />} />
    <Route path="film-production-solution/software-for-indie-filmmakers" element={<IndieFilmmakers />} />
    <Route path="film-production-solution/film-school-production-software" element={<Schools />} />
    <Route path="film-production-solution/software-for-directors-producers" element={<DirectorsProducers />} />
    <Route path="film-production-solution/documentary-filmmaking-software" element={<DocumentaryFilmmakers />} />
    <Route path="film-production-solution/software-for-cinematographers" element={<Cinematographers />} />
    <Route path="film-production-solution/creative-agency-production-software" element={<CreativeAgencies />} />
    <Route path="film-production-solution/film-production-team-software" element={<ProductionTeams />} />
    <Route path="film-production-solution/screenwriting-software" element={<Screenwriters />} />
    <Route path="film-production-solution/tv-production-software" element={<TVSeriesCreators />} />
    <Route path="film-production-solution/film-budgeting-software" element={<InvestorsFunding />} />
    <Route path="film-production-solution/software-for-production-managers" element={<ProductionManagers />} />
  </>
);

/**
 * AppRoutes contains all route definitions. It must be wrapped in a router
 * (BrowserRouter for client, StaticRouter for SSR).
 */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <MetaPixelTracker />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ── Default English routes (no locale prefix) ── */}
        <Route element={<LocaleWrapper />}>
          <Route path="/" element={<Index />} />
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
          {/* New canonical routes */}
          <Route path="/film-production-software/indie-filmmakers" element={<Indie />} />
          <Route path="/film-production-software/production-planning" element={<Planning />} />
          <Route path="/film-production-software/studio-management" element={<StudioPro />} />
          <Route path="/film-production-software/film-budgeting" element={<Budget />} />
          <Route path="/film-production-software/storyboarding" element={<Storyboard />} />
          <Route path="/film-production-tool/script-writing-software" element={<Script />} />
          <Route path="/film-production-tool/scene-breakdown-software" element={<SceneBreakdown />} />
          <Route path="/film-production-tool/collaboration-software" element={<CollaborationTools />} />
          <Route path="/film-production-tool/task-management-software" element={<TaskManagement />} />
          <Route path="/film-production-tool/data-sharing-software" element={<FileSharing />} />
          <Route path="/film-production-tool/project-management-software" element={<ProjectManagement />} />
          <Route path="/film-production-solution/filmmaking-software" element={<EmpoweringFilmmaking />} />
          <Route path="/film-production-solution/software-for-indie-filmmakers" element={<IndieFilmmakers />} />
          <Route path="/film-production-solution/film-school-production-software" element={<Schools />} />
          <Route path="/film-production-solution/software-for-directors-producers" element={<DirectorsProducers />} />
          <Route path="/film-production-solution/documentary-filmmaking-software" element={<DocumentaryFilmmakers />} />
          <Route path="/film-production-solution/software-for-cinematographers" element={<Cinematographers />} />
          <Route path="/film-production-solution/creative-agency-production-software" element={<CreativeAgencies />} />
          <Route path="/film-production-solution/film-production-team-software" element={<ProductionTeams />} />
          <Route path="/film-production-solution/screenwriting-software" element={<Screenwriters />} />
          <Route path="/film-production-solution/tv-production-software" element={<TVSeriesCreators />} />
          <Route path="/film-production-solution/film-budgeting-software" element={<InvestorsFunding />} />
          <Route path="/film-production-solution/software-for-production-managers" element={<ProductionManagers />} />
          <Route path="/introductory-video" element={<VideoPlayer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-use" element={<Terms />} />
          {/* Blog */}
          <Route path="/producer-blog" element={<Blog />} />
          <Route path="/producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/producer-blog/:slug" element={<BlogArticle />} />
          {/* ── Legacy redirects ── */}
          <Route path="/indie" element={<Navigate to="/film-production-software/indie-filmmakers" replace />} />
          <Route path="/indie-filmmaking-software" element={<Navigate to="/film-production-software/indie-filmmakers" replace />} />
          <Route path="/film-preproduction-planning" element={<Navigate to="/film-production-software/production-planning" replace />} />
          <Route path="/planning" element={<Navigate to="/film-production-software/production-planning" replace />} />
          <Route path="/studio-pro-software" element={<Navigate to="/film-production-software/studio-management" replace />} />
          <Route path="/studio-pro" element={<Navigate to="/film-production-software/studio-management" replace />} />
          <Route path="/film-budgeting-software" element={<Navigate to="/film-production-software/film-budgeting" replace />} />
          <Route path="/budget" element={<Navigate to="/film-production-software/film-budgeting" replace />} />
          <Route path="/storyboard-software" element={<Navigate to="/film-production-software/storyboarding" replace />} />
          <Route path="/storyboard" element={<Navigate to="/film-production-software/storyboarding" replace />} />
          <Route path="/script" element={<Navigate to="/film-production-tool/script-writing-software" replace />} />
          <Route path="/scene-breakdown-software" element={<Navigate to="/film-production-tool/scene-breakdown-software" replace />} />
          <Route path="/scene-breakdown" element={<Navigate to="/film-production-tool/scene-breakdown-software" replace />} />
          <Route path="/film-collaboration-software" element={<Navigate to="/film-production-tool/collaboration-software" replace />} />
          <Route path="/collaboration-tools" element={<Navigate to="/film-production-tool/collaboration-software" replace />} />
          <Route path="/production-task-management" element={<Navigate to="/film-production-tool/task-management-software" replace />} />
          <Route path="/task-management" element={<Navigate to="/film-production-tool/task-management-software" replace />} />
          <Route path="/film-file-sharing-storage" element={<Navigate to="/film-production-tool/data-sharing-software" replace />} />
          <Route path="/file-sharing" element={<Navigate to="/film-production-tool/data-sharing-software" replace />} />
          <Route path="/film-project-management" element={<Navigate to="/film-production-tool/project-management-software" replace />} />
          <Route path="/project-management" element={<Navigate to="/film-production-tool/project-management-software" replace />} />
          <Route path="/empowering-filmmaking" element={<Navigate to="/film-production-solution/filmmaking-software" replace />} />
          <Route path="/indie-filmmakers" element={<Navigate to="/film-production-solution/software-for-indie-filmmakers" replace />} />
          <Route path="/film-schools-software" element={<Navigate to="/film-production-solution/film-school-production-software" replace />} />
          <Route path="/schools" element={<Navigate to="/film-production-solution/film-school-production-software" replace />} />
          <Route path="/software-for-directors-producers" element={<Navigate to="/film-production-solution/software-for-directors-producers" replace />} />
          <Route path="/directors-producers" element={<Navigate to="/film-production-solution/software-for-directors-producers" replace />} />
          <Route path="/documentary-filmmaking-software" element={<Navigate to="/film-production-solution/documentary-filmmaking-software" replace />} />
          <Route path="/documentary-filmmakers" element={<Navigate to="/film-production-solution/documentary-filmmaking-software" replace />} />
          <Route path="/software-for-cinematographers" element={<Navigate to="/film-production-solution/software-for-cinematographers" replace />} />
          <Route path="/cinematographers" element={<Navigate to="/film-production-solution/software-for-cinematographers" replace />} />
          <Route path="/creative-agency-production-software" element={<Navigate to="/film-production-solution/creative-agency-production-software" replace />} />
          <Route path="/creative-agencies" element={<Navigate to="/film-production-solution/creative-agency-production-software" replace />} />
          <Route path="/film-production-team-software" element={<Navigate to="/film-production-solution/film-production-team-software" replace />} />
          <Route path="/production-teams" element={<Navigate to="/film-production-solution/film-production-team-software" replace />} />
          <Route path="/screenwriting-software" element={<Navigate to="/film-production-solution/screenwriting-software" replace />} />
          <Route path="/tv-series-production-software" element={<Navigate to="/film-production-solution/tv-production-software" replace />} />
          <Route path="/film-investment-software" element={<Navigate to="/film-production-solution/film-budgeting-software" replace />} />
          <Route path="/software-for-production-managers" element={<Navigate to="/film-production-solution/software-for-production-managers" replace />} />
          <Route path="/production-managers" element={<Navigate to="/film-production-solution/software-for-production-managers" replace />} />
          <Route path="/demo-video" element={<Navigate to="/introductory-video" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
          <Route path="/blog" element={<Navigate to="/producer-blog" replace />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Route>

        {/* ── Locale-prefixed routes — /ur/* ── */}
        <Route path="/ur" element={<LocaleWrapper />}>
          <Route index element={<Index />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="breakdown" element={<Breakdown />} />
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
          {ProductRoutes()}
          <Route path="introductory-video" element={<VideoPlayer />} />
          <Route path="demo-video" element={<Navigate to="/ur/introductory-video" replace />} />
          <Route path="sales-team" element={<SalesTeam />} />
          <Route path="brand" element={<Brand />} />
          <Route path="culture" element={<Culture />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="producer-blog" element={<Blog />} />
          <Route path="producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="producer-blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ── Locale-prefixed routes — /fr/* ── */}
        <Route path="/fr" element={<LocaleWrapper />}>
          <Route index element={<Index />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="breakdown" element={<Breakdown />} />
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
          {ProductRoutes()}
          <Route path="introductory-video" element={<VideoPlayer />} />
          <Route path="demo-video" element={<Navigate to="/fr/introductory-video" replace />} />
          <Route path="sales-team" element={<SalesTeam />} />
          <Route path="brand" element={<Brand />} />
          <Route path="culture" element={<Culture />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="producer-blog" element={<Blog />} />
          <Route path="producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="producer-blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ── Locale-prefixed routes — /es/* ── */}
        <Route path="/es" element={<LocaleWrapper />}>
          <Route index element={<Index />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="breakdown" element={<Breakdown />} />
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
          {ProductRoutes()}
          <Route path="introductory-video" element={<VideoPlayer />} />
          <Route path="demo-video" element={<Navigate to="/es/introductory-video" replace />} />
          <Route path="sales-team" element={<SalesTeam />} />
          <Route path="brand" element={<Brand />} />
          <Route path="culture" element={<Culture />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="producer-blog" element={<Blog />} />
          <Route path="producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="producer-blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ── Locale-prefixed routes — /de/* ── */}
        <Route path="/de" element={<LocaleWrapper />}>
          <Route index element={<Index />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="breakdown" element={<Breakdown />} />
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
          {ProductRoutes()}
          <Route path="introductory-video" element={<VideoPlayer />} />
          <Route path="demo-video" element={<Navigate to="/de/introductory-video" replace />} />
          <Route path="sales-team" element={<SalesTeam />} />
          <Route path="brand" element={<Brand />} />
          <Route path="culture" element={<Culture />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="producer-blog" element={<Blog />} />
          <Route path="producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="producer-blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ── Locale-prefixed routes — /it/* ── */}
        <Route path="/it" element={<LocaleWrapper />}>
          <Route index element={<Index />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="breakdown" element={<Breakdown />} />
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
          {ProductRoutes()}
          <Route path="introductory-video" element={<VideoPlayer />} />
          <Route path="demo-video" element={<Navigate to="/it/introductory-video" replace />} />
          <Route path="sales-team" element={<SalesTeam />} />
          <Route path="brand" element={<Brand />} />
          <Route path="culture" element={<Culture />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="producer-blog" element={<Blog />} />
          <Route path="producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="producer-blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
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
