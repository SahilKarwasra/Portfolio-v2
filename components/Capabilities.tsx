import { capabilities } from "@/lib/data";
import { CapabilityIcon, colorBg, Container, SectionHeading } from "./ui";

export default function Capabilities() {
  return (
    <section className="border-y-3 border-ink bg-white py-20 md:py-28" aria-labelledby="capabilities-title">
      <Container>
        <SectionHeading id="capabilities-title" title="What I do" color="sky" lede="Four things I get hired for, and enjoy doing." />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {capabilities.map((c) => (
            <li key={c.title} className="nb flex gap-5 bg-paper p-6 md:p-8">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center border-3 border-ink ${colorBg[c.color]}`}
                aria-hidden="true"
              >
                <CapabilityIcon name={c.icon} />
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed md:text-lg">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
