"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

export default function FAQ() {
    return (
    <section
        id="faq"
        className="relative py-28 lg:py-36"
    >
        <Container>
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
        >
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            FAQ
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Questions
            </span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
            Everything you need to know before starting your project with
            Velora Digital.
            </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">
            {faqData.map((item) => (
            <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
            />
            ))}
        </div>
        </Container>
    </section>
    );
}