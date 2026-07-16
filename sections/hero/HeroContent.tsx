"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
    return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
        duration: 0.8,
        ease: "easeOut",
        }}
        className="max-w-2xl"
    >
        <HeroBadge />

        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
        Building

        <span className="block mt-2">
            <GradientText>Intelligent</GradientText>
        </span>

        <span className="block mt-2">
            Digital Experiences
        </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
        Velora Digital helps ambitious businesses grow through premium
        websites, AI automation, cloud infrastructure, branding and
        high-performance digital experiences.
        </p>

        <div className="mt-10">
        <HeroButtons />
        </div>

        <div className="mt-14">
        <HeroStats />
        </div>
    </motion.div>
    );
}