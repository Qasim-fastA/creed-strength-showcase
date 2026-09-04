import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/85",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary",
};

export function CtaLink({
  to,
  variant = "primary",
  className,
  children,
  ...rest
}: { to: string; variant?: Variant; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "children"
>) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function CtaButton({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
