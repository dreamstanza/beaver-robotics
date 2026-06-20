import { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Applications | Beaver Robotics",
  description:
    "Real-world applications for Beaver Robotics spatial memory and mobility intelligence: logistics, campus mobility, residential communities, and more.",
};

const applications = [
  {
    title: "Last-100-Meter Logistics",
    desc: "From distribution points to buildings, doors, and handoff locations. The final stretch of delivery is where robots must understand complex human spaces — entrances, corridors, elevators, and handoff points.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Campus and Park Mobility",
    desc: "Semi-structured environments with pedestrians, slopes, paths, changing routes, and mixed indoor-outdoor movement. Campuses are ideal early deployment zones.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Residential Communities",
    desc: "Gates, entrances, corridors, elevators, people, pets, parked vehicles, and temporary obstacles. Residential environments are among the most complex spaces robots must navigate.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Building-to-Door Mobility",
    desc: "Connecting outdoor routes with building entrances, elevators, corridors, and final handoff points. The transition between outdoor and indoor environments is one of the hardest problems in robot mobility.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Human-Assistive Mobility",
    desc: "Robots that follow, guide, carry, assist, and operate safely around people. Human-assistive robots need to understand personal space, predict human movement, and adapt to individual preferences.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Future Home Robotics",
    desc: "Persistent spatial memory for rooms, routines, furniture, objects, people, pets, and daily living spaces. The home is the ultimate complex human environment — personal, dynamic, and intimate.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
      </svg>
    ),
  },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero - Dark */}
      <section className="relative bg-deep-space py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(21,92,255,0.06)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label section-label-light">Applications</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Starting where mobility matters most.
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-3xl mx-auto">
            Beaver Robotics focuses on environments where movement is the bottleneck between a robot demo and a useful real-world service.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <Section className="bg-off-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {applications.map((app) => (
            <div
              key={app.title}
              className="bg-white rounded-xl border border-cloud-gray p-8 shadow-sm hover:shadow-md hover:border-premium-blue/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-4">{app.icon}</div>
              <h3 className="text-xl font-semibold text-dark-text mb-3">{app.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Common Thread */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Common Thread</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            The common thread
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Every one of these applications shares the same fundamental challenge: robots must understand, remember, and move through complex human environments that change over time.
            </p>
            <p>
              A campus path that is clear in the morning may be crowded at noon. A residential elevator that is available at 3 AM may be occupied at 8 AM. A building entrance that is open during business hours may be locked at night.
            </p>
            <p>
              Spatial memory captures all of this — not just the static layout, but the dynamic patterns, the history, and the affordances that make real-world mobility possible.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        headline="Build the spatial intelligence layer for real-world robots with us."
        body="We are looking for deployment partners, hardware partners, and research collaborators working in these application areas."
        primaryText="Contact Us"
        primaryHref="mailto:contact@beaver-robotics.com"
        secondaryText="Partner With Beaver Robotics"
        secondaryHref="mailto:contact@beaver-robotics.com"
        dark
      />
    </>
  );
}
