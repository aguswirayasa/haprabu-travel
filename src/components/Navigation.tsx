import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <h2
              className={`text-2xl font-heading font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Haprabu
            </h2>
            <h2
              className={`text-2xl font-heading font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Travel & Tour
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "packages", "fleet", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item === "fleet" ? "Our Fleet" : item}
                </button>
              ),
            )}
            <Button
              variant="default"
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
              onClick={() => scrollToSection("contact")}
            >
              Plan My Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={isScrolled ? "text-foreground" : "text-white"}
                size={24}
              />
            ) : (
              <Menu
                className={isScrolled ? "text-foreground" : "text-white"}
                size={24}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl py-6 space-y-4 shadow-lg border-t border-white/20 animate-in slide-in-from-top-2">
            {["home", "about", "services", "packages", "fleet", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-6 py-3 font-heading text-lg font-semibold uppercase tracking-widest text-primary-dark hover:text-accent hover:bg-gray-50/50 transition-all"
                >
                  {item === "fleet" ? "Our Fleet" : item}
                </button>
              ),
            )}
            <div className="px-6 pt-4">
              <Button
                variant="default"
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Plan My Trip
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
