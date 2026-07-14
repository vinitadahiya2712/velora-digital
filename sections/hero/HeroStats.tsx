"use client";

import { motion } from "framer-motion";

const stats = [
{
    value: "50+",
    label: "Projects Delivered",
},
{
    value: "98%",
    label: "Client Satisfaction",
},
{
    value: "24/7",
    label: "Support",
},
];

export default function HeroStats() {
    return (
    <div className="mt-14 grid grid-cols-3 gap-6">
        {stats.map((item, index) => (
        <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: index * 0.15,
            duration: 0.6,
            }}
            viewport={{ once: true }}
        >
            <h3 className="text-3xl font-bold text-white">
            {item.value}
        </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
            {item.label}
            </p>
        </motion.div>
        ))}
    </div>
    );
}