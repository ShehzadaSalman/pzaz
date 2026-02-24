import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Script from "./pages/Script";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import BlogCategory from "./pages/BlogCategory";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import SalesTeam from "./pages/SalesTeam";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/script" element={<Script />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sales-team" element={<SalesTeam />} />
          <Route path="/producer-blog" element={<Blog />} />
          <Route path="/producer-blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/producer-blog/:slug" element={<BlogArticle />} />
          <Route path="/blog" element={<Navigate to="/producer-blog" replace />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
