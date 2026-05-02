"use client";
import { useState } from "react";
import { ninetyNineNames } from "@/data/names";

export default function NamesCarousel() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const name = ninetyNineNames[idx];

  function prev() { setFlipped(false); setIdx(i => (i - 1 + 99) % 99); }
  function next() { setFlipped(false); setIdx(i => (i + 1) % 99); }

  return (
    <div style={{ background: "rgba(15,22,41,0.7)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 20, padding: 32 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <h2 className="cinzel" style={{ fontSize: 20, fontWeight: 700, color: "#c9a84c" }}>99 Names of Allah</h2>
        <span style={{ fontSize: 13, color: "#8a6d2f" }}>{idx + 1} / 99</span>
      </div>

      {/* Card */}
      <div onClick={() => setFlipped(f => !f)} style={{
        borderRadius: 14, padding: 32, textAlign: "center", cursor: "pointer", marginBottom: 24,
        minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: flipped ? "rgba(201,168,76,0.08)" : "rgba(201,168,76,0.04)",
        border: "1px solid rgba(201,168,76,0.15)", transition: "background 0.3s",
      }}>
        {!flipped ? (
          <>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 12 }}>#{name.number}</p>
            <p className="arabic" style={{ fontSize: 36, color: "#e8c97a", marginBottom: 12 }}>{name.arabic}</p>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#c9a84c", marginBottom: 6 }}>{name.transliteration}</p>
            <p style={{ fontSize: 14, color: "#c4b48a", marginBottom: 16 }}>{name.meaning}</p>
            <p style={{ fontSize: 11, color: "#8a6d2f" }}>Tap to reflect</p>
          </>
        ) : (
          <>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 16 }}>Reflection</p>
            <p style={{ fontSize: 15, color: "#c4b48a", fontStyle: "italic", lineHeight: 1.7, maxWidth: 300 }}>&ldquo;{name.reflection}&rdquo;</p>
            <p style={{ fontSize: 11, color: "#8a6d2f", marginTop: 20 }}>Tap to go back</p>
          </>
        )}
      </div>

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={prev} style={{ padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", background: "rgba(201,168,76,0.08)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>← Prev</button>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {[-2,-1,0,1,2].map(offset => {
            const i = (idx + offset + 99) % 99;
            const cur = offset === 0;
            return (
              <button key={i} onClick={() => { setFlipped(false); setIdx(i); }} style={{
                width: cur ? 20 : 6, height: 6, borderRadius: 3, cursor: "pointer",
                background: cur ? "#c9a84c" : "rgba(201,168,76,0.3)", border: "none",
                transition: "all 0.2s",
              }} />
            );
          })}
        </div>
        <button onClick={next} style={{ padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", background: "rgba(201,168,76,0.08)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>Next →</button>
      </div>
    </div>
  );
}
