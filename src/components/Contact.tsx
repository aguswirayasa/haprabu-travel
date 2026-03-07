import { MessageCircle, Mail, Phone, MapPin, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrImage from "@/assets/qr.jpeg";

const Contact = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in planning my Bali trip.",
    );
    window.open(`https://wa.me/6285977560660?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Let's Plan Your Dream Trip
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Ready to explore Bali? Get in touch and we'll craft the perfect
            adventure for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* WeChat QR Code */}
          <div className="animate-fade-in-up h-full">
            <div className="bg-white p-8 rounded-2xl card-shadow h-full flex flex-col justify-center items-center text-center space-y-6">
              <div className="bg-green-600 p-4 rounded-full inline-block">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">
                Connect on WeChat
              </h3>
              <p className="font-body text-muted-foreground max-w-md">
                Scan our QR code to chat directly with our team on WeChat. We're
                ready to assist you in English or Chinese.
              </p>
              <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200">
                <img
                  src={qrImage}
                  alt="WeChat QR Code"
                  loading="lazy"
                  className="w-56 h-56 mx-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8 animate-fade-in-up">
            {/* WhatsApp CTA */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 p-4 rounded-full">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">
                  Quick Response via WhatsApp
                </h3>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Got a few questions about your Bali trip? Message us on
                WhatsApp. We'll reply fast and help you plan everything.
              </p>
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl card-shadow space-y-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Other Ways to Reach Us
              </h3>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    Phone
                  </p>
                  <p className="font-body text-muted-foreground">
                    +62 859-7756-0660
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    Email
                  </p>
                  <p className="font-body text-muted-foreground">
                    agungsurya175111@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    Office
                  </p>
                  <p className="font-body text-muted-foreground">
                    Jl. Patih Nambi IA Gg. Nambi No.18,
                    <br />
                    Ubung Kaja, Kec. Denpasar Utara,
                    <br />
                    Kota Denpasar, Bali 80116
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
