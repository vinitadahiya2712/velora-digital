import { ArrowUpRight } from "lucide-react";

interface Props {
title: string;
description: string;
icon: React.ElementType;
}

export default function ServiceCard({
title,
description,
icon: Icon,
}: Props) {
return (
    <div
    className="
    group
    relative
    overflow-hidden
    rounded-3xl
    glass
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
        hover:glow
    "
    >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600">
        <Icon className="h-7 w-7 text-white" />
    </div>

    <h3 className="text-2xl font-semibold text-white">
        {title}
    </h3>

    <p className="mt-4 leading-7 text-zinc-400">
        {description}
    </p>

    <div className="mt-8 flex items-center gap-2 text-pink-400">
        Learn More
        <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
    </div>
);
}