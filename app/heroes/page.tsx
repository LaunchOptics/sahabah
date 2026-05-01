"use client";

import { useState } from "react";
import { heroes, heroCategories, type Hero } from "@/data/heroes";

const categoryColors: Record<string, string> = {
  Scholar: "#c9a84c",
  Explorer: "#38bdf8",
  Scientist: "#34d399",
  Leader: "#fb923c",
  Companion: "#a78bfa",
};

function HeroCard({ hero, onClick }: { hero: Hero; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="glass glass-hover rounded-2xl p-6 text-left w-full group"
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
          style={{ background: `${hero.color}20`, color: hero.color, fontFamily: "'Cinzel', serif" }}
        >
          {hero.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded font-medium"
              style={{
                background: `${categoryColors[hero.category]}15`,
                color: categoryColors[hero.category],
                border: `1px solid ${categoryColors[hero.category]}30`,
              }}
            >
              {hero.category}
            </span>
          </div>
          <h3
            className="text-lg font-bold leading-tight mb-0.5"
            style={{ color: "#f0e6cc", fontFamily: "'Cinzel', serif" }}
          >
            {hero.name}
          </h3>
          <p className="arabic text-sm" style={{ color: hero.color, opacity: 0.8 }}>
            {hero.arabicName}
          </p>
        </div>
      </div>

      <p className="text-xs mb-3" style={{ color: "#8a6d2f" }}>
        {hero.era} &nbsp;·&nbsp; {hero.title}
      </p>

      <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#c4b48a" }}>
        {hero.bio}
      </p>

      <div
        className="mt-4 text-xs font-medium flex items-center gap-1 transition-colors duration-200"
        style={{ color: hero.color }}
      >
        Read their story <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
      </div>
    </button>
  );
}

function HeroModal({ hero, onClose }: { hero: Hero; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{
          background: "#0d1528",
          border: `1px solid ${hero.color}30`,
          boxShadow: `0 0 80px ${hero.color}15`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-8 pb-6 relative"
          style={{
            background: `linear-gradient(135deg, ${hero.color}10, transparent)`,
            borderBottom: `1px solid ${hero.color}20`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all"
            style={{ background: "rgba(255,255,255,0.06)", color: "#c4b48a" }}
          >
            ✕
          </button>

          <span
            className="text-xs px-2 py-1 rounded font-medium mb-3 inline-block"
            style={{
              background: `${categoryColors[hero.category]}20`,
              color: categoryColors[hero.category],
              border: `1px solid ${categoryColors[hero.category]}40`,
            }}
          >
            {hero.category}
          </span>

          <h2
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0e6cc" }}
          >
            {hero.name}
          </h2>

          <p className="arabic text-xl mb-3" style={{ color: hero.color }}>
            {hero.arabicName}
          </p>

          <p className="text-sm" style={{ color: "#8a6d2f" }}>
            {hero.era} &nbsp;·&nbsp; {hero.title}
          </p>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          {/* Bio */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d2f" }}>
              Their Story
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#c4b48a" }}>
              {hero.bio}
            </p>
          </div>

          {/* Legacy */}
          <div
            className="rounded-xl p-5"
            style={{ background: `${hero.color}08`, border: `1px solid ${hero.color}20` }}
          >
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: hero.color, opacity: 0.7 }}>
              Their Legacy
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#c4b48a" }}>
              {hero.legacy}
            </p>
          </div>

          {/* Contributions */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d2f" }}>
              Key Contributions
            </h3>
            <ul className="space-y-2">
              {hero.contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#c4b48a" }}>
                  <span style={{ color: hero.color, marginTop: "2px" }}>✦</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div
            className="rounded-xl p-5 text-center"
            style={{
              background: "rgba(201, 168, 76, 0.05)",
              border: "1px solid rgba(201, 168, 76, 0.15)",
            }}
          >
            <p className="text-sm italic leading-relaxed mb-2" style={{ color: "#c4b48a" }}>
              &ldquo;{hero.quote}&rdquo;
            </p>
            <p className="text-xs" style={{ color: "#8a6d2f" }}>— {hero.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroesPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const filtered = filter === "All" ? heroes : heroes.filter((h) => h.category === filter);

  return (
    <div className="page-enter pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d2f" }}>
            ✦ Islamic History ✦
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
          >
            Muslim Heroes
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#c4b48a" }}>
            These men and women carried the light of Islam and knowledge across centuries.
            Their stories are your inheritance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {heroCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: filter === cat ? "rgba(201, 168, 76, 0.15)" : "rgba(201, 168, 76, 0.05)",
                color: filter === cat ? "#c9a84c" : "#c4b48a",
                border: filter === cat ? "1px solid rgba(201, 168, 76, 0.4)" : "1px solid rgba(201, 168, 76, 0.1)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} onClick={() => setSelectedHero(hero)} />
          ))}
        </div>

        {/* Closing */}
        <div className="mt-20 text-center">
          <div className="gold-divider mb-10" />
          <p className="arabic text-xl mb-3" style={{ color: "#c9a84c" }}>
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
          </p>
          <p className="text-sm italic" style={{ color: "#c4b48a" }}>
            &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo;
          </p>
          <p className="text-xs mt-2" style={{ color: "#8a6d2f" }}>Ibn Majah</p>
        </div>
      </div>

      {/* Modal */}
      {selectedHero && (
        <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
      )}
    </div>
  );
}
