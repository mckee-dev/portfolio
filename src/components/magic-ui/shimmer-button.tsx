"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "12px",
  background = "linear-gradient(to right, #7c3aed, #2563eb)",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--border-radius": borderRadius,
          "--background": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-xl px-6 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 z-[-1] rounded-[inherit]"
        style={{ background: background }}
      />
      <div
        className="absolute inset-0 z-[-1] overflow-hidden rounded-[inherit]"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-[-100%] animate-shimmer-slide"
          style={{
            background: `conic-gradient(from calc(270deg - (var(--shimmer-size) * 0.5)), transparent 0, ${shimmerColor} var(--shimmer-size), transparent var(--shimmer-size))`,
            animationDuration: shimmerDuration,
          }}
        />
      </div>
      {children}
    </button>
  );
}
