"use client";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full opacity-30 blur-[120px] animate-aurora-1"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-[20%] -right-[20%] h-[70%] w-[50%] rounded-full opacity-25 blur-[120px] animate-aurora-2"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[30%] left-[30%] h-[60%] w-[50%] rounded-full opacity-20 blur-[120px] animate-aurora-3"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
