import { cn } from "@/lib/utils";
import type { BadgeVariant, WithClassName } from "@/types/components";

interface BadgeProps extends WithClassName {
  children:  React.ReactNode;
  variant?:  BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:   "bg-primary/15 text-primary   border border-primary/30",
  secondary: "bg-secondary/15 text-secondary border border-secondary/30",
  accent:    "bg-accent/15   text-accent    border border-accent/30",
  muted:     "bg-white/5     text-muted     border border-white/10",
  food:      "bg-accent/15   text-accent    border border-accent/30",
  music:     "bg-primary/15  text-primary   border border-primary/30",
  culture:   "bg-secondary/15 text-secondary border border-secondary/30",
};

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-2.5 py-0.5",
        "font-dm text-[10px] font-bold uppercase tracking-[0.15em]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
