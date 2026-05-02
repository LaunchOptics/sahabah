import Link from "next/link";
import { getDailyAyah } from "@/data/ayahs";

const features = [
  { href: "/daily-deen", emoji: "📖", title: "Daily Deen", arabic: "الدِّين اليَومي", desc: "Begin each day with an ayah from the Quran, a hadith of the Prophet ﷺ, and the 99 Names of Allah to reflect on.", color: "#c9a84c" },
  { href: "/heroes", emoji: "🌟", title: "Muslim Heroes", arabic: "أَبطَال الإسلام", desc: "Discover the scholars, explorers, scientists, and leaders who shaped civilization and carried the torch of knowledge.", color: "#a78bfa" },
  { href: "/seerah", emoji: "🕌", title: "Seerah", arabic: "السِّيرَة النَّبَوِيَّة", desc: "Walk through the blessed life of the Prophet ﷺ — from his birth in Mecca to his farewell pilgrimage.", color: "#38bdf8" },
  { href: "/duas", emoji: "🤲", title: "Dua Companion", arabic: "رَفِيق الدُّعَاء", desc: "Duas for every moment of your day — from waking up to studying, traveling, eating, and sleeping.", color: "#34d399" },
];

export default function HomePage() {
  const ayah = getDailyAyah();

  return (
    <div style={{ width: "100%" }}>
      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
          <p className="arabic float" style={{ fontSize: 28, color: "#c9a84c", marginBottom: 32 }}>
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          <h1 className="cinzel" style={{ fontSize: "clamp(56px,8vw,96px)", fontWeight: 700, marginBottom: 20, lineHeight: 1.1, background: "linear-gradient(135deg,#c9a84c,#e8c97a,#c9a84c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Noor
          </h1>

          <p className="cinzel" style={{ fontSize: "clamp(14px,2vw,20px)", color: "#c4b48a", letterSpacing: "0.1em", marginBottom: 20 }}>
            نُورٌ عَلَى نُورٍ &nbsp;·&nbsp; Light Upon Light
          </p>

          <p style={{ fontSize: 16, color: "#c4b48a", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
            A space for Bayaan Academy students to grow in their deen — through the words of Allah, the wisdom of His Prophet ﷺ, and the legacy of those who came before us.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/daily-deen" className="pulse-gold" style={{
              padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 600,
              background: "linear-gradient(135deg,#c9a84c,#8a6d2f)", color: "#080c18",
              textDecoration: "none", boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
              display: "inline-block",
            }}>
              Start Your Day ✦
            </Link>
            <Link href="/seerah" style={{
              padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 600,
              color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)",
              textDecoration: "none", display: "inline-block",
            }}>
              Explore Seerah
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Ayah */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{
          maxWidth: 760, margin: "0 auto",
          background: "linear-gradient(135deg,rgba(201,168,76,0.07),rgba(138,109,47,0.04))",
          border: "1px solid rgba(201,168,76,0.2)", borderRadius: 20,
          padding: "40px 40px", textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%,rgba(201,168,76,0.06) 0%,transparent 60%)", pointerEvents: "none" }} />
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6d2f", marginBottom: 24 }}>✦ Today&apos;s Ayah ✦</p>
          <p className="arabic" style={{ fontSize: "clamp(20px,3vw,30px)", color: "#e8c97a", marginBottom: 24 }}>{ayah.arabic}</p>
          <hr className="gold-divider" style={{ margin: "0 auto 24px", border: "none", maxWidth: 200 }} />
          <p style={{ fontSize: 16, color: "#c4b48a", fontStyle: "italic", marginBottom: 12 }}>&ldquo;{ayah.translation}&rdquo;</p>
          <p style={{ fontSize: 13, color: "#8a6d2f", marginBottom: 24 }}>Surah {ayah.surah} — {ayah.ayahNumber}</p>
          <Link href="/daily-deen" style={{ color: "#c9a84c", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            See today&apos;s hadith &amp; more →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="cinzel" style={{ fontSize: 36, fontWeight: 700, color: "#f0e6cc", marginBottom: 12 }}>What&apos;s Inside</h2>
            <p style={{ color: "#c4b48a" }}>Four gateways to strengthen your deen</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {features.map(f => (
              <Link key={f.href} href={f.href} className="glass-card" style={{ display: "block", padding: 32, textDecoration: "none" }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: `${f.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{f.emoji}</div>
                  <div>
                    <h3 className="cinzel" style={{ fontSize: 18, fontWeight: 600, color: f.color, marginBottom: 4 }}>{f.title}</h3>
                    <p className="arabic" style={{ fontSize: 14, color: "#8a6d2f", marginBottom: 10 }}>{f.arabic}</p>
                    <p style={{ fontSize: 13, color: "#c4b48a", lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ padding: "0 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <hr className="gold-divider" style={{ border: "none", marginBottom: 32 }} />
          <p className="arabic" style={{ fontSize: 22, color: "#c9a84c", marginBottom: 12 }}>وَقُل رَّبِّ زِدْنِي عِلْمًا</p>
          <p style={{ fontSize: 13, color: "#c4b48a", fontStyle: "italic" }}>&ldquo;And say: My Lord, increase me in knowledge.&rdquo;</p>
          <p style={{ fontSize: 11, color: "#8a6d2f", marginTop: 8 }}>Surah Ta-Ha — 20:114</p>
        </div>
      </section>
    </div>
  );
}
