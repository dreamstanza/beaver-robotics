import { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact | Beaver Robotics",
  description:
    "Get in touch with Beaver Robotics for partnerships, deployment opportunities, research collaborations, investor conversations, or talent inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — Dark */}
      <section className="bg-deep-space py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(21,92,255,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-premium-blue mb-6">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Beaver Robotics
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            We are looking for deployment partners, hardware partners, research collaborators, investors, and builders who believe robots need spatial memory to enter the real world.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <Section className="bg-off-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-ice-blue/40 rounded-2xl p-8 md:p-12 border border-ice-blue text-center">
            <h2 className="text-2xl font-bold text-dark-text mb-4">
              Get in touch
            </h2>
            <p className="text-muted-text mb-8 leading-relaxed">
              For partnerships, deployment opportunities, research collaborations, investor conversations, or talent inquiries:
            </p>
            <a
              href="mailto:contact@beaver-robotics.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-premium-blue rounded-xl hover:bg-electric-blue transition-colors shadow-lg shadow-premium-blue/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@beaver-robotics.com
            </a>
          </div>
        </div>
      </Section>

      {/* What We're Looking For */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-premium-blue mb-4 text-center">Partnership Areas</p>
          <h2 className="text-3xl font-bold text-dark-text mb-8 text-center">
            We want to hear from you if...
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "You are a deployment partner",
                desc: "You operate in environments where robot mobility is a bottleneck — logistics, campus services, residential communities, or building-to-door delivery.",
              },
              {
                title: "You are a hardware partner",
                desc: "You build robot bodies — wheeled, wheeled-legged, two-wheel, mobile manipulators, or other forms — and want to integrate spatial intelligence into your platform.",
              },
              {
                title: "You are a research collaborator",
                desc: "You work on spatial memory, world models, robot mobility, embodied AI, or related fields and want to collaborate on real-world applications.",
              },
              {
                title: "You are an investor",
                desc: "You believe spatial intelligence is a critical foundation for the next generation of real-world robots and want to learn more about our approach.",
              },
              {
                title: "You want to join the team",
                desc: "You are a builder who believes robots need persistent memory to enter the real world, and you want to help build that foundation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-off-white rounded-xl p-6 border border-cloud-gray hover:border-premium-blue/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-dark-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-deep-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build the spatial intelligence layer for real-world robots with us.
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Every conversation starts with a simple question: what would it mean for robots to truly remember the world?
          </p>
          <a
            href="mailto:contact@beaver-robotics.com"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-premium-blue rounded-xl hover:bg-electric-blue transition-colors"
          >
            Start a conversation
          </a>
        </div>
      </Section>
    </>
  );
}
