
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PDFUploadPage from "./pages/PDFUploadPage";
import PDFViewPage from "./pages/PDFViewPage";
import PDFBrowserPage from "./pages/PDFBrowserPage";
import ContactPage from "./pages/ContactPage";
import CookieConsent from "./components/CookieConsent";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

// ScrollToTop component to handle scrolling when routes change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, try to scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/blog/:id/:slug" element={<BlogPostPage />} />
        <Route path="/upload-pdf" element={<PDFUploadPage />} />
        <Route path="/view-pdf" element={<PDFViewPage />} />
        <Route path="/browse-pdf" element={<PDFBrowserPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
