import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bali.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6285977560660?text=Hello! I'm interested in planning my Bali trip.",
      "_blank",
    );
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
          Haprabu Travel & Tour
        </h1>
        <p className="text-xl md:text-2xl font-body font-light mb-10 max-w-3xl mx-auto">
          Personalized travel experiences, crafted with love and local insight
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 shadow-[var(--shadow-cta)] transition-all hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Plan My Trip
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all hover:scale-105"
            onClick={openWhatsApp}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
