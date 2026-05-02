"use client";
import { useState } from "react";
import { duas, duaCategories, type DuaCategory, type Dua } from "@/data/duas";

const icons: Record<DuaCategory, string> = {
  "Morning & Evening": "🌅", "Prayer": "🕌", "Eating & Drinking": "🍽️",
  "Studying": "📚", "Anxiety & Hardship": "💙", "Gratitude": "🤍",
  "Entering & Leaving": "🚪", "Travel": "✈️", "Sleep": "🌙",
};

const colors: Record<DuaCategory, string> = {
  "Morning & Evening": "#f59e0b", "Prayer": "#c9a84c", "Eating & Drinking": "#34d399",
  "Studying": "#38bdf8", "Anxiety & Hardship": "#a78bfa", "Gratitude": "#f9a8d4",
  "Entering & Leaving": "#fb923c", "Travel": "#60a5fa", "Sleep": "#818cf8",
};

function DuaCard({ dua }: { dua: Dua }) {
  const [open, setOpen] = useState(false);
  const c = colors[dua.category];

  return (
    <div style={{
      borderRadius: 16, overflow: "hidden", transition: "all 0.3s",
      background: open ? `${c}08` : "rgba(15,22,41,0.6)",
      border: open ? `1px solid ${c}30` : "1px solid rgba(201,168,76,0.1)",
    }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", textAlign: "left", padding: 24, cursor: "pointer", background: "transparent", border: "none" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8a6d2f", marginBottom: 4 }}>{dua.occasion}</p>
            <h3 className="cinzel" style={{ fontSize: 15, fontWeight: 600, color: "#f0e6cc", marginBottom: 6 }}>{dua.title}</h3>
            <p className="arabic" style={{ fontSize: 16, color: c, lineHeight: 1.8 }}>
              {dua.arabic.length > 60 ? `${dua.arabic.slice(0, 60)}...` : dua.arabic}
            </p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: `${c}15`, color: c, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "none" }}>▾</div>
        </div>
      </button>

      {open && (
        <div style={{ padding: "0 24px 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${c}30,transparent)`, margin: "0 0 20px" }} />
          <p className="arabic" style={{ fontSize: 20, color: c, textAlign: "center", lineHeight: 1.9, marginBottom: 20 }}>{dua.arabic}</p>

          <div style={{ borderRadius: 10, padding: 16, background: `${c}06`, border: `1px solid ${c}15`, marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 6 }}>Transliteration</p>
            <p style={{ fontSize: 13, color: "#c4b48a", fontStyle: "italic", lineHeight: 1.6 }}>{dua.transliteration}</p>
          </div>

          <div style={{ borderRadius: 10, padding: 16, background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 6 }}>Meaning</p>
            <p style={{ fontSize: 14, color: "#f0e6cc", lineHeight: 1.6 }}>&ldquo;{dua.translation}&rdquo;</p>
          </div>

          <p style={{ fontSize: 12, color: "#8a6d2f", textAlign: "center" }}>Source: {dua.source}</p>
        </div>
      )}
    </div>
  );
}

export default function DuasPage() {
  const [cat, setCat] = useState<DuaCategory | "All">("All");
  const filtered = cat === "All" ? duas : duas.filter(d => d.category === cat);

  return (
    <div style={{ width: "100%", padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 12 }}>✦ The Weapon of the Believer ✦</p>
          <h1 className="cinzel" style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#c9a84c", marginBottom: 12 }}>Dua Companion</h1>
          <p className="arabic" style={{ fontSize: 22, color: "#e8c97a", marginBottom: 12 }}>رَفِيق الدُّعَاء</p>
          <p style={{ fontSize: 15, color: "#c4b48a", maxWidth: 480, margin: "0 auto" }}>The Prophet ﷺ taught us a dua for every moment of our day. These words are a direct connection to Allah — use them.</p>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 36 }}>
          <button onClick={() => setCat("All")} style={{ padding: "8px 18px", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", background: cat === "All" ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.05)", color: cat === "All" ? "#c9a84c" : "#c4b48a", border: cat === "All" ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.1)" }}>All Duas</button>
          {duaCategories.map(c => {
            const color = colors[c];
            const active = cat === c;
            return (
              <button key={c} onClick={() => setCat(c)} style={{ padding: "8px 14px", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, background: active ? `${color}15` : `${color}05`, color: active ? color : "#c4b48a", border: active ? `1px solid ${color}40` : `1px solid ${color}15` }}>
                <span>{icons[c]}</span><span>{c}</span>
              </button>
            );
          })}
        </div>

        {/* List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map(d => <DuaCard key={d.id} dua={d} />)}
        </div>

        {/* Reminder */}
        <div style={{ marginTop: 48, borderRadius: 16, padding: 28, background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <p className="arabic" style={{ fontSize: 20, color: "#c9a84c", marginBottom: 10 }}>وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ</p>
          <p style={{ fontSize: 14, color: "#c4b48a", fontStyle: "italic", marginBottom: 6 }}>&ldquo;Your Lord said: Call upon Me, I will respond to you.&rdquo;</p>
          <p style={{ fontSize: 12, color: "#8a6d2f" }}>Surah Ghafir — 40:60</p>
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <hr className="gold-divider" style={{ border: "none", marginBottom: 24, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }} />
          <p className="arabic" style={{ fontSize: 18, color: "#c9a84c", marginBottom: 8 }}>الدُّعَاءُ هُوَ الْعِبَادَةُ</p>
          <p style={{ fontSize: 13, color: "#c4b48a", fontStyle: "italic" }}>&ldquo;Dua is worship.&rdquo;</p>
          <p style={{ fontSize: 11, color: "#8a6d2f", marginTop: 6 }}>Abu Dawud & Tirmidhi</p>
        </div>
      </div>
    </div>
  );
}
