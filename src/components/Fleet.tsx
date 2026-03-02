import { Link } from "react-router-dom";
import { Users, ArrowRight, Snowflake, Wind } from "lucide-react";
import { getAllCars } from "@/data/carContent";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Fleet = () => {
  const cars = getAllCars();

  return (
    <section id="fleet" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Our Fleet
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Premium vehicles paired with experienced drivers. Choose the perfect
            ride for your Bali adventure.
          </p>
        </div>

        {/* Carousel */}
        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {cars.map((car) => (
                <CarouselItem
                  key={car.slug}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Link to={`/car/${car.slug}`} className="group block h-full">
                    <div className="relative h-[250px] overflow-hidden rounded-3xl card-shadow hover-lift transition-all duration-500">
                      {/* Image */}
                      <img
                        src={car.image}
                        alt={car.name}
                        className="absolute inset-0 h-full scale-90 w-full object-fit transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h3 className="text-2xl font-heading font-bold mb-2 text-shadow-sm">
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

                        <div className="grid transition-all duration-300 ease-out overflow-hidden text-white/90 grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
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

        <div className="text-center mt-10">
          <Link to="/cars">
            <Button size="lg" variant="outline" className="group">
              Show All Vehicles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
