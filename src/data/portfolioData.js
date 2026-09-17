// ============================================================
// portfolioData.js — All portfolio content lives here.
// Edit this file to update your website content.
// ============================================================

export const personalInfo = {
  name: "Devansh Patil",
  roles: [
    "Data Analyst",
    "Data Scientist",
    "Business Analyst",
    "AI Product Manager",
  ],
  tagline: "Bridging Business, Data & Technology",
  email: "devanshpatil2202@gmail.com",
  phone: "+91 6351274320",
  location: "Ahmedabad, India",
  github: "https://github.com/devanshh18",
  linkedin: "https://linkedin.com/in/devansh-patil",
  resumeFile: "/Devansh_Patil_Resume.pdf",
  about:
    "I'm a Data Science and Analytics professional with a strong interest in the intersection of business, technology, and data. I enjoy understanding business problems, analyzing data to uncover meaningful insights, and building technology-driven solutions that support better decision-making. My experience spans data analysis, business intelligence, machine learning, AI, and application development. With a combination of management thinking and technical skills, I aim to bridge the gap between business requirements and data-driven solutions.",
  stats: [
    { label: "Projects Built", value: "4+" },
    { label: "Internship", value: "1" },
    { label: "Certifications", value: "3" },
  ],
};

export const skillCategories = [
  {
    title: "Business & Management",
    icon: "briefcase",
    skills: [
      "Product Thinking",
      "Data Interpretation",
      "Problem Solving",
      "Presentation & Reporting",
      "Effective Communication",
      "Teamwork & Collaboration",
    ],
  },
  {
    title: "Languages & Libraries",
    icon: "code",
    skills: ["Python", "SQL", "React.js", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Data Analysis & Visualization",
    icon: "chart",
    skills: ["Power BI", "DAX", "Exploratory Data Analysis", "Advanced Excel"],
  },
  {
    title: "AI / ML",
    icon: "brain",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      // "Agentic Workflows",
      "Pinecone",
      "HuggingFace",
      // "Vector Embeddings",
    ],
  },
  {
    title: "Backend & Deployment",
    icon: "server",
    skills: ["FastAPI", "PostgreSQL", "MySQL", "REST APIs", "AWS", "Docker"],
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    skills: [
      "Jupyter Notebook",
      "Google Colab",
      "Git",
      "GitHub",
      "Databricks",
      "Claude Code",
      "Antigravity",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Krishiv",
    subtitle: "Greenhouse Intelligence System",
    date: "June 2026",
    description:
      "A real-time greenhouse monitoring platform powered by IoT sensors and ML models that predict plant health, disease risk, and irrigation needs.",
    highlights: [
      "Built 3 Gradient Boosting ML models achieving ~80% accuracy across plant health, disease risk & irrigation prediction",
      "Engineered 7 domain-specific features from 19 raw sensor parameters with a rule-based recommendation engine",
      "Full-stack deployment with FastAPI + React dashboard + PostgreSQL, containerized via Docker Compose",
    ],
    tags: ["Python", "Scikit-learn", "FastAPI", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/devanshh18/Krishiv",
    liveDemo: null,
    image: null, // Will be replaced with generated image
    featured: true,
  },
  {
    id: 2,
    title: "AnalytixAI",
    subtitle: "AI-Powered Data Analytics Platform",
    date: "March 2026",
    description:
      "A conversational analytics platform that transforms CSV datasets into interactive dashboards with LLM-generated insights and exportable reports.",
    highlights: [
      "Chat-with-Data assistant using Groq LLaMA-3 for natural language querying of datasets",
      "Auto-generates KPIs, visualizations, and business insights from uploaded CSVs",
      "Exportable PDF/PPT reports with dynamic Recharts-powered dashboards",
    ],
    tags: ["React", "FastAPI", "Groq LLaMA-3", "Pandas", "Recharts", "LLM"],
    github: "https://github.com/devanshh18/analytix-ai",
    liveDemo: null,
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "Student Performance",
    subtitle: "EDA & Risk Prediction",
    date: "May 2026",
    description:
      "End-to-end data science pipeline from SQL querying to ML prediction, identifying at-risk students before final exams.",
    highlights: [
      "Logistic regression model achieving 88.6% accuracy for pass/fail prediction",
      "Interactive Power BI report with KPI cards and dynamic slicers for student segmentation",
      "Uncovered critical risk factors including past failures, study habits & parental education",
    ],
    tags: ["Python", "MySQL", "Scikit-learn", "Power BI", "EDA"],
    github: "https://github.com/devanshh18/student-performance-eda-and-risk-prediction",
    liveDemo: null,
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: "Retail Sales Dashboard",
    subtitle: "Multi-Region Performance Analytics",
    date: "March 2026",
    description:
      "Interactive Power BI dashboards analyzing multi-region retail sales data to uncover trends across product categories, customer segments, and geography.",
    highlights: [
      "Tracked key metrics: total sales, orders, customers & average order value across regions",
      "Designed interactive dashboards with Power Query and DAX for data-driven decision making",
      "Highlighted product performance, regional distribution & customer contribution patterns",
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    github: "https://github.com/devanshh18/powerbi-retail-sales-dashboard",
    liveDemo: null,
    image: null,
    featured: false,
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "Amnex Infotechnologies",
    location: "Ahmedabad",
    period: "May 2026 — Aug 2026",
    highlights: [
      "Developed and enhanced AI/ML modules in real-world data science workflows and production environments",
      "Experimented with deep learning models for agriculture-focused use cases, improving model workflows and domain understanding",
      "Built AI modules with Generative AI, RAG & agentic workflows using LangChain and LangGraph",
    ],
  },
];

export const education = [
  {
    degree: "PGDM - Data Science & Analytics",
    institution: "Narayana Business School (AICTE)",
    period: "Jul 2025 - May 2027",
    score: null,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "GLS University",
    period: "Aug 2022 — May 2025",
    score: null,
  },
];

export const certifications = [
  {
    title: "Meta Data Analyst Professional Certificate",
    issuer: "Meta",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
