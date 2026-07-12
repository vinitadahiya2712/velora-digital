interface Props {
title: string;
subtitle?: string;
}

export default function SectionTitle({
title,
subtitle,
}: Props) {
return (
    <div className="mb-16 text-center">
    <h2 className="text-4xl md:text-5xl font-bold">
        {title}
    </h2>

    {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
        {subtitle}
        </p>
    )}
    </div>
);
}