import { useEffect, useState } from "react";
import { ArrowRight, PenTool, BriefcaseBusiness, Handshake, ShieldCheck, Laptop, Workflow, Headset } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Laptop,
    title: "Web Development",
    desc: "Scalable and fast websites built for modern products and long-term growth goals.",
    slug: "web-development",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "We're wildly passionate about our purpose, and it has us transforming everything.",
    slug: "ui-ux-design",
  },
  {
    icon: Handshake,
    title: "Project Management",
    desc: "Our global community of about 5,000 people can be found working from corporate.",
    slug: "project-management",
  },
  {
    icon: Headset,
    title: "Technical Support",
    desc: "Reliable support coverage with proactive monitoring and incident response.",
    slug: "technical-support",
  },
  {
    icon: BriefcaseBusiness,
    title: "Digital Marketing SEO",
    desc: "Our customers get solutions and business opportunities instead of just projects.",
    slug: "digital-marketing-seo",
  },
  {
    icon: Workflow,
    title: "Ecommerce Development",
    desc: "Build robust e-commerce platforms with secure payments and smooth user experiences.",
    slug: "ecommerce-development",
  },
  {
    icon: ShieldCheck,
    title: "Mobile Application",
    desc: "Launch performant mobile apps with intuitive UX across iOS and Android platforms.",
    slug: "mobile-application",
  },
  {
    icon: Workflow,
    title: "Full Stack Development",
    desc: "End-to-end frontend and backend engineering for scalable, production-ready products.",
    slug: "full-stack-development",
  },
];

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(4);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setIsTransitionEnabled(true);
  }, [visibleCards]);

  const canSlide = services.length > visibleCards;
  const displayServices = canSlide
    ? [...services, ...services.slice(0, visibleCards)]
    : services;

  useEffect(() => {
    if (!canSlide) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [canSlide]);

  return (
    <section id="services" className="scroll-mt-28 md:scroll-mt-32 py-20 lg:py-28 bg-secondary relative overflow-x-hidden overflow-y-visible">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-0 h-full w-[34%] bg-white/35 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)]" />
        <div className="absolute left-[22%] top-0 h-full w-[28%] bg-white/50 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)]" />
      </div>

      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary mb-4 shadow-sm">
            ~ Our Awesome Services ~
          </span>
          <h2 className="section-title text-foreground">
            We Are Dedicated To <span className="gradient-text">Serve You</span> All Time.
          </h2>
        </div>

        {/* 1. Added pt-12 to the outer container to give the icons room to breathe */}
        {/* 1. Added more top padding (pt-12) to the outer container to give icons room */}
        <div className="px-1 overflow-visible pt-12">

          {/* 2. CRITICAL: Added pt-12 here. Even with overflow-x-hidden, 
         the padding allows the icons to exist inside the 'safe' area of this div. */}
          <div className="overflow-x-hidden overflow-y-visible pt-12 -mt-12">
            <div
              className="flex ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
                transition: isTransitionEnabled ? "transform 600ms ease-out" : "none",
              }}
              onTransitionEnd={() => {
                if (!canSlide) return;
                if (currentIndex >= services.length) {
                  setIsTransitionEnabled(false);
                  setCurrentIndex(0);
                  window.requestAnimationFrame(() => {
                    window.requestAnimationFrame(() => setIsTransitionEnabled(true));
                  });
                }
              }}
            >
              {displayServices.map((s, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2 md:px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  {/* Added a fixed height h-[380px] to ensure all cards are identical */}
                  <article className="group relative overflow-visible rounded-tl-[50px] rounded-br-[50px] bg-white border border-slate-100 p-6 pt-14 h-[320px] shadow-sm transition-all duration-500">

                    {/* --- 1. Wavy Background --- */}
                    <div className="absolute inset-x-0 top-0 h-[145px] overflow-hidden rounded-tl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1c7df2] to-[#661de8]" />
                      <svg
                        className="absolute bottom-[-1px] w-full"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill="white"
                          d="M0,150 C150,100 350,200 500,150 L500,150 L0,150 Z"
                        />
                      </svg>
                    </div>

                    {/* --- 2. MAIN ICON (Normal State) --- */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4e92ff] to-[#661de8] rotate-45 shadow-[0_10px_20px_rgba(102,29,232,0.4)] flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-50 z-30">
                      <div className="-rotate-45 flex items-center justify-center">
                        <s.icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* --- 3. HOVER ICON & TITLE (Centering inside blue area) --- */}
                    <div className="absolute top-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-40">
                      <div className="w-14 h-14 rounded-2xl bg-white rotate-45 shadow-lg flex items-center justify-center mb-6">
                        <div className="-rotate-45">
                          <s.icon size={24} className="text-[#1c7df2]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white text-center px-4">
                        {s.title}
                      </h3>
                    </div>

                    {/* --- 4. CONTENT (Normal State) --- */}
                    <div className="relative z-0 flex h-full flex-col items-center pt-8 transition-opacity duration-500 group-hover:opacity-0">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                        {s.title}
                      </h3>

                      <div className="w-12 h-[3px] bg-gradient-to-r from-[#1c7df2] to-[#661de8] rounded-full mx-auto mb-6" />

                      <p className="text-sm text-slate-500 leading-relaxed text-center  ">
                        {s.desc}
                      </p>
                    </div>

                    {/* --- 5. LEARN MORE (Always at bottom) --- */}
                    <div className="absolute bottom-8 left-0 w-full flex justify-center z-50">
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1c7df2] transition-colors duration-500 group-hover:text-[#1c7df2]"
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
