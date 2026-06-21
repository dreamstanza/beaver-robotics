import { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Company | Beaver Robotics",
  description:
    "Beaver Robotics is a spatial intelligence company building persistent 4D world models and mobility intelligence for robots in the real world.",
};

export default function CompanyPage() {
  return (
    <>
      {/* Hero - Dark */}
      <section className="relative bg-deep-space py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(21,92,255,0.06)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label section-label-light">Company</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            About Beaver Robotics
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-3xl mx-auto">
            Beaver Robotics is a spatial intelligence company building persistent 4D world models and mobility intelligence for robots in the real world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Mission</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Our mission
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              We believe useful robots will not begin in perfect environments. They will begin in the messy spaces where people already live, work, move, wait, and need help.
            </p>
            <p>
              To operate in these spaces, robots need more than sensors and algorithms. They need memory — persistent, evolving, accumulated understanding of the world they operate in.
            </p>
            <p className="font-medium text-dark-text">
              Beaver Robotics is building that foundation: spatial intelligence and 4D world models that help robots remember, understand, and move through the real world.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Build */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Technology</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            What we build
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Our core technology is a persistent spatial memory system that captures not just the geometry of an environment, but its history, its patterns, its affordances, and the outcomes of robot actions within it.
            </p>
            <p>
              This memory system powers our first product: a Mobility Brain that helps robots of different forms understand where they are, remember what happened before, and choose safe, reliable ways to move through complex human environments.
            </p>
            <p>
              Our long-term vision is a persistent world model for embodied intelligence — a shared spatial memory that any robot form can query, update, and learn from.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Beaver Robotics — moved from homepage */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Why Beaver Robotics</p>
          <h2 className="text-3xl font-bold text-dark-text mb-10">
            Built for robots entering the real world.
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Spatial Intelligence First",
                desc: "We believe long-term world memory is a foundation for physical AI. Just as language models are a foundation for reasoning, spatial intelligence is a foundation for acting in the physical world.",
              },
              {
                title: "Mobility as the First Product",
                desc: "We start with movement because every physical task depends on reaching the right place safely. Movement is the bridge between intelligence and action.",
              },
              {
                title: "Multi-Form Intelligence",
                desc: "We are not limited to one robot body. We build intelligence that can support different embodiments. Different environments require different robot bodies, but all can share the same spatial memory.",
              },
              {
                title: "Real-World Learning",
                desc: "Every deployment improves the system's understanding of space, failure, affordance, and action. Every route, failure, obstacle, and successful passage adds to the world model.",
              },
              {
                title: "Long-Term Platform",
                desc: "Our first product is a mobility brain. Our long-term vision is a persistent world model for embodied intelligence. Lab demos prove a concept. Real deployments prove a product.",
              },
            ].map((belief) => (
              <div
                key={belief.title}
                className="pl-5 border-l-[3px] border-premium-blue"
              >
                <h3 className="text-lg font-semibold text-dark-text mb-1.5">
                  {belief.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Approach</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Our approach
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              We start with spatial memory because we believe it is the most fundamental and most neglected layer of robot intelligence.
            </p>
            <p>
              We start with mobility because every physical task depends on reaching the right place safely. Before a robot can deliver, assist, inspect, or interact, it must be able to move reliably through complex environments.
            </p>
            <p>
              We build for multiple robot forms because we believe the future of robotics will not have a single body. Different environments require different embodiments, but all can share the same world memory.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        headline="Build the spatial intelligence layer for real-world robots with us."
        body="We are looking for deployment partners, hardware partners, research collaborators, investors, and builders who believe robots need spatial intelligence to enter the real world."
        primaryText="Contact Us"
        primaryHref="mailto:contact@beaver-robotics.com"
        secondaryText="Partner With Beaver Robotics"
        secondaryHref="mailto:contact@beaver-robotics.com"
        dark
      />
    </>
  );
}
