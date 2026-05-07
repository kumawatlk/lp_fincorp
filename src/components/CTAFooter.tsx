import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const CTAFooter = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const quickLinks = [
    { label: "About Us", href: isHome ? "#about" : "/#about", isRoute: !isHome },
    { label: "Our Services", href: "/services", isRoute: true },
    { label: "Pricing Plans", href: isHome ? "#pricing" : "/#pricing", isRoute: !isHome },
    { label: "Contact Us", href: "/contact", isRoute: true },
  ];

  const serviceLinks = [
    { label: "Web Development", slug: "web-development" },
    { label: "Mobile Application", slug: "mobile-application" },
    { label: "Ecommerce Development", slug: "ecommerce-development" },
    { label: "Technical Support", slug: "technical-support" },
  ];

  return (
    <>
      {/* CTA */}
      <section id="contact" className="scroll-mt-28 md:scroll-mt-32 navy-section py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Looking for the Best IT Business Solutions?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
            As your trusted partner, we provide customized IT solutions that drive growth and innovation.
          </p>
          <Link to="/contact" className="btn-primary rounded-full">
            Get A Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-5 w-fit">
                <div className="w-10 h-10 rounded-lg stats-gradient flex items-center justify-center">
                  <span className="font-bold text-lg font-heading" style={{ color: "hsl(0 0% 100%)" }}>IT</span>
                </div>
                <span className="text-xl font-bold font-heading" style={{ color: "hsl(0 0% 100%)" }}>
                  itfirm<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                We deliver innovative IT solutions that empower businesses to thrive in the digital age.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold font-heading mb-5" style={{ color: "hsl(0 0% 100%)" }}>Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link to={link.href} className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold font-heading mb-5" style={{ color: "hsl(0 0% 100%)" }}>Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/services/${service.slug}`} className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold font-heading mb-5" style={{ color: "hsl(0 0% 100%)" }}>Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: "hsl(0 0% 100% / 0.6)" }}>Vaishali nager,Jaipur,Rajasthan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href="tel:+919509069357" className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(0 0% 100% / 0.6)" }}>+919509069357</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <a href="mailto:lpfincorpsolution@gmail.com" className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(0 0% 100% / 0.6)" }}>lpfincorpsolution@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8" style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}>
            <p className="text-center text-sm" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
              © 2026 ITfirm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
