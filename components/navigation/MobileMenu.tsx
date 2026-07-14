"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
return (
    <button
    className="
    flex h-11 w-11 items-center justify-center
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    transition-all duration-300
    hover:border-pink-500/40
    hover:bg-white/10
    lg:hidden
    "
    >
    <Menu size={20} className="text-white" />
    </button>
);
}