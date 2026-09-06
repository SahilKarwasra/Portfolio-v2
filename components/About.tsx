import { aboutMeta, aboutStatement, stats } from "@/lib/data";
import CountUp from "./CountUp";
import { colorBg, Container, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="about-title">
      <Container>
        <SectionHeading id="about-title" title="About" color="sun" lede="Android-first engineer with the full stack in reach." />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <p className="text-balance text-2xl font-bold leading-snug md:text-3xl lg:col-span-3 lg:text-[2.1rem]">
            {aboutStatement}
          </p>

          <dl className="nb self-start bg-white lg:col-span-2">
            {aboutMeta.map((m, i) => (
              <div
                key={m.k}
                className={`grid grid-cols-[6.5rem_1fr] gap-4 px-5 py-4 ${i !== 0 ? "border-t-3 border-ink" : ""} ${
                  m.highlight ? "bg-droid" : ""
                }`}
              >
                <dt className="text-sm font-bold text-ink/70">{m.k}</dt>
                <dd className="font-bold leading-snug">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-5 md:mt-20 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <li key={s.label} className={`nb flex flex-col justify-between gap-6 p-5 md:p-6 ${colorBg[s.color]}`}>
              <CountUp
                value={s.value}
                decimals={s.decimals}
                suffix={s.suffix}
                className="font-display text-5xl leading-none md:text-6xl"
              />
              <span className="text-sm font-bold leading-snug md:text-base">{s.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
