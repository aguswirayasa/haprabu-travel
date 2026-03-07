import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE_TITLE } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPackages } from "@/data/travelContent";
import { idrToUsd } from "@/lib/currency";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PackagesAll = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const packages = getAllPackages();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>All Packages - {SITE_TITLE}</title>
      </Helmet>
      <Navigation />
      <main>
        {/* Simple Hero Section for the page */}
        <section className="relative pt-32 pb-16 bg-muted/30">
          <div className="container-custom">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Packages</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
              Explore All Packages
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-3xl">
              Browse our complete collection of curated Bali experiences. Find
              the perfect itinerary for your dream vacation.
            </p>
          </div>
        </section>

        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Link
                  key={pkg.slug}
                  to={`/package/${pkg.slug}`}
                  className="group relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl hover-lift block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />

                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-700 ease-out",
                      hoveredIndex === index ? "scale-110" : "scale-100",
                    )}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300 z-20" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30 transform transition-transform duration-300">
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
                          <p className="line-clamp-3 mb-4">{pkg.description}</p>
                          <div className="flex items-center text-sm font-bold tracking-wide uppercase">
                            View Details <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesAll;
