"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WorldModelVisual from "@/components/WorldModelVisual";
import Flywheel from "@/components/Flywheel";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO — Dark Premium ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-deep-space overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(21,92,255,0.08)_0%,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[1.1] tracking-tight">
                Spatial Intelligence for Robots in the Real World
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
                Beaver Robotics builds persistent 4D world models that help robots understand, remember, and move through complex human environments.
              </p>
              <p className="mt-3 text-base text-white/45">
                Starting with the Mobility Brain for robots of different forms.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/mobility-brain"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-premium-blue rounded-lg hover:bg-electric-blue transition-colors"
                >
                  Explore the Mobility Brain
                </Link>
                <a
                  href="mailto:contact@beaver-robotics.com"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all"
                >
                  Partner With Us
                </a>
              </div>
              <p className="mt-8 text-xs text-white/30 italic">
                From static maps to persistent world memory.
              </p>
            </motion.div>

            {/* Right: Visual */}
            <div className="hidden lg:block h-[450px] relative">
              <WorldModelVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. PROBLEM — Light ===== */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label">The Problem</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-dark-text leading-tight">
              The real world is not a static map.
            </h2>
            <p className="mt-6 text-muted-text leading-relaxed text-lg">
              People move. Doors open and close. Obstacles appear. Routes fail. Elevators change state. Different robot bodies have different mobility limits.
            </p>
            <p className="mt-4 text-muted-text leading-relaxed">
              Robots need more than navigation. They need memory of the physical world.
            </p>
            <blockquote className="mt-10 pl-5 border-l-[3px] border-premium-blue">
              <p className="text-lg font-medium text-dark-text italic leading-snug">
                A robot should not understand the world from scratch every time it moves.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. THESIS STRIP — Compact ===== */}
      <section className="py-20 md:py-24 bg-white border-y border-cloud-gray/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label text-center">Thesis</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              {[
                { title: "Words", desc: "Language reasoning" },
                { title: "Pixels", desc: "Visual recognition" },
                { title: "Frames", desc: "Video prediction" },
                { title: "World State", desc: "Spatial memory for robot action", highlight: true },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`rounded-xl p-5 md:p-6 text-center border ${
                    item.highlight
                      ? "bg-premium-blue text-white border-premium-blue shadow-lg shadow-premium-blue/20"
                      : "bg-off-white border-cloud-gray"
                  }`}
                >
                  <h3 className={`text-lg font-bold mb-1.5 ${item.highlight ? "text-white" : "text-dark-text"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${item.highlight ? "text-white/75" : "text-muted-text"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. SPATIAL MEMORY — Light ===== */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label">Spatial Memory</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-dark-text leading-tight max-w-2xl">
              Robots should remember the spaces they move through.
            </h2>
            <p className="mt-5 text-muted-text leading-relaxed max-w-2xl">
              Spatial memory turns routes, obstacles, failures, successful passages, human interactions, and environmental changes into reusable world knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { title: "Spatial Memory", desc: "Structures, landmarks, object locations, and scene versions." },
              { title: "Temporal Memory", desc: "Human flow, door states, dynamic obstacles, and historical changes." },
              { title: "Affordance Memory", desc: "Where robots can move, pass, dock, avoid, or interact." },
              { title: "Action Memory", desc: "What worked, what failed, and how actions changed the world." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-cloud-gray hover:border-premium-blue/25 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-8 h-[3px] bg-premium-blue rounded-full mb-4" />
                <h3 className="text-base font-semibold text-dark-text mb-2">{card.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. MOBILITY BRAIN — Light ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label">Mobility Brain</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-dark-text leading-tight max-w-2xl">
              From 4D world model to Mobility Brain.
            </h2>
            <p className="mt-5 text-muted-text leading-relaxed max-w-2xl">
              Beaver Robotics turns spatial memory into a mobility intelligence layer that helps robots understand where they are, remember what happened before, and choose safe ways to move.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Understand",
                desc: "Recognize traversable space, obstacles, entrances, slopes, stairs, corridors, people, and dynamic objects.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                title: "Remember",
                desc: "Use route history, failures, temporal patterns, and affordance memory.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Move",
                desc: "Generate safe and executable mobility strategies for different robot bodies.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-ice-blue/40 rounded-xl p-7 border border-ice-blue"
              >
                <div className="text-premium-blue mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-dark-text mb-3">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="mt-12 text-center text-muted-text italic"
          >
            Mobility is the bridge between intelligence and physical action.
          </motion.p>
        </div>
      </section>

      {/* ===== 6. ROBOT FORMS — Light ===== */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label">Robot Forms</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-dark-text leading-tight max-w-2xl">
              One world model. Many robot bodies.
            </h2>
            <p className="mt-5 text-muted-text leading-relaxed max-w-2xl">
              Beaver Robotics is not defined by one robot form. Different environments require different embodiments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              {
                title: "Wheeled Robots",
                desc: "Efficient mobility for structured and semi-structured environments.",
                silhouette: (
                  <svg viewBox="0 0 80 60" className="w-16 h-12 text-premium-blue/20">
                    <rect x="15" y="18" width="50" height="20" rx="5" fill="currentColor" />
                    <circle cx="27" cy="44" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="53" cy="44" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Wheeled-Legged Robots",
                desc: "High-mobility movement across stairs, curbs, slopes, uneven ground, and mixed indoor-outdoor routes.",
                silhouette: (
                  <svg viewBox="0 0 80 60" className="w-16 h-12 text-premium-blue/20">
                    <rect x="20" y="12" width="40" height="18" rx="4" fill="currentColor" />
                    <line x1="25" y1="30" x2="18" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="55" y1="30" x2="62" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="35" y1="30" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="45" y1="30" x2="48" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="18" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="62" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: "Two-Wheel Agents",
                desc: "Compact, expressive, and agile movement through human spaces.",
                silhouette: (
                  <svg viewBox="0 0 80 60" className="w-16 h-12 text-premium-blue/20">
                    <ellipse cx="40" cy="22" rx="14" ry="16" fill="currentColor" />
                    <line x1="40" y1="38" x2="40" y2="48" stroke="currentColor" strokeWidth="2" />
                    <circle cx="40" cy="52" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Mobile Manipulators",
                desc: "Connecting mobility with docking, reaching, delivery, handoff, opening, and physical interaction.",
                silhouette: (
                  <svg viewBox="0 0 80 60" className="w-16 h-12 text-premium-blue/20">
                    <rect x="22" y="20" width="30" height="18" rx="4" fill="currentColor" />
                    <line x1="52" y1="25" x2="68" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="70" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="30" cy="44" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="45" cy="44" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Future Home Robots",
                desc: "Understanding rooms, routines, objects, people, pets, and everyday living spaces.",
                silhouette: (
                  <svg viewBox="0 0 80 60" className="w-16 h-12 text-premium-blue/20">
                    <path d="M20 45 L40 15 L60 45 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="40" cy="35" r="6" fill="currentColor" opacity="0.3" />
                    <rect x="34" y="45" width="12" height="8" rx="2" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((form, i) => (
              <motion.div
                key={form.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-xl p-6 border border-cloud-gray hover:border-premium-blue/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Spatial grid background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(21,92,255,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(21,92,255,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <div className="mb-4">{form.silhouette}</div>
                  <h3 className="text-base font-semibold text-dark-text mb-2">{form.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{form.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="mt-12 text-center text-base font-medium text-dark-text"
          >
            The body changes. <span className="text-premium-blue">The memory stays.</span>
          </motion.p>
        </div>
      </section>

      {/* ===== 7. DATA FLYWHEEL — Dark ===== */}
      <section className="py-24 md:py-32 bg-deep-space text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(21,92,255,0.06)_0%,transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label section-label-light text-center">Data Flywheel</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight text-center">
              Every deployment makes the memory stronger.
            </h2>
            <p className="mt-5 text-white/50 leading-relaxed text-center max-w-2xl mx-auto">
              Each real-world task creates spatial and action data: routes, failures, obstacles, timing, human interactions, environmental changes, and task outcomes.
            </p>
          </motion.div>

          <div className="mt-14">
            <Flywheel />
          </div>

          <motion.p
            {...fadeUp}
            className="mt-14 text-center text-white/40 italic"
          >
            Spatial intelligence turns deployment into intelligence.
          </motion.p>
        </div>
      </section>

      {/* ===== 8. APPLICATIONS PREVIEW — Light ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="section-label">Applications</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-dark-text leading-tight max-w-2xl">
              Starting where mobility matters most.
            </h2>
            <p className="mt-5 text-muted-text leading-relaxed max-w-2xl">
              We focus on real-world environments where movement is the bottleneck between a robot demo and a useful service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { title: "Last-100-Meter Logistics", desc: "From distribution points to buildings, doors, and handoff locations." },
              { title: "Campus and Park Mobility", desc: "Semi-structured environments with pedestrians, slopes, paths, changing routes, and mixed indoor-outdoor movement." },
              { title: "Residential Communities", desc: "Gates, entrances, corridors, elevators, people, pets, parked vehicles, and temporary obstacles." },
              { title: "Building-to-Door Mobility", desc: "Connecting outdoor routes with building entrances, elevators, corridors, and final handoff points." },
              { title: "Human-Assistive Mobility", desc: "Robots that follow, guide, carry, assist, and operate safely around people." },
              { title: "Future Home Robotics", desc: "Persistent spatial memory for rooms, routines, furniture, objects, people, pets, and daily living spaces." },
            ].map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-off-white rounded-xl p-6 border border-cloud-gray/60 hover:border-premium-blue/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-[3px] bg-premium-blue rounded-full mb-4" />
                <h3 className="text-base font-semibold text-dark-text mb-2">{app.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. FINAL CTA — Dark ===== */}
      <section className="py-24 md:py-32 bg-deep-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(21,92,255,0.08)_0%,transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight">
              Build the spatial intelligence layer for real-world robots with us.
            </h2>
            <p className="mt-6 text-white/55 leading-relaxed text-lg">
              We are looking for deployment partners, hardware partners, research collaborators, investors, and builders who believe robots need spatial intelligence to enter the real world.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@beaver-robotics.com"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-premium-blue rounded-lg hover:bg-electric-blue transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:contact@beaver-robotics.com"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Partner With Beaver Robotics
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
