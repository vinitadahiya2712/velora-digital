"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export function Services() {
    return (
    <section
        id="services"
        className="relative py-28 lg:py-36"
    >
        <Container>
        <SectionHeading
            badge="Our Services"
            title="Everything You Need To Build & Grow"
            subtitle="From premium websites to AI automation and cloud infrastructure, we help businesses launch, scale and stand out in the digital world."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
            <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.6,
                delay: index * 0.1,
                }}
                viewport={{ once: true }}
            >
                <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                />
            </motion.div>
            ))}
        </div>
        </Container>
    </section>
    );
}