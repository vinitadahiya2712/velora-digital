import Navbar from "@/components/navigation/Navbar";

import { Hero } from "@/sections/hero";
import TrustedBy from "@/sections/trusted/TrustedBy";
import { Services } from "@/sections/services";
import Portfolio from "@/sections/portfolio";
import { WhyChoose } from "@/sections/whychoose";
import { Process } from "@/sections/process";
import { Testimonials } from "@/sections/testimonials";
import { Contact } from "@/sections/contact";
import { FAQ } from "@/sections/faq";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustedBy />

        <Services />

        <Portfolio />

        <WhyChoose />

        <Process />

        <Testimonials />

        <Contact />

        <FAQ />

        <Footer />
      </main>
    </>
  );
}