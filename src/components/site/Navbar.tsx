import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink } from "./Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-baseline gap-1" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl tracking-[0.16em]">CREED</span>
          <span className="h-2 w-2 translate-y-[-2px] bg-primary" aria-hidden />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaLink to="/contact" className="px-6 py-2.5">
            Join Now
          </CtaLink>
        </div>

        <button
          className="relative text-foreground transition-transform duration-200 ease-out active:scale-95 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="inline-block transition-transform duration-300 ease-out"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`overflow-hidden border-t border-border transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="translate-y-0 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-200 hover:text-foreground"
              style={{
                transitionDelay: open ? `${i * 35}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-6px)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <CtaLink to="/contact" className="mt-3" onClick={() => setOpen(false)}>
            Join Now
          </CtaLink>
        </div>
      </nav>
    </header>
  );
}

