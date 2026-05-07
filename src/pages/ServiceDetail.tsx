import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import { servicesData, sidebarLinks } from "@/data/servicesData";
import { Phone, Link as LinkIcon, Award, DollarSign, ShieldCheck } from "lucide-react";

import servicesHeroBg from "@/assets/services-hero-bg.jpg";
import serviceDetailHero from "@/assets/service-detail-hero.jpg";
import serviceDetailWork from "@/assets/service-detail-work.jpg";
import serviceContactBg from "@/assets/service-contact-bg.jpg";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold font-heading text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
        <CTAFooter />
      </div>
    );
  }

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
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">{service.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;&gt;</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>&gt;&gt;</span>
            <span className="text-white">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Nav Links */}
              <div className="space-y-3">
                {sidebarLinks.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className={`block px-5 py-3.5 rounded-lg text-sm font-semibold border-l-4 transition-all ${
                      slug === item.slug
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Contact Card */}
              <div
                className="relative rounded-2xl overflow-hidden p-8 text-white"
                style={{
                  backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url(${serviceContactBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="text-primary text-sm font-semibold mb-2 block">Contact us now</span>
                <h3 className="text-xl font-bold font-heading mb-2">If need help!</h3>
                <p className="text-2xl font-bold font-heading mb-2 flex items-center gap-2">
                  <Phone size={20} className="text-primary" /> 557-3452-234
                </p>
                <p className="text-sm text-white/60 mb-5">or go to contact form:</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-foreground rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Let's start now
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <LinkIcon size={14} className="text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div>
              {/* Hero Image */}
              <img
                src={serviceDetailHero}
                alt={service.title}
                width={800}
                height={600}
                className="w-full rounded-2xl object-cover mb-8 max-h-[450px]"
              />

              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-5">
                UI/UX & Web Design
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {service.longDescription}
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {service.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-foreground mb-1">
                        {f.title.includes("IT soft") ? (
                          <>Why <span className="text-primary">IT soft?</span></>
                        ) : (
                          f.title
                        )}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* We serve the best work */}
              <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                <img
                  src={serviceDetailWork}
                  alt="We serve the best work"
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full md:w-64 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-4">
                    We serve the best work
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    By initiating your project with Fingent, you get a dedicated and skilled team backing you up round-the-clock. All our processes are the customer oriented, designed to reduce the cost of business operations.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Award, label: "Best quality support" },
                  { icon: DollarSign, label: "Money back guarantee" },
                  { icon: ShieldCheck, label: "Cheap price provider" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <b.icon size={22} className="text-primary" />
                    </div>
                    <span className="text-sm font-bold font-heading text-foreground">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default ServiceDetail;
