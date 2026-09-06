import { projects, site } from "@/lib/data";
import { ArrowUpRight, Button, Chip, colorBg, Container, GitHubIcon, SectionHeading } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="projects-title">
      <Container>
        <SectionHeading id="projects-title" title="Projects" color="pink" lede="Side projects on GitHub, built to learn the whole stack." />

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.name} className="nb flex flex-col bg-white">
              <div className={`border-b-3 border-ink p-6 md:p-7 ${colorBg[p.color]}`}>
                <h3 className="font-display text-3xl leading-none md:text-4xl">{p.name}</h3>
                <p className="mt-2 text-lg font-bold">{p.tagline}</p>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="font-medium leading-relaxed md:text-lg">{p.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <Chip className="bg-paper">{t}</Chip>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {p.links.map((l, i) => (
                    <Button key={l.href} href={l.href} external variant={i === 0 ? "ink" : "white"}>
                      <GitHubIcon className="h-5 w-5" />
                      {l.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex flex-wrap items-center gap-3 font-bold">
          More on GitHub:
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="marker font-display">
            github.com/sahilkarwasra
          </a>
        </p>
      </Container>
    </section>
  );
}
