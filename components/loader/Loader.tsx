"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/navigation/Logo";

export default function Loader({
children,
}: {
children: React.ReactNode;
}) {
const [loading, setLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => {
    setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
}, []);

return (
    <>
    <AnimatePresence>
        {loading && (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
            }}
            className="flex flex-col items-center gap-6"
            >
            <Logo />

            <motion.div
                className="h-1 w-44 overflow-hidden rounded-full bg-white/10"
            >
                <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                }}
                />
            </motion.div>

            <p className="text-sm tracking-[0.4em] uppercase text-zinc-500">
                Building Experiences
            </p>
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>

    {!loading && children}
    </>
);
}