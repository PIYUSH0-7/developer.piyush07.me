import { SaaSProduct, AgencyService, ProcessStep, PricingTier, Testimonial } from '../types';

export const AGENCY_CONFIG = {
  name: "PIYUSH07 STUDIOS",
  shortName: "PIYUSH07 DEV",
  tagline: "High-Velocity SaaS Engineering & Digital Product Studio",
  founder: "Piyush Gangwar",
  founderRole: "Lead Full-Stack & AI Systems Engineer",
  email: "gangwar.piyush07@gmail.com",
  phone: "+91 8923845912",
  whatsappUrl: "https://wa.me/918923845912?text=Hi%20Piyush!%20I%20am%20interested%20in%20building%20a%20project%20/%20SaaS%20with%20your%20agency.",
  portfolioUrl: "https://piyush07.me",
  githubUrl: "https://github.com/PIYUSH0-7",
  linkedinUrl: "https://www.linkedin.com/in/piyush077/",
  availability: "Available for Q3/Q4 2026 Sprints & Product Builds",
  status: "Open for Client Projects & SaaS Collaborations"
};

export const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: "academia-pro",
    name: "Academia07 Pro",
    tagline: "Intelligent Campus & Academic Operations Ecosystem",
    description: "An end-to-end cloud platform providing real-time student analytics, dynamic curriculum tracking, automated grading pipelines, and institutional resource management.",
    category: "EdTech",
    status: "Live",
    features: [
      "Real-time attendance & lecture log telemetry",
      "Automated grade weighting & transcript generator",
      "Multi-tenant role-based access for Dean, Faculty, & Students",
      "Instant PDF export & encrypted student credential vaults"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://piyush07.me",
    githubUrl: "https://github.com/PIYUSH0-7/ACADEMIC-MANAGEMENT-SYSTEM",
    accentColor: "from-blue-600 to-indigo-600",
    badge: "Flagship EdTech",
    stats: [
      { label: "Active Modules", value: "14+" },
      { label: "Response Time", value: "<120ms" }
    ]
  },
  {
    id: "shield-engine",
    name: "Shield07 Auth & SecOps",
    tagline: "Zero-Trust Multi-Factor Identity & Session Engine",
    description: "Lightweight, developer-first authentication microservice and token rotation system crafted for rapid SaaS integration with cryptographic tamper checks.",
    category: "Developer Tools",
    status: "Beta",
    features: [
      "Passwordless magic links & biometric webauthn",
      "Granular RBAC permission hierarchy matrix",
      "Rate limiting, DDOS mitigation & bot anomaly heuristics",
      "One-click SDKs for React, Node, and React Native"
    ],
    techStack: ["Node.js", "Express", "Redis", "TypeScript", "Docker"],
    githubUrl: "https://github.com/PIYUSH0-7",
    accentColor: "from-emerald-500 to-teal-600",
    badge: "Security Core",
    stats: [
      { label: "Auth Speed", value: "45ms" },
      { label: "Security Tier", value: "AES-256" }
    ]
  },
  {
    id: "devpath-tracker",
    name: "DevPath-Tracker",
    tagline: "Gamified Software Engineering Mastery & Skill Metrics",
    description: "Interactive progression SaaS tracking algorithmic mastery, daily coding streaks, GitHub contributions, and automated resume proof generation.",
    category: "Productivity",
    status: "Live",
    features: [
      "Automated GitHub commit & LeetCode problem scraper",
      "Visual skill dependency tree & milestone checkpoints",
      "Public proof-of-work badges with cryptographic hashes",
      "Smart daily recommendation engine for DSA and System Design"
    ],
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/PIYUSH0-7/DevPath-Tracker",
    accentColor: "from-purple-600 to-pink-600",
    badge: "Community Favorite",
    stats: [
      { label: "Tracked Milestones", value: "500+" },
      { label: "Sync Engine", value: "Realtime" }
    ]
  },
  {
    id: "agentic-flow",
    name: "AgenticFlow AI",
    tagline: "Autonomous Multi-Agent AI Workflow Orchestrator",
    description: "Deploy intelligent LLM worker swarms that autonomously scrape data, write draft code, synthesize research, and trigger webhook automations without human intervention.",
    category: "AI & Automation",
    status: "Beta",
    features: [
      "Dynamic agent prompt chaining & memory state persistence",
      "Tool-calling integration (Google Search, Python Sandbox, DB queries)",
      "Streaming SSE output with token-level observability",
      "Self-correcting error loops & fallback triggers"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI / Claude API", "Next.js"],
    githubUrl: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding",
    accentColor: "from-amber-500 to-orange-600",
    badge: "AI Powered",
    stats: [
      { label: "Agent Types", value: "8 Swarms" },
      { label: "LLM Support", value: "Multi-Model" }
    ]
  },
  {
    id: "gemrishi-office",
    name: "GemRishi Workplace Ops",
    tagline: "Enterprise Operations & Asset Management Portal",
    description: "Custom internal tooling platform designed for distributed teams to track hardware assets, inventory procurement, and departmental shift allocations.",
    category: "Enterprise",
    status: "In Development",
    features: [
      "Barcode & QR code physical asset scanning engine",
      "Automated procurement purchase order workflows",
      "Audit trail logs with immutable history",
      "Executive financial summary dashboards"
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/PIYUSH0-7/GEMRISHI_OFFICE",
    accentColor: "from-cyan-500 to-blue-600",
    badge: "Enterprise Suite"
  }
];

export const AGENCY_SERVICES: AgencyService[] = [
  {
    id: "saas-mvp",
    title: "Full-Stack SaaS MVP Build",
    tagline: "From Idea to Production-Ready SaaS in 3 to 5 Weeks",
    description: "We architect, build, and deploy high-converting, scalable SaaS applications complete with user authentication, database architecture, billing integration, and sleek UI.",
    deliverables: [
      "Custom Next.js / React Web Application",
      "Secure Auth (OAuth, Magic Links, RBAC)",
      "Payment Gateway (Stripe, LemonSqueezy, Razorpay)",
      "Scalable SQL/NoSQL Database Schema",
      "Admin Analytics Dashboard",
      "Automated CI/CD & Production Deployment"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL / MongoDB", "Tailwind CSS", "Stripe"],
    timeline: "3 - 5 Weeks",
    startingPrice: "$1,499",
    iconName: "Rocket",
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    tagline: "Native-Smooth iOS & Android Applications with React Native",
    description: "Launch sleek, responsive mobile apps on the App Store and Google Play using a single battle-tested codebase powered by React Native and Expo.",
    deliverables: [
      "iOS & Android Production Builds",
      "Offline Data Caching & Local Storage",
      "Push Notifications & Deep Linking",
      "Native Device Sensors (Camera, GPS, Biometrics)",
      "App Store & Play Store Submission Guidance",
      "Backend API & WebSocket Integration"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Redux / Zustand", "Firebase", "Node.js"],
    timeline: "4 - 6 Weeks",
    startingPrice: "$1,799",
    iconName: "Smartphone",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: "ai-integration",
    title: "AI Agents & Intelligent Automations",
    tagline: "Supercharge your business with Autonomous LLM Workflows",
    description: "Integrate specialized AI assistants, custom Retrieval-Augmented Generation (RAG) vector search, automated data extraction, and intelligent customer agents.",
    deliverables: [
      "Custom RAG Pipeline with Vector Databases (Pinecone/Qdrant)",
      "Multi-Agent Workflow Automation Swarms",
      "Context-Aware Chatbots & Internal Knowledge Bases",
      "LLM Cost Optimization & Prompt Caching",
      "API Integrations (OpenAI, Anthropic, Gemini, DeepSeek)",
      "Full Observability & Analytics Dashboard"
    ],
    techStack: ["Python", "LangChain / LlamaIndex", "FastAPI", "OpenAI / Claude", "Pinecone", "Next.js"],
    timeline: "2 - 4 Weeks",
    startingPrice: "$1,299",
    iconName: "Bot",
    gradient: "from-amber-500 to-rose-600"
  },
  {
    id: "custom-engineering",
    title: "Custom Web Platforms & Enterprise Portals",
    tagline: "Pixel-Perfect, 99+ Lighthouse Score Web Architecture",
    description: "Bespoke web applications, high-converting agency landing pages, client portals, and real-time collaborative dashboards engineered for performance.",
    deliverables: [
      "Custom Tailored UI/UX & Responsive Layouts",
      "Complex State Management & Real-time WebSockets",
      "SEO Optimization & Core Web Vitals 95+",
      "Comprehensive TypeScript Type Safety",
      "Headless CMS Integration (Sanity / Strapi / Payload)",
      "Performance Audits & Zero-Lag Animations"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GraphQL", "Vercel"],
    timeline: "2 - 3 Weeks",
    startingPrice: "$999",
    iconName: "Code2",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & Backend APIs",
    tagline: "Scalable Microservices, Docker Containers & Robust DevOps",
    description: "Reliable, high-throughput server backends designed to withstand heavy traffic spikes with sub-50ms API response times and rock-solid uptime.",
    deliverables: [
      "RESTful & GraphQL API Infrastructure",
      "Dockerized Containerization & Microservices",
      "Redis In-Memory Caching & Queue Handlers",
      "Automated GitHub Actions CI/CD Deployments",
      "AWS / GCP / Railway / VPS Configuration",
      "Database Indexing & Query Optimization"
    ],
    techStack: ["Node.js", "Python", "Docker", "Redis", "PostgreSQL", "AWS / Linux"],
    timeline: "1 - 3 Weeks",
    startingPrice: "$899",
    iconName: "Server",
    gradient: "from-violet-600 to-fuchsia-600"
  },
  {
    id: "code-audit",
    title: "Codebase Audit & Performance Refactor",
    tagline: "Eliminate Tech Debt, Fix Security Vulnerabilities, Boost Speed",
    description: "Thorough architectural evaluation of your existing codebase with actionable refactoring, bundle size reduction, and security patch implementation.",
    deliverables: [
      "Comprehensive Architectural Review Report",
      "Memory Leak & Bundle Bloat Elimination",
      "Database Query Profiling & Index Optimization",
      "Security & Vulnerability Patching",
      "TypeScript Migration & Code Cleanliness Refactor"
    ],
    techStack: ["TypeScript", "Next.js", "Profiler Tools", "Lighthouse", "SQL Explain"],
    timeline: "1 - 2 Weeks",
    startingPrice: "$699",
    iconName: "ShieldCheck",
    gradient: "from-red-500 to-orange-500"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Architectural Blueprint",
    duration: "Days 1 - 3",
    description: "We dive deep into your product vision, target market, functional specifications, and technical constraints to draft a clear architectural plan.",
    deliverables: ["Product Roadmap", "Tech Stack Matrix", "Database ER Diagram", "Interactive Wireframes"]
  },
  {
    step: "02",
    title: "Rapid Prototyping & Design Signoff",
    duration: "Days 4 - 7",
    description: "We craft pixel-perfect, high-fidelity UI designs and clickable prototypes to validate user flows and visual aesthetics before writing core logic.",
    deliverables: ["Figma / UI System", "Component Library", "User Flow Diagrams", "Design Approval"]
  },
  {
    step: "03",
    title: "Agile Sprint Engineering",
    duration: "Weeks 2 - 4",
    description: "Execution in fast weekly sprints with private preview URLs, continuous git commits, and milestone demos so you have full visibility.",
    deliverables: ["Clean Modular Codebase", "Live Staging Environment", "API Documentation", "Weekly Demo Calls"]
  },
  {
    step: "04",
    title: "Rigorous QA, Security & Performance",
    duration: "Week 5",
    description: "Stress testing under heavy loads, security sanity checks, cross-device responsiveness verification, and Core Web Vitals optimization.",
    deliverables: ["Zero Critical Bugs", "Lighthouse 95+ Score", "Pen-testing Signoff", "SSL & Domain Setup"]
  },
  {
    step: "05",
    title: "Production Launch & Support",
    duration: "Launch Day & Beyond",
    description: "Zero-downtime deployment to your custom domain, analytics tracking setup, handover of full IP ownership, and 30 days post-launch support.",
    deliverables: ["Production Deployment", "Full Git Repo Transfer", "Documentation & Video Walkthrough", "30-Day Free Support"]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter-sprint",
    name: "SaaS MVP Sprint",
    badge: "Most Popular for Founders",
    price: "$1,499",
    period: "one-time",
    description: "Ideal for early-stage founders looking to validate a software concept and launch to early adopters with speed and precision.",
    features: [
      "Full-stack Web Application (Next.js + TypeScript)",
      "Responsive UI/UX with Dark & Light Mode",
      "User Auth (Email, Google, Magic Link)",
      "Database Schema & Secure API Layer",
      "Stripe / Payment Checkout Integration",
      "Automated CI/CD Deployment to Vercel/Cloud",
      "14 Days Post-Launch Bug Warranty",
      "Full Codebase & Intellectual Property Transfer"
    ],
    popular: true,
    ctaText: "Start MVP Sprint"
  },
  {
    id: "scale-pro",
    name: "Full Product & Mobile",
    badge: "Complete SaaS + Mobile Suite",
    price: "$2,999",
    period: "one-time",
    description: "For startups ready for comprehensive web and mobile app presence with AI integrations and enterprise-grade backend infrastructure.",
    features: [
      "Everything in SaaS MVP Sprint",
      "Cross-Platform Mobile App (iOS & Android)",
      "Custom AI / LLM Agent Workflow Integration",
      "Advanced Admin & Analytics Dashboard",
      "Multi-tenant Role Based Access Control",
      "Automated Email & Notification Pipelines",
      "30 Days Dedicated Post-Launch Support",
      "Performance SLA & Load Optimization"
    ],
    popular: false,
    ctaText: "Build Full Product"
  },
  {
    id: "monthly-retainer",
    name: "Dedicated Engineering Partner",
    badge: "On-Demand Fractional CTO",
    price: "$2,499",
    period: "per month",
    description: "Embed high-velocity senior engineering power directly into your startup. Unlimited feature requests, refactors, and continuous delivery.",
    features: [
      "Dedicated Full-Stack & AI Engineering Capacity",
      "Unlimited Tasks & Feature Sprint Requests",
      "Direct Slack / WhatsApp Synchronous Channel",
      "Daily Async Updates & Weekly Planning Calls",
      "DevOps, Server Scaling & Security Maintenance",
      "Continuous Code Auditing & Performance Tuning",
      "Pause or Cancel Anytime with No Long-term Lock-in"
    ],
    popular: false,
    ctaText: "Hire Engineering Partner"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aman Sharma",
    role: "Founder & CEO",
    company: "EduTech Pioneers",
    avatarText: "AS",
    content: "Piyush delivered our entire web platform ahead of schedule. The code quality is immaculate, the UI is hyper-responsive, and our users frequently compliment the lightning-fast speed.",
    rating: 5,
    highlight: "Delivered 2 weeks ahead of schedule"
  },
  {
    id: "2",
    name: "Rohit Verma",
    role: "Product Lead",
    company: "LogixOps India",
    avatarText: "RV",
    content: "Working with Piyush feels like having a senior engineer and product architect in one person. He understood our complex business logic and turned it into an intuitive SaaS.",
    rating: 5,
    highlight: "Exceptional architecture & UX"
  },
  {
    id: "3",
    name: "David M.",
    role: "Startup Founder",
    company: "SyncPulse Global",
    avatarText: "DM",
    content: "The AI agent integration Piyush built saved our operations team over 25 hours every week. Truly world-class craftsmanship and clear daily communication.",
    rating: 5,
    highlight: "Autonomous AI integration saved 25+ hrs/week"
  }
];

export const TECH_STACK = [
  { name: "Next.js 15 / React 19", category: "Frontend", icon: "Globe" },
  { name: "TypeScript", category: "Language", icon: "Code2" },
  { name: "Tailwind CSS", category: "Styling", icon: "Palette" },
  { name: "React Native / Expo", category: "Mobile", icon: "Smartphone" },
  { name: "Node.js & Express", category: "Backend", icon: "Server" },
  { name: "Python & FastAPI", category: "AI / Backend", icon: "Terminal" },
  { name: "PostgreSQL & Prisma", category: "Database", icon: "Database" },
  { name: "MongoDB & Redis", category: "Database / Cache", icon: "Layers" },
  { name: "OpenAI & Claude API", category: "AI & Agents", icon: "Bot" },
  { name: "Docker & Linux", category: "DevOps", icon: "Container" },
  { name: "Stripe & LemonSqueezy", category: "Payments", icon: "CreditCard" },
  { name: "Vercel & Railway", category: "Cloud Hosting", icon: "Cloud" }
];
