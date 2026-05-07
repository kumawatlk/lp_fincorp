import { useEffect, useState } from "react";
import { ArrowRight, PenTool, BriefcaseBusiness, MonitorSmartphone, Settings, SearchCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: PenTool, label: "UI/UX Design\nServices" },
  { icon: BriefcaseBusiness, label: "Business\nConsultation" },
  { icon: MonitorSmartphone, label: "Website\nDevelopment" },
  { icon: Settings, label: "Support\nManagement" },
  { icon: SearchCheck, label: "Market\nResearch" },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const maxMobileIndex = Math.max(0, services.length - 2);
    const timer = window.setInterval(() => {
      setMobileCardIndex((prev) => (prev >= maxMobileIndex ? 0 : prev + 1));
    }, 2400);
    return () => window.clearInterval(timer);
  }, [isMobile]);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-[640px] md:h-[780px]">
        <img
          src={heroBg}
          alt="IT service hero background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsla(245,58%,18%,0.78) 0%, hsla(245,58%,28%,0.45) 38%, hsla(230,50%,10%,0.12) 70%, hsla(230,50%,10%,0.0) 100%)",
          }}
        />
      </div>

      {/* Decorative angled overlays */}
      <div className="absolute top-0 left-0 h-[640px] md:h-[680px] w-[44%] bg-navy/55 [clip-path:polygon(0_0,80%_0,45%_100%,0_100%)]" />
      <div className="absolute top-0 left-[16%] h-[640px] md:h-[680px] w-[32%] bg-primary/35 [clip-path:polygon(0_0,92%_0,52%_100%,0_100%)]" />

      <div className="relative container mx-auto pt-16 md:pt-20 lg:pt-24 pb-28 md:pb-32">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5 bg-white text-primary"
            style={{ boxShadow: "0 8px 24px hsl(245 58% 20% / 0.16)" }}
          >
            We are IT service agency ~
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6 font-heading text-white">
            Think Big. We make
            <br />
            IT, possible!
          </h1>
          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-lg text-white/85">
            We place you at the centre of international networks to advance your strategic interests.
          </p>
          <div className="flex items-center">
            <a href="#services" className="btn-primary text-sm md:text-base rounded-full">
              Our Team <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Service cards */}
        {!isMobile ? (
          <div className="mt-16 md:mt-60 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative isolate overflow-hidden h-[170px] md:h-[176px] px-5 py-7 text-center cursor-pointer border border-[#e7eaf3] bg-white shadow-[0_10px_24px_rgba(16,24,40,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl rounded-xl"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                <s.icon
                  size={42}
                  strokeWidth={1.6}
                  className="mx-auto mb-5 text-primary/80 transition-colors duration-500 ease-out group-hover:text-white"
                />
                <span className="whitespace-pre-line text-lg leading-[1.35] font-semibold text-[#1d2233] transition-colors duration-500 ease-out group-hover:text-white">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-14 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileCardIndex * 50}%)` }}
            >
              {services.map((s, i) => (
                <div key={i} className="w-1/2 shrink-0 px-2 mt-20">
                  <div className="relative isolate overflow-hidden h-[168px] px-5 py-7 text-center border border-[#e7eaf3] bg-white shadow-[0_10px_24px_rgba(16,24,40,0.10)] rounded-xl">
                    <s.icon size={40} strokeWidth={1.6} className="mx-auto mb-5 text-primary/80" />
                    <span className="whitespace-pre-line text-lg leading-[1.35] font-semibold text-[#1d2233]">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
