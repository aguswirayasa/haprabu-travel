import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE_TITLE, SITE_URL } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getCarBySlug } from "@/data/carContent";
import { idrToUsd, formatIDR } from "@/lib/currency";
import NotFound from "./NotFound";
import {
  ArrowRight,
  MessageCircle,
  Check,
  Users,
  Clock,
  Snowflake,
  Wind,
} from "lucide-react";

const CarDetail = () => {
  const { carSlug } = useParams<{ carSlug: string }>();
  const car = getCarBySlug(carSlug);

  if (!car) {
    return <NotFound />;
  }

  const carTitle = `${car.name} - ${SITE_TITLE}`;

  const handleCtaClick = () => {
    const text = `Hi! I'm interested in renting the "${car.name}" (From $${idrToUsd(car.fullDay.priceIDR)}/day). Can you share availability and more details?`;
    window.open(
      `https://wa.me/6285977560660?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <>
      <Helmet>
        <title>{carTitle}</title>
        <meta name="description" content={car.description} />
        <link rel="canonical" href={`${SITE_URL}/car/${car.slug}`} />
        <meta property="og:title" content={carTitle} />
        <meta property="og:description" content={car.description} />
        <meta property="og:url" content={`${SITE_URL}/car/${car.slug}`} />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          {/* Hero */}
          <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10" />
              <div className="absolute top-1/2 left-1/3 h-48 w-48 rounded-full bg-white/5" />
            </div>
            <div className="relative z-10 w-full pt-20">
              <div className="container-custom text-white">
                <Breadcrumb className="mb-6 text-white/80 flex">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        asChild
                        className="text-white/80 hover:text-white"
                      >
                        <Link to="/">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-white/60" />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        asChild
                        className="text-white/80 hover:text-white"
                      >
                        <Link to="/cars">Fleet</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-white/60" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-white font-medium">
                        {car.name}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <div className="max-w-3xl animate-fade-up">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow-sm">
                    {car.name}
                  </h1>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium backdrop-blur-sm">
                      From ${idrToUsd(car.fullDay.priceIDR)}/day
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      <Users className="h-3.5 w-3.5" />
                      {car.passengers}
                    </span>
                    {car.hasAC ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        <Snowflake className="h-3.5 w-3.5" /> Air Conditioned
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/80 backdrop-blur-sm text-accent-foreground rounded-full text-sm font-medium">
                        <Wind className="h-3.5 w-3.5" /> Open Air
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      onClick={handleCtaClick}
                      className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Inquire via WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main */}
                <div className="lg:col-span-2 space-y-10 animate-fade-in">
                  {/* Pricing Table */}
                  <div>
                    <h2 className="heading-md mb-6 text-primary">
                      Rental Pricing
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Day Card */}
                      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/40 p-6 shadow-sm">
                        <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/10" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-heading font-bold text-foreground">
                              Full Day Tour
                            </h3>
                          </div>
                          <div className="mb-2">
                            <span className="text-3xl font-heading font-bold text-primary">
                              ${idrToUsd(car.fullDay.priceIDR)}
                            </span>
                            <span className="text-muted-foreground text-sm ml-1">
                              / car
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {formatIDR(car.fullDay.priceIDR)}/car
                          </p>
                          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 bg-white/60 px-3 py-1 rounded-full">
                            <Clock className="h-3.5 w-3.5" />
                            {car.fullDay.hours} Hours
                          </div>
                        </div>
                      </div>

                      {/* Half Day Card */}
                      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                        <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-secondary/40" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                            <h3 className="text-lg font-heading font-bold text-foreground">
                              Half Day Tour
                            </h3>
                          </div>
                          <div className="mb-2">
                            <span className="text-3xl font-heading font-bold text-foreground">
                              ${idrToUsd(car.halfDay.priceIDR)}
                            </span>
                            <span className="text-muted-foreground text-sm ml-1">
                              / car
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {formatIDR(car.halfDay.priceIDR)}/car
                          </p>
                          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 bg-secondary/60 px-3 py-1 rounded-full">
                            <Clock className="h-3.5 w-3.5" />
                            {car.halfDay.hours} Hours
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Note */}
                  {car.vehicleNote && (
                    <div className="rounded-xl bg-accent/10 border border-accent/20 p-4 text-sm text-foreground/80">
                      <span className="font-semibold text-accent">Note:</span>{" "}
                      {car.vehicleNote}
                    </div>
                  )}

                  {/* Inclusions */}
                  <div>
                    <h3 className="heading-sm mb-4">Price Includes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {car.inclusions.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-colors"
                        >
                          <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-foreground/80 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    <div className="p-6 rounded-2xl bg-secondary border border-border/50 shadow-sm">
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {car.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Starting from
                      </p>
                      <div className="mb-6">
                        <span className="text-4xl font-heading font-bold text-primary">
                          ${idrToUsd(car.fullDay.priceIDR)}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          / day
                        </span>
                      </div>

                      <div className="space-y-3 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-foreground/80">
                          <Users className="h-4 w-4 text-primary" />
                          Accommodates: {car.passengers}
                        </div>
                        <div className="flex items-center gap-2 text-foreground/80">
                          {car.hasAC ? (
                            <>
                              <Snowflake className="h-4 w-4 text-primary" />
                              Air Conditioned
                            </>
                          ) : (
                            <>
                              <Wind className="h-4 w-4 text-accent" />
                              Open Air (No A/C)
                            </>
                          )}
                        </div>
                      </div>

                      <Button onClick={handleCtaClick} className="w-full group">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Book via WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CarDetail;
