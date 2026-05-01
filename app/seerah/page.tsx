"use client";

import { useState } from "react";
import { seerahEvents, type SeerahEvent } from "@/data/seerah";

const typeConfig = {
  revelation: { color: "#c9a84c", icon: "📖", label: "Revelation" },
  migration: { color: "#38bdf8", icon: "🌊", label: "Migration" },
  battle: { color: "#f87171", icon: "⚔️", label: "Battle" },
  personal: { color: "#a78bfa", icon: "❤️", label: "Personal" },
  treaty: { color: "#34d399", icon: "🤝", label: "Treaty" },
  milestone: { color: "#fb923c", icon: "⭐", label: "Milestone" },
};

const emotionConfig = {
  joyful: { bg: "rgba(52, 211, 153, 0.06)", border: "rgba(52, 211, 153, 0.2)" },
  difficult: { bg: "rgba(248, 113, 113, 0.06)", border: "rgba(248, 113, 113, 0.2)" },
  triumphant: { bg: "rgba(251, 146, 60, 0.06)", border: "rgba(251, 146, 60, 0.2)" },
  profound: { bg: "rgba(201, 168, 76, 0.06)", border: "rgba(201, 168, 76, 0.2)" },
  solemn: { bg: "rgba(167, 139, 250, 0.06)", border: "rgba(167, 139, 250, 0.2)" },
};

function TimelineCard({ event, index, isSelected, onClick }: {
  event: SeerahEvent;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  const type = typeConfig[event.type];
  const emotion = emotionConfig[event.emotion];
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"} md:gap-8`}>
      {/* Content card */}
      <div className={`flex-1 pb-8 ${isLeft ? "md:pr-8 text-left" : "md:pl-8 text-right"}`}>
        <button
          onClick={onClick}
          className="w-full text-left rounded-2xl p-6 transition-all duration-300 group"
          style={{
            background: isSelected ? emotion.bg : "rgba(15, 22, 41, 0.5)",
            border: isSelected ? `1px solid ${emotion.border}` : "1px solid rgba(201, 168, 76, 0.1)",
            boxShadow: isSelected ? `0 8px 32px rgba(0,0,0,0.3)` : "none",
          }}
        >
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? "" : "justify-end"} flex-wrap`}>
            <span
              className="text-xs px-2 py-1 rounded font-medium"
              style={{
                background: `${type.color}15`,
                color: type.color,
                border: `1px solid ${type.color}30`,
              }}
            >
              {type.icon} {type.label}
            </span>
            <span className="text-xs" style={{ color: "#8a6d2f" }}>
              {event.year}{event.hijriYear ? ` · ${event.hijriYear}` : ""}
            </span>
          </div>

          <h3
            className="text-lg font-bold mb-1"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0e6cc" }}
          >
            {event.title}
          </h3>

          {event.arabicTitle && (
            <p className="arabic text-base mb-3" style={{ color: type.color, opacity: 0.8 }}>
              {event.arabicTitle}
            </p>
          )}

          <p className="text-sm leading-relaxed mb-3" style={{ color: "#c4b48a" }}>
            {isSelected ? event.description : `${event.description.slice(0, 120)}...`}
          </p>

          {isSelected && (
            <div
              className="rounded-xl p-4 mt-4"
              style={{ background: emotion.bg, border: `1px solid ${emotion.border}` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8a6d2f" }}>
                Why This Matters
              </p>
              <p className="text-sm leading-relaxed italic" style={{ color: "#c4b48a" }}>
                {event.significance}
              </p>
            </div>
          )}

          <div
            className="mt-3 text-xs font-medium"
            style={{ color: type.color, opacity: 0.7 }}
          >
            {isSelected ? "↑ Tap to collapse" : "Tap to read more →"}
          </div>
        </button>
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: "32px" }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm z-10 flex-shrink-0 transition-all duration-300"
          style={{
            background: isSelected ? type.color : `${type.color}30`,
            border: `2px solid ${type.color}`,
            boxShadow: isSelected ? `0 0 20px ${type.color}50` : "none",
          }}
        >
          {isSelected ? type.icon : ""}
        </div>
        <div
          className="flex-1 w-0.5 min-h-[60px]"
          style={{ background: "linear-gradient(to bottom, rgba(201, 168, 76, 0.3), rgba(201, 168, 76, 0.05))" }}
        />
      </div>

      {/* Empty space for opposite side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function SeerahPage() {
  const [selected, setSelected] = useState<string | null>(null);

  function toggle(id: string) {
    setSelected((prev) => (prev === id ? null : id));
  }

  return (
    <div className="page-enter w-full pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d2f" }}>
            ✦ The Blessed Life ✦
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
          >
            Seerah
          </h1>
          <p className="arabic text-2xl mb-4" style={{ color: "#e8c97a" }}>
            السِّيرَة النَّبَوِيَّة
          </p>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#c4b48a" }}>
            The life of the Prophet Muhammad ﷺ — the most studied, most loved, most followed
            human being in history. Walk through his journey.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(typeConfig).map(([key, val]) => (
            <div
              key={key}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
              style={{
                background: `${val.color}10`,
                border: `1px solid ${val.color}25`,
                color: val.color,
              }}
            >
              <span>{val.icon}</span>
              <span>{val.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (hidden on mobile, visible on desktop) */}
          <div
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 hidden"
            style={{
              background: "linear-gradient(to bottom, rgba(201, 168, 76, 0.4), rgba(201, 168, 76, 0.05))",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-2">
            {seerahEvents.map((event, i) => (
              <TimelineCard
                key={event.id}
                event={event}
                index={i}
                isSelected={selected === event.id}
                onClick={() => toggle(event.id)}
              />
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 text-center">
          <div className="gold-divider mb-10" />
          <p className="arabic text-2xl mb-4" style={{ color: "#c9a84c" }}>
            لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ
          </p>
          <p className="text-sm italic mb-2" style={{ color: "#c4b48a" }}>
            &ldquo;There has certainly been for you in the Messenger of Allah an excellent example.&rdquo;
          </p>
          <p className="text-xs" style={{ color: "#8a6d2f" }}>Surah Al-Ahzab — 33:21</p>
        </div>
      </div>
    </div>
  );
}
