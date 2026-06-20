"use client";

import { motion } from "framer-motion";

const layers = [
  {
    title: "Cloud Reasoning",
    desc: "Language task understanding, long-horizon planning, world model updates, simulation asset generation, and cross-scene reasoning.",
    icon: (
      <svg className="w-8 h-8 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Persistent Spatial Memory",
    desc: "4D scene memory, temporal history, affordance memory, action outcomes, semantic landmarks, and environment versioning.",
    icon: (
      <svg className="w-8 h-8 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Edge Mobility Runtime",
    desc: "Low-latency inference, safety runtime, local perception, closed-loop feedback, deployment logs, and multi-body execution.",
    icon: (
      <svg className="w-8 h-8 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="relative bg-white rounded-xl border border-cloud-gray p-7 shadow-sm hover:shadow-md hover:border-premium-blue/20 transition-all"
        >
          {i < layers.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-premium-blue/25" />
          )}
          <div className="mb-4">{layer.icon}</div>
          <h3 className="text-lg font-semibold text-dark-text mb-2">{layer.title}</h3>
          <p className="text-sm text-muted-text leading-relaxed">{layer.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
