"use client";

import { useState } from "react";

const dhikrOptions = [
  { arabic: "سُبْحَانَ اللهِ", transliteration: "SubhanAllah", meaning: "Glory be to Allah", target: 33 },
  { arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillah", meaning: "All praise is for Allah", target: 33 },
  { arabic: "اللهُ أَكْبَرُ", transliteration: "Allahu Akbar", meaning: "Allah is the Greatest", target: 34 },
  { arabic: "لَا إِلَهَ إِلَّا اللهُ", transliteration: "La ilaha illallah", meaning: "There is no god but Allah", target: 100 },
  { arabic: "أَسْتَغْفِرُ اللهَ", transliteration: "Astaghfirullah", meaning: "I seek forgiveness from Allah", target: 100 },
];

export default function DhikrCounter() {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const current = dhikrOptions[selected];
  const progress = Math.min((count / current.target) * 100, 100);

  function handleTap() {
    if (count < current.target) {
      const newCount = count + 1;
      setCount(newCount);
      if (newCount >= current.target) setCompleted(true);
    }
  }

  function reset() {
    setCount(0);
    setCompleted(false);
  }

  function selectDhikr(idx: number) {
    setSelected(idx);
    setCount(0);
    setCompleted(false);
  }

  return (
    <div className="glass rounded-2xl p-8">
      <h2
        className="text-2xl font-bold mb-2 text-center"
        style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
      >
        Dhikr Counter
      </h2>
      <p className="text-center text-sm mb-8" style={{ color: "#8a6d2f" }}>
        Tap the circle to count your dhikr
      </p>

      {/* Dhikr Selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {dhikrOptions.map((d, i) => (
          <button
            key={i}
            onClick={() => selectDhikr(i)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
            style={{
              background: selected === i ? "rgba(201, 168, 76, 0.2)" : "rgba(201, 168, 76, 0.05)",
              border: selected === i ? "1px solid rgba(201, 168, 76, 0.5)" : "1px solid rgba(201, 168, 76, 0.15)",
              color: selected === i ? "#c9a84c" : "#c4b48a",
            }}
          >
            {d.transliteration}
          </button>
        ))}
      </div>

      {/* Progress Ring + Tap Button */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* SVG ring */}
          <svg width="200" height="200" className="rotate-[-90deg]">
            <circle
              cx="100" cy="100" r="88"
              fill="none"
              stroke="rgba(201, 168, 76, 0.1)"
              strokeWidth="8"
            />
            <circle
              cx="100" cy="100" r="88"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 88}`}
              strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a84c" />
                <stop offset="100%" stopColor="#e8c97a" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center tap area */}
          <button
            onClick={handleTap}
            disabled={completed}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full transition-all duration-150 active:scale-95"
            style={{
              background: completed
                ? "rgba(201, 168, 76, 0.15)"
                : "rgba(201, 168, 76, 0.05)",
              cursor: completed ? "default" : "pointer",
            }}
          >
            {completed ? (
              <div className="text-center">
                <div className="text-3xl mb-1">✓</div>
                <div className="text-xs" style={{ color: "#c9a84c" }}>Masha&apos;Allah!</div>
              </div>
            ) : (
              <div className="text-center">
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ color: "#e8c97a", fontFamily: "'Cinzel', serif" }}
                >
                  {count}
                </div>
                <div className="text-xs" style={{ color: "#8a6d2f" }}>
                  / {current.target}
                </div>
              </div>
            )}
          </button>
        </div>

        {/* Current dhikr display */}
        <div className="text-center">
          <p className="arabic text-2xl mb-2" style={{ color: "#e8c97a" }}>
            {current.arabic}
          </p>
          <p className="text-sm font-medium mb-1" style={{ color: "#c9a84c" }}>
            {current.transliteration}
          </p>
          <p className="text-xs" style={{ color: "#8a6d2f" }}>
            {current.meaning}
          </p>
        </div>

        <button
          onClick={reset}
          className="text-xs px-4 py-2 rounded-lg transition-all duration-200"
          style={{
            color: "#8a6d2f",
            border: "1px solid rgba(201, 168, 76, 0.15)",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
