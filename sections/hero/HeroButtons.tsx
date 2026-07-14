"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "outline";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    className,
}: ButtonProps) {
    return (
    <button
        className={clsx(
        "group relative overflow-hidden rounded-2xl px-7 py-3.5 font-semibold transition-all duration-300 active:scale-95",

        variant === "primary"
            ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 text-white shadow-lg shadow-pink-500/20 hover:-translate-y-1 hover:shadow-pink-500/40"
            : "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-pink-500/40 hover:bg-white/10",

        className
        )}
    >
        {children}
    </button>
    );
}