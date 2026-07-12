interface Props {
  name: string;
}

export default function TechLogo({ name }: Props) {
  return (
    <div
    className="
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-6
    py-4
    text-center
    font-medium
    text-zinc-300
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-pink-500/40
    hover:bg-white/10
    hover:text-white
    "
    >
    {name}
    </div>
);
}