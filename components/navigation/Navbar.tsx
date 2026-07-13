"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-500">
    <Container>
        <div
        className="
        mt-5
        flex
        h-20
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-black/40
        px-6
        backdrop-blur-xl
        "
        >
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden lg:block">
            <Button>Start Project</Button>
            </div>

            <MobileMenu />
        </div>
        </div>
    </Container>
    </header>
);
}