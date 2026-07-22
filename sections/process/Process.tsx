"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import ProcessCard from "./ProcessCard";
import { processData } from "./processData";

export default function Process() {
    return (
    <section
        id="process"
        className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[180px]" />
        </div>

        <Container>
        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
        >
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            OUR PROCESS
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Successful Launch
            </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every project follows a clear and efficient workflow to ensure
            quality, performance, and long-term success.
            </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 grid gap-10 lg:grid-cols-4">
            {processData.map((step, index) => (
            <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === processData.length - 1}
            />
            ))}
        </div>
        </Container>
    </section>
    );
}