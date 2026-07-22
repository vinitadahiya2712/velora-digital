"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
    return (
    <form className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
            <label className="mb-2 block text-sm text-zinc-400">
            Full Name
            </label>

            <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-pink-500"
            />
        </div>

        {/* Email */}
        <div>
            <label className="mb-2 block text-sm text-zinc-400">
            Email
            </label>

            <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-pink-500"
            />
        </div>

        {/* Service */}
        <div>
            <label className="mb-2 block text-sm text-zinc-400">
            Service
            </label>

            <select
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-pink-500"
            >
            <option>Website Development</option>
            <option>Cloud Solutions</option>
            <option>AI Automation</option>
            <option>Branding</option>
            <option>UI/UX Design</option>
            </select>
        </div>

        {/* Budget */}
        <div>
            <label className="mb-2 block text-sm text-zinc-400">
            Budget
            </label>

            <select
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-pink-500"
            >
            <option>₹10k - ₹25k</option>
            <option>₹25k - ₹50k</option>
            <option>₹50k - ₹1L</option>
            <option>₹1L+</option>
            </select>
        </div>
        </div>

      {/* Message */}
        <div className="mt-6">
        <label className="mb-2 block text-sm text-zinc-400">
            Project Details
        </label>

        <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-pink-500"
        />
        </div>

      {/* Button */}
        <button
        type="submit"
        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 px-8 py-4 font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
        <Send size={18} />
        Start Your Project
        </button>
    </form>
    );
}