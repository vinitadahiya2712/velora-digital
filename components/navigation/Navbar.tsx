"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
return (
    <header className="fixed inset-x-0 top-0 z-50">
    <Container>
        <div
        className="
        mt-4
        flex
        h-16 lg:h-[72px]
        items-center
        justify-between
        rounded-2xl
        border border-white/10
        bg-black/40
        px-6
        shadow-2xl shadow-black/30
        backdrop-blur-2xl
        transition-all duration-300
        "
        >
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden lg:block">
            <Button>
                Start Project
            </Button>
            </div>

            <MobileMenu />
        </div>
        </div>
    </Container>
    </header>
);
}