import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE_TITLE } from "@/lib/utils";
import { ArrowRight, Users, Snowflake, Wind } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllCars } from "@/data/carContent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CarsAll = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const cars = getAllCars();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet><title>Our Fleet - {SITE_TITLE}</title></Helmet>
      <Navigation />
      <main>
        {/* Header */}
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
                  <BreadcrumbPage>All Vehicles</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
              Our Full Fleet
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-3xl">
              From compact MPVs to luxury coaches — every vehicle comes with an
              experienced English-speaking driver and all fuel included.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <Link
                  key={car.slug}
                  to={`/car/${car.slug}`}
                  className="group relative block h-[250px] overflow-hidden rounded-3xl shadow-xl hover-lift"
                  onMouseEnter={() => setHoveredSlug(car.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  {/* Image */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 h-full scale-90 w-full object-fit transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {car.name}
                    </h3>

                    <div className="flex items-center gap-4 text-sm font-medium mb-3 opacity-90">
                      <span className="bg-primary/90 px-3 py-1 rounded-full backdrop-blur-sm text-primary-foreground">
                        From ${car.fullDay.priceUSD}/day
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {car.passengers}
                      </span>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-out overflow-hidden text-white/90 ${
                        hoveredSlug === car.slug
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="flex items-center gap-4 text-sm mb-4">
                          <span className="flex items-center gap-1.5">
                            {car.hasAC ? (
                              <>
                                <Snowflake className="w-4 h-4" /> A/C
                              </>
                            ) : (
                              <>
                                <Wind className="w-4 h-4" /> Open Air
                              </>
                            )}
                          </span>
                          <span>Half Day: ${car.halfDay.priceUSD}</span>
                        </div>
                        <div className="flex items-center text-sm font-bold tracking-wide uppercase text-primary-foreground">
                          View Details <ArrowRight className="ml-2 w-4 h-4" />
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

export default CarsAll;
