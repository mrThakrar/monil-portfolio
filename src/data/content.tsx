import {
    Briefcase, Rocket, CreditCard, Code2,
    Database, Building2, Users, Stethoscope,
    Server, Cloud, Shield, Cpu, Network,
    FileText, Github, FileCode2, Linkedin, Mail
} from "lucide-react";

export const siteConfig = {
    title: "Monil Thakrar | Senior Node.js Developer",
    description: "Software Developer specializing in Node.js and TypeScript. Transforming complex business logic into high-performance, secure, and resilient APIs.",
    keywords: [
        "Node.js", "TypeScript", "Backend Developer", "API Development",
        "PostgreSQL", "MongoDB", "AWS", "Stripe", "Software Engineer"
    ],
    author: "Monil Thakrar",
    openGraph: {
        description: "Architecting Scalable Backend Ecosystems. 4+ years building high-performance APIs and payment systems.",
    },
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://monilthakrar.vercel.app",
};

export const contactInfo = {
    email: process.env.NEXT_PUBLIC_EMAIL || "Monil.Thakrar.work@gmail.com",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/monilthakrar",
    resume: process.env.NEXT_PUBLIC_RESUME_URL || "#",
    status: process.env.NEXT_PUBLIC_STATUS || "Available for new opportunities",
};

export const navLinks = {
    desktop: [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ],
    mobile: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#stack", label: "Tech Stack" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#architecture", label: "Architecture" },
        { href: "#metrics", label: "Metrics" },
        { href: "#projects", label: "Projects" },
        { href: "#writing", label: "Writing" },
        { href: "#contact", label: "Contact" },
    ]
};

export const heroContent = {
    badge: contactInfo.status,
    heading: {
        line1: "Architecting",
        highlight: "Scalable",
        line2: "Backend Ecosystems"
    },
    description: {
        start: "Software Developer specializing in ",
        highlight1: "Node.js",
        middle: " and ",
        highlight2: "TypeScript",
        end: ". Transforming complex business logic into high-performance, secure, and resilient APIs."
    },
    terminalQuote: "\"I don't just write code; I build the digital backbone.\"",
    floatingCode1: "const api = new Server({ port: 8080 })",
    floatingCode2: "await db.transaction(async (trx) => {...})"
};

export const aboutContent = {
    badge: "The Engineer",
    heading: {
        line1: "Building the",
        highlight: "Digital Backbone",
        line2: "of Modern Interfaces"
    },
    paragraphs: [
        {
            text: "With a deep foundation in the ",
            highlight: "JavaScript/TypeScript ecosystem",
            end: ", I've spent the last four years solving high-stakes backend challenges at scale."
        },
        {
            text: "My expertise lies at the intersection of ",
            highlight1: "database optimization",
            middle1: ", ",
            highlight2: "secure payment orchestration",
            middle2: ", and ",
            highlight3: "cloud infrastructure",
            end: ". I thrive in environments where clean, maintainable architecture is the standard."
        }
    ],
    quote: "> Architecting systems that handle complexity so frontends can remain simple.",
    stats: [
        { icon: Briefcase, value: 5, suffix: "+", label: "Years Experience" },
        { icon: Rocket, value: 20, suffix: "+", label: "Live Applications" },
        { icon: CreditCard, value: 5, suffix: "+", label: "Payment Flows" },
        { icon: Code2, value: 50, suffix: "k+", label: "LoC Shipped" },
    ]
};

export const experienceContent = {
    badge: "Career History",
    heading: {
        line1: "Professional",
        highlight: "Experience"
    }
};

export const experienceData = [
    {
        role: "Senior Backend Developer",
        company: "Zignuts Technolab",
        period: "Feb 2024 - Present",
        description: "Architecting high-concurrency microservices and leading backend engineering for core SaaS products. Defined API standards and mentored junior developers.",
        highlights: [
            "Designed real-time event-driven architectures serving 10k+ concurrent users.",
            "Optimized PostgreSQL queries, reducing complex report generation time by 40%.",
            "Architected complex payment orchestration pipelines.",
        ],
    },
    {
        role: "Web Developer",
        company: "Zignuts Technolab",
        period: "Feb 2022 - Feb 2024",
        description: "Developed and maintained RESTful APIs for mobile and web ecosystems, acting as the primary backend engineer for critical client projects.",
        highlights: [
            "Built multi-tenant database architectures for B2B applications.",
            "Integrated secure authentication/authorization (JWT, OAuth) systems.",
            "Deployed and managed infrastructure on AWS and Hetzner Cloud.",
        ],
    },
    {
        role: "Junior Web Developer",
        company: "Zignuts Technolab",
        period: "Jul 2021 - Feb 2022",
        description: "Assisted in the development of robust backend systems and maintained existing applications.",
        highlights: [
            "Collaborated with senior engineers to implement new core features.",
            "Wrote comprehensive unit tests and participated in code review.",
            "Resolved bugs and improved application stability.",
        ],
    },
];

export const skillsContent = {
    badge: "Skills",
    heading: {
        line1: "Technical",
        highlight: "Taxonomy"
    },
    description: "A structured breakdown of my technical capabilities.",
    categories: [
        {
            title: "Language & Runtime",
            icon: Code2,
            skills: [
                { name: "Node.js", level: "Primary" },
                { name: "TypeScript", level: "Advanced" },
                { name: "JavaScript (ES6+)", level: "Expert" },
                { name: "GraphQL", level: "Core" },
            ],
        },
        {
            title: "Databases & Queues",
            icon: Database,
            skills: [
                { name: "PostgreSQL", level: "Relational" },
                { name: "MongoDB", level: "NoSQL" },
                { name: "Redis", level: "Caching" },
                { name: "RabbitMQ", level: "Queuing" },
            ],
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            skills: [
                { name: "AWS", level: "Cloud" },
                { name: "Hetzner Cloud", level: "File Storage" },
                { name: "Firebase", level: "Auth & Push" },
                { name: "Docker", level: "Containers" },
                { name: "Git / GitHub", level: "Version Control" },
            ],
        },
        {
            title: "Fintech & Integrations",
            icon: CreditCard,
            skills: [
                { name: "Stripe", level: "Connect & Checkout" },
                { name: "Mangopay", level: "P2P Payments" },
                { name: "Revolut Pay", level: "Gateway" },
                { name: "PayU", level: "Gateway" },
            ],
        },
        {
            title: "Templating",
            icon: FileCode2,
            skills: [
                { name: "Handlebars (HBS)", level: "SSR" },
                { name: "EJS", level: "Server-side" },
            ],
        },
    ]
};

export const projectsContent = {
    badge: "Production Work",
    heading: {
        line1: "Technical",
        highlight: "Case Studies"
    },
    description: "Deep dives into the architecture and engineering decisions behind real-world scalable applications.",
    projects: [
        {
            title: "Cater Master",
            year: "2025",
            concept: "Multi-tenant SaaS for catering management",
            icon: Building2,
            highlight: "Implemented a sophisticated multi-tenant architecture where each client operates on a dedicated production instance with an isolated database (PostgreSQL), ensuring maximum data security and performance isolation.",
            keywords: ["Multi-tenancy", "PostgreSQL", "PayU", "Stripe"],
            gradient: "from-emerald-500/20 to-teal-500/20",
            accentColor: "border-emerald-500",
            textColor: "text-emerald-600 dark:text-emerald-400",
            bgAccent: "bg-emerald-50 dark:bg-emerald-500/10",
        },
        {
            title: "Co-Tasker",
            year: "2024",
            concept: "Community marketplace for skilled services",
            icon: Users,
            highlight: "Architected a real-time communication layer using WebSockets (Socket.io) and Firebase. Managed a complex, multi-provider payment flow integrating Mangopay, PayPal, and Apple Pay.",
            keywords: ["WebSockets", "Firebase", "Mangopay", "Payment Orchestration"],
            gradient: "from-cyan-500/20 to-blue-500/20",
            accentColor: "border-cyan-500",
            textColor: "text-cyan-600 dark:text-cyan-400",
            bgAccent: "bg-cyan-50 dark:bg-cyan-500/10",
        },
        {
            title: "Purple PRN",
            year: "2024",
            concept: "Healthcare staffing platform",
            icon: Stethoscope,
            highlight: "Developed the matching logic to connect clinicians with temporary job postings. Built a robust automated payout system using Stripe to handle doctor-to-clinician financial transfers.",
            keywords: ["Algorithms", "Stripe Connect", "Automated Payouts"],
            gradient: "from-purple-500/20 to-violet-500/20",
            accentColor: "border-purple-500",
            textColor: "text-purple-600 dark:text-purple-400",
            bgAccent: "bg-purple-50 dark:bg-purple-500/10",
        },
    ]
};

export const architectureContent = {
    badge: "System Architecture",
    heading: {
        line1: "Abstracting",
        highlight: "Complexity"
    },
    description: "High-level diagrams of core infrastructure mechanisms I regularly implement.",
    diagrams: [
        {
            title: "Multi-Tenant Payment Orchestration",
            description: "Secure cross-border routing for marketplace payouts utilizing Node.js streams and Stripe Connect.",
            nodes: [
                { label: "Client Request", x: "0%", y: "40%" },
                { label: "API Gateway (Node.js)", x: "35%", y: "40%", highlight: true },
                { label: "Auth Middleware", x: "35%", y: "10%" },
                { label: "Stripe Flow", x: "70%", y: "20%" },
                { label: "Mangopay Flow", x: "70%", y: "60%" },
                { label: "DB Audit Log", x: "35%", y: "75%" },
            ],
            edges: [
                { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 },
            ]
        },
        {
            title: "Real-Time Multi-Provider Architecture",
            description: "Websocket-based live application state synchronization via Firebase and Redis pub/sub.",
            nodes: [
                { label: "React Client", x: "0%", y: "40%" },
                { label: "Socket.io Server", x: "40%", y: "40%", highlight: true },
                { label: "Redis Pub/Sub", x: "40%", y: "75%" },
                { label: "Firebase sync", x: "80%", y: "20%" },
                { label: "Postgres Storage", x: "80%", y: "60%" },
            ],
            edges: [
                { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 },
            ]
        }
    ]
};

export const metricsContent = {
    badge: "Scale & Impact",
    heading: "Numbers that Matter",
    metrics: [
        { value: 10, suffix: "k+", label: "Concurrent Users Handled", color: "text-emerald-500" },
        { prefix: "$", value: 5, suffix: "M+", label: "In Transactions Processed", color: "text-teal-500" },
        { value: 99, suffix: ".99%", label: "API Uptime Maintained", color: "text-cyan-500" },
        { value: 40, suffix: "%", label: "Query Optimization Gain", color: "text-blue-500" },
    ]
};

export const writingContent = {
    badge: "Knowledge Sharing",
    heading: {
        line1: "Writing &",
        highlight: "Open Source"
    },
    contributions: [
        {
            title: "High-Performance Node.js Authentication",
            description: "A comprehensive guide to scaling JWT handling and Redis session storage for enterprise applications.",
            type: "Article",
            icon: FileText,
            date: "Feb 2025",
            link: "#",
        },
        {
            title: "express-rate-limit-redis",
            description: "Contributed to core types and helped optimize the pipeline execution for high-traffic environments.",
            type: "Open Source",
            icon: Github,
            date: "Jan 2025",
            link: "https://github.com",
        },
        {
            title: "Demystifying Multi-Tenant Databases",
            description: "Architectural comparison of Row-level security (RLS) vs schema separation in PostgreSQL.",
            type: "Article",
            icon: FileText,
            date: "Nov 2024",
            link: "#",
        },
    ]
};

export const techStackContent = {
    badge: "Core Infrastructure & Tooling",
    heading: "The Engine Room",
    stack: [
        { name: "Node.js", icon: Server },
        { name: "TypeScript", icon: Cpu },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Redis", icon: Network },
        { name: "AWS", icon: Cloud },
        { name: "Stripe", icon: Shield },
        { name: "Docker", icon: Cpu },
    ]
};

export const contactContent = {
    badge: "Next Steps",
    heading: {
        line1: "Let's Build Something",
        highlight: "Exceptional"
    },
    description: "Whether you are scaling an existing platform or architecting a new microservice ecosystem from scratch, I'm ready to engineer the solution.",
    terminal: {
        title: "setup-contact.sh",
        command: "$ whoami",
        response: "Monil Thakrar - Senior Backend Engineer",
        fileCommand: "$ cat contact.json"
    }
};

export const footerContent = {
    logo: {
        highlight: "Monil",
        rest: "Thakrar"
    },
    subtitle: "Senior Backend Developer",
    copyrightName: "Monil Thakrar",
    socialLinks: [
        { icon: Github, href: contactInfo.github, label: "GitHub" },
        { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
        { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
    ]
};
