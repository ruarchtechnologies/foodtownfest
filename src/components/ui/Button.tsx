import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types/components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?:    ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   "bg-primary text-white hover:bg-secondary active:scale-95",
  secondary: "bg-surface border border-white/10 text-text hover:border-primary/50 hover:bg-surface/80",
  outline:   "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
  ghost:     "border-2 border-white/20 text-text hover:border-white/60 hover:bg-white/5 active:scale-95",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9  px-4 text-xs  tracking-widest",
  md: "h-11 px-6 text-sm  tracking-widest",
  lg: "h-14 px-8 text-base tracking-widest",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-pill font-syne font-bold uppercase",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
        "disabled:pointer-events-none disabled:opacity-40",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";
