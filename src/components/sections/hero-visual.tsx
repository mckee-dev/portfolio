"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Braces, Database } from "lucide-react";

export function HeroVisual() {
  const floatingIcons = [
    { Icon: Code2, x: -60, y: -40, delay: 0 },
    { Icon: Terminal, x: 80, y: -60, delay: 0.5 },
    { Icon: Braces, x: -40, y: 60, delay: 1 },
    { Icon: Database, x: 70, y: 50, delay: 1.5 },
  ];

  return (
    <div className="relative w-full max-w-lg aspect-square">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-white/[0.08] backdrop-blur-sm" />

      <div className="absolute inset-4 rounded-2xl border border-white/[0.06] bg-[#111111]/60 backdrop-blur-xl overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-zinc-500 font-mono">portfolio.tsx</span>
          </div>

          <div className="space-y-2 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-purple-400"
            >
              <span className="text-zinc-500">const</span> engineer = {"{"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="pl-4 text-cyan-400"
            >
              name: <span className="text-green-400">&quot;Mehak Fatima&quot;</span>,
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="pl-4 text-cyan-400"
            >
              role: <span className="text-green-400">&quot;Full Stack Engineer&quot;</span>,
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="pl-4 text-cyan-400"
            >
              experience: <span className="text-orange-400">5+</span>,
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="pl-4 text-cyan-400"
            >
              passion: <span className="text-green-400">&quot;Building scalable products&quot;</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="text-purple-400"
            >
              {"}"};
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-4 flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-zinc-500 font-mono">Ready to build</span>
          </motion.div>
        </div>
      </div>

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="absolute"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111111]/80 backdrop-blur-sm"
          >
            <Icon className="h-5 w-5 text-purple-400" />
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-2xl opacity-50 -z-10" />
    </div>
  );
}
