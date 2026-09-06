import { marqueeItems } from "@/lib/data";
import { Star } from "./ui";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="pause-on-hover overflow-hidden border-b-3 border-ink bg-ink py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 font-display text-xl uppercase leading-none text-sun md:text-2xl">
            {item}
            <Star className="h-5 w-5 text-droid" />
          </span>
        ))}
      </div>
    </div>
  );
}
