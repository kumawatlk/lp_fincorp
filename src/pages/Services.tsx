import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import { ArrowRight, PenTool, Handshake, Headset, Code, Megaphone, ShoppingCart, Smartphone, Globe, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

import servicesHeroBg from "@/assets/services-hero-bg.jpg";
import serviceWebdev from "@/assets/service-webdev.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import serviceVoip from "@/assets/service-voip.jpg";
import serviceItConsultancy from "@/assets/service-it-consultancy.jpg";
import caseStudySecurity from "@/assets/case-study-security.jpg";

const services = [
  { image: serviceWebdev, icon: Code, title: "Web Development", slug: "web-development" },
  { image: serviceConsulting, icon: PenTool, title: "UI/UX Design", slug: "ui-ux-design" },
  { image: serviceItConsultancy, icon: Handshake, title: "Project Management", slug: "project-management" },
  { image: serviceVoip, icon: Headset, title: "Technical Support", slug: "technical-support" },
  { image: serviceMarketing, icon: Megaphone, title: "Digital Marketing SEO", slug: "digital-marketing-seo" },
  { image: serviceWebdev, icon: ShoppingCart, title: "Ecommerce Development", slug: "ecommerce-development" },
  { image: serviceConsulting, icon: Smartphone, title: "Mobile Application", slug: "mobile-application" },
  { image: serviceItConsultancy, icon: Code, title: "Full Stack Development", slug: "full-stack-development" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section
        className="relative py-24 md:py-32 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${servicesHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary font-semibold text-sm">⚡ Our Services ⚡</span>
            </div>
            <h2 className="section-title text-foreground">
              We provide the necessary services to you
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="group relative rounded-2xl overflow-hidden cursor-pointer block">
                <div className="aspect-[4/5] relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <s.icon size={24} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="text-white font-bold font-heading text-sm md:text-base">{s.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study + Who We Are */}
      <section className="py-20 lg:py-28 bg-section-light">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Case Study Image */}
            <div className="relative rounded-2xl lg:rounded-l-2xl lg:rounded-r-none overflow-hidden min-h-[420px] lg:min-h-[500px]">
              <img
                src={caseStudySecurity}
                alt="Information Security Case Study"
                loading="lazy"
                width={960}
                height={800}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-primary font-semibold text-sm mb-2 inline-block">Case Studies ⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">Information Security</h3>
                <p className="text-white/70 text-sm mb-4 max-w-md">
                  Many Managed Services Providers make ambitious promises that they fail to deliver. We back up our services.
                </p>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
              {/* Dots + number */}
              <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
                <div className="flex flex-col gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center mt-2">
                  <span className="text-white font-bold text-sm">04</span>
                </div>
              </div>
            </div>

            {/* Right - Who We Are */}
            <div className="bg-card p-6 md:p-10 lg:p-14 flex flex-col justify-center rounded-2xl lg:rounded-r-2xl lg:rounded-l-none">
              <span className="text-primary font-semibold text-sm mb-3 flex items-center gap-2">
                Who We Are? ⚡
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-5">
                Our <span className="text-primary">penetration</span> testing team uses an industry
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                We provide the full spectrum of IT services and consulting for various industries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Globe size={28} className="text-primary" />
                  </div>
                  <h4 className="font-bold font-heading text-foreground mb-2">Digital Marketer</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Our customers get solutions and business opportunities instead of just projects. Our mission is to accelerate.
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Monitor size={28} className="text-primary" />
                  </div>
                  <h4 className="font-bold font-heading text-foreground mb-2">Global Entrepreneur</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Our developers work on trending technologies to design web and on mobile applications.
                  </p>
                </div>
              </div>

              <div>
                <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 rounded-lg font-semibold text-sm text-foreground hover:bg-foreground hover:text-background transition-all">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default Services;
