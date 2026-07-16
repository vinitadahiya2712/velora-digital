import Container from "@/components/ui/Container";
import Aurora from "@/components/background/Aurora";

import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
    return (
    <section
        id="home"
        className="relative isolate overflow-hidden pt-36 lg:pt-44 pb-24 lg:pb-32"
    >
      {/* Aurora */}
        <Aurora />

      {/* Background Glow */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-pink-500/15 blur-[220px]" />

        <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[180px]" />

        <div className="absolute left-[-10%] bottom-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

      {/* Grid */}
        <div
        className="
            absolute inset-0 -z-10
            bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)]
            bg-[size:60px_60px]
            [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
        />

        <Container>
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
            <HeroContent />

            <HeroDashboard />
        </div>
        </Container>
    </section>
    );
}