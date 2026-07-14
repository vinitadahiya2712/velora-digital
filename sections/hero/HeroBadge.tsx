"use client";

import { Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function HeroBadge() {
    return (
    <Badge>
        <Sparkles size={15} />
        AI • Cloud • Branding • Development
    </Badge>
    );
}