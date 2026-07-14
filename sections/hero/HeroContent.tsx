"use client";

import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
    return (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
    >
        <HeroBadge />

        <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] text-white md:text-6xl xl:text-7xl">
        Building

        <span className="block bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligent
        </span>

        Digital Experiences
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        We build premium websites, AI automation, cloud infrastructure,
        branding and digital products that help ambitious businesses
        stand out and grow faster.
        </p>

    <HeroButtons />

    <HeroStats />
    </motion.div>
    );
}