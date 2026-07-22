export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    review: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Glow Brew Café",
    rating: 5,
    review:
        "Velora Digital completely transformed our online presence. The website looks premium, loads incredibly fast, and has already increased customer engagement.",
    },

    {
    id: 2,
    name: "Michael Carter",
    role: "Founder",
    company: "CloudStack Solutions",
    rating: 5,
    review:
        "Outstanding cloud infrastructure and deployment support. Professional communication and excellent technical expertise from start to finish.",
    },

    {
    id: 3,
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "Beauty Studio",
    rating: 5,
    review:
        "The branding and website exceeded our expectations. Every detail feels elegant, modern, and perfectly aligned with our business.",
    },

    {
    id: 4,
    name: "David Brown",
    role: "Fitness Coach",
    company: "FitZone",
    rating: 5,
    review:
        "The landing page helped establish my personal brand online. Clean design, fast performance, and an excellent user experience.",
    },

    {
    id: 5,
    name: "Sophia Taylor",
    role: "Restaurant Owner",
    company: "Urban Table",
    rating: 5,
    review:
        "Professional branding, beautiful visuals, and an amazing website. Our customers loved the new digital experience.",
    },

    {
    id: 6,
    name: "James Anderson",
    role: "Startup Founder",
    company: "AI Workflow Labs",
    rating: 5,
    review:
        "Velora delivered exactly what we needed—modern UI, AI-focused design, and a highly polished product.",
    },
];