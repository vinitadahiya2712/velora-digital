"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
    return (
    <section
        id="testimonials"
        className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />
        </div>

        <Container>
        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
        >
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
            CLIENT TESTIMONIALS
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Businesses Worldwide
            </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
            We build websites, cloud solutions, branding and AI experiences
            that help businesses grow with confidence.
            </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
            <TestimonialCard
                key={item.id}
                name={item.name}
                role={item.role}
                company={item.company}
                review={item.review}
                rating={item.rating}
            />
            ))}
        </div>
        </Container>
    </section>
    );
}