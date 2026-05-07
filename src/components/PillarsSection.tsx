import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import pillarsImg from "@/assets/pillars-img.jpg";

const pillars = [
  { icon: Target, title: "Strategic Vision" },
  { icon: Lightbulb, title: "Innovation First" },
  { icon: Users, title: "Client Success" },
  { icon: TrendingUp, title: "Growth Focus" },
];

const PillarsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={pillarsImg} alt="Four Pillars" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
          </div>

          <div>
            <span className="section-badge mb-4">Why Choose Us</span>
            <h2 className="section-title text-foreground mb-6">
              Fingent's Four <span className="gradient-text">Pillars</span> Of Influence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our four foundational pillars guide every project we undertake, ensuring excellence and sustainable results for your business.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-section-light">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <p.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{p.title}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
