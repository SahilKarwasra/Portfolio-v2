import { education } from "@/lib/data";
import { colorBg, Container, SectionHeading } from "./ui";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-y-3 border-ink bg-white py-20 md:py-28" aria-labelledby="education-title">
      <Container>
        <SectionHeading id="education-title" title="Education" color="droid" lede="Postgraduate study on top of an industry foundation." />

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {education.map((s) => (
            <li key={s.institution} className={`nb flex flex-col p-6 md:p-8 ${colorBg[s.color]}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="nb-sm inline-block bg-white px-3 py-2 font-display text-sm leading-none">{s.period}</span>
                <span
                  className={`inline-block border-3 border-ink px-3 py-2 text-sm font-bold leading-none ${
                    s.status === "In progress" ? "bg-ink text-white" : "bg-white"
                  }`}
                >
                  {s.status}
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl leading-none md:text-4xl">{s.institution}</h3>
              <p className="mt-3 text-xl font-bold">{s.degree}</p>
              <p className="mb-6 mt-1 font-medium">{s.location}</p>
              <p className="mt-auto border-t-3 border-ink pt-5 font-medium leading-relaxed">{s.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
