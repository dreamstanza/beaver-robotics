import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  accent?: boolean;
  className?: string;
}

export default function Card({ title, children, icon, accent = false, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-cloud-gray p-6 shadow-sm hover:shadow-md hover:border-premium-blue/30 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    >
      {accent && <div className="w-8 h-1 bg-premium-blue rounded-full mb-4" />}
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold text-dark-text mb-2">{title}</h3>
      <p className="text-sm text-muted-text leading-relaxed">{children}</p>
    </div>
  );
}
