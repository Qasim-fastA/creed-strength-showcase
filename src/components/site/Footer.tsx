import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <span className="font-display text-4xl tracking-[0.16em]">CREED</span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A serious training environment for people who train with intent.
            Coaching, strength, conditioning and recovery under one roof.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/programs", label: "Programs" },
              { to: "/trainers", label: "Trainers" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>18 Foundry Street, Unit 4, Downtown</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href="tel:+15550142300" className="hover:text-primary">
                (555) 014-2300
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href="mailto:train@creedgym.com" className="hover:text-primary">
                train@creedgym.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} CREED Gym. All rights reserved.</p>
          <p>Open daily 5:00 &ndash; 23:00</p>
        </div>
      </div>
    </footer>
  );
}
