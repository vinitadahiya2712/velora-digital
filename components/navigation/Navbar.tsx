"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-zinc-800">
    <Container>
        <div className="flex items-center justify-between h-20">
        <h1 className="text-2xl font-bold">
            Velora <span className="text-pink-500">Digital</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-zinc-300">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>

        <Button>Let's Talk</Button>
        </div>
    </Container>
    </header>
);
}