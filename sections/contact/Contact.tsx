"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const info = [
    {
    icon: Mail,
    title: "Email",
    value: "veloradigital27@gmail.com",
    },
    {
    icon: Phone,
    title: "Phone",
    value: "+91 97292 21295",
    },
    {
    icon: MapPin,
    title: "Location",
    value: "Gurgaon, Haryana",
    
},
];


export default function ContactInfo() {
    return (
    <div className="space-y-6">
        {info.map((item) => {
        const Icon = item.icon;

        return (
            <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 text-white">
                <Icon size={24} />
            </div>

            <h3 className="text-xl font-semibold text-white">
                {item.title}
            </h3>

            <p className="mt-2 text-zinc-400">
                {item.value}
            </p>
            </div>
        );
        })}
    </div>
    );
}