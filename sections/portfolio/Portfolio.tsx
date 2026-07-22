"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import ProjectCard from "./ProjectCard";
import { projects } from "./portfolioData";

export default function Portfolio() {
    const featuredProjects = projects.filter(
    (project) => project.featured
    );

    return (
    <section
        id="portfolio"
        className="relative py-28 overflow-hidden"
    >
        <Container>
        {/* Heading */}

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 max-w-3xl text-center"
        >
            <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">
            Featured Work
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
            Projects Built With
            <span className="block bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Passion & Precision
            </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every project is crafted with premium design,
            scalable architecture and performance-first
            development.
            </p>
        </motion.div>

        {/* Projects */}

        <div className="grid gap-12">
            {featuredProjects.map((project) => (
            <ProjectCard
                key={project.id}
                {...project}
            />
            ))}
        </div>
        </Container>
    </section>
    );
}