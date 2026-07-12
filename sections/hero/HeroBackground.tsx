export default function HeroBackground() {
return (
    <>
      {/* Main Pink Glow */}
    <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-pink-500/20 blur-[180px]" />

      {/* Purple Glow */}
    <div className="absolute bottom-[-150px] left-[-120px] w-[420px] h-[420px] rounded-full bg-purple-600/20 blur-[160px]" />

      {/* Cyan Glow */}
    <div className="absolute top-40 right-[-120px] w-[350px] h-[350px] rounded-full bg-cyan-400/15 blur-[150px]" />

      {/* Grid */}
    <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
        backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
        backgroundSize: "70px 70px",
        }}
    />
    </>
);
}