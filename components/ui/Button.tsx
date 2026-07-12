"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
children: ReactNode;
variant?: "primary" | "secondary";
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
        "rounded-2xl px-6 py-3 font-semibold transition-all duration-300",
        "active:scale-95",
        variant === "primary"
        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30"
        : "border border-zinc-700 text-white hover:border-pink-500 hover:bg-zinc-900",
        className
    )}
    >
    {children}
    </button>
);
}