import Link from "next/link";
import { getDailyAyah } from "@/data/ayahs";

const features = [
  {
    href: "/daily-deen",
    emoji: "📖",
    title: "Daily Deen",
    arabic: "الدِّين اليَومي",
    description:
      "Begin each day with an ayah from the Quran, a hadith of the Prophet ﷺ, and the 99 Names of Allah to reflect on.",
    color: "#c9a84c",
    glow: "rgba(201, 168, 76, 0.12)",
  },
  {
    href: "/heroes",
    emoji: "🌟",
    title: "Muslim Heroes",
    arabic: "أَبطَال الإسلام",
    description:
      "Discover the scholars, explorers, scientists, and leaders who shaped civilization and carried the torch of knowledge.",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.12)",
  },
  {
    href: "/seerah",
    emoji: "🕌",
    title: "Seerah",
    arabic: "السِّيرَة النَّبَوِيَّة",
    description:
      "Walk through the blessed life of the Prophet ﷺ — from his birth in Mecca to his farewell pilgrimage.",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.12)",
  },
  {
    href: "/duas",
    emoji: "🤲",
    title: "Dua Companion",
    arabic: "رَفِيق الدُّعَاء",
    description:
      "Duas for every moment of your day — from waking up to studying, traveling, eating, and sleeping.",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.12)",
  },
];

export default function HomePage() {
  const ayah = getDailyAyah();

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201, 168, 76, 0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="arabic text-3xl md:text-4xl mb-8 float" style={{ color: "#c9a84c" }}>
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Noor
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl font-light mb-4 tracking-widest"
            style={{ color: "#c4b48a", fontFamily: "'Cinzel', serif" }}
          >
            نُورٌ عَلَى نُورٍ &nbsp;·&nbsp; Light Upon Light
          </p>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#c4b48a" }}
          >
            A space for Bayaan Academy students to grow in their deen — through the words
            of Allah, the wisdom of His Prophet ﷺ, and the legacy of those who came before us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/daily-deen"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #8a6d2f)",
                color: "#080c18",
                boxShadow: "0 4px 24px rgba(201, 168, 76, 0.35)",
              }}
            >
              Start Your Day ✦
            </Link>
            <Link
              href="/seerah"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300"
              style={{
                color: "#c9a84c",
                border: "1px solid rgba(201, 168, 76, 0.4)",
              }}
            >
              Explore Seerah
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Ayah Banner */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(201, 168, 76, 0.07), rgba(138, 109, 47, 0.04))",
              border: "1px solid rgba(201, 168, 76, 0.2)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(201, 168, 76, 0.06) 0%, transparent 60%)",
              }}
            />
            <div className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#8a6d2f" }}>
              ✦ Today&apos;s Ayah ✦
            </div>
            <p className="arabic text-2xl md:text-3xl mb-6" style={{ color: "#e8c97a" }}>
              {ayah.arabic}
            </p>
            <div className="gold-divider my-6" />
            <p className="text-base md:text-lg italic mb-3" style={{ color: "#c4b48a" }}>
              &ldquo;{ayah.translation}&rdquo;
            </p>
            <p className="text-sm mb-6" style={{ color: "#8a6d2f" }}>
              Surah {ayah.surah} — {ayah.ayahNumber}
            </p>
            <Link href="/daily-deen" className="text-sm font-medium" style={{ color: "#c9a84c" }}>
              See today&apos;s hadith &amp; more →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: "#f0e6cc" }}
            >
              What&apos;s Inside
            </h2>
            <p style={{ color: "#c4b48a" }}>Four gateways to strengthen your deen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="glass glass-hover rounded-2xl p-8 group block"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-4xl w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: feature.glow }}
                  >
                    {feature.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: feature.color, fontFamily: "'Cinzel', serif" }}
                      >
                        {feature.title}
                      </h3>
                      <span className="text-lg transition-all duration-300 opacity-50 group-hover:opacity-100" style={{ color: feature.color }}>→</span>
                    </div>
                    <p className="text-sm mb-3 arabic" style={{ color: "#8a6d2f", fontSize: "1rem" }}>
                      {feature.arabic}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#c4b48a" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Ayah */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <p className="arabic text-2xl mb-4" style={{ color: "#c9a84c" }}>
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
          <p className="text-sm italic" style={{ color: "#c4b48a" }}>
            &ldquo;And say: My Lord, increase me in knowledge.&rdquo;
          </p>
          <p className="text-xs mt-2" style={{ color: "#8a6d2f" }}>Surah Ta-Ha — 20:114</p>
        </div>
      </section>
    </div>
  );
}
