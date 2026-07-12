import { ReactNode } from "react";

interface Props {
children: ReactNode;
}

export default function GlassCard({ children }: Props) {
return (
    <div
    className="
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    shadow-lg
    p-8
    "
    >
    {children}
    </div>
);
}