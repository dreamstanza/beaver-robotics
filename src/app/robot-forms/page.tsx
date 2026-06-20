import { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Robot Forms | Beaver Robotics",
  description:
    "Beaver Robotics builds intelligence for many robot forms: wheeled robots, wheeled-legged robots, two-wheel agents, mobile manipulators, and future home robots.",
};

const robotForms = [
  {
    title: "Wheeled Robots",
    desc: "Efficient mobility for structured and semi-structured environments. Ideal for campuses, warehouses, and planned routes where speed and reliability matter most.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Wheeled-Legged Robots",
    desc: "High-mobility movement across stairs, curbs, slopes, uneven ground, and mixed indoor-outdoor routes. The most versatile form for complex human environments.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4-4 4 4 4-8 4 4" />
        <circle cx="6" cy="18" r="2" strokeWidth={1.5} />
        <circle cx="18" cy="18" r="2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Two-Wheel Agents",
    desc: "Compact, expressive, and agile movement through human spaces. Suited for indoor environments where size and agility are more important than payload.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="8" r="4" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeWidth={1.5} d="M12 12v6" />
        <circle cx="12" cy="20" r="2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Mobile Manipulators",
    desc: "Connecting mobility with docking, reaching, delivery, handoff, opening, and physical interaction. The bridge between movement and manipulation.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l-4-4 4-4M16 8l4 4-4 4" />
        <rect x="9" y="9" width="6" height="6" rx="1" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Future Home Robots",
    desc: "Understanding rooms, routines, objects, people, pets, and everyday living spaces. The long-term vision for spatial memory in domestic environments.",
    icon: (
      <svg className="w-10 h-10 text-premium-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
      </svg>
    ),
  },
];

export default function RobotFormsPage() {
  return (
    <>
      {/* Hero — Dark */}
      <section className="bg-deep-space py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(21,92,255,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-premium-blue mb-6">Robot Forms</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One world model. Many robot bodies.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            Beaver Robotics is not defined by one robot form. The future of robotics will not have a single body. Different environments require different embodiments.
          </p>
          <p className="mt-4 text-white/50 font-medium">
            The body may change. The spatial memory stays.
          </p>
        </div>
      </section>

      {/* Robot Forms Grid */}
      <Section className="bg-off-white">
        <p className="section-label text-premium-blue mb-8 text-center">Forms We Support</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {robotForms.map((form) => (
            <div
              key={form.title}
              className="bg-white rounded-xl border border-cloud-gray p-8 shadow-sm hover:shadow-md hover:border-premium-blue/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-4">{form.icon}</div>
              <h3 className="text-xl font-semibold text-dark-text mb-3">{form.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{form.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Shared Intelligence */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-premium-blue mb-4">Shared Memory</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Shared intelligence, different bodies
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Different robot forms have different physical capabilities. A wheeled robot cannot climb stairs. A wheeled-legged robot can. A mobile manipulator can reach and grasp. A two-wheel agent can slip through narrow corridors.
            </p>
            <p>
              But all of them can benefit from the same spatial memory. The world model captures the environment — its structure, its changes, its affordances, its history. Each robot form then uses this shared memory through its own action head, adapted to its specific physical capabilities.
            </p>
            <p className="font-medium text-dark-text">
              Different bodies require different action heads. They can still share the same world memory.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Multi-Form */}
      <Section className="bg-ice-blue/30">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-premium-blue mb-4">Multi-Form Vision</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Why multi-form intelligence matters
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              The real world is not designed for one type of robot. Buildings have stairs and corridors. Campuses have paths and slopes. Homes have furniture and pets. Warehouses have pallets and forklifts.
            </p>
            <p>
              No single robot form can handle all of these environments optimally. The future of robotics will be multi-form: different bodies for different contexts, all sharing intelligence about the world they operate in.
            </p>
            <p>
              Beaver Robotics is building the spatial intelligence layer that makes this possible — a persistent world model that any robot form can query, update, and learn from.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        headline="Build the spatial intelligence layer for real-world robots with us."
        primaryText="Contact Us"
        primaryHref="mailto:contact@beaver-robotics.com"
        secondaryText="Partner With Beaver Robotics"
        secondaryHref="mailto:contact@beaver-robotics.com"
        dark
      />
    </>
  );
}
