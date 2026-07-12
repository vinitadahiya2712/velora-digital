import Button from "@/components/ui/Button";
import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";

export default function HeroContent() {
return (
    <div className="relative z-10">

    <HeroBadge />

    <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
        We Build{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        Digital Experiences
        </span>
        <br />
        That Grow Businesses.
    </h1>

    <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
        Velora Digital helps startups, creators, and businesses build
        high-performing websites, premium branding, AI-powered solutions,
        cloud infrastructure, and modern digital experiences.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
        <Button>
        Start Your Project
        </Button>

        <Button variant="secondary">
        View Our Work
        </Button>
    </div>

    <div className="mt-10 flex flex-wrap gap-3">
        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm">
        ⚡ Fast Delivery
        </span>

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm">
        🤖 AI Powered
        </span>

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm">
        ☁ Cloud Ready
        </span>

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm">
        🎨 Premium UI
        </span>
    </div>

    <HeroStats />

    </div>
);
}