import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";
import Container from "@/components/ui/Container";

export default function Hero() {
return (
    <section className="relative overflow-hidden min-h-screen bg-[#050505]">
    <HeroBackground />

    <Container>
        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-16">

        <HeroContent />

        <HeroDashboard />

        </div>
    </Container>
    </section>
);
}