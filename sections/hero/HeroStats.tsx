const stats = [
{ number: "100%", label: "Client Focus" },
{ number: "24/7", label: "Support" },
{ number: "AI", label: "Powered" },
];

export default function HeroStats() {
return (
    <div className="mt-12 flex flex-wrap gap-8">
    {stats.map((item) => (
        <div key={item.label}>
        <h3 className="text-3xl font-bold text-white">{item.number}</h3>
        <p className="text-zinc-400">{item.label}</p>
        </div>
    ))}
    </div>
);
}