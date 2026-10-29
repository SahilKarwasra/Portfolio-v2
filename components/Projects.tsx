import { projects, site } from "@/lib/data";
import { Stagger, StaggerItem } from "./motion";
import { Button, Container, SectionHeading } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48" aria-labelledby="projects-title">
      <Container>
        <SectionHeading id="projects-title" title="Projects" lede="Side projects on GitHub, built to learn the whole stack." />

        <Stagger className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.name} className="flex flex-col">
              <h3 className="font-display text-[clamp(2.4rem,4.4vw,4rem)] font-bold leading-[0.95] tracking-crush">{p.name}</h3>
              <p className="mt-3 text-xl text-go-soft">{p.tagline}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">{p.desc}</p>
              <p className="mt-5 text-base text-ink/55">{p.tech.join("  ·  ")}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                {p.links.map((l, i) => (
                  <Button key={l.href} href={l.href} external variant={i === 0 ? "solid" : "ghost"}>
                    {l.label}
                  </Button>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-20 text-lg">
          More on GitHub:{" "}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-underline pb-1 text-go">
            github.com/sahilkarwasra
          </a>
        </p>
      </Container>
    </section>
  );
}
