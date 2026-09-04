import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/Button";
import { Section, SectionHeading } from "@/components/site/Section";
import { trainers } from "@/data/site";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Coaches — CREED Gym" },
      {
        name: "description",
        content:
          "Meet the certified strength, conditioning, boxing and recovery coaches behind every CREED training program.",
      },
      { property: "og:title", content: "Our Coaches — CREED Gym" },
      {
        property: "og:description",
        content: "Certified, experienced coaches on the floor for every session.",
      },
    ],
  }),
  component: Trainers,
});

function Trainers() {
  return (
    <>
      <Section className="pt-16 md:pt-24">
        <p className="eyebrow mb-6">Trainers</p>
        <h1 className="max-w-3xl text-5xl md:text-7xl">Coaches who stay on the floor.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Our team writes the programming, watches the reps and answers for your
          results. No rotating contractors.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2">
          {trainers.map((t) => (
            <article key={t.name} className="border border-border bg-surface">
              <img
                src={t.image}
                alt={`${t.name}, ${t.role} at CREED`}
                loading="lazy"
                width={800}
                height={1000}
                className="h-96 w-full object-cover object-top"
              />
              <div className="p-8">
                <h2 className="text-3xl">{t.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">
                  {t.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.bio}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.credentials.map((c) => (
                    <li
                      key={c}
                      className="border border-border px-3 py-1 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface text-center">
        <SectionHeading
          className="mx-auto text-center"
          eyebrow="Get matched"
          title="Not sure who to train with?"
          description="Tell us your goal and we'll pair you with the right coach after a free assessment."
        />
        <div className="mt-10">
          <CtaLink to="/contact">Start Your Journey</CtaLink>
        </div>
      </Section>
    </>
  );
}
