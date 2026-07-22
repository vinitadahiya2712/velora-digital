"use client";

import Link from "next/link";

import { Mail, Phone, MapPin } from "lucide-react";

import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import Container from "@/components/ui/Container";

export default function Footer() {
    return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-20">
      {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />
        </div>
    
        <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
            <div>
            <h2 className="text-3xl font-bold text-white">
                Velora{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Digital
                </span>
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
                Building premium websites, cloud solutions, AI automation,
                branding and digital experiences for modern businesses.
            </p>
            </div>

          {/* Quick Links */}
            <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
                Quick Links
            </h3>

            <div className="space-y-3">
                <Link
                href="#home"
                className="block text-zinc-400 transition hover:text-pink-400"
                >
                Home
                </Link>

                <Link
                href="#services"
                className="block text-zinc-400 transition hover:text-pink-400"
                >
                Services
                </Link>

                <Link
                href="#portfolio"
                className="block text-zinc-400 transition hover:text-pink-400"
                >
                Portfolio
                </Link>

                <Link
                href="#contact"
                className="block text-zinc-400 transition hover:text-pink-400"
                >
                Contact
                </Link>
            </div>
            </div>

          {/* Services */}
            <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
                Services
            </h3>

            <div className="space-y-3 text-zinc-400">
                <p>Website Development</p>
                <p>Cloud Solutions</p>
                <p>AI Automation</p>
                <p>Brand Identity</p>
            </div>
            </div>

          {/* Contact */}
            <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
                Contact
            </h3>

            <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-400">
                <Mail size={18} />
                <span>veloradigital27@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-400">
                <Phone size={18} />
                <span>+91 97292 21295</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-400">
                <MapPin size={18} />
                <span>Gurgaon, Haryana</span>
                </div>

              {/* Social Icons */}
                <div className="mt-6 flex gap-5">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition hover:text-pink-400"
                >
                    <FaInstagram size={22} />
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition hover:text-pink-400"
                >
                    <FaLinkedin size={22} />
                </a>

                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition hover:text-pink-400"
                >
                    <FaGithub size={22} />
                </a>
                </div>
            </div>
            </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Velora Digital. All Rights Reserved.
        </div>
        </Container>
    </footer>
    );
}