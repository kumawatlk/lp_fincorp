import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Plus } from "lucide-react";
import tech1 from "@/assets/tech-1.jpg";
import tech2 from "@/assets/tech-2.jpg";
import tech3 from "@/assets/tech-3.jpg";

const items = [
  {
    img: tech1,
    title: "Product Engineering",
    location: "4580 McKnight Rd, USA",
    desc: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
  },
  {
    img: tech2,
    title: "Brand & Marketing",
    location: "1022 Sunset Blvd, USA",
    desc: "We map outcomes, remove blockers, and deliver practical actions your team can implement with confidence.",
  },
  {
    img: tech3,
    title: "Data Management",
    location: "4580 McKnight Rd, USA",
    desc: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
  },
  {
    img: tech1,
    title: "Product Engineering",
    location: "4580 McKnight Rd, USA",
    desc: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
  },
  {
    img: tech2,
    title: "Brand & Marketing",
    location: "1022 Sunset Blvd, USA",
    desc: "We map outcomes, remove blockers, and deliver practical actions your team can implement with confidence.",
  },
  {
    img: tech3,
    title: "Data Management",
    location: "4580 McKnight Rd, USA",
    desc: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
  },
  {
    img: tech1,
    title: "Product Engineering",
    location: "4580 McKnight Rd, USA",
    desc: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
  },
  {
    img: tech2,
    title: "Brand & Marketing",
    location: "1022 Sunset Blvd, USA",
    desc: "We map outcomes, remove blockers, and deliver practical actions your team can implement with confidence.",
  },
  {
    img: tech3,
    title: "Data Management",
    location: "4580 McKnight Rd, USA",
    desc: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
  },
];

const TechnologySection = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, items.length - visibleCards);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [visibleCards, currentIndex]);

  const maxIndex = Math.max(0, items.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">Our Solutions</span>
          <h2 className="section-title text-foreground">
            Technology Is <span className="gradient-text">Transforming</span> Every Industry Sector
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous solution cards"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}
            >
              {items.map((item, i) => (
                <div key={i} className="shrink-0 px-2" style={{ width: `${100 / visibleCards}%` }}>
                  <div className="group rounded-tl-[50px] rounded-br-[50px] border border-border/80 bg-card shadow-sm overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1c7df2]/85 to-[#7c2cff]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <button
                        type="button"
                        aria-label="Open solution details"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white text-primary flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
                      >
                        <Plus size={34} />
                      </button>
                      <span className="absolute left-[84px] bottom-[56px] w-6 h-6 rounded-full bg-purple-glow/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-7">
                      <h3 className="text-2xl font-bold font-heading text-foreground mb-2 leading-tight">{item.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-5">
                        <MapPin size={18} className="text-primary" />
                        <span className="text-base">{item.location}</span>
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next solution cards"
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
