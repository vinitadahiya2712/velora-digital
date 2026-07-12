export default function HeroDashboard() {
return (
    <div className="relative flex justify-center items-center">

      {/* Glow */}
    <div className="absolute w-96 h-96 rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Main Dashboard */}
    <div className="relative w-full max-w-lg rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(255,45,149,0.15)]">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
        <div>
            <p className="text-zinc-400 text-sm">
            Velora Digital
            </p>

            <h3 className="text-2xl font-bold">
            Business Dashboard
            </h3>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl">
            🚀
        </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5">

        <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
            <p className="text-zinc-400 text-sm">Website Score</p>
            <h2 className="mt-2 text-3xl font-bold">98%</h2>
        </div>

        <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
            <p className="text-zinc-400 text-sm">SEO Ready</p>
            <h2 className="mt-2 text-3xl font-bold text-green-400">
            100%
            </h2>
        </div>

        <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
            <p className="text-zinc-400 text-sm">AI Powered</p>
            <h2 className="mt-2 text-xl font-semibold">
            Enabled
            </h2>
        </div>

        <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
            <p className="text-zinc-400 text-sm">Cloud</p>
            <h2 className="mt-2 text-xl font-semibold">
            Ready
            </h2>
        </div>

        </div>

        {/* Progress */}
        <div className="mt-10">

        <div className="flex justify-between mb-2">
            <span className="text-zinc-400">
            Project Progress
            </span>

            <span>75%</span>
        </div>

        <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">

            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

        </div>

        </div>

    </div>

    </div>
);
}