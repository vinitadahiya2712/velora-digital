"use client";

import { motion } from "framer-motion";

interface ProjectTagsProps {
    technologies: string[];
}

export default function ProjectTags({
    technologies,
}: ProjectTagsProps) {
    return (
    <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
        <motion.span
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            duration: 0.3,
            delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1.5
            text-xs
            font-medium
            text-zinc-300
            transition-all
            duration-300
            hover:border-pink-500/40
            hover:bg-pink-500/10
            hover:text-white
            "
        >
            {tech}
        </motion.span>
        ))}
    </div>
    );
}