import { getDailyAyah } from "@/data/ayahs";
import { getDailyHadith } from "@/data/hadiths";
import DhikrCounter from "@/components/DhikrCounter";
import NamesCarousel from "@/components/NamesCarousel";

export default function DailyDeenPage() {
  const ayah = getDailyAyah();
  const hadith = getDailyHadith();
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const sectionStyle: React.CSSProperties = { marginBottom: 24 };
  const cardBase: React.CSSProperties = { borderRadius: 20, padding: "40px", position: "relative", overflow: "hidden" };

  return (
    <div style={{ width: "100%", padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 12 }}>{today}</p>
          <h1 className="cinzel" style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#c9a84c", marginBottom: 12 }}>Daily Deen</h1>
          <p style={{ color: "#c4b48a" }}>Nourish your soul — one day at a time.</p>
        </div>

        {/* Ayah */}
        <div style={sectionStyle}>
          <div style={{ ...cardBase, background: "linear-gradient(135deg,rgba(201,168,76,0.08),rgba(138,109,47,0.04))", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📖</div>
              <div>
                <h2 className="cinzel" style={{ fontSize: 17, fontWeight: 700, color: "#c9a84c" }}>Ayah of the Day</h2>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: "rgba(201,168,76,0.1)", color: "#8a6d2f", border: "1px solid rgba(201,168,76,0.2)" }}>{ayah.theme}</span>
              </div>
            </div>
            <p className="arabic" style={{ fontSize: "clamp(20px,3vw,28px)", color: "#e8c97a", textAlign: "center", marginBottom: 24 }}>{ayah.arabic}</p>
            <hr className="gold-divider" style={{ border: "none", margin: "0 auto 24px", maxWidth: 200 }} />
            <p style={{ textAlign: "center", fontSize: 13, color: "#c4b48a", fontStyle: "italic", marginBottom: 8 }}>{ayah.transliteration}</p>
            <p style={{ textAlign: "center", fontSize: 17, color: "#f0e6cc", marginBottom: 12 }}>&ldquo;{ayah.translation}&rdquo;</p>
            <p style={{ textAlign: "center", fontSize: 13, color: "#8a6d2f" }}>Surah {ayah.surah} — {ayah.ayahNumber}</p>
          </div>
        </div>

        {/* Hadith */}
        <div style={sectionStyle}>
          <div style={{ ...cardBase, background: "linear-gradient(135deg,rgba(56,189,248,0.06),rgba(8,145,178,0.03))", border: "1px solid rgba(56,189,248,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(56,189,248,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>☽</div>
              <div>
                <h2 className="cinzel" style={{ fontSize: 17, fontWeight: 700, color: "#38bdf8" }}>Hadith of the Day</h2>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: "rgba(56,189,248,0.1)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}>{hadith.theme}</span>
              </div>
            </div>
            <p className="arabic" style={{ fontSize: "clamp(18px,2.5vw,24px)", color: "#7dd3fc", textAlign: "center", marginBottom: 24 }}>{hadith.arabic}</p>
            <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(56,189,248,0.3),transparent)", margin: "0 auto 24px", maxWidth: 200 }} />
            <p style={{ textAlign: "center", fontSize: 17, color: "#f0e6cc", marginBottom: 12 }}>&ldquo;{hadith.translation}&rdquo;</p>
            <p style={{ textAlign: "center", fontSize: 13, color: "#8a6d2f" }}>Narrated by {hadith.narrator} · {hadith.source}</p>
          </div>
        </div>

        {/* Dhikr + 99 Names */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, marginTop: 8 }}>
          <DhikrCounter />
          <NamesCarousel />
        </div>

        {/* Closing */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <hr className="gold-divider" style={{ border: "none", marginBottom: 28, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }} />
          <p className="arabic" style={{ fontSize: 20, color: "#c9a84c", marginBottom: 10 }}>اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا</p>
          <p style={{ fontSize: 13, color: "#c4b48a", fontStyle: "italic" }}>&ldquo;O Allah, I ask You for beneficial knowledge.&rdquo;</p>
        </div>
      </div>
    </div>
  );
}
