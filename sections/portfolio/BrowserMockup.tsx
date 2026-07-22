"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BrowserMockupProps {
    image: string;
    title: string;
}

export default function BrowserMockup({
    image,
    title,
}: BrowserMockupProps) {
    return (
    <motion.div
        whileHover={{
        y: -8,
        scale: 1.02,
        }}
        transition={{
        duration: 0.35,
        }}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0D0D0D]
        shadow-2xl
        shadow-black/40
        "
    >
      {/* Browser Header */}

        <div
        className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            bg-white/5
            px-5
            py-4
        "
        >
        <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />

            <span className="h-3 w-3 rounded-full bg-yellow-500" />

            <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div
            className="
            rounded-full
            border
            border-white/10
            bg-black/40
            px-4
            py-1
            text-xs
            text-zinc-400
            "
        >
            veloradigital.com
        </div>

        <div className="w-12" />
        </div>

      {/* Preview */}

        <div className="relative aspect-[16/10] overflow-hidden">
        <Image
            src={image}
            alt={title}
            fill
            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
            "
        />

        {/* Overlay */}

        <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
            "
        />
        </div>

      {/* Glow */}

        <div
        className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            border
            border-pink-500/0
            transition-all
            duration-500
            group-hover:border-pink-500/30
        "
        />
    </motion.div>
    );
}