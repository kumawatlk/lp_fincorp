import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Gold Plan",
    price: "$29",
    period: "/Monthly",
    features: ["10 User Accounts", "5GB Storage", "Basic Support", "Email Integration", "Monthly Reports"],
    popular: false,
  },
  {
    name: "Diamond Plan",
    price: "$49",
    period: "/Monthly",
    features: ["25 User Accounts", "25GB Storage", "Priority Support", "API Access", "Weekly Reports"],
    popular: true,
  },
  {
    name: "Extended Plan",
    price: "$59",
    period: "/Monthly",
    features: ["Unlimited Users", "100GB Storage", "24/7 Support", "Custom Integrations", "Real-time Reports"],
    popular: false,
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="scroll-mt-28 md:scroll-mt-32 py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-badge mb-4">Pricing</span>
          <h2 className="section-title text-foreground">
            Our <span className="gradient-text">Awesome</span> Pricing Plans
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {(["monthly", "yearly"] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${
                billing === b
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-card shadow-2xl border-2 border-primary relative"
                  : "bg-card shadow-lg border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full stats-gradient text-xs font-bold" style={{ color: "hsl(0 0% 100%)" }}>
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold font-heading text-foreground mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold font-heading ${plan.popular ? "gradient-text" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check size={16} className="text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
