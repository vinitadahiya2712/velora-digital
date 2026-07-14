"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
const [dark, setDark] = useState(true);

return (
    <button
    onClick={() => setDark(!dark)}
    className="
    flex h-11 w-11 items-center justify-center
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    transition-all duration-300
    hover:border-pink-500/40
    hover:bg-white/10
    "
    >
    {dark ? (
        <Moon size={18} className="text-yellow-400" />
    ) : (
        <Sun size={18} className="text-yellow-400" />
    )}
    </button>
);
}