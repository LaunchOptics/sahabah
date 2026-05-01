"use client";

import { useState } from "react";
import { ninetyNineNames } from "@/data/names";

export default function NamesCarousel() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const name = ninetyNineNames[current];

  function prev() {
    setFlipped(false);
    setCurrent((c) => (c - 1 + ninetyNineNames.length) % ninetyNineNames.length);
  }

  function next() {
    setFlipped(false);
    setCurrent((c) => (c + 1) % ninetyNineNames.length);
  }

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
        >
          99 Names of Allah
        </h2>
        <span className="text-sm" style={{ color: "#8a6d2f" }}>
          {current + 1} / 99
        </span>
      </div>

      {/* Card */}
      <div
        className="rounded-xl p-8 text-center cursor-pointer mb-6 transition-all duration-300 min-h-[220px] flex flex-col items-center justify-center"
        style={{
          background: flipped
            ? "rgba(201, 168, 76, 0.08)"
            : "rgba(201, 168, 76, 0.04)",
          border: "1px solid rgba(201, 168, 76, 0.15)",
        }}
        onClick={() => setFlipped(!flipped)}
      >
        {!flipped ? (
          <>
            <div
              className="text-sm mb-4 font-medium tracking-widest uppercase"
              style={{ color: "#8a6d2f" }}
            >
              #{name.number}
            </div>
            <p className="arabic text-4xl mb-4" style={{ color: "#e8c97a" }}>
              {name.arabic}
            </p>
            <p className="text-lg font-semibold mb-1" style={{ color: "#c9a84c" }}>
              {name.transliteration}
            </p>
            <p className="text-sm" style={{ color: "#c4b48a" }}>
              {name.meaning}
            </p>
            <p className="text-xs mt-4" style={{ color: "#8a6d2f" }}>
              Tap to reflect
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#8a6d2f" }}>
              Reflection
            </p>
            <p
              className="text-base leading-relaxed italic"
              style={{ color: "#c4b48a", maxWidth: "360px" }}
            >
              &ldquo;{name.reflection}&rdquo;
            </p>
            <p className="text-xs mt-6" style={{ color: "#8a6d2f" }}>
              Tap to go back
            </p>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            background: "rgba(201, 168, 76, 0.08)",
            color: "#c9a84c",
            border: "1px solid rgba(201, 168, 76, 0.2)",
          }}
        >
          ← Previous
        </button>

        {/* Dots (showing 5 around current) */}
        <div className="flex gap-1.5 items-center">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const idx = (current + offset + 99) % 99;
            const isCurrent = offset === 0;
            return (
              <button
                key={idx}
                onClick={() => { setFlipped(false); setCurrent(idx); }}
                className="rounded-full transition-all duration-200"
                style={{
                  width: isCurrent ? "20px" : "6px",
                  height: "6px",
                  background: isCurrent ? "#c9a84c" : "rgba(201, 168, 76, 0.3)",
                }}
              />
            );
          })}
        </div>

        <button
          onClick={next}
          className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            background: "rgba(201, 168, 76, 0.08)",
            color: "#c9a84c",
            border: "1px solid rgba(201, 168, 76, 0.2)",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
