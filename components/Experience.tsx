import { experience, now } from "@/lib/data";
import { Chip, Container, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="experience-title">
      <Container>
        <SectionHeading
          id="experience-title"
          title="Experience"
          color="violet"
          lede="Three years shipping production apps across fintech, gaming and client work."
        />

        <ol className="relative border-l-3 border-ink pl-8 sm:pl-12">
          {/* Now marker: the timeline continues past the last job. */}
          <li className="relative mb-8">
            <span
              className="absolute -left-[calc(2rem+10px)] top-6 h-5 w-5 border-3 border-ink bg-droid sm:-left-[calc(3rem+10px)]"
              aria-hidden="true"
            />
            <div className="nb bg-droid p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="nb-sm inline-block bg-ink px-3 py-1.5 font-display text-sm leading-none text-white">{now.label}</span>
                <span className="font-bold">{now.period}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl leading-tight md:text-3xl">{now.title}</h3>
              <p className="mt-3 max-w-2xl font-medium leading-relaxed md:text-lg">{now.desc}</p>
            </div>
          </li>

          {experience.map((job) => (
            <li key={job.company} className="relative mb-8 last:mb-0">
              <span
                className="absolute -left-[calc(2rem+10px)] top-6 h-5 w-5 border-3 border-ink bg-white sm:-left-[calc(3rem+10px)]"
                aria-hidden="true"
              />
              <article className="nb bg-white">
                <header className="flex flex-col gap-4 border-b-3 border-ink p-6 md:flex-row md:items-start md:justify-between md:p-8">
                  <div>
                    <h3 className="font-display text-3xl leading-none md:text-4xl">{job.company}</h3>
                    <p className="mt-2 text-lg font-bold">{job.role}</p>
                    <p className="mt-1 font-medium text-ink/70">{job.summary}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 md:flex-col md:items-end">
                    <span className="nb-sm inline-block bg-sun px-3 py-2 font-display text-sm leading-none">{job.period}</span>
                    <span className="inline-block border-3 border-ink bg-white px-3 py-2 text-sm font-bold leading-none">
                      {job.location}
                    </span>
                  </div>
                </header>

                <div className="p-6 md:p-8">
                  <ul className="space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 font-medium leading-relaxed md:text-lg">
                        <span className="mt-[0.55em] h-3 w-3 shrink-0 border-2 border-ink bg-violet" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
