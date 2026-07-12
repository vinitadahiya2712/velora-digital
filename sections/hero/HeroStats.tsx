const stats = [
{
    number: "150+",
    label: "Projects",
},
{
    number: "98%",
    label: "Client Satisfaction",
},
{
    number: "24/7",
    label: "Support",
},
];

export default function HeroStats() {
return (
    <div className="mt-14 grid grid-cols-3 gap-8">

    {stats.map((item) => (
        <div key={item.label}>

        <h3 className="text-3xl font-bold text-white">
            {item.number}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
            {item.label}
        </p>

        </div>
    ))}

    </div>
);
}