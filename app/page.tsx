import Navbar from "@/components/navigation/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-40">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-6xl font-bold text-white">
            Velora Digital
          </h1>
        </section>
      </main>
    </>
  );
}