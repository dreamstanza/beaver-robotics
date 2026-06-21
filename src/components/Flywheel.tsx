"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  { label: "Deploy", desc: "Robots operate in real environments." },
  { label: "Observe", desc: "The system captures spatial and action experience." },
  { label: "Update 4D Memory", desc: "World states, scene history, and affordance memory are updated." },
  { label: "Mine Failures", desc: "Edge cases become learning signals." },
  { label: "Generate Simulation", desc: "Real-world scenes become simulation assets." },
  { label: "Train Action Models", desc: "The mobility brain improves over time." },
];

export default function Flywheel() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const cx = 300;
  const cy = 220;
  const r = 140;

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Desktop: circular orbit */}
      <div className="hidden sm:block">
        <svg viewBox="0 0 600 440" className="w-full h-auto">
          {/* Orbit ring */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(21,92,255,0.12)" strokeWidth="1.5" />

          {/* Animated orbit glow */}
          <motion.circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="url(#flywheelGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${Math.PI * 2 * r}`}
            initial={{ strokeDashoffset: Math.PI * 2 * r }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          />

          {/* Center label */}
          <text x={cx} y={cy - 10} textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter">
            4D
          </text>
          <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="13" fontWeight="500" fontFamily="Inter">
            Memory
          </text>

          {/* Orbit nodes */}
          {steps.map((step, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const nx = cx + r * Math.cos(angle);
            const ny = cy + r * Math.sin(angle);
            const isActive = activeNode === i;
            const isRight = nx >= cx;
            const labelOffsetX = isRight ? 26 : -26;
            const textAnchor = isRight ? "start" : "end";

            return (
              <motion.g
                key={step.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Node circle */}
                <motion.circle
                  cx={nx} cy={ny}
                  fill={isActive ? "#155CFF" : "rgba(21,92,255,0.15)"}
                  stroke="#155CFF"
                  strokeWidth="1.5"
                  animate={{
                    r: isActive ? 18 : 14,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <text
                  x={nx} y={ny + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isActive ? "white" : "#3A7BFF"}
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="Inter"
                >
                  {i + 1}
                </text>

                {/* Label */}
                <text
                  x={nx + labelOffsetX}
                  y={ny - (isActive ? 2 : 0)}
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  fill={isActive ? "white" : "rgba(255,255,255,0.7)"}
                  fontSize="12"
                  fontWeight="500"
                  fontFamily="Inter"
                >
                  {step.label}
                </text>

                {/* Hover description */}
                {isActive && (
                  <text
                    x={nx + labelOffsetX}
                    y={ny + 15}
                    textAnchor={textAnchor}
                    fill="rgba(255,255,255,0.45)"
                    fontSize="9"
                    fontFamily="Inter"
                  >
                    {step.desc}
                  </text>
                )}
              </motion.g>
            );
          })}

          <defs>
            <linearGradient id="flywheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#155CFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3A7BFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#65D9FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="sm:hidden space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-start gap-4 relative pb-6 last:pb-0"
          >
            {/* Vertical line */}
            {i < steps.length - 1 && (
              <div className="absolute left-[15px] top-[32px] bottom-0 w-px bg-premium-blue/20" />
            )}
            {/* Node */}
            <div className="w-8 h-8 rounded-full bg-premium-blue/15 border border-premium-blue/40 flex items-center justify-center flex-shrink-0 z-10">
              <span className="text-xs font-semibold text-electric-blue">{i + 1}</span>
            </div>
            {/* Content */}
            <div>
              <h4 className="text-sm font-semibold text-white">{step.label}</h4>
              <p className="text-xs text-white/50 mt-0.5">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
