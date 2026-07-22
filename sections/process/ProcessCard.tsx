"use client";

import { motion } from "framer-motion";

interface ProcessCardProps {
    number: string;
    title: string;
    description: string;
    isLast?: boolean;
}

export default function ProcessCard({
    number,
    title,
    description,
    isLast = false,
}: ProcessCardProps) {
    return (
    <div className="relative flex flex-col items-center text-center">
      {/* Card */}
        <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="
            group
            relative
            w-full
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
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 via-violet-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative z-10 text-5xl font-black text-pink-500">
            {number}
        </span>

        <h3 className="relative z-10 mt-6 text-2xl font-bold text-white">
            {title}
        </h3>

        <p className="relative z-10 mt-4 leading-7 text-zinc-400">
            {description}
        </p>
        </motion.div>

      {/* Connector Line */}
        {!isLast && (
        <div className="hidden lg:block h-20 w-[2px] bg-gradient-to-b from-pink-500 via-violet-500 to-cyan-500" />
        )}
    </div>
    );
}