export default function HeroDashboard() {
return (
    <div className="relative hidden lg:flex items-center justify-center">

    <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="flex items-center justify-between">

        <div>
            <p className="text-sm text-zinc-400">
            Active Projects
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
            24
            </h2>
        </div>

        <div className="rounded-xl bg-green-500/20 px-3 py-2 text-green-400">
            +18%
        </div>

        </div>

        <div className="mt-10 space-y-6">

        <div className="rounded-2xl bg-zinc-900/70 p-5">
            <div className="flex justify-between">

            <span className="text-zinc-400">
                AI Automation
            </span>

            <span className="text-pink-400">
                92%
            </span>

            </div>

            <div className="mt-3 h-2 rounded-full bg-zinc-700">

            <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />

            </div>
        </div>

        <div className="rounded-2xl bg-zinc-900/70 p-5">
            <div className="flex justify-between">

            <span className="text-zinc-400">
                Cloud Infrastructure
            </span>

            <span className="text-cyan-400">
                AWS
            </span>

            </div>

            <p className="mt-3 text-sm text-zinc-500">
            Secure • Scalable • High Performance
            </p>

        </div>

        <div className="rounded-2xl bg-zinc-900/70 p-5">
            <div className="flex justify-between">

            <span className="text-zinc-400">
                Performance Score
            </span>

            <span className="text-green-400">
                98/100
            </span>

            </div>

        </div>

        </div>

    </div>

    </div>
);
}