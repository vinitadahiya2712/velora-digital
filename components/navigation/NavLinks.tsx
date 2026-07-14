"use client";

import Link from "next/link";

const links = [
{
    title: "Home",
    href: "#home",
},
{
    title: "Services",
    href: "#services",
},
{
    title: "Portfolio",
    href: "#portfolio",
},
{
    title: "About",
    href: "#about",
},
{
    title: "Pricing",
    href: "#pricing",
},
{
    title: "Contact",
    href: "#contact",
},
];

export default function NavLinks() {
return (
    <nav className="hidden items-center gap-10 lg:flex">
    {links.map((link) => (
        <Link
        key={link.title}
        href={link.href}
        className="
        relative
        text-[15px]
        font-medium
        text-zinc-300
        transition-all
        duration-300
        hover:text-white
        after:absolute
        after:left-0
        after:-bottom-2
        after:h-[2px]
        after:w-0
        after:bg-gradient-to-r
        after:from-pink-500
        after:to-cyan-400
        after:transition-all
        after:duration-300
        hover:after:w-full
        "
        >
        {link.title}
        </Link>
    ))}
    </nav>
);
}