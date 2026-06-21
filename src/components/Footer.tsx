import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/spatial-memory", label: "Spatial Memory" },
  { href: "/mobility-brain", label: "Mobility Brain" },
  { href: "/robot-forms", label: "Robot Forms" },
  { href: "/applications", label: "Applications" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-space text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Positioning */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt="Beaver Robotics"
                width={90}
                height={50}
                className="h-9 w-auto brightness-0 invert opacity-90"
              />
              <span className="text-[14px] font-bold tracking-wide text-white/90">
                BEAVER ROBOTICS
              </span>
            </div>
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
              Spatial intelligence and mobility intelligence for robots in the real world.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-5">Navigation</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/55 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-5">Contact</h4>
            <a
              href="mailto:contact@beaver-robotics.com"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              contact@beaver-robotics.com
            </a>
            <div className="mt-6">
              <a
                href="mailto:contact@beaver-robotics.com"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/8">
          <p className="text-xs text-white/35 text-center">
            © 2026 Beaver Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
