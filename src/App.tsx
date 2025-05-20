
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ResidentialServices from "./pages/ResidentialServices";
import CommercialServices from "./pages/CommercialServices";
import OurProjects from "./pages/OurProjects";
import MKGoldCoast from "./pages/projects/MKGoldCoast";
import VaisakhiSkyline from "./pages/projects/VaisakhiSkyline";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<ResidentialServices />} />
          <Route path="/services/commercial" element={<CommercialServices />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/our-projects/mk-gold-coast" element={<MKGoldCoast />} />
          <Route path="/our-projects/vaisakhi-skyline" element={<VaisakhiSkyline />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
