import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function GlassCard({
    children,
    className,
}: GlassCardProps) {
    return (
    <div
        className={clsx(
        "rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300",
        className
        )}
    >
        {children}
    </div>
    );
}