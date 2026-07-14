import Container from "@/components/ui/Container";
import Aurora from "@/components/background/Aurora";

import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
    return (
    <section
        id="home"
        className="relative isolate overflow-hidden pt-36 md:pt-40 lg:pt-44 pb-28 md:pb-32"
    >
      {/* Aurora Background */}
        <Aurora />

      {/* Background Glow */}
        <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-pink-500/15 blur-[220px]" />

        <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

        </div>

      {/* Gradient Grid */}
        <div
        className="
        absolute
        inset-0
        -z-20
        bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)]
        bg-[size:60px_60px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
        "
        />

        <Container>
        <div
            className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
            "
        >
            <HeroContent />

            <HeroDashboard />
        </div>
        </Container>
    </section>
    );
}