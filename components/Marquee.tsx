"use client";

export default function Marquee({
  items,
  variant = "ink",
  speed = 26,
  className = "",
}: {
  items: string[];
  variant?: "ink" | "cobalt" | "outline";
  speed?: number;
  className?: string;
}) {
  const palette =
    variant === "cobalt"
      ? "border-y-2 border-ink bg-cobalt text-paper"
      : variant === "outline"
        ? "text-stroke-paper"
        : "border-y-2 border-ink bg-ink text-paper";

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <div
      aria-hidden={hidden}
      className="flex w-max shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 md:gap-10">
          <span className="whitespace-nowrap font-display text-3xl uppercase leading-none md:text-5xl">
            {item}
          </span>
          <span
            className={`font-display text-2xl leading-none md:text-4xl ${
              variant === "cobalt" ? "text-ink" : "text-cobalt"
            }`}
          >
            ✱
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden py-3 md:py-4 ${palette} ${className}`}>
      <div
        className="animate-marquee flex w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
