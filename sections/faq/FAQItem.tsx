"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({
    question,
    answer,
}: FAQItemProps) {
    const [open, setOpen] = useState(false);

    return (
    <div
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        "
    >
        <button
        onClick={() => setOpen(!open)}
        className="
            flex
            w-full
            items-center
            justify-between
            px-8
            py-6
            text-left
        "
        >
        <h3 className="text-lg font-semibold text-white">
            {question}
        </h3>

        {open ? (
            <Minus className="text-pink-400" />
        ) : (
            <Plus className="text-pink-400" />
        )}
        </button>

        <AnimatePresence>
        {open && (
            <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3 }}
            >
            <p className="px-8 pb-6 leading-8 text-zinc-400">
                {answer}
            </p>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
    );
}