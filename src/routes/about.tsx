import { createFileRoute } from "@tanstack/react-router";
import interiorImg from "@/assets/gym-interior.jpg";
import { CtaLink } from "@/components/site/Button";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CREED — A Serious Training Environment" },
      {
        name: "description",
        content:
          "CREED was built in 2014 as a coach-led gym with capped membership, disciplined floor etiquette and equipment that holds up to real training.",
      },
      { property: "og:title", content: "About CREED — A Serious Training Environment" },
      {
        property: "og:description",
        content:
          "Our story, our standards and how we coach members at CREED gym.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Discipline",
    body: "Consistency beats intensity. We build habits that survive busy weeks.",
  },
  {
    title: "Standards",
    body: "Clean floor, racked plates, honest coaching. The room reflects the work.",
  },
  {
    title: "Progression",
    body: "If it isn't measured, it isn't training. Every member has numbers to beat.",
  },
];

function About() {
  return (
    <>
      <Section className="pt-16 md:pt-24">
        <p className="eyebrow mb-6">About</p>
        <h1 className="max-w-3xl text-5xl md:text-7xl">
          A gym built around coaching, not equipment catalogues.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          CREED opened in 2014 in a converted downtown foundry with one rig, four
          coaches and a simple rule: nobody trains without a plan. Eleven years later
          the room is bigger, the standard is the same.
        </p>
      </Section>

      <Section className="pt-0">
        <img
          src={interiorImg}
          alt="Interior of the CREED training floor"
          loading="lazy"
          width={1408}
          height={1008}
          className="w-full border border-border object-cover md:h-[520px]"
        />
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-14 md:grid-cols-2">
          <SectionHeading eyebrow="Our story" title="From one rig to a full facility" />
          <div className="space-y-5 text-muted-foreground">
            <p>
              We started because most gyms sold access, not coaching. Members paid
              monthly, trained without direction and quietly stopped showing up.
            </p>
            <p>
              CREED does the opposite. Membership is capped so the floor never gets
              crowded, and every member is assigned a coach who writes and reviews
              their programming.
            </p>
            <p>
              Today the facility runs strength, conditioning, boxing and recovery
              programs across two floors, with 18 certified coaches and open access
              around the clock for members.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we stand for" title="Three non-negotiables" />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-background p-8">
              <h3 className="rule-red text-3xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <CtaLink to="/contact">Start Your Journey</CtaLink>
        </div>
      </Section>
    </>
  );
}
