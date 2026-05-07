import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ChevronRight, Send } from "lucide-react";
import { useState } from "react";

import contactHeroBg from "@/assets/contact-hero-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container mx-auto relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Contact
          </h1>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "hsl(0 0% 100% / 0.8)" }}
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-primary">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Contact us
                </span>
                <Send size={16} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Grow Your Business With
                <br />
                <span className="text-primary">Our Expertise</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md md:pt-8">
              We understand the importance of approaching each work integrally
              and believe in the power of simple.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Office Address */}
              <div className="flex items-start gap-5 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-foreground mb-1">
                    Office address
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Digital Agency Network 20
                    <br />
                    Eastbourne Terrace London,
                    <br />
                    W2 6LG
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-5 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-foreground mb-1">
                    Telephone number
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    (408) 389-5470
                    <br />
                    (408) 456-5470
                  </p>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-start gap-5 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-foreground mb-1">
                    Mail address
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    help@envato.com
                    <br />
                    help@support.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/50 rounded-2xl p-5 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Name <span className="text-muted-foreground">(required)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name*"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email address <span className="text-muted-foreground">(required)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Mail*"
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Services <span className="text-muted-foreground">(required)</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="">Select Service</option>
                      <option value="web-development">Web Development</option>
                      <option value="it-consultancy">IT Consultancy</option>
                      <option value="security">Security & Compliance</option>
                      <option value="voip">VoIP Solutions</option>
                      <option value="backup">Backup & Recovery</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Your message
                  </label>
                  <textarea
                    placeholder="Type message*"
                    rows={5}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary text-sm rounded-full"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.542!2d-0.1196!3d51.5014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>

      <CTAFooter />
    </div>
  );
};

export default Contact;
