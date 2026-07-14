import Image from "next/image";
import Link from "next/link";

export default function Logo() {
return (
    <Link
    href="/"
    className="group flex items-center gap-3 transition-all duration-300"
    >
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <Image
            src={`/logo/velora-logo.png?v=${Date.now()}`}
            alt="Velora Digital"
            width={40}
            height={40}
            priority
            unoptimized
            className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
        
    </div>

    <div className="leading-none">

        <h2 className="text-xl font-bold tracking-tight text-white">
        Velora
        </h2>

        <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-zinc-400">
        DIGITAL
        </p>

    </div>
    </Link>
);
}