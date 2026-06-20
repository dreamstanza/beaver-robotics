"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 400,
  y: Math.random() * 400,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 6,
}));

const semanticLabels = [
  { text: "entrance", x: 45, y: 285, opacity: 0.7 },
  { text: "corridor", x: 220, y: 140, opacity: 0.6 },
  { text: "elevator", x: 135, y: 225, opacity: 0.65 },
  { text: "slope", x: 310, y: 195, opacity: 0.55 },
  { text: "obstacle", x: 80, y: 145, opacity: 0.5 },
];

const routeNodes = [
  { x: 40, y: 300 },
  { x: 90, y: 260 },
  { x: 140, y: 230 },
  { x: 200, y: 190 },
  { x: 260, y: 140 },
  { x: 320, y: 90 },
  { x: 350, y: 60 },
];

export default function WorldModelVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden">
      {/* Particle field */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-electric-blue/40"
          style={{
            left: `${(p.x / 400) * 100}%`,
            top: `${(p.y / 400) * 100}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [0, -30],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main SVG visual */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        {/* Translucent cube - front face */}
        <motion.rect
          x="80" y="80" width="240" height="240" rx="8"
          fill="none"
          stroke="rgba(21,92,255,0.15)"
          strokeWidth="1.5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Cube - right face (perspective) */}
        <motion.polygon
          points="320,80 370,50 370,290 320,320"
          fill="rgba(21,92,255,0.04)"
          stroke="rgba(21,92,255,0.1)"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Cube - top face (perspective) */}
        <motion.polygon
          points="80,80 130,50 370,50 320,80"
          fill="rgba(21,92,255,0.06)"
          stroke="rgba(21,92,255,0.12)"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Route lines through the cube */}
        <motion.path
          d="M 40 310 Q 80 270 140 230 T 260 140 T 360 55"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="path-line"
        />
        <motion.path
          d="M 60 330 Q 120 280 180 250 T 300 160"
          fill="none"
          stroke="rgba(58,123,255,0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="path-line"
          style={{ animationDelay: "2s" }}
        />

        {/* Route nodes */}
        {routeNodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            fill="#155CFF"
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: [3, 5, 3], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Semantic labels */}
        {semanticLabels.map((label) => (
          <motion.text
            key={label.text}
            x={label.x}
            y={label.y}
            fill="rgba(58,123,255,0.7)"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            initial={{ opacity: 0 }}
            animate={{ opacity: label.opacity }}
            transition={{ duration: 2, delay: 1 }}
          >
            {label.text}
          </motion.text>
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#155CFF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3A7BFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#65D9FF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Faint robot form silhouettes */}
      <motion.div
        className="absolute bottom-6 left-6 text-electric-blue/10"
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
          <rect x="5" y="10" width="30" height="12" rx="3" />
          <circle cx="12" cy="25" r="4" />
          <circle cx="28" cy="25" r="4" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-6 right-12 text-electric-blue/10"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
          <rect x="8" y="5" width="19" height="14" rx="3" />
          <rect x="5" y="19" width="25" height="6" rx="2" />
          <line x1="8" y1="25" x2="6" y2="33" stroke="currentColor" strokeWidth="2" />
          <line x1="27" y1="25" x2="29" y2="33" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}
