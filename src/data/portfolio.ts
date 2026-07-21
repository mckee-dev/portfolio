export const personalInfo = {
  name: "Mehak Fatima",
  title: "Senior Full Stack Software Engineer",
  experience: "6+ Years",
  email: "mehak.fatima@email.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  summary:
    "A passionate Full Stack Engineer with over six years of experience designing and building scalable web applications, leading development across frontend and backend systems, and delivering production-ready software using MERN and Ruby on Rails technologies.",
  tagline:
    "Building high-performance web applications using MERN, Ruby on Rails, cloud technologies, and modern frontend architectures.",
  subtitle: "6+ Years Building Scalable Digital Products",
};

export const techCategories = [
  {
    name: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Ruby on Rails",
      "GraphQL",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    name: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform", "Nginx"],
  },
];

export const experience = [
  {
    title: "Senior Full Stack Engineer",
    company: "TechScale Solutions",
    period: "2022 — Present",
    description:
      "Leading full-stack development for enterprise SaaS products. Architected microservices handling 2M+ daily requests. Mentored a team of 5 engineers and established code quality standards.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Innovate Digital",
    period: "2020 — 2022",
    description:
      "Built and maintained multiple client-facing applications using MERN stack. Implemented real-time features with WebSockets and optimized database queries reducing load times by 40%.",
    technologies: ["React", "Express", "MongoDB", "Redis", "GraphQL"],
  },
  {
    title: "Software Engineer",
    company: "StartupHub",
    period: "2018 — 2020",
    description:
      "Developed RESTful APIs and frontend interfaces for a fintech platform. Contributed to Ruby on Rails backend services and integrated third-party payment gateways.",
    technologies: ["Ruby on Rails", "React", "PostgreSQL", "AWS"],
  },
];

export const projects = [
  {
    title: "CloudSync Platform",
    description:
      "Enterprise file synchronization platform with real-time collaboration, end-to-end encryption, and cross-platform support serving 50K+ users.",
    image: "/projects/cloudsync.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with custom data visualizations, automated reporting, and multi-tenant architecture for B2B SaaS clients.",
    image: "/projects/analytics.jpg",
    technologies: ["React", "GraphQL", "D3.js", "PostgreSQL", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "E-Commerce API",
    description:
      "High-performance e-commerce backend with inventory management, payment processing, and order tracking built as scalable microservices.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Ruby on Rails", "Redis", "Sidekiq", "Stripe", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevOps Pipeline",
    description:
      "Automated CI/CD pipeline with infrastructure as code, automated testing, and zero-downtime deployments across multiple environments.",
    image: "/projects/devops.jpg",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    github: "https://github.com",
    live: null,
    featured: false,
  },
];

export const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end application development from database design to polished user interfaces, delivering cohesive digital products.",
    icon: "layers",
  },
  {
    title: "Backend Architecture",
    description:
      "Scalable server-side systems, microservices design, and API development optimized for performance and reliability.",
    icon: "server",
  },
  {
    title: "Frontend Engineering",
    description:
      "Modern, responsive interfaces with React and Next.js, focusing on performance, accessibility, and delightful interactions.",
    icon: "monitor",
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting for secure integrations.",
    icon: "code",
  },
  {
    title: "Cloud Deployment",
    description:
      "AWS infrastructure setup, containerization with Docker, and CI/CD pipelines for reliable production deployments.",
    icon: "cloud",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology stack recommendations, and engineering best practices for growing teams.",
    icon: "lightbulb",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechScale Solutions",
    content:
      "Mehak transformed our entire development workflow. Her architectural decisions saved us months of refactoring and the platform now handles 10x our original traffic.",
    avatar: "SC",
  },
  {
    name: "James Rodriguez",
    role: "Product Manager, Innovate Digital",
    content:
      "Exceptional engineer who consistently delivers beyond expectations. Mehak's ability to bridge frontend and backend makes her invaluable on any project.",
    avatar: "JR",
  },
  {
    name: "Emily Watson",
    role: "Founder, StartupHub",
    content:
      "Working with Mehak was a game-changer for our startup. She built our core platform from scratch and it scaled seamlessly as we grew from 0 to 10K users.",
    avatar: "EW",
  },
];

export const statistics = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
