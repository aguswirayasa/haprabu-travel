import { Award, Users, Star, Clock } from "lucide-react";
import guideImage from "@/assets/logo.png";

const About = () => {
  const trustBadges = [
    { icon: Award, text: "10+ Years Experience" },
    { icon: Users, text: "Local Experts" },
    { icon: Star, text: "5-Star Google Rated" },
    { icon: Clock, text: "24/7 Support" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <img
                src={guideImage}
                alt="Local Balinese travel guide"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-heading font-bold">1000+</p>
                <p className="text-sm font-body">Happy Travelers</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Your Trusted Local Travel Partner
            </h2>
            <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
              We're not just a travel agency, We're your friends in Bali. Born
              and raised on this beautiful island, we know every hidden temple,
              secret beach, and the best warung that serves authentic Balinese
              cuisine.
            </p>
            <p className="text-lg font-body text-muted-foreground mb-8 leading-relaxed">
              Our mission is to create unforgettable experiences that connect
              you with the real Bali, the one that lives in our hearts. Every
              itinerary is crafted with personal care, local insight, and
              genuine warmth.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover-lift"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <badge.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-body font-medium text-sm">{badge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
