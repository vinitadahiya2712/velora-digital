import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
children: ReactNode;
variant?: "primary" | "secondary";
className?: string;
};

export default function Button({
children,
variant = "primary",
className,
}: ButtonProps) {
return (
    <button
    className={clsx(
        "px-6 py-3 rounded-2xl font-semibold transition-all duration-300",
        "hover:scale-105 active:scale-95",
        variant === "primary"
        ? "bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/30"
        : "border border-zinc-700 hover:border-pink-500 bg-transparent",
        className
    )}
    >
    {children}
    </button>
);
}