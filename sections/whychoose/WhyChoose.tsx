"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseData } from "./whyChooseData";

export default function WhyChoose() {
    return (
    <section
        id="why-choose"
        className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

        <Container>
        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
        >
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
            WHY CHOOSE VELORA
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Velora Digital
            </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
            We combine premium design, cutting-edge technology,
            cloud expertise and AI-powered solutions to help
            businesses grow faster in the digital world.
            </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseData.map((item) => (
            <WhyChooseCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
            />
            ))}
        </div>
        </Container>
    </section>
    );
}