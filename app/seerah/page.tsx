"use client";
import { useState } from "react";
import { seerahEvents, type SeerahEvent } from "@/data/seerah";

const typeConfig = {
  revelation: { color: "#c9a84c", icon: "📖", label: "Revelation" },
  migration:  { color: "#38bdf8", icon: "🌊", label: "Migration" },
  battle:     { color: "#f87171", icon: "⚔️",  label: "Battle" },
  personal:   { color: "#a78bfa", icon: "❤️",  label: "Personal" },
  treaty:     { color: "#34d399", icon: "🤝", label: "Treaty" },
  milestone:  { color: "#fb923c", icon: "⭐", label: "Milestone" },
};

const emotionBg: Record<string, string> = {
  joyful:     "rgba(52,211,153,0.06)",
  difficult:  "rgba(248,113,113,0.06)",
  triumphant: "rgba(251,146,60,0.06)",
  profound:   "rgba(201,168,76,0.06)",
  solemn:     "rgba(167,139,250,0.06)",
};
const emotionBorder: Record<string, string> = {
  joyful:     "rgba(52,211,153,0.2)",
  difficult:  "rgba(248,113,113,0.2)",
  triumphant: "rgba(251,146,60,0.2)",
  profound:   "rgba(201,168,76,0.2)",
  solemn:     "rgba(167,139,250,0.2)",
};

function EventCard({ event, open, onToggle }: { event: SeerahEvent; open: boolean; onToggle: () => void }) {
  const t = typeConfig[event.type];
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 16 }}>
      {/* Timeline dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, paddingTop: 6 }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          background: open ? t.color : `${t.color}30`,
          border: `2px solid ${t.color}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
          boxShadow: open ? `0 0 20px ${t.color}50` : "none",
          transition: "all 0.3s",
        }}>{open ? t.icon : ""}</div>
        <div style={{ width: 2, flex: 1, minHeight: 40, background: "linear-gradient(to bottom,rgba(201,168,76,0.3),rgba(201,168,76,0.05))", marginTop: 4 }} />
      </div>

      {/* Card */}
      <div style={{ flex: 1 }}>
        <button onClick={onToggle} style={{
          width: "100%", textAlign: "left", cursor: "pointer", borderRadius: 16, padding: 24,
          background: open ? emotionBg[event.emotion] : "rgba(15,22,41,0.5)",
          border: open ? `1px solid ${emotionBorder[event.emotion]}` : "1px solid rgba(201,168,76,0.1)",
          boxShadow: open ? "0 8px 32px rgba(0,0,0,0.2)" : "none",
          transition: "all 0.3s", marginBottom: 8,
        }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
            <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}>{t.icon} {t.label}</span>
            <span style={{ fontSize: 12, color: "#8a6d2f" }}>{event.year}{event.hijriYear ? ` · ${event.hijriYear}` : ""}</span>
          </div>

          <h3 className="cinzel" style={{ fontSize: 17, fontWeight: 700, color: "#f0e6cc", marginBottom: 4 }}>{event.title}</h3>
          {event.arabicTitle && <p className="arabic" style={{ fontSize: 14, color: t.color, opacity: 0.8, marginBottom: 8 }}>{event.arabicTitle}</p>}

          <p style={{ fontSize: 14, color: "#c4b48a", lineHeight: 1.65 }}>
            {open ? event.description : `${event.description.slice(0, 130)}...`}
          </p>

          {open && (
            <div style={{ marginTop: 16, borderRadius: 10, padding: 16, background: emotionBg[event.emotion], border: `1px solid ${emotionBorder[event.emotion]}` }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 8 }}>Why This Matters</p>
              <p style={{ fontSize: 13, color: "#c4b48a", lineHeight: 1.7, fontStyle: "italic" }}>{event.significance}</p>
            </div>
          )}

          <p style={{ fontSize: 12, color: t.color, opacity: 0.7, marginTop: 12 }}>
            {open ? "↑ Tap to collapse" : "Tap to read more →"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default function SeerahPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ width: "100%", padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 12 }}>✦ The Blessed Life ✦</p>
          <h1 className="cinzel" style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#c9a84c", marginBottom: 12 }}>Seerah</h1>
          <p className="arabic" style={{ fontSize: 22, color: "#e8c97a", marginBottom: 12 }}>السِّيرَة النَّبَوِيَّة</p>
          <p style={{ fontSize: 15, color: "#c4b48a", maxWidth: 520, margin: "0 auto" }}>The life of the Prophet Muhammad ﷺ — the most studied, most loved, most followed human being in history.</p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }}>
          {Object.entries(typeConfig).map(([k, v]) => (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, background: `${v.color}10`, border: `1px solid ${v.color}25`, color: v.color, fontSize: 12 }}>
              <span>{v.icon}</span><span>{v.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          {seerahEvents.map(e => (
            <EventCard key={e.id} event={e} open={open === e.id} onToggle={() => setOpen(p => p === e.id ? null : e.id)} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <hr className="gold-divider" style={{ border: "none", marginBottom: 28, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }} />
          <p className="arabic" style={{ fontSize: 20, color: "#c9a84c", marginBottom: 10 }}>لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ</p>
          <p style={{ fontSize: 13, color: "#c4b48a", fontStyle: "italic" }}>&ldquo;There has certainly been for you in the Messenger of Allah an excellent example.&rdquo;</p>
          <p style={{ fontSize: 11, color: "#8a6d2f", marginTop: 6 }}>Surah Al-Ahzab — 33:21</p>
        </div>
      </div>
    </div>
  );
}
