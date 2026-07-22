export interface Project {
    id: number;
    title: string;
    category: "Web" | "Cloud" | "AI" | "Branding";
    shortDescription: string;
    description: string;
    image: string;
    technologies: string[];
    demo: string;
    github: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
    id: 1,
    title: "Glow Brew Café",
    category: "Web",
    shortDescription: "Luxury Coffee Brand Website",
    description:
        "A premium café landing page focused on elegant UI, smooth animations and mobile-first performance.",
    image: "/projects/restaurant.png",
    technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
    ],
    demo: "#",
    github: "#",
    featured: true,
    },

    {
    id: 2,
    title: "AWS Cloud Infrastructure",
    category: "Cloud",
    shortDescription: "Deployment & Monitoring",
    description:
        "Cloud architecture using EC2, S3, IAM and CloudWatch with secure deployment practices.",
    image: "/projects/cloud.png",
    technologies: [
        "AWS",
        "Linux",
        "CloudWatch",
        "Apache",
        "EC2",
    ],
    demo: "#",
    github: "#",
    featured: true,
    },

    {
    id: 3,
    title: "AI Workflow Dashboard",
    category: "AI",
    shortDescription: "Business Automation",
    description:
        "Modern dashboard concept for AI-powered workflows, analytics and automation.",
    image: "/projects/ai.png",
    technologies: [
        "Next.js",
        "AI",
        "Dashboard",
        "Automation",
    ],
    demo: "#",
    github: "#",
    featured: true,
    },

    {
    id: 4,
    title: "Restaurant Branding",
    category: "Branding",
    shortDescription: "Digital Brand Identity",
    description:
        "Complete branding system including website concept, social media assets and visual identity.",
    image: "/projects/restaurant.png",
    technologies: [
        "Branding",
        "UI Design",
        "Social Media",
    ],
    demo: "#",
    github: "#",
    featured: false,
    },

    {
    id: 5,
    title: "Fitness Trainer",
    category: "Web",
    shortDescription: "Personal Brand Website",
    description:
        "Responsive portfolio website designed to help fitness professionals grow their online presence.",
    image: "/projects/fitness.png",
    technologies: [
        "React",
        "Tailwind",
        "Responsive",
    ],
    demo: "#",
    github: "#",
    featured: false,
    },

    {
    id: 6,
    title: "Beauty Studio",
    category: "Branding",
    shortDescription: "Luxury Landing Page",
    description:
        "Elegant beauty brand landing page with premium visuals and conversion-focused design.",
    image: "/projects/beauty.png",
    technologies: [
        "Landing Page",
        "Branding",
        "UI/UX",
    ],
    demo: "#",
    github: "#",
    featured: false,
    },
];