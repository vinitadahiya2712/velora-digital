import Navbar from "@/components/navigation/Navbar";
import { Hero } from "@/sections/hero";
import TrustedBy from "@/sections/trusted/TrustedBy";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <TrustedBy />

      </main>
    </>
  );
}