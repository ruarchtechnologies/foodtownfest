"use client";

import React, { useState, useEffect, useRef } from "react";

type StopStatus = "done" | "active" | "upcoming";

interface Stop {
  date: string;
  location: string;
  image: string;
  status: StopStatus;
  description: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const STOPS: Stop[] = [
  {
    date: "June 12, 2026",
    location: "OAU, Ile-Ife",
    image: "/image/oau-image.jpg",
    status: "active",
    description: "The Awakening — where it all begins.",
  },
  {
    date: "August 2026",
    location: "To be announced",
    image: "",
    status: "upcoming",
    description: "The Expansion — a city TBA.",
  },
  {
    date: "December 2026",
    location: "To be announced",
    image: "",
    status: "upcoming",
    description: "The Heritage — the grand finale.",
  },
];

const TARGET = new Date("2026-06-12T00:00:00");

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

// ─── Countdown ────────────────────────────────────────────────────────────────
function Countdown() {
  const [t, setT] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setT(getTimeLeft());
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hrs", value: t.hours },
    { label: "Min", value: t.minutes },
    { label: "Sec", value: t.seconds },
  ];

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {units.map(({ label, value }, i) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 68 }}>
          <div style={{
            background: "rgba(239,159,39,0.07)",
            border: "1px solid rgba(239,159,39,0.25)",
            borderRadius: 12,
            padding: "14px 0",
            width: "100%",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* top shimmer line */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: "70%", height: 1,
              background: "linear-gradient(to right, transparent, rgba(239,159,39,0.6), transparent)",
            }} />
            <span style={{
              fontSize: 34, fontWeight: 800, color: "#EF9F27",
              lineHeight: 1, letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
            }}>
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span style={{
            marginTop: 6, fontSize: 9, fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Featured event card ───────────────────────────────────────────────────────
function FeaturedCard({ stop }: { stop: Stop }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid rgba(239,159,39,0.3)",
      boxShadow: "0 0 0 1px rgba(239,159,39,0.08), 0 20px 60px rgba(0,0,0,0.6)",
      aspectRatio: "16/10",
    }}>
      {/* Image */}
      <img
        src={stop.image}
        alt={stop.location}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.55) 100%)",
      }} />



      {/* Bottom info */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 20px 20px",
        background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
      }}>
        <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EF9F27" }}>
          {stop.date}
        </p>
        <p style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          {stop.location}
        </p>
      </div>
    </div>
  );
}

// ─── Stacked event deck (active card + TBA cards behind) ──────────────────────
function TBABackCard({ stop, offset }: { stop: Stop; offset: number }) {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(20,20,20,0.95)",
      transform: `translate(${offset * 10}px, ${offset * 10}px) scale(${1 - offset * 0.03})`,
      transformOrigin: "top left",
      zIndex: 3 - offset,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "20px",
    }}>
      <span style={{
        fontSize: 9, fontWeight: 700, letterSpacing: "0.16em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.18)",
        marginBottom: 6,
      }}>
        Event 0{STOPS.indexOf(stop) + 1}
      </span>
      <p style={{ margin: "0 0 2px", fontSize: 15, fontWeight: 700, color: `rgba(255,255,255,${0.25 - offset * 0.05})` }}>
        {stop.date}
      </p>
      <div style={{
        marginTop: 8, fontSize: 8, fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", padding: "3px 10px", borderRadius: 999, width: "fit-content",
        background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}>
        TBA
      </div>
    </div>
  );
}

function EventDeck() {
  return (
    <div style={{ position: "relative", paddingBottom: 20, paddingRight: 20 }}>
      <TBABackCard stop={STOPS[2]!} offset={2} />
      <TBABackCard stop={STOPS[1]!} offset={1} />
      <div style={{ position: "relative", zIndex: 4 }}>
        <FeaturedCard stop={STOPS[0]!} />
      </div>
    </div>
  );
}

// ─── Road strip with looping bus ──────────────────────────────────────────────
const ROAD_H = 52;

function RoadStrip() {
  const busRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bus = busRef.current;
    if (!bus) return;
    let startTime: number | null = null;
    let raf: number;
    const DURATION = 7000;

    function loop(ts: number) {
      if (!startTime) startTime = ts;
      const progress = ((ts - startTime) % DURATION) / DURATION;
      const parent = bus.parentElement;
      if (parent) {
        const totalW = parent.offsetWidth + bus.offsetWidth;
        const x = -bus.offsetWidth + totalW * progress;
        bus.style.transform = `translateX(${x}px)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: 240, overflow: "hidden", marginTop: 16 }}>
      {/* Road surface */}
      <div style={{
        position: "absolute", bottom: 60, left: 0, right: 0, height: ROAD_H,
        background: "#1a1814",
        borderTop: "2px solid #FF3D00",
        borderBottom: "2px solid #FF3D00",
        zIndex: 1,
      }}>
        {/* Animated lane dashes */}
        <div style={{
          position: "absolute", top: "50%", left: 0,
          transform: "translateY(-50%)",
          display: "flex", whiteSpace: "nowrap",
          animation: "dash-move 0.6s linear infinite",
        }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} style={{
              display: "inline-block", width: 32, height: 2,
              background: "rgba(255,255,255,0.15)", marginRight: 24, flexShrink: 0,
            }} />
          ))}
        </div>
      </div>

      {/* Bus — pushed below road bottom so visible content aligns with road surface */}
      <div
        ref={busRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 260,
          zIndex: 2,
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.7))",
        }}
      >
        <img
          src="/image/foodtownbus.png"
          alt="FoodTownFest bus"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AdventureRoadmap() {
  return (
    <section
      id="roadmap"
      style={{ width: "100%", background: "#0A0A0A", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        @keyframes live-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.4); }
        }
        @keyframes dash-move {
          from { transform: translateX(0); }
          to   { transform: translateX(-56px); }
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,159,39,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-8%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,61,0,0.08) 0%, transparent 65%)",
          filter: "blur(50px)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      </div>

      {/* Main grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 48px", position: "relative", zIndex: 1 }}>

        {/* Section label */}
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.28em",
          textTransform: "uppercase", color: "#EF9F27", marginBottom: 12,
        }}>
          The Countdown Is On
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
          className="roadmap-grid"
        >
          {/* Left — heading + countdown + stop list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <h2 style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 800, color: "#F5F5F5",
                textTransform: "uppercase", letterSpacing: "-0.03em",
                lineHeight: 1, margin: 0,
              }}>
                3 Cities,<br />One Nation,<br />Endless Flavour
              </h2>
            </div>

            {/* Countdown */}
            <div>
              <p style={{
                fontSize: 9, fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                marginBottom: 12,
              }}>
                See you at our first stop · <span style={{ color: "#EF9F27" }}>OAU, Ile-Ife</span>
              </p>
              <Countdown />
            </div>

          </div>

          {/* Right — stacked event deck */}
          <div>
            <EventDeck />
          </div>
        </div>
      </div>

      {/* Full-width road + bus */}
      <RoadStrip />

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .roadmap-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
