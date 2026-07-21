"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl",
        hover && "transition-all duration-500 hover:border-white/[0.15] hover:bg-[#161616]/90 hover:shadow-lg hover:shadow-purple-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}
