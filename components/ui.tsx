import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./motion";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Pill button. On hover the arrow slides out and a fresh one slides in.
 */
export function Button({ href, children, variant = "solid", external, className = "", ariaLabel }: ButtonProps) {
  const base =
    "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-medium leading-none whitespace-nowrap transition-[background-color,box-shadow,color] duration-300";
  const variants = {
    solid: "bg-ink text-night hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
    ghost: "bg-white/[0.04] text-ink shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] hover:bg-white/[0.08]",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="relative h-3.5 w-3.5 overflow-hidden" aria-hidden="true">
        <ArrowUpRight className="absolute inset-0 h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:-translate-y-full group-hover:translate-x-full" />
        <ArrowUpRight className="absolute inset-0 h-3.5 w-3.5 -translate-x-full translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}

/**
 * Two-tone section heading (Linear style): the title in full ink, the lede
 * continuing the same sentence in muted grey.
 */
export function SectionHeading({ title, lede, id }: { title: string; lede?: string; id?: string }) {
  return (
    <Reveal blur className="mb-14 md:mb-20">
      <h2
        id={id}
        className="max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em]"
      >
        {title}
        {lede ? <span className="text-mute"> {lede}</span> : null}
      </h2>
    </Reveal>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/* ---------------------------------------------------------------- icons */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GitHubIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={3}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowDown({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={3}>
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}

export function ArrowUp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={3}>
      <path d="M12 20V4M5 11l7-7 7 7" />
    </svg>
  );
}

export function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 1.5 14.9 9l7.6.4-6 4.8 2 7.3L12 17.2l-6.5 4.3 2-7.3-6-4.8L9.1 9 12 1.5Z" />
    </svg>
  );
}

export function CapabilityIcon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <rect x="6" y="2.5" width="12" height="19" rx="2" />
          <path d="M10 18.5h4" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12.5 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "people":
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M21.5 19a5 5 0 0 0-6-4.4" />
        </svg>
      );
  }
}
