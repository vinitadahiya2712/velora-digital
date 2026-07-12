import Link from "next/link";

export default function Logo() {
return (
    <Link href="/" className="flex items-center gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-pink-500/30">
        V
    </div>

    <div>
        <h2 className="text-lg font-bold tracking-wide text-white">
        Velora Digital
        </h2>

        <p className="text-xs text-zinc-400">
        Build. Brand. Grow.
        </p>
    </div>
    </Link>
);
}