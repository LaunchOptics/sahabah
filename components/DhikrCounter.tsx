"use client";
import { useState } from "react";

const options = [
  { arabic: "سُبْحَانَ اللهِ", trans: "SubhanAllah", meaning: "Glory be to Allah", target: 33 },
  { arabic: "الْحَمْدُ لِلَّهِ", trans: "Alhamdulillah", meaning: "All praise is for Allah", target: 33 },
  { arabic: "اللهُ أَكْبَرُ", trans: "Allahu Akbar", meaning: "Allah is the Greatest", target: 34 },
  { arabic: "لَا إِلَهَ إِلَّا اللهُ", trans: "La ilaha illallah", meaning: "There is no god but Allah", target: 100 },
  { arabic: "أَسْتَغْفِرُ اللهَ", trans: "Astaghfirullah", meaning: "I seek forgiveness from Allah", target: 100 },
];

export default function DhikrCounter() {
  const [sel, setSel] = useState(0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const cur = options[sel];
  const pct = Math.min((count / cur.target) * 100, 100);
  const R = 88;
  const circ = 2 * Math.PI * R;

  function tap() {
    if (count < cur.target) {
      const n = count + 1;
      setCount(n);
      if (n >= cur.target) setDone(true);
    }
  }

  function reset() { setCount(0); setDone(false); }

  function pick(i: number) { setSel(i); setCount(0); setDone(false); }

  return (
    <div style={{ background: "rgba(15,22,41,0.7)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 20, padding: 32 }}>
      <h2 className="cinzel" style={{ fontSize: 20, fontWeight: 700, color: "#c9a84c", textAlign: "center", marginBottom: 8 }}>Dhikr Counter</h2>
      <p style={{ fontSize: 13, color: "#8a6d2f", textAlign: "center", marginBottom: 24 }}>Tap the circle to count</p>

      {/* Selector */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 28 }}>
        {options.map((o, i) => (
          <button key={i} onClick={() => pick(i)} style={{
            padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer",
            background: sel === i ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.05)",
            color: sel === i ? "#c9a84c" : "#c4b48a",
            border: sel === i ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.15)",
          }}>{o.trans}</button>
        ))}
      </div>

      {/* Ring */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ position: "relative", width: 200, height: 200 }}>
          <svg width="200" height="200" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="8" />
            <circle cx="100" cy="100" r={R} fill="none" stroke="url(#g)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)}
              style={{ transition: "stroke-dashoffset 0.3s ease" }} />
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a84c" />
                <stop offset="100%" stopColor="#e8c97a" />
              </linearGradient>
            </defs>
          </svg>
          <button onClick={tap} disabled={done} style={{
            position: "absolute", inset: 0, borderRadius: "50%", border: "none", cursor: done ? "default" : "pointer",
            background: done ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.04)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          }}>
            {done ? (
              <>
                <span style={{ fontSize: 28, color: "#c9a84c" }}>✓</span>
                <span style={{ fontSize: 11, color: "#c9a84c" }}>Masha&apos;Allah!</span>
              </>
            ) : (
              <>
                <span className="cinzel" style={{ fontSize: 36, fontWeight: 700, color: "#e8c97a" }}>{count}</span>
                <span style={{ fontSize: 11, color: "#8a6d2f" }}>/ {cur.target}</span>
              </>
            )}
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
          <p className="arabic" style={{ fontSize: 22, color: "#e8c97a", marginBottom: 6 }}>{cur.arabic}</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#c9a84c", marginBottom: 4 }}>{cur.trans}</p>
          <p style={{ fontSize: 12, color: "#8a6d2f" }}>{cur.meaning}</p>
        </div>

        <button onClick={reset} style={{ fontSize: 12, padding: "8px 16px", borderRadius: 8, cursor: "pointer", background: "transparent", color: "#8a6d2f", border: "1px solid rgba(201,168,76,0.15)" }}>Reset</button>
      </div>
    </div>
  );
}
