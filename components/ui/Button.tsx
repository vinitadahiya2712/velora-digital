"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
children: ReactNode;
variant?: "primary" | "secondary" | "outline" | "ghost";
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
        "inline-flex items-center justify-center",
        "rounded-2xl",
        "px-6 py-3",
        "font-semibold",
        "transition-all duration-300",
        "active:scale-95",

        variant === "primary" &&
        "bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30",

        variant === "secondary" &&
        "bg-zinc-900 text-white hover:bg-zinc-800",

        variant === "outline" &&
        "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:border-pink-500 hover:bg-white/10",

        variant === "ghost" &&
        "text-white hover:bg-white/10",

        className
    )}
    >
    {children}
    </button>
);
}