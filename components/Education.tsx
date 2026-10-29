import { education } from "@/lib/data";
import { Spotlight, Stagger, StaggerItem } from "./motion";
import { Container, SectionHeading } from "./ui";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32" aria-labelledby="education-title">
      <Container>
        <SectionHeading id="education-title" title="Education." lede="Postgraduate study on top of an industry foundation." />

        <Stagger as="ul" className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {education.map((s) => (
            <StaggerItem key={s.institution}>
              <Spotlight className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="tabular-nums text-mute">{s.period}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[13px] ring-1 ring-inset ${
                      s.status === "In progress" ? "bg-go/10 text-go-soft ring-go/25" : "text-mute ring-line-strong"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
                <h3 className="mt-10 text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium leading-tight tracking-[-0.03em]">{s.institution}</h3>
                <p className="mt-2 text-lg">{s.degree}</p>
                <p className="mt-1 text-[15px] text-mute">{s.location}</p>
                <p className="mt-8 border-t border-line pt-6 text-[15px] leading-relaxed text-mute">{s.note}</p>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
