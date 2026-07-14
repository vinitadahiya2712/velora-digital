"use client";

import { motion } from "framer-motion";

export default function Aurora() {
return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Pink */}
    <motion.div
        animate={{
        x: [0, 80, 0],
        y: [0, -50, 0],
        }}
        transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        }}
        className="
        absolute
        left-[-10%]
        top-[10%]
        h-[420px]
        w-[420px]
        rounded-full
        bg-pink-500/20
        blur-[140px]
        "
    />

      {/* Purple */}
    <motion.div
        animate={{
        x: [0, -80, 0],
        y: [0, 70, 0],
        }}
        transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        }}
        className="
        absolute
        right-[-5%]
        top-[15%]
        h-[500px]
        w-[500px]
        rounded-full
        bg-violet-500/20
        blur-[150px]
        "
    />

      {/* Cyan */}
    <motion.div
        animate={{
        x: [0, 50, 0],
        y: [0, -60, 0],
        }}
        transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-10%]
        left-[35%]
        h-[380px]
        w-[380px]
        rounded-full
        bg-cyan-400/15
        blur-[150px]
        "
    />
    </div>
);
}