import blogGrid1 from "@/assets/blog-grid-1.jpg";
import blogGrid2 from "@/assets/blog-grid-2.jpg";
import blogGrid3 from "@/assets/blog-grid-3.jpg";
import blogGrid4 from "@/assets/blog-grid-4.jpg";
import blogGrid5 from "@/assets/blog-grid-5.jpg";
import blogGrid6 from "@/assets/blog-grid-6.jpg";

export interface BlogPost {
  slug: string;
  img: string;
  date: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
  subheading: string;
  subContent: string[];
  quote: {
    text: string;
    author: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "regional-manager-limited-time-management",
    img: blogGrid1,
    date: "July 24, 2026",
    author: "Rayan Collins",
    category: "Consulting",
    title: "Regional Manager & limited time management.",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content: [
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      "\"Every child has the right to feel safe and protected in their own home – how is that your child going is sleep tonight or in morning might? What are the long-term effects on their going to be?\"",
    ],
    subheading: "Content without backward-compatible data.",
    subContent: [
      "There is absolutely no justification for an attack like this in our communities and we must all work together to bring those responsible to justice and to stop this from happening to another child. I find it extremely it revolves how they word of their own child abused such a level of violence.",
      "Earlier this month, the PSNI launched a hard-hitting advertisement campaign aimed at changing public attitudes to paramilitary attacks.",
    ],
    quote: {
      text: "\"What sort of men would think it is acceptable to girl to this for level of brutality and violence? an attack like thsip.\"",
      author: "Neil Borton",
    },
    tags: ["Business", "Insider"],
  },
  {
    slug: "revitalising-your-people-in-to-a-retail-downturn",
    img: blogGrid2,
    date: "July 24, 2026",
    author: "Rayan Collins",
    category: "Consulting",
    title: "Revitalising your people in to a retail downturn.",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content: [
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. He was short little arms and legs. \"What sort of men would think\". A reader will be distracted by the readable content.",
      "\"Every child has the right to feel safe and protected in their own home – how is that your child going is sleep tonight or in morning might? What are the long-term effects on their going to be?\"",
    ],
    subheading: "Content without backward-compatible data.",
    subContent: [
      "There is absolutely no justification for an attack like this in our communities and we must all work together to bring those responsible to justice and to stop this from happening to another child. I find it extremely it revolves how they word of their own child abused such a level of violence.",
      "Earlier this month, the PSNI launched a hard-hitting advertisement campaign aimed at changing public attitudes to paramilitary attacks.",
    ],
    quote: {
      text: "\"What sort of men would think it is acceptable to girl to this for level of brutality and violence? an attack like thsip.\"",
      author: "Neil Borton",
    },
    tags: ["Business", "Insider"],
  },
  {
    slug: "organisational-teams-are-just-like-families",
    img: blogGrid3,
    date: "July 24, 2026",
    author: "Rayan Collins",
    category: "Strategy",
    title: "Organisational teams of the are just like families.",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content: [
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      "\"Every child has the right to feel safe and protected in their own home – how is that your child going is sleep tonight or in morning might?\"",
    ],
    subheading: "A Kentucky woman who was accused last year.",
    subContent: [
      "The intruders chased the girl in the house and threatened her when she hid from them, according to the PSN University Facebook page. She came out petrified with her Piggy Bank, HHFF PIGGY BANK hoping that the man would take it and leave her dad alone.",
      "The men who are so beguiled & demoralised our power of pleasure is to be welcomed. Rebukes with righteous indignation and dislike men who are so beguiled.",
    ],
    quote: {
      text: "\"What sort of men would think it is acceptable to girl to this for level of brutality and violence? an attack like thsip.\"",
      author: "Neil Borton",
    },
    tags: ["Strategy", "Teams"],
  },
  {
    slug: "virtual-classroom-software-development-for-teaching",
    img: blogGrid4,
    date: "June 24, 2026",
    author: "Rayan Collins",
    category: "Technology",
    title: "Virtual Classroom Software Development for Teaching.",
    excerpt: "Technology is reshaping how educators deliver knowledge, and virtual classrooms are at the forefront of this transformation.",
    content: [
      "Technology is reshaping how educators deliver knowledge, and virtual classrooms are at the forefront of this transformation. With the right software development approach, institutions can create immersive learning experiences that rival traditional in-person education.",
      "\"The key to successful virtual classroom implementation lies in understanding both the technical requirements and the pedagogical needs of modern learners.\"",
    ],
    subheading: "Building scalable education platforms.",
    subContent: [
      "When developing virtual classroom software, scalability is paramount. The platform must handle thousands of concurrent users while maintaining low latency and high-quality video streaming capabilities.",
      "Integration with existing learning management systems and third-party tools ensures a seamless experience for both educators and students.",
    ],
    quote: {
      text: "\"Education technology is not about replacing teachers – it's about empowering them with tools that amplify their impact.\"",
      author: "Sarah Mitchell",
    },
    tags: ["Technology", "Education"],
  },
  {
    slug: "digital-transformation-in-healthcare-7-keys",
    img: blogGrid5,
    date: "June 24, 2026",
    author: "Rayan Collins",
    category: "Healthcare",
    title: "Digital Transformation in Healthcare: 7 Keys.",
    excerpt: "The healthcare industry is undergoing a massive digital transformation that promises to improve patient outcomes and operational efficiency.",
    content: [
      "The healthcare industry is undergoing a massive digital transformation that promises to improve patient outcomes and operational efficiency. From electronic health records to AI-powered diagnostics, technology is revolutionizing every aspect of healthcare delivery.",
      "\"Successful digital transformation in healthcare requires a patient-centric approach that prioritizes data security, interoperability, and user experience.\"",
    ],
    subheading: "Key strategies for healthcare digitization.",
    subContent: [
      "Implementing robust data governance frameworks ensures that sensitive patient information remains protected while still enabling the analytical capabilities needed for improved care delivery.",
      "Cloud-based infrastructure provides the flexibility and scalability that healthcare organizations need to adapt to changing demands and regulatory requirements.",
    ],
    quote: {
      text: "\"The future of healthcare lies at the intersection of human expertise and technological innovation.\"",
      author: "Dr. James Chen",
    },
    tags: ["Healthcare", "Digital"],
  },
  {
    slug: "know-the-difference-food-delivery-apps-vs-food",
    img: blogGrid6,
    date: "June 24, 2026",
    author: "Rayan Collins",
    category: "Business",
    title: "Know The Difference! Food Delivery Apps Vs Food.",
    excerpt: "The food delivery industry has exploded in recent years, but not all platforms are created equal.",
    content: [
      "The food delivery industry has exploded in recent years, but not all platforms are created equal. Understanding the fundamental differences between various food delivery models can help both consumers and restaurant owners make better decisions.",
      "\"The key differentiator in the food delivery space isn't just technology – it's the business model and how it serves all stakeholders in the ecosystem.\"",
    ],
    subheading: "Comparing delivery business models.",
    subContent: [
      "Marketplace models connect restaurants with delivery drivers, while vertically integrated platforms control the entire experience from kitchen to doorstep. Each approach has distinct advantages and challenges.",
      "For restaurant owners, choosing the right delivery partner can significantly impact margins, brand perception, and customer satisfaction.",
    ],
    quote: {
      text: "\"In the food delivery wars, the winners will be those who create the most value for restaurants, drivers, and consumers simultaneously.\"",
      author: "Maria Santos",
    },
    tags: ["Business", "Food Tech"],
  },
];
