import { MapPin, User, Compass, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Personalized Itineraries",
      description:
        "Custom travel plans designed around your interests, pace, and budget. No cookie-cutter tours here.",
    },
    {
      icon: User,
      title: "Local Guidance & Drivers",
      description:
        "Friendly, knowledgeable guides who share stories, not just facts. Travel with a friend, not a stranger.",
    },
    {
      icon: Compass,
      title: "Hidden Gem Recommendations",
      description:
        "Discover the Bali only locals know secret waterfalls, quiet temples, and authentic cultural experiences.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "From sunrise hikes to midnight emergencies, we're always just a message away. Your peace of mind matters.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            What Makes Us Different
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            We don't just plan trips. We craft experiences that feel like coming
            home, even when you're thousands of miles away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl card-shadow hover-lift transition-all group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-card-foreground">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
