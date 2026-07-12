import Navbar from "@/components/navigation/Navbar";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}