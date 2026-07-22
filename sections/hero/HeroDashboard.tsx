"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

export default function HeroDashboard() {
    return (
    <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex justify-center pt-12"
    >
        <GlassCard className="w-full max-w-md p-6">
        {/* Header */}
            <div className="flex items-center justify-between">
            <div>
            <p className="text-sm text-zinc-400">Velora Control Panel</p>
            <h3 className="mt-1 text-2xl font-bold text-white">
                Live Overview
            </h3>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-400">Online</span>
            </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-zinc-400 text-sm">AI Score</p>
            <h4 className="mt-2 text-3xl font-bold text-pink-400">98%</h4>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-zinc-400 text-sm">Projects</p>
            <h4 className="mt-2 text-3xl font-bold text-cyan-400">24</h4>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-zinc-400 text-sm">AWS Status</p>
            <h4 className="mt-2 text-lg font-semibold text-emerald-400">
                Active
            </h4>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-zinc-400 text-sm">Growth</p>
            <h4 className="mt-2 text-2xl font-bold text-violet-400">
                +18%
            </h4>
            </div>
        </div>

        {/* Performance */}
        <div className="mt-8">
            <div className="flex items-center justify-between">
            <span className="text-zinc-400">Performance</span>
            <span className="text-white font-semibold">96/100</span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-zinc-800">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "96%" }}
                transition={{ duration: 1.2 }}
                className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400"
            />
            </div>
        </div>
        </GlassCard>
    </motion.div>
    );
}