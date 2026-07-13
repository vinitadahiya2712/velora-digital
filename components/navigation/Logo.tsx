import Image from "next/image";
import Link from "next/link";

export default function Logo() {
return (
    <Link href="/" className="flex items-center gap-3">
    <Image
        src="/logo/velora-logo.png"
        alt="Velora Digital"
        width={48}
        height={48}
        priority
    />

    <div>
        <h2 className="text-lg font-bold tracking-wide text-white">
        Velora
        </h2>

        <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">
        Digital
        </p>
    </div>
    </Link>
);
}