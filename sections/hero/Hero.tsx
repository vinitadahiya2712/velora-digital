import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
return (
    <section
    id="home"
    className="relative overflow-hidden pt-40 pb-24"
    >
      {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-[180px]" />

        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[150px]" />
    </div>

    <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
        <HeroContent />

        <HeroDashboard />
        </div>
    </Container>
    </section>
);
}