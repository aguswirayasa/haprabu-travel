import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { featuredPackages } from "@/data/travelContent";
import { idrToUsd } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Packages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="packages" className="bg-secondary section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Our Packages
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Curated experiences designed to capture the essence of the Island of
            the Gods, from cultural immersion to shoreline luxury.
          </p>
        </div>

        <div className="px-4 md:px-12 mb-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4 md:-ml-6">
              {featuredPackages.map((pkg, index) => (
                <CarouselItem
                  key={pkg.slug}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    to={`/package/${pkg.slug}`}
                    className="group relative block h-[400px] w-full overflow-hidden rounded-2xl shadow-xl hover-lift"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />

                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                      className={cn(
                        "h-full w-full object-cover transition-transform duration-700 ease-out",
                        hoveredIndex === index ? "scale-110" : "scale-100",
                      )}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300 z-20" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30">
                      <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h3 className="text-2xl font-playfair font-bold mb-2">
                          {pkg.name}
                        </h3>

                        <div className="flex items-center gap-4 text-sm font-medium mb-3 opacity-90">
                          <span className="bg-primary/90 px-3 py-1 rounded-full backdrop-blur-sm text-primary-foreground">
                            Start from ${idrToUsd(pkg.priceStartFromIDR)}
                          </span>
                          {pkg.destinationCount && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {pkg.destinationCount} Destinations
                            </span>
                          )}
                        </div>

                        <div
                          className={cn(
                            "grid transition-all duration-300 ease-out overflow-hidden text-white/90",
                            hoveredIndex === index
                              ? "grid-rows-[1fr] opacity-100 mt-4"
                              : "grid-rows-[0fr] opacity-0 mt-0",
                          )}
                        >
                          <div className="min-h-0">
                            <p className="line-clamp-3 mb-4">
                              {pkg.description}
                            </p>
                            <div className="flex items-center text-sm font-bold tracking-wide uppercase">
                              View Details{" "}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop side arrows */}
            <CarouselPrevious className="hidden md:inline-flex -left-6 h-10 w-10 border-primary/30 text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:inline-flex -right-6 h-10 w-10 border-primary/30 text-primary hover:bg-primary hover:text-white" />

            {/* Mobile bottom arrows */}
            <div className="flex md:hidden justify-center items-center gap-6 mt-6">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-11 w-11 border-primary/40 text-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-x-0 translate-y-0 h-11 w-11 border-primary/40 text-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>

        <div className="text-center">
          <Link to="/packages">
            <Button size="lg" variant="outline" className="group">
              Show All Packages
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
