export const personalInfo = {
  name: "Mehak Fatima",
  title: "Senior Software Engineer",
  experience: "5+ Years",
  email: "mehakfatimaa26@gmail.com",
  phone: "0307-0480893",
  linkedin: "https://www.linkedin.com/in/mehak-fatima-959b531a4/",
  summary:
    "Full Stack Developer with 5+ years of experience building and scaling web applications. I have experience working with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Ruby on Rails, with a strong background in developing RESTful and GraphQL APIs, optimizing database performance, and ensuring seamless frontend-backend integration. Experienced in deploying and managing applications on AWS with Docker and CI/CD pipelines, and adept at working in Agile environments while writing clean and maintainable code.",
  tagline:
    "Building high-performance web applications using MERN, Ruby on Rails, cloud technologies, and modern frontend architectures.",
  subtitle: "5+ Years Building Scalable Digital Products",
};

export const techCategories = [
  {
    name: "Front-End",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "AJAX",
    ],
  },
  {
    name: "Back-End",
    technologies: [
      "Node.js",
      "Express.js",
      "Ruby on Rails",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
      "JWT / OAuth",
    ],
  },
  {
    name: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Elasticsearch"],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      "AWS (EC2, S3, Lambda, EKS)",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI/CD",
      "CircleCI",
      "Sidekiq",
      "RabbitMQ",
    ],
  },
  {
    name: "Testing",
    technologies: ["RSpec", "Capybara", "FactoryBot", "Jest", "React Testing Library", "Playwright"],
  },
  {
    name: "Tools & Monitoring",
    technologies: ["Git", "GitHub", "Heroku", "New Relic", "Datadog"],
  },
  {
    name: "Others",
    technologies: [
      "Agile",
      "Performance Optimization",
      "Cross-Functional Collaboration",
      "Experience with International Clients",
    ],
  },
];

export const experience = [
  {
    title: "Senior Software Engineer, Independent Contractor",
    company: "Independent Contractor",
    period: "November 2025 — Present",
    location: "Remote",
    description:
      "Developing and maintaining a full-stack web application with React.js, Next.js, Node.js, and Express.js for a U.S.-based client, working directly with stakeholders to translate business needs into scalable technical solutions. Integrated third-party services, including OCR-based document processing, to automate business workflows, and incorporated AI-assisted development workflows—structuring prompts, generating initial implementations, and refining AI-generated code to production quality.",
    technologies: ["React", "Next.js", "Node.js", "Express", "OCR", "AWS"],
  },
  {
    title: "Senior Software Engineer",
    company: "Devsinc",
    period: "Aug 2022 — October 2025",
    location: "Lahore, Pakistan",
    description:
      "Built and architected reliable APIs and backend services with Node.js and Express, improving RESTful and GraphQL response times by up to 40%. Integrated Stripe, Firebase, and Google Analytics, modernized frontend modules with React, Next.js, and Tailwind CSS, and led performance optimization initiatives—refactoring, database tuning, and caching—that achieved 30% system-wide gains. Guided Rails and Node.js version upgrades, improved observability with New Relic and Datadog, and mentored junior developers.",
    technologies: ["Node.js", "Express", "React", "Next.js", "GraphQL", "AWS", "New Relic", "Datadog"],
  },
  {
    title: "Software Engineer",
    company: "Blackstack Software Solutions",
    period: "May 2021 — July 2022",
    location: "Lahore, Pakistan",
    description:
      "Developed backend functionality in Ruby on Rails for a peer-review management system supporting scientific workshops, designing automated workflows for proposal submissions, review cycles, scoring, and approvals that improved operational efficiency by 25%. Implemented PDF generation with LaTeX, Puppeteer, and jsPDF for standardized, print-ready research documents, working closely with frontend and product teams on reviewer allocation and scoring logic.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Puppeteer", "LaTeX"],
  },
];

export const education = [
  {
    degree: "Bachelors of Software Engineering",
    school: "Punjab University College of Information Technology (PUCIT)",
    period: "2017 — 2021",
  },
];

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Vehicle Titling Platform",
    description:
      "Real-time dashboards for monitoring vehicle titling workflows and processing status, with advanced search, filtering, and reporting that reduced manual tracking. Integrated OCR to extract and validate data from state-issued vehicle documents, automating document verification, and optimized backend performance with efficient queries and Redis caching.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "AWS", "OCR"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "BarqFleet",
    description:
      "Full-stack logistics management platform for real-time tracking of riders, routes, and orders. Built RESTful and GraphQL APIs with JWT/OAuth authentication, integrated the Google Maps API for live geolocation and routing that improved operational accuracy by 35%, and used BullMQ with Redis for background job processing and notifications.",
    technologies: ["Node.js", "React", "MongoDB", "PostgreSQL", "Google Maps API", "Redis", "BullMQ", "AWS", "Docker"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Agzaga",
    description:
      "B2B marketplace enabling farmers to list, browse, and purchase agricultural products. Built RESTful APIs in Ruby on Rails to manage products, orders, payments, and user workflows, integrated Google Pay and Fabric for secure payments, and implemented Elasticsearch-based search with fast filtering by keyword, category, and price.",
    technologies: ["Ruby on Rails", "React", "PostgreSQL", "Elasticsearch", "AWS"],
    github: null,
    live: null,
    featured: true,
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

export const statistics = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 44, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 40, suffix: "%", label: "Peak Performance Gains" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
