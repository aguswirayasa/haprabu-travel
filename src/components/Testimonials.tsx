import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Australia",
      text: "Our Bali trip was absolutely magical! The team went above and beyond to create a personalized itinerary that exceeded all expectations. The hidden waterfalls and local temples they showed us were incredible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      text: "What impressed me most was the genuine care and warmth from our guide. It felt like exploring Bali with an old friend rather than a tour company. Highly recommend for authentic experiences!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      location: "USA",
      text: "The 24/7 support was a lifesaver when we needed to adjust our plans. Quick responses on WhatsApp and incredibly helpful recommendations. Best travel agency experience we've ever had!",
      rating: 5,
    },
    {
      name: "David Kim",
      location: "South Korea",
      text: "From booking to departure, everything was seamless. The local insights made our trip special. We discovered places we never would have found on our own. Worth every penny!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            What Our Travelers Say
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it, hear from the people who've experienced Bali through our eyes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary p-12 rounded-3xl card-shadow">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />
            
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl font-body text-foreground leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">★</span>
                ))}
              </div>
              <h4 className="text-lg font-heading font-semibold text-primary">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm font-body text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>

            <div className="flex justify-center gap-4 items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
