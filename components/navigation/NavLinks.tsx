"use client";

import Link from "next/link";

const links = [
{ name: "Home", href: "/" },
{ name: "Services", href: "/services" },
{ name: "Portfolio", href: "/portfolio" },
{ name: "About", href: "/about" },
{ name: "Pricing", href: "/pricing" },
{ name: "Contact", href: "/contact" },
];

export default function NavLinks() {
return (
    <nav className="hidden lg:flex items-center gap-8">
    {links.map((link) => (
        <Link
        key={link.name}
        href={link.href}
        className="text-zinc-300 transition hover:text-pink-400"
        >
        {link.name}
        </Link>
    ))}
    </nav>
);
}