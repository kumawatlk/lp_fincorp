import { useEffect, useMemo, useRef, useState } from "react";

const stats = [
  { value: 101, label: "Project Completed", suffix: "+", format: "number" as const },
  { value: 1500, label: "Active Clients", suffix: "+", format: "k" as const },
  { value: 12, label: "Countries Worldwide", suffix: "", format: "number" as const },
  { value: 1, label: "Customer Satisfaction", suffix: "%", format: "decimal" as const },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(stats.map((s) => s.value * eased));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [hasStarted]);

  const displayValues = useMemo(
    () =>
      stats.map((s, i) => {
        const value = animatedValues[i];
        if (s.format === "k") return `${(value / 1000).toFixed(1)}K`;
        if (s.format === "decimal") return value.toFixed(1);
        return Math.round(value).toLocaleString("en-US");
      }),
    [animatedValues],
  );

  return (
    <section ref={sectionRef} className="stats-gradient py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg font-medium" style={{ color: "hsl(0 0% 100% / 0.9)" }}>
            We develops strategic software solutions for businesses.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                {displayValues[i]}
                <span className="text-2xl">{s.suffix}</span>
              </div>
              <p className="text-sm font-medium" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
