import { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Spatial Memory | Beaver Robotics",
  description:
    "How Beaver Robotics builds persistent spatial memory that helps robots learn from every interaction with the real world.",
};

export default function SpatialMemoryPage() {
  return (
    <>
      {/* Hero — Dark */}
      <section className="bg-deep-space py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(21,92,255,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-premium-blue mb-6">Spatial Memory</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Persistent Spatial Memory
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            A map tells a robot where things are. Spatial memory tells a robot what it has learned from moving through the world.
          </p>
        </div>
      </section>

      {/* Why Spatial Memory */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-premium-blue mb-4">The Problem with Maps</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            Why robots need spatial memory
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              Traditional maps are static snapshots. They show geometry at a moment in time, but they do not capture what a robot learns by moving through an environment repeatedly.
            </p>
            <p>
              In the real world, environments change. Doors open and close. Obstacles appear and disappear. Elevators have schedules. Human traffic follows patterns. Ground conditions vary with weather and time.
            </p>
            <p>
              Spatial memory captures all of this: not just the structure of a space, but the history of what has happened there, what works, what fails, and what changes over time.
            </p>
          </div>
        </div>
      </Section>

      {/* Four Memory Types */}
      <Section className="bg-ice-blue/40">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-label text-premium-blue mb-4">Memory Architecture</p>
          <h2 className="text-3xl font-bold text-dark-text mb-4">
            Four layers of spatial memory
          </h2>
          <p className="text-muted-text">
            Beaver Robotics builds memory across four interconnected layers that together form a persistent world state.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card title="Spatial Memory" accent>
            Spaces, structures, object locations, semantic landmarks, route history, and scene versions. This layer captures the physical and semantic structure of the environment as the robot observes it over time.
          </Card>
          <Card title="Temporal Memory" accent>
            Human flow, door states, elevator patterns, dynamic obstacles, and historical changes. This layer captures how the environment changes over time — hourly, daily, weekly, and seasonally.
          </Card>
          <Card title="Affordance Memory" accent>
            Where a robot can move, avoid, pass, climb, dock, hand off, interact, or collaborate. This layer encodes what actions are possible in each part of the environment, specific to each robot form.
          </Card>
          <Card title="Action Memory" accent>
            What happened after an action, which strategy worked, where failure occurred, and how the world changed. This layer connects robot actions to outcomes, enabling learning from real-world experience.
          </Card>
        </div>
      </Section>

      {/* From Maps to Memory */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-premium-blue mb-4">World Model</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8">
            From static maps to persistent world memory
          </h2>
          <div className="space-y-4 text-muted-text leading-relaxed">
            <p>
              A 2D map captures geometry. A 3D map captures structure. But neither captures time, experience, or possibility.
            </p>
            <p>
              A 4D world model adds the dimension of time and experience. It records not just what a space looks like, but how it behaves, what has happened there, and what a robot can expect when it returns.
            </p>
            <p>
              Every route a robot takes, every obstacle it encounters, every failure it experiences, and every successful passage it completes adds to this growing memory.
            </p>
            <p className="font-medium text-dark-text">
              The result is a world model that gets richer and more accurate with every deployment — creating a compounding intelligence advantage.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Insight */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-dark-text leading-snug">
            True intelligence is not reinterpreting every frame from zero. It is building reusable memory through long-term interaction with the world.
          </blockquote>
        </div>
      </Section>

      <CTA
        headline="Explore how spatial memory powers the Mobility Brain."
        primaryText="See the Mobility Brain"
        primaryHref="/mobility-brain"
        secondaryText="Partner With Us"
        secondaryHref="mailto:contact@beaver-robotics.com"
      />
    </>
  );
}
