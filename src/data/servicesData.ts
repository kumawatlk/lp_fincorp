export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: { title: string; desc: string }[];
  benefits: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom web development solutions built with modern technologies for speed, scalability, and security.",
    longDescription: "Our team designs and builds responsive websites and web applications tailored to your business goals, ensuring excellent performance and user experience.",
    features: [
      { title: "Custom Architecture", desc: "Structured codebases optimized for long-term growth." },
      { title: "Performance Focus", desc: "Fast load times and clean UX across devices." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Modern, intuitive interfaces designed to improve engagement and reduce user friction.",
    longDescription: "We combine research, prototyping, and visual design to build user-centered digital products that look clean and perform exceptionally well.",
    features: [
      { title: "User Research", desc: "Insights-driven design decisions for better outcomes." },
      { title: "Interactive Prototypes", desc: "Validate flows before development starts." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    description: "Professional project management to keep delivery on time, on budget, and aligned with objectives.",
    longDescription: "From planning and scheduling to risk control and stakeholder communication, we manage delivery pipelines with transparency and efficiency.",
    features: [
      { title: "Agile Delivery", desc: "Clear sprint planning and measurable progress tracking." },
      { title: "Risk Management", desc: "Early issue identification with proactive mitigation." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    description: "Reliable support services that keep your systems stable and your teams productive.",
    longDescription: "We provide troubleshooting, monitoring, and maintenance support with rapid response workflows to minimize downtime.",
    features: [
      { title: "24/7 Assistance", desc: "Continuous support coverage for critical systems." },
      { title: "Issue Resolution", desc: "Structured root-cause analysis and permanent fixes." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "digital-marketing-seo",
    title: "Digital Marketing SEO",
    description: "Data-backed marketing and SEO strategies to improve rankings, visibility, and conversions.",
    longDescription: "We execute technical SEO, content optimization, and campaign planning that help your brand grow sustainably across search and digital channels.",
    features: [
      { title: "SEO Optimization", desc: "On-page and technical SEO improvements for search growth." },
      { title: "Campaign Analytics", desc: "Measure performance and optimize ROI continuously." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    description: "Feature-rich ecommerce solutions designed for performance, trust, and conversions.",
    longDescription: "We build scalable ecommerce platforms with secure checkout, catalog management, and seamless customer journeys across devices.",
    features: [
      { title: "Secure Payments", desc: "Trusted payment integrations with fraud protection." },
      { title: "Store Scalability", desc: "Architecture that supports growth and high traffic." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "mobile-application",
    title: "Mobile Application",
    description: "Native-like mobile app experiences built for Android and iOS users.",
    longDescription: "We design and develop mobile applications with smooth performance, clear UX, and maintainable architecture from launch to scale.",
    features: [
      { title: "Cross-Platform UX", desc: "Consistent journeys across different mobile devices." },
      { title: "App Store Ready", desc: "Deployment support with best-practice compliance." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    description: "Complete frontend and backend development services for robust digital products.",
    longDescription: "Our full stack team handles UI, APIs, databases, deployment, and optimization to deliver reliable, scalable applications from start to finish.",
    features: [
      { title: "Frontend + Backend", desc: "Unified architecture across client and server layers." },
      { title: "Scalable Delivery", desc: "Production-grade code with maintainable structure." },
    ],
    benefits: ["Best quality support", "Money back guarantee", "Cheap price provider"],
  },
];

export const sidebarLinks = [
  { label: "Web Development", slug: "web-development" },
  { label: "UI/UX Design", slug: "ui-ux-design" },
  { label: "Project Management", slug: "project-management" },
  { label: "Technical Support", slug: "technical-support" },
  { label: "Digital Marketing SEO", slug: "digital-marketing-seo" },
  { label: "Ecommerce Development", slug: "ecommerce-development" },
  { label: "Mobile Application", slug: "mobile-application" },
  { label: "Full Stack Development", slug: "full-stack-development" },
];
