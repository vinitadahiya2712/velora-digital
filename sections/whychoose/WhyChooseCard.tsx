"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WhyChooseCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function WhyChooseCard({
    icon: Icon,
    title,
    description,
}: WhyChooseCardProps) {
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
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:border-pink-500/40
        hover:bg-white/[0.05]
        "
    >
      {/* Glow */}
        <div
        className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-br
            from-pink-500/10
            via-violet-500/5
            to-cyan-500/10
        "
        />

      {/* Icon */}
        <div
        className="
            relative
            z-10
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-pink-500
            via-violet-500
            to-cyan-500
            text-white
            shadow-lg
            shadow-pink-500/20
        "
        >
        <Icon size={30} />
        </div>

      {/* Title */}
        <h3 className="relative z-10 text-2xl font-bold text-white">
        {title}
        </h3>

      {/* Description */}
        <p className="relative z-10 mt-4 leading-7 text-zinc-400">
        {description}
        </p>

      {/* Bottom Line */}
        <div
        className="
            absolute
            bottom-0
            left-0
            h-1
            w-0
            bg-gradient-to-r
            from-pink-500
            via-violet-500
            to-cyan-500
            transition-all
            duration-500
            group-hover:w-full
        "
        />
    </motion.div>
    );
}