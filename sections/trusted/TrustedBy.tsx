import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TechLogo from "./TechLogo";
import { techData } from "./techData";

export default function TrustedBy() {
return (
    <section className="py-28">

    <Container>

        <SectionTitle
        title="Powered By Modern Technologies"
        subtitle="We build scalable digital experiences using industry-leading technologies."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">

        {techData.map((tech) => (
            <TechLogo
            key={tech}
            name={tech}
            />
        ))}

        </div>

    </Container>

    </section>
);
}