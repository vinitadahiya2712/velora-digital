"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectButtonsProps {
    demo: string;
    github: string;
}

export default function ProjectButtons({
    demo,
    github,
}: ProjectButtonsProps) {
    return (
    <div className="mt-8 flex gap-3">
      {/* View Project */}
        <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-pink-500
            to-violet-500
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
            hover:shadow-pink-500/30
        "
        >
        View Project
        <ArrowUpRight size={16} />
        </a>

      {/* GitHub */}
        <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-pink-500/40
            hover:bg-white/10
        "
        >
        <ExternalLink size={16} />
        GitHub
        </a>
    </div>
    );
}