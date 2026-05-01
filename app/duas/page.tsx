"use client";

import { useState } from "react";
import { duas, duaCategories, type DuaCategory, type Dua } from "@/data/duas";

const categoryIcons: Record<DuaCategory, string> = {
  "Morning & Evening": "🌅",
  "Prayer": "🕌",
  "Eating & Drinking": "🍽️",
  "Studying": "📚",
  "Anxiety & Hardship": "💙",
  "Gratitude": "🤍",
  "Entering & Leaving": "🚪",
  "Travel": "✈️",
  "Sleep": "🌙",
};

const categoryColors: Record<DuaCategory, string> = {
  "Morning & Evening": "#f59e0b",
  "Prayer": "#c9a84c",
  "Eating & Drinking": "#34d399",
  "Studying": "#38bdf8",
  "Anxiety & Hardship": "#a78bfa",
  "Gratitude": "#f9a8d4",
  "Entering & Leaving": "#fb923c",
  "Travel": "#60a5fa",
  "Sleep": "#818cf8",
};

function DuaCard({ dua }: { dua: Dua }) {
  const [expanded, setExpanded] = useState(false);
  const color = categoryColors[dua.category];

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: expanded ? `${color}08` : "rgba(15, 22, 41, 0.6)",
        border: expanded ? `1px solid ${color}30` : "1px solid rgba(201, 168, 76, 0.1)",
      }}
    >
      <button
        className="w-full text-left p-6"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold" style={{ color: "#8a6d2f" }}>
                {dua.occasion}
              </span>
            </div>
            <h3
              className="text-base font-semibold mb-1"
              style={{ color: "#f0e6cc", fontFamily: "'Cinzel', serif" }}
            >
              {dua.title}
            </h3>
            <p className="arabic text-lg leading-loose" style={{ color: color }}>
              {dua.arabic.length > 60 ? `${dua.arabic.slice(0, 60)}...` : dua.arabic}
            </p>
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300"
            style={{
              background: `${color}15`,
              color,
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-4">
          <div
            className="h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }}
          />

          {/* Full Arabic */}
          <p
            className="arabic text-xl leading-loose text-center"
            style={{ color: color }}
          >
            {dua.arabic}
          </p>

          {/* Transliteration */}
          <div
            className="rounded-xl p-4"
            style={{ background: `${color}06`, border: `1px solid ${color}15` }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8a6d2f" }}>
              Transliteration
            </p>
            <p className="text-sm italic leading-relaxed" style={{ color: "#c4b48a" }}>
              {dua.transliteration}
            </p>
          </div>

          {/* Translation */}
          <div
            className="rounded-xl p-4"
            style={{ background: "rgba(201, 168, 76, 0.05)", border: "1px solid rgba(201, 168, 76, 0.15)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#8a6d2f" }}>
              Meaning
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#f0e6cc" }}>
              &ldquo;{dua.translation}&rdquo;
            </p>
          </div>

          {/* Source */}
          <p className="text-xs text-center" style={{ color: "#8a6d2f" }}>
            Source: {dua.source}
          </p>
        </div>
      )}
    </div>
  );
}

export default function DuasPage() {
  const [activeCategory, setActiveCategory] = useState<DuaCategory | "All">("All");

  const filtered = activeCategory === "All"
    ? duas
    : duas.filter((d) => d.category === activeCategory);

  return (
    <div className="page-enter w-full pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d2f" }}>
            ✦ The Weapon of the Believer ✦
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
          >
            Dua Companion
          </h1>
          <p className="arabic text-2xl mb-4" style={{ color: "#e8c97a" }}>
            رَفِيق الدُّعَاء
          </p>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#c4b48a" }}>
            The Prophet ﷺ taught us a dua for every moment of our day.
            These words are a direct connection to Allah — use them.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          {/* All button */}
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            <button
              onClick={() => setActiveCategory("All")}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === "All" ? "rgba(201, 168, 76, 0.15)" : "rgba(201, 168, 76, 0.05)",
                color: activeCategory === "All" ? "#c9a84c" : "#c4b48a",
                border: activeCategory === "All" ? "1px solid rgba(201, 168, 76, 0.4)" : "1px solid rgba(201, 168, 76, 0.1)",
              }}
            >
              All Duas
            </button>
            {duaCategories.map((cat) => {
              const color = categoryColors[cat];
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2"
                  style={{
                    background: active ? `${color}15` : `${color}05`,
                    color: active ? color : "#c4b48a",
                    border: active ? `1px solid ${color}40` : `1px solid ${color}15`,
                  }}
                >
                  <span>{categoryIcons[cat]}</span>
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duas List */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <p className="text-center" style={{ color: "#8a6d2f" }}>No duas in this category yet.</p>
          )}
          {filtered.map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>

        {/* Quick reminder */}
        <div
          className="mt-12 rounded-2xl p-6 text-center"
          style={{
            background: "rgba(201, 168, 76, 0.06)",
            border: "1px solid rgba(201, 168, 76, 0.15)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#8a6d2f" }}>
            A reminder
          </p>
          <p className="arabic text-xl mb-3" style={{ color: "#c9a84c" }}>
            وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ
          </p>
          <p className="text-sm italic mb-2" style={{ color: "#c4b48a" }}>
            &ldquo;Your Lord said: Call upon Me, I will respond to you.&rdquo;
          </p>
          <p className="text-xs" style={{ color: "#8a6d2f" }}>Surah Ghafir — 40:60</p>
        </div>

        {/* Closing */}
        <div className="mt-16 text-center">
          <div className="gold-divider mb-10" />
          <p className="arabic text-xl mb-3" style={{ color: "#c9a84c" }}>
            الدُّعَاءُ هُوَ الْعِبَادَةُ
          </p>
          <p className="text-sm italic" style={{ color: "#c4b48a" }}>
            &ldquo;Dua is worship.&rdquo;
          </p>
          <p className="text-xs mt-2" style={{ color: "#8a6d2f" }}>Abu Dawud & Tirmidhi</p>
        </div>
      </div>
    </div>
  );
}
