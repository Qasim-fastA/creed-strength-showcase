import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/Button";
import { Section, SectionHeading } from "@/components/site/Section";
import { programs } from "@/data/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Training Programs — CREED Gym" },
      {
        name: "description",
        content:
          "Strength, conditioning, boxing and mobility programs at CREED. Coach-led sessions with tracked progression for every level.",
      },
      { property: "og:title", content: "Training Programs — CREED Gym" },
      {
        property: "og:description",
        content:
          "Four coach-led disciplines: strength, conditioning, boxing and mobility & recovery.",
      },
    ],
  }),
  component: Programs,
});

const memberships = [
  {
    name: "Open Floor",
    price: "$79",
    features: ["24/7 facility access", "Quarterly assessment", "Full equipment access"],
  },
  {
    name: "Coached",
    price: "$139",
    features: [
      "Everything in Open Floor",
      "Unlimited coached classes",
      "Written monthly programming",
    ],
    featured: true,
  },
  {
    name: "Private",
    price: "$249",
    features: ["Everything in Coached", "4 one-to-one sessions", "Recovery suite access"],
  },
];

function Programs() {
  return (
    <>
      <Section className="pt-16 md:pt-24">
        <p className="eyebrow mb-6">Programs</p>
        <h1 className="max-w-3xl text-5xl md:text-7xl">
          Four disciplines. One standard.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Pick one or combine them. Every program is written by a coach, tracked
          week to week and adjusted to what your body is actually doing.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="space-y-6">
          {programs.map((p, i) => (
            <article
              key={p.name}
              className="grid overflow-hidden border border-border bg-surface md:grid-cols-2"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1100}
                className={`h-72 w-full object-cover md:h-full ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className="p-8 md:p-12">
                <p className="eyebrow mb-4">
                  {p.level} — {p.duration}
                </p>
                <h2 className="text-4xl md:text-5xl">{p.name}</h2>
                <p className="mt-4 text-muted-foreground">{p.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
                <CtaLink to="/contact" variant="outline" className="mt-8">
                  Book a trial
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Membership"
          title="Simple, honest pricing"
          description="No contracts, no joining fee. Cancel with 30 days' notice."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {memberships.map((m) => (
            <div
              key={m.name}
              className={`border p-8 ${
                m.featured ? "border-primary bg-background" : "border-border"
              }`}
            >
              {m.featured ? (
                <span className="eyebrow">Most popular</span>
              ) : (
                <span className="eyebrow text-muted-foreground">Membership</span>
              )}
              <h3 className="mt-4 text-3xl">{m.name}</h3>
              <p className="mt-3 font-display text-5xl">
                {m.price}
                <span className="ml-2 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  / month
                </span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {m.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <CtaLink
                to="/contact"
                variant={m.featured ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                Get started
              </CtaLink>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
