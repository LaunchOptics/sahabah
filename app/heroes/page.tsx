"use client";
import { useState } from "react";
import { heroes, heroCategories, type Hero } from "@/data/heroes";

const catColors: Record<string, string> = {
  Scholar: "#c9a84c", Explorer: "#38bdf8", Scientist: "#34d399",
  Leader: "#fb923c", Companion: "#a78bfa",
};

function HeroCard({ hero, onClick }: { hero: Hero; onClick: () => void }) {
  return (
    <button onClick={onClick} className="glass-card" style={{ display: "block", width: "100%", padding: 24, textAlign: "left", cursor: "pointer", background: "rgba(15,22,41,0.7)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 16 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${hero.color}20`, color: hero.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, flexShrink: 0, fontFamily: "'Cinzel',serif" }}>
          {hero.name.charAt(0)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: `${catColors[hero.category]}15`, color: catColors[hero.category], border: `1px solid ${catColors[hero.category]}30`, display: "inline-block", marginBottom: 6 }}>{hero.category}</span>
          <h3 className="cinzel" style={{ fontSize: 16, fontWeight: 700, color: "#f0e6cc", marginBottom: 2 }}>{hero.name}</h3>
          <p className="arabic" style={{ fontSize: 13, color: hero.color, opacity: 0.8, marginBottom: 6 }}>{hero.arabicName}</p>
          <p style={{ fontSize: 12, color: "#8a6d2f", marginBottom: 8 }}>{hero.era} · {hero.title}</p>
          <p style={{ fontSize: 13, color: "#c4b48a", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{hero.bio}</p>
          <p style={{ fontSize: 12, color: hero.color, marginTop: 12 }}>Read their story →</p>
        </div>
      </div>
    </button>
  );
}

function Modal({ hero, onClose }: { hero: Hero; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#0d1528", border: `1px solid ${hero.color}30`, borderRadius: 20, maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto", boxShadow: `0 0 80px ${hero.color}15` }}>
        <div style={{ padding: 32, borderBottom: `1px solid ${hero.color}20`, background: `linear-gradient(135deg,${hero.color}10,transparent)`, position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 20, right: 20, width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "none", color: "#c4b48a", cursor: "pointer", fontSize: 14 }}>✕</button>
          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, background: `${catColors[hero.category]}20`, color: catColors[hero.category], border: `1px solid ${catColors[hero.category]}40`, display: "inline-block", marginBottom: 12 }}>{hero.category}</span>
          <h2 className="cinzel" style={{ fontSize: "clamp(22px,3vw,28px)", fontWeight: 700, color: "#f0e6cc", marginBottom: 6 }}>{hero.name}</h2>
          <p className="arabic" style={{ fontSize: 20, color: hero.color, marginBottom: 8 }}>{hero.arabicName}</p>
          <p style={{ fontSize: 13, color: "#8a6d2f" }}>{hero.era} · {hero.title}</p>
        </div>

        <div style={{ padding: 32 }}>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 10 }}>Their Story</p>
            <p style={{ fontSize: 14, color: "#c4b48a", lineHeight: 1.7 }}>{hero.bio}</p>
          </div>

          <div style={{ borderRadius: 12, padding: 20, background: `${hero.color}08`, border: `1px solid ${hero.color}20`, marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: hero.color, opacity: 0.7, marginBottom: 10 }}>Their Legacy</p>
            <p style={{ fontSize: 14, color: "#c4b48a", lineHeight: 1.7 }}>{hero.legacy}</p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 10 }}>Key Contributions</p>
            {hero.contributions.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                <span style={{ color: hero.color, marginTop: 2, flexShrink: 0 }}>✦</span>
                <p style={{ fontSize: 14, color: "#c4b48a" }}>{c}</p>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: 12, padding: 20, background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
            <p style={{ fontSize: 14, color: "#c4b48a", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;{hero.quote}&rdquo;</p>
            <p style={{ fontSize: 12, color: "#8a6d2f" }}>— {hero.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroesPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Hero | null>(null);
  const filtered = filter === "All" ? heroes : heroes.filter(h => h.category === filter);

  return (
    <div style={{ width: "100%", padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 12 }}>✦ Islamic History ✦</p>
          <h1 className="cinzel" style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#c9a84c", marginBottom: 12 }}>Muslim Heroes</h1>
          <p style={{ fontSize: 15, color: "#c4b48a", maxWidth: 520, margin: "0 auto" }}>These men and women carried the light of Islam and knowledge across centuries. Their stories are your inheritance.</p>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
          {heroCategories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              padding: "8px 18px", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer",
              background: filter === cat ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.05)",
              color: filter === cat ? "#c9a84c" : "#c4b48a",
              border: filter === cat ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.1)",
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {filtered.map(h => <HeroCard key={h.id} hero={h} onClick={() => setSelected(h)} />)}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <hr className="gold-divider" style={{ border: "none", marginBottom: 28, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }} />
          <p className="arabic" style={{ fontSize: 20, color: "#c9a84c", marginBottom: 10 }}>طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</p>
          <p style={{ fontSize: 13, color: "#c4b48a", fontStyle: "italic" }}>&ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo;</p>
          <p style={{ fontSize: 11, color: "#8a6d2f", marginTop: 6 }}>Ibn Majah</p>
        </div>
      </div>

      {selected && <Modal hero={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
