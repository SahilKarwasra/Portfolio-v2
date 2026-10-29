import { capabilities } from "@/lib/data";
import BentoVisual from "./BentoVisuals";
import { Spotlight, Stagger, StaggerItem } from "./motion";
import { Container, SectionHeading } from "./ui";

export default function Capabilities() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="capabilities-title">
      <Container>
        <SectionHeading
          id="capabilities-title"
          title="What I do."
          lede="Backend first, with the client, the AI layer and the team around it."
        />

        <Stagger as="ul" className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {capabilities.map((c) => (
            <StaggerItem key={c.title} className={c.span === "wide" ? "md:col-span-4" : "md:col-span-2"}>
              <Spotlight className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel">
                <div className="h-60 border-b border-line bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" aria-hidden="true">
                  <BentoVisual kind={c.visual} />
                </div>
                <div className="p-6 text-[17px] leading-relaxed">
                  <h3 className="inline font-medium text-ink">{c.title}</h3> <p className="inline text-mute">{c.desc}</p>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
