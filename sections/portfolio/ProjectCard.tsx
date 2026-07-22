"use client";

import { motion } from "framer-motion";

import BrowserMockup from "./BrowserMockup";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";

interface ProjectCardProps {
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github: string;
}

export default function ProjectCard({
  title,
  category,
  shortDescription,
  description,
  image,
  technologies,
  demo,
  github,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Browser Preview */}
      <BrowserMockup
        image={image}
        title={title}
      />

      {/* Content */}
      <div className="p-8">
        {/* Category */}
        <span
          className="
            inline-flex
            rounded-full
            border
            border-pink-500/20
            bg-pink-500/10
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-pink-400
          "
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="mt-5 text-3xl font-bold text-white">
          {title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-lg text-zinc-300">
          {shortDescription}
        </p>

        {/* Full Description */}
        <p className="mt-5 leading-8 text-zinc-400">
          {description}
        </p>

        {/* Tech Stack */}
        <ProjectTags technologies={technologies} />

        {/* Buttons */}
        <ProjectButtons
          demo={demo}
          github={github}
        />
      </div>
    </motion.article>
  );
}