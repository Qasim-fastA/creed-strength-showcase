import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/gym-interior.jpg";
import { CtaLink } from "@/components/site/Button";
import { Section, SectionHeading } from "@/components/site/Section";
import { benefits, programs, trainers } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CREED Gym — Strength, Conditioning & Coaching" },
      {
        name: "description",
        content:
          "CREED is a coach-led gym built for serious training: strength, conditioning, boxing and recovery programs with structured progression.",
      },
      { property: "og:title", content: "CREED Gym — Strength, Conditioning & Coaching" },
      {
        property: "og:description",
        content:
          "A disciplined training environment with qualified coaches, serious equipment and structured programming.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Athlete lifting a loaded barbell in the CREED training floor"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
          <div className="fade-up max-w-3xl">
            <p className="eyebrow mb-6">Est. 2014 — Downtown</p>
            <h1 className="text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
              Train like it
              <br />
              <span className="text-primary">actually matters.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              CREED is a coach-led gym for people who want structure, not noise.
              Real programming, real equipment, and a room that expects your best.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaLink to="/contact">Start Your Journey</CtaLink>
              <CtaLink to="/programs" variant="outline">
                View Programs
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <Section className="border-y border-border bg-surface py-14 md:py-14">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ["1,200+", "Members coached"],
            ["18", "Certified coaches"],
            ["24/7", "Member access"],
            ["11", "Years training"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-4xl text-primary md:text-5xl">{value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why CREED"
          title="Built for people who show up"
          description="Everything here exists to make your training more effective — from the floor layout to the way sessions are written."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="bg-background p-8">
              <span className="font-display text-2xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Programs" title="Choose your discipline" />
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            All programs <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <Link
              key={p.name}
              to="/programs"
              className="group relative block overflow-hidden border border-border"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1100}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/55" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-3xl">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Coaches"
            title="The people on the floor"
            description="Every coach at CREED is certified, experienced, and accountable for your progress."
          />
          <Link
            to="/trainers"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Meet the team <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <div key={t.name} className="border border-border bg-surface">
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                width={800}
                height={1000}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl">{t.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-y border-border">
        <img
          src={interiorImg}
          alt="CREED training floor with racks and red accent lighting"
          loading="lazy"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 text-center md:px-10 md:py-32">
          <h2 className="mx-auto max-w-3xl text-5xl md:text-7xl">
            Your first session is on us.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Book a walkthrough, meet a coach and train a full session before you commit
            to anything.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaLink to="/contact">Start Your Journey</CtaLink>
            <CtaLink to="/about" variant="outline">
              About CREED
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
