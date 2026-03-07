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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPackageBySlug } from "@/data/travelContent";
import { idrToUsd, formatIDR } from "@/lib/currency";
import NotFound from "./NotFound";
import {
  ArrowRight,
  MessageCircle,
  Check,
  X,
  Clock,
  Users,
  Info,
  MapPin,
  CircleDot,
  Plane,
  Hotel,
  ArrowLeftRight,
  Map,
  Settings,
  Shield,
  Car,
  Headphones,
  Sparkles,
  CreditCard,
  XCircle,
  UsersRound,
  ListPlus,
} from "lucide-react";

const PackageDetail = () => {
  const { packageSlug } = useParams<{ packageSlug: string }>();
  const pkg = getPackageBySlug(packageSlug);

  if (!pkg) {
    return <NotFound />;
  }

  const isTransfer = Boolean(pkg.pricingTables);

  const SERVICE_ICONS = [Plane, Hotel, ArrowLeftRight, Map, Settings];
  const FLEET_ICONS = [Car, Shield, CreditCard, XCircle, UsersRound];

  const handleCtaClick = () => {
    const usd = idrToUsd(pkg.priceStartFromIDR);
    const priceText = pkg.tripInfo
      ? `Starting from $${usd} / ${formatIDR(pkg.tripInfo.priceLocalIDR)} ${pkg.tripInfo.currencyLabel ?? ""}`
      : `Starting from $${usd}`;
    const text = `Hi! I'm interested in the "${pkg.name}" package (${priceText}). Can you share more details?`;
    window.open(
      `https://wa.me/6285977560660?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${pkg.name} - ${SITE_TITLE}`}</title>
        <meta name="description" content={pkg.description} />
        <link rel="canonical" href={`${SITE_URL}/package/${pkg.slug}`} />
        <meta property="og:title" content={`${pkg.name} - ${SITE_TITLE}`} />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:url" content={`${SITE_URL}/package/${pkg.slug}`} />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="h-full w-full object-cover animate-image-scale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
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
                      <Link to="/packages">Packages</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/60" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white font-medium">
                      {pkg.name}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="max-w-3xl animate-fade-up">
                {/* Price badge — dual currency when available */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                  <span>Starting from ${idrToUsd(pkg.priceStartFromIDR)}</span>
                  {pkg.tripInfo && (
                    <>
                      <span className="hidden sm:inline">/</span>
                      <span>
                        {formatIDR(pkg.tripInfo.priceLocalIDR)}{" "}
                        {pkg.tripInfo.currencyLabel}
                      </span>
                    </>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow-sm">
                  {pkg.name}
                </h1>
                <p className="text-lg text-white/90 mb-8 max-w-2xl text-shadow-sm">
                  {pkg.description}
                </p>
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

        {/* Content Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* LEFT COLUMN */}
              <div className="lg:col-span-2 space-y-10 animate-fade-in">
                {/* Overview */}
                <div>
                  <h2 className="heading-md mb-4 text-primary">Overview</h2>
                  {pkg.tagline && (
                    <p className="text-lg md:text-xl font-heading font-bold text-foreground mb-3">
                      {pkg.tagline}
                    </p>
                  )}
                  <p className="body-md text-muted-foreground whitespace-pre-line leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                {/* Service Highlights (transfer packages) */}
                {pkg.serviceHighlights && pkg.serviceHighlights.length > 0 && (
                  <div>
                    <h3 className="heading-sm mb-5">Our Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.serviceHighlights.map((svc, i) => {
                        const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-foreground mb-1">
                                {svc.title}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {svc.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Benefits / What You Get (transfer packages) */}
                {pkg.benefits && pkg.benefits.length > 0 && (
                  <div>
                    <h3 className="heading-sm mb-5">What You Get</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.benefits.map((b, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 shrink-0">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {b.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {b.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing Tables (transfer packages) */}
                {pkg.pricingTables && pkg.pricingTables.length > 0 && (
                  <div>
                    <h3 className="heading-sm mb-5">Transfer Rates</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      One-way prices in IDR & USD. All rates include driver,
                      fuel, parking & tolls.
                    </p>
                    <Tabs
                      defaultValue={pkg.pricingTables[0].label}
                      className="w-full"
                    >
                      <TabsList className="w-full mb-4">
                        {pkg.pricingTables.map((table) => (
                          <TabsTrigger
                            key={table.label}
                            value={table.label}
                            className="flex-1"
                          >
                            {table.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {pkg.pricingTables.map((table) => (
                        <TabsContent key={table.label} value={table.label}>
                          {/* Desktop table */}
                          <div className="hidden sm:block rounded-xl border border-border/50 overflow-hidden">
                            <Table>
                              <TableHeader>
                                <TableRow className="bg-secondary/60">
                                  <TableHead className="font-heading font-bold">
                                    From
                                  </TableHead>
                                  <TableHead className="font-heading font-bold">
                                    To
                                  </TableHead>
                                  <TableHead className="font-heading font-bold text-right">
                                    Price (IDR)
                                  </TableHead>
                                  <TableHead className="font-heading font-bold text-right">
                                    Price (USD)
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {table.routes.map((r, idx) => (
                                  <TableRow
                                    key={idx}
                                    className="hover:bg-secondary/30"
                                  >
                                    <TableCell>{r.from}</TableCell>
                                    <TableCell>{r.to}</TableCell>
                                    <TableCell className="text-right font-semibold text-primary">
                                      {formatIDR(r.priceIDR)}
                                    </TableCell>
                                    <TableCell className="text-right font-semibold text-primary">
                                      ${idrToUsd(r.priceIDR)}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                          {/* Mobile stacked cards */}
                          <div className="sm:hidden space-y-3">
                            {table.routes.map((r, idx) => (
                              <div
                                key={idx}
                                className="rounded-xl border border-border/50 bg-card p-4 shadow-sm"
                              >
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                  <MapPin className="h-3.5 w-3.5" />
                                  {r.from}
                                  <ArrowRight className="h-3 w-3" />
                                  {r.to}
                                </div>
                                <p className="text-lg font-bold text-primary">
                                  {formatIDR(r.priceIDR)}
                                </p>
                                <p className="text-sm font-semibold text-primary/80">
                                  USD ${idrToUsd(r.priceIDR)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                )}

                {/* Fleet & Services Info (transfer packages) */}
                {pkg.fleetInfo && pkg.fleetInfo.length > 0 && (
                  <div>
                    <h3 className="heading-sm mb-5">Fleet & Services</h3>
                    <div className="space-y-4">
                      {pkg.fleetInfo.map((info, i) => {
                        const Icon = FLEET_ICONS[i % FLEET_ICONS.length];
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm"
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-foreground mb-1">
                                {info.title}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Trip Info Card */}
                {pkg.tripInfo && (
                  <div className="rounded-2xl border border-border/50 bg-card p-5 md:p-6 shadow-sm">
                    <h3 className="heading-sm mb-5">Trip Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                        <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Ideal Start
                          </p>
                          <p className="font-semibold text-foreground">
                            {pkg.tripInfo.startTime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                        <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Minimum
                          </p>
                          <p className="font-semibold text-foreground">
                            {pkg.tripInfo.minimumPax} persons
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 sm:col-span-2">
                        <span className="text-lg">💰</span>
                        <div className="flex-1">
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Tour Price
                          </p>
                          <p className="font-bold text-foreground text-lg">
                            {formatIDR(pkg.tripInfo.priceLocalIDR)}{" "}
                            <span className="text-sm font-medium text-muted-foreground">
                              {pkg.tripInfo.currencyLabel} (min{" "}
                              {pkg.tripInfo.minimumPax})
                            </span>
                          </p>
                          {pkg.tripInfo.specialPriceNote && (
                            <p className="mt-1 text-sm font-medium text-primary">
                              ✨ {pkg.tripInfo.specialPriceNote}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Important Note */}
                {pkg.importantNote && (
                  <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-200">
                    <Info className="h-5 w-5 mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      {pkg.importantNote}
                    </p>
                  </div>
                )}

                {/* Itinerary (time-based schedule) */}
                {pkg.itinerary && pkg.itinerary.length > 0 && (
                  <div>
                    <h3 className="heading-sm mb-5">Itinerary</h3>
                    <div className="relative space-y-0">
                      {/* Vertical timeline line */}
                      <div className="absolute left-[6.25rem] md:left-[7.25rem] top-3 bottom-3 w-px bg-border hidden sm:block" />
                      {pkg.itinerary.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 sm:gap-4 py-3 group"
                        >
                          {/* Time column */}
                          <div className="w-20 md:w-24 shrink-0 text-right">
                            <span className="text-sm font-semibold text-primary whitespace-nowrap">
                              {item.time}
                            </span>
                          </div>
                          {/* Dot on the timeline */}
                          <div className="hidden sm:flex items-center justify-center shrink-0 relative z-10">
                            <CircleDot className="h-4 w-4 text-primary/60 bg-background rounded-full group-hover:text-primary transition-colors" />
                          </div>
                          {/* Activity */}
                          <div className="flex-1 text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors pt-px">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pkg.destinations && (
                  <div>
                    <h3 className="heading-sm mb-4">Destinations</h3>
                    <div className="space-y-6">
                      {pkg.destinations.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col md:flex-row gap-6 p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                              <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm">
                                {index + 1}
                              </div>
                              <h4 className="text-xl font-heading font-bold text-foreground">
                                {item.title}
                              </h4>
                            </div>
                            <p className="body-md text-muted-foreground leading-relaxed pl-11">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions & Exclusions */}
                {(pkg.inclusions || pkg.exclusions) && (
                  <div>
                    <h3 className="heading-sm mb-5">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Inclusions */}
                      {pkg.inclusions && (
                        <div className="rounded-xl border border-border/50 bg-card p-5">
                          <h4 className="flex items-center gap-2 font-heading font-bold text-foreground mb-4">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40">
                              <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                            </div>
                            Inclusions
                          </h4>
                          <ul className="space-y-3">
                            {pkg.inclusions.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm text-foreground/80"
                              >
                                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Exclusions */}
                      {pkg.exclusions && (
                        <div className="rounded-xl border border-border/50 bg-card p-5">
                          <h4 className="flex items-center gap-2 font-heading font-bold text-foreground mb-4">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/40">
                              <X className="h-3.5 w-3.5 text-red-500 dark:text-red-400" />
                            </div>
                            Exclusions
                          </h4>
                          <ul className="space-y-3">
                            {pkg.exclusions.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm text-foreground/80"
                              >
                                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Optional Add-ons */}
                {pkg.optionals && pkg.optionals.length > 0 && (
                  <div>
                    <h3 className="heading-sm mb-5">Optional Add-ons</h3>
                    <div className="rounded-xl border border-border/50 bg-card p-5">
                      <h4 className="flex items-center gap-2 font-heading font-bold text-foreground mb-4">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40">
                          <ListPlus className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        Available Options (additional cost)
                      </h4>
                      <ul className="space-y-3">
                        {pkg.optionals.map((opt, i) => (
                          <li
                            key={i}
                            className="flex items-start justify-between gap-4 text-sm text-foreground/80"
                          >
                            <span className="flex items-start gap-2.5">
                              <ListPlus className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                              {opt.label}
                            </span>
                            <span className="font-semibold text-foreground whitespace-nowrap">
                              {opt.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Pickup & Drop-off Areas */}
                {pkg.pickupDropoff && (
                  <div>
                    <h3 className="heading-sm mb-5">Pickup & Drop-off Areas</h3>
                    <div className="rounded-xl border border-border/50 bg-card p-5">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.pickupDropoff.areas.map((area, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                          >
                            <MapPin className="h-3 w-3" />
                            {area}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pkg.pickupDropoff.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN — Sticky sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="p-6 rounded-2xl bg-secondary border border-border/50 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold mb-4">
                      {isTransfer ? "Get a Quote" : "Ready to Book?"}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {isTransfer
                        ? "Tell us your route and schedule. We'll prepare a personalized quote for you in minutes."
                        : "Customize this trip to your preferences. Our team is ready to help you plan the perfect experience."}
                    </p>
                    <Button onClick={handleCtaClick} className="w-full">
                      Contact Us Now
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
  );
};

export default PackageDetail;
