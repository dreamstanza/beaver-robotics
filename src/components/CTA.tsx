import Link from "next/link";

interface CTAProps {
  headline: string;
  body?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTA({
  headline,
  body,
  primaryText = "Contact Us",
  primaryHref = "mailto:contact@beaver-robotics.com",
  secondaryText,
  secondaryHref = "mailto:contact@beaver-robotics.com",
  dark = false,
}: CTAProps) {
  return (
    <div className={`py-24 md:py-28 ${dark ? "bg-deep-navy text-white" : "bg-ice-blue/40"}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-[2rem] font-bold mb-4 ${dark ? "text-white" : "text-dark-text"}`}>
          {headline}
        </h2>
        {body && (
          <p className={`text-lg mb-8 leading-relaxed ${dark ? "text-white/55" : "text-muted-text"}`}>{body}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-premium-blue rounded-lg hover:bg-electric-blue transition-colors"
          >
            {primaryText}
          </Link>
          {secondaryText && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-lg transition-all ${
                dark
                  ? "text-white border border-white/20 hover:bg-white/5 hover:border-white/30"
                  : "text-premium-blue border border-premium-blue/25 hover:bg-premium-blue/5"
              }`}
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
