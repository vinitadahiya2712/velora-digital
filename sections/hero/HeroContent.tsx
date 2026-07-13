import Button from "@/components/ui/Button";
import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";

export default function HeroContent() {
return (
    <div className="max-w-3xl">

    <HeroBadge />

    <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl">

        Building

        <span className="block gradient-text">
            Intelligent
        </span>

        Digital Experiences.

    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

        We help ambitious businesses grow through premium websites,
        AI automation, branding, cloud solutions and powerful digital
        experiences that leave a lasting impression.

    </p>

    <div className="mt-10 flex flex-wrap gap-5">

        <Button>
        🚀 Start Project
        </Button>

        <Button variant="outline">
        View Portfolio
        </Button>

    </div>

    <HeroStats />

    </div>
);
}