import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      // Small delay to ensure the DOM is ready after navigation
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state so it doesn't re-scroll on re-renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{`${SITE_TITLE} | Authentic Bali Travel Experiences`}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta
          property="og:title"
          content={`${SITE_TITLE} | Authentic Bali Travel Experiences`}
        />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
      </Helmet>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Fleet />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
