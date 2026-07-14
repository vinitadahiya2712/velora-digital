import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
    return (
    <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300">
        <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
        {children}
    </div>
    );
}