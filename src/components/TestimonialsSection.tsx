import { useEffect, useState } from "react";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    company: "VP of Network",
    avatar: "https://i.pravatar.cc/120?img=32",
    text: "Working with several WordPress themes and templates over the years, I can confidently say this team delivered the best results we have seen. Support is quick and the quality is consistent.",
  },
  {
    name: "Daniel Brooks",
    role: "Product Manager",
    company: "Digital Growth Lab",
    avatar: "https://i.pravatar.cc/120?img=12",
    text: "The team understood our requirements from day one and transformed them into a reliable product. Communication was smooth, timelines were respected, and delivery quality was excellent.",
  },
  {
    name: "Priya Patel",
    role: "CTO",
    company: "CloudNova Systems",
    avatar: "https://i.pravatar.cc/120?img=5",
    text: "From architecture to launch support, every step felt professional. They helped us reduce issues in production and improved the user experience across key customer journeys.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = testimonials.length - 1;

  const showNext = () => {
    setActiveIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  };

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
    }, 4200);

    return () => window.clearInterval(timer);
  }, [lastIndex]);

  return (
    <section id="testimonials" className="py-14 md:py-20 lg:py-28 bg-section-light overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="min-w-0">
            <span className="section-badge mb-4">Testimonials</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight font-heading text-foreground mb-5 md:mb-6 break-words">
              Here's what our <span className="gradient-text">customers</span> have said.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 break-words">
              Simplified IT is designed to help make sure your data stays protected and your systems run at their best. The network access we provide is valuable.
            </p>
            <Link to="/#" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })} className="btn-primary  rounded-full">
              View More <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-w-0">
            <div className="hidden lg:block absolute -left-6 -top-6 w-16 h-16 rounded-full bg-card shadow-md overflow-hidden border border-border/40">
              <img src={testimonials[(activeIndex + 1) % testimonials.length].avatar} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden lg:block absolute -right-8 -top-10 w-14 h-14 rounded-full bg-card shadow-md overflow-hidden border border-border/40">
              <img src={testimonials[(activeIndex + 2) % testimonials.length].avatar} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden lg:block absolute -right-6 top-1/2 w-16 h-16 rounded-full bg-card shadow-md overflow-hidden border border-border/40">
              <img src={testimonials[activeIndex].avatar} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="relative z-10">
              <div className="overflow-hidden rounded-2xl border border-border/50 shadow-xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((item) => (
                    <article key={item.name} className="w-full shrink-0 bg-card p-5 sm:p-7 md:p-8 min-h-[250px] sm:min-h-[310px]">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} size={17} className="fill-orange text-orange" />
                        ))}
                      </div>
                      <p className="text-foreground/80 text-sm leading-relaxed mb-5 sm:mb-6 break-words">
                        "{item.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/20"
                          loading="lazy"
                        />
                        <div>
                          <h4 className="font-bold text-foreground font-heading text-base sm:text-lg">{item.company}</h4>
                          <p className="text-sm text-foreground font-medium">{item.name}</p>
                          <span className="text-xs text-muted-foreground">{item.role}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center"
                >
                  <ChevronLeft size={18} className="text-foreground/75" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center"
                >
                  <ChevronRight size={18} className="text-foreground/75" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
