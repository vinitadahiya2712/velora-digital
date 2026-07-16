import Navbar from "@/components/navigation/Navbar";
import { Hero } from "@/sections/hero";
import TrustedBy from "@/sections/trusted/TrustedBy";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustedBy />

        <Services />
      </main>
    </>
  );
}