"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    badge: string;
    title: string;
    subtitle: string;
}

export default function SectionHeading({
    badge,
    title,
    subtitle,
}: SectionHeadingProps) {
    return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
    >
      {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2">
        <span className="text-sm font-medium text-pink-400">
            {badge}
        </span>
        </div>

      {/* Title */}
        <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
        </h2>

      {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        {subtitle}
        </p>
    </motion.div>
    );
}