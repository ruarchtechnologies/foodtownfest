import { cn } from "@/lib/utils";

interface MarqueeProps {
  children:   React.ReactNode;
  className?: string;
  speed?:     "slow" | "normal" | "fast";
  reverse?:   boolean;
  duration?:  string;
}

const speedStyles: Record<NonNullable<MarqueeProps["speed"]>, React.CSSProperties> = {
  slow:   { animationDuration: "50s" },
  normal: { animationDuration: "30s" },
  fast:   { animationDuration: "15s" },
};

export function Marquee({
  children,
  className,
  speed    = "normal",
  reverse  = false,
  duration,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div
        className="inline-flex animate-marquee"
        style={{
          ...speedStyles[speed],
          ...(duration && { animationDuration: duration }),
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
