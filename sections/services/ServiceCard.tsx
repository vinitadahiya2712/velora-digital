"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
}

export default function ServiceCard({
    title,
    description,
    icon: Icon,
    color,
}: ServiceCardProps) {
    return (
    <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
    >
      {/* Glow */}
        <div
        className={`absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
        />

      {/* Icon */}
        <div
        className={`inline-flex rounded-2xl bg-gradient-to-r ${color} p-4`}
        >
        <Icon className="h-7 w-7 text-white" />
        </div>

      {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
        </h3>

      {/* Description */}
        <p className="mt-4 leading-7 text-zinc-400">
        {description}
        </p>

      {/* Learn More */}
        <button
        className="
            mt-8
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            group-hover:gap-3
        "
        >
        Learn More

        <ArrowUpRight
            className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            "
        />
        </button>

      {/* Border Glow */}
        <div
        className="
            absolute
            inset-0
            rounded-3xl
            border
            border-transparent
            transition-all
            duration-500
            group-hover:border-pink-500/30
        "
        />
    </motion.div>
    );
}