import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
return (
    <section id="services" className="py-28">
    <Container>
        <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
            Our Services
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
            Digital Solutions Built for Growth
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
            From modern websites to AI automation and cloud infrastructure,
            we build digital experiences that help businesses scale with confidence.
        </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
            <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            />
        ))}
        </div>
    </Container>
    </section>
);
}