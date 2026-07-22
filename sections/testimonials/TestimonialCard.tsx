"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    review: string;
    rating: number;
}

export default function TestimonialCard({
    name,
    role,
    company,
    review,
    rating,
}: TestimonialCardProps) {
    return (
    <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-pink-500/40
        "
    >
      {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Rating */}
        <div className="relative z-10 flex gap-1">
        {[...Array(rating)].map((_, index) => (
            <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
            />
        ))}
        </div>

      {/* Review */}
        <p className="relative z-10 mt-6 leading-8 text-zinc-300">
        "{review}"
        </p>

      {/* User */}
        <div className="relative z-10 mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 text-lg font-bold text-white">
            {name.charAt(0)}
        </div>

        <div>
            <h4 className="font-semibold text-white">
            {name}
            </h4>

            <p className="text-sm text-zinc-400">
            {role} • {company}
            </p>
        </div>
        </div>
    </motion.div>
    );
}