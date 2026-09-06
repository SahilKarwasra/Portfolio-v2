import { stack } from "@/lib/data";
import { Chip, Container, SectionHeading } from "./ui";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t-3 border-ink bg-white py-20 md:py-28" aria-labelledby="stack-title">
      <Container>
        <SectionHeading id="stack-title" title="Stack" color="sky" lede="The tools I reach for, grouped by what they are for." />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <li
              key={group.category}
              className={`p-5 md:p-6 ${
                group.exploring ? "border-3 border-dashed border-ink bg-sun" : "nb-sm bg-paper"
              }`}
            >
              <h3 className="font-display text-lg leading-none">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
