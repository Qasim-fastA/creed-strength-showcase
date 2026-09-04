import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { CtaButton } from "@/components/site/Button";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CREED — Book a Free Session" },
      {
        name: "description",
        content:
          "Visit CREED at 18 Foundry Street or send us a message to book a free walkthrough and trial training session.",
      },
      { property: "og:title", content: "Contact CREED — Book a Free Session" },
      {
        property: "og:description",
        content: "Opening hours, location and enquiry form for CREED gym.",
      },
    ],
  }),
  component: Contact;
});

const inputClass =
  "w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Section className="pt-16 md:pt-24">
        <p className="eyebrow mb-6">Contact</p>
        <h1 className="max-w-3xl text-5xl md:text-7xl">Start your journey.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Book a free walkthrough and trial session. Tell us your goal and we'll
          get back to you within one working day.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={handleSubmit} className="border border-border p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required className={inputClass} placeholder="Jordan Reyes" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="goal" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Primary goal
              </label>
              <select id="goal" name="goal" className={inputClass} defaultValue="Strength">
                {["Strength", "Conditioning", "Boxing", "Mobility & Recovery", "Not sure yet"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className={inputClass} placeholder="Tell us about your training background." />
            </div>
            <CtaButton type="submit" className="mt-8 w-full sm:w-auto">
              Send enquiry
            </CtaButton>
            {sent ? (
              <p className="mt-4 text-sm text-primary" role="status">
                Thanks — your enquiry has been received. A coach will reply within one
                working day.
              </p>
            ) : null}
          </form>

          <div className="space-y-8">
            {[
              {
                Icon: MapPin,
                title: "Visit",
                lines: ["18 Foundry Street, Unit 4", "Downtown District"],
              },
              {
                Icon: Phone,
                title: "Call",
                lines: ["(555) 014-2300"],
              },
              {
                Icon: Mail,
                title: "Email",
                lines: ["train@creedgym.com"],
              },
              {
                Icon: Clock,
                title: "Opening hours",
                lines: ["Mon–Fri: 5:00 – 23:00", "Sat–Sun: 7:00 – 20:00", "Members: 24/7 access"],
              },
            ].map(({ Icon, title, lines }) => (
              <div key={title} className="flex gap-4 border-b border-border pb-6">
                <Icon size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h2 className="text-2xl">{title}</h2>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-sm text-muted-foreground">
              Contact details are placeholders for this demonstration site.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
