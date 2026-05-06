/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import TrustTicker from "./components/TrustTicker";
import FeaturedExperience from "./components/FeaturedExperience";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import LeadGenForm from "./components/LeadGenForm";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  // Smooth scroll implementation enhancement
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedExperience />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <LeadGenForm />
      </main>

      <Footer />
    </div>
  );
}
