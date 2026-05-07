import { useState } from "react";
import { Briefcase, Building2, HeartPulse, GraduationCap } from "lucide-react";

const tabs = ["Computer Machinery", "Finance & Banking", "Travel & Tourism", "Health & Wellness"];

const industries = [
  { icon: Briefcase, title: "Computer Machinery", desc: "Delivering cutting-edge hardware and software solutions for modern enterprises." },
  { icon: Building2, title: "Finance & Banking", desc: "Secure financial technology solutions that drive digital banking transformation." },
  { icon: HeartPulse, title: "Travel & Tourism", desc: "Innovative travel technology platforms for seamless booking experiences." },
  { icon: GraduationCap, title: "Health & Wellness", desc: "Healthcare IT solutions improving patient care and operational efficiency." },
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="industries" className="scroll-mt-28 md:scroll-mt-32 py-20 lg:py-28 bg-section-light">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-badge mb-4">Our Industries</span>
          <h2 className="section-title text-foreground">
            We Serve A Wide <span className="gradient-text">Variety</span> Of Industries
          </h2>
          <p className="text-muted-foreground mt-4">Empowering businesses across sectors with tailored technology solutions.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground/70 hover:bg-primary/10 border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="card-service">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <ind.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-base font-bold font-heading text-foreground mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
