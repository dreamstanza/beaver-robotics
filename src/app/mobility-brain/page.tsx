import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Mobility Brain | Beaver Robotics",
  description:
    "The Beaver Robotics Mobility Brain: a real-world mobility layer powered by persistent spatial memory and 4D world models.",
};

export default function MobilityBrainPage() {
  return (
    <>
      {/* Hero - Dark */}
      <section className="relative bg-deep-space py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(21,92,255,0.08)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label section-label-light">Product</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Mobility Brain
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                Our first product is a mobility brain powered by persistent spatial memory and 4D world models.
              </p>
              <p className="mt-4 text-white/50 leading-relaxed">
                It helps robots understand where they are, remember what happened before, and choose safe, reliable ways to move through complex human environments.
              </p>
              <p className="mt-4 text-white/50 leading-relaxed font-medium">
                This is more than navigation. It is a real-world mobility layer for robots that need to operate outside controlled spaces.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/robot-product.png"
                  alt="Beaver Robotics Mobility Brain"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Questions */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-label text-center">Core Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Three core questions
          </h2>
          <p className="text-muted-text">
            The Mobility Brain answers three fundamental questions every real-world robot must address.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Understand",
              desc: "What kind of space am I in? Where are the traversable areas, obstacles, entrances, stairs, slopes, curbs, corridors, people, and dynamic objects?",
              icon: (
                <svg className="w-8 h-8 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
            },
            {
              title: "Remember",
              desc: "What has happened here before? Which routes worked, which failed, what changed, and what should be avoided?",
              icon: (
                <svg className="w-8 h-8 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Move",
              desc: "What is the safest and most reliable way to complete the task with this robot body?",
              icon: (
                <svg className="w-8 h-8 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="bg-ice-blue/40 rounded-xl p-8 border border-ice-blue text-center">
              <div className="w-16 h-16 bg-premium-blue/8 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-3">{item.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Beyond Navigation */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Beyond Navigation</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Mobility is more than navigation
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Traditional robot navigation treats the world as a fixed obstacle course. The robot plans a path from A to B and hopes nothing changes.
            </p>
            <p>
              The Mobility Brain takes a fundamentally different approach. It treats the world as a dynamic, evolving environment that the robot can learn from and adapt to.
            </p>
            <p className="font-medium text-dark-text">
              This is the difference between a robot that can follow a line and a robot that can enter the real world.
            </p>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-label text-center">Architecture</p>
          <h2 className="text-3xl font-bold text-dark-text mb-4">
            Cloud reasoning. Persistent memory. Edge action.
          </h2>
          <p className="text-muted-text">
            Beaver Robotics is building a three-layer architecture for real-world robot mobility.
          </p>
        </div>
        <ArchitectureDiagram />
        <p className="mt-10 text-center text-muted-text max-w-3xl mx-auto italic">
          The world model learns in the cloud. The robot acts safely at the edge.
        </p>
      </Section>

      {/* Designed for Real Environments */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Real Environments</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Designed for real environments
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Each real-world task creates spatial and action data: routes, failures, obstacles, timing, human interactions, environmental changes, and task outcomes.
            </p>
            <p>
              This data flows back into the 4D world model, making it richer, more accurate, and more useful for future deployments.
            </p>
            <p className="font-medium text-dark-text">
              The Mobility Brain gets better with every robot that uses it — creating a compounding intelligence advantage that grows over time.
            </p>
          </div>
        </div>
      </Section>

      {/* For Different Robot Bodies */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Multi-Form</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            For different robot bodies
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Different robot forms have different physical capabilities. The Mobility Brain adapts its strategies to each form — wheeled, wheeled-legged, two-wheel, mobile manipulators, and future embodiments.
            </p>
            <p className="font-medium text-dark-text">
              One world model. Many robot bodies. The memory stays.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        headline="Build the spatial intelligence layer for real-world robots with us."
        body="We are looking for deployment partners, hardware partners, research collaborators, and investors who believe robots need spatial intelligence to enter the real world."
        primaryText="Contact Us"
        primaryHref="mailto:contact@beaver-robotics.com"
        secondaryText="Partner With Beaver Robotics"
        secondaryHref="mailto:contact@beaver-robotics.com"
        dark
      />
    </>
  );
}
