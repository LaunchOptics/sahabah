import { getDailyAyah } from "@/data/ayahs";
import { getDailyHadith } from "@/data/hadiths";
import DhikrCounter from "@/components/DhikrCounter";
import NamesCarousel from "@/components/NamesCarousel";

export default function DailyDeenPage() {
  const ayah = getDailyAyah();
  const hadith = getDailyHadith();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page-enter pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d2f" }}>
            {today}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
          >
            Daily Deen
          </h1>
          <p style={{ color: "#c4b48a" }}>
            Nourish your soul — one day at a time.
          </p>
        </div>

        {/* Ayah of the Day */}
        <section className="mb-8">
          <div
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(138, 109, 47, 0.04))",
              border: "1px solid rgba(201, 168, 76, 0.2)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: "rgba(201, 168, 76, 0.15)" }}
              >
                📖
              </div>
              <div>
                <h2
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c" }}
                >
                  Ayah of the Day
                </h2>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(201, 168, 76, 0.1)",
                    color: "#8a6d2f",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                  }}
                >
                  {ayah.theme}
                </span>
              </div>
            </div>

            <p
              className="arabic text-2xl md:text-3xl text-center mb-6 leading-loose"
              style={{ color: "#e8c97a" }}
            >
              {ayah.arabic}
            </p>

            <div className="gold-divider my-6" />

            <p
              className="text-center text-sm italic mb-2"
              style={{ color: "#c4b48a", fontStyle: "italic" }}
            >
              {ayah.transliteration}
            </p>

            <p
              className="text-center text-base md:text-lg mb-4"
              style={{ color: "#f0e6cc" }}
            >
              &ldquo;{ayah.translation}&rdquo;
            </p>

            <p className="text-center text-sm" style={{ color: "#8a6d2f" }}>
              Surah {ayah.surah} &nbsp;—&nbsp; {ayah.ayahNumber}
            </p>
          </div>
        </section>

        {/* Hadith of the Day */}
        <section className="mb-8">
          <div
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(56, 189, 248, 0.06), rgba(8, 145, 178, 0.03))",
              border: "1px solid rgba(56, 189, 248, 0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: "rgba(56, 189, 248, 0.1)" }}
              >
                ☽
              </div>
              <div>
                <h2
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Cinzel', serif", color: "#38bdf8" }}
                >
                  Hadith of the Day
                </h2>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(56, 189, 248, 0.1)",
                    color: "#38bdf8",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    opacity: 0.8,
                  }}
                >
                  {hadith.theme}
                </span>
              </div>
            </div>

            <p
              className="arabic text-xl md:text-2xl text-center mb-6 leading-loose"
              style={{ color: "#7dd3fc" }}
            >
              {hadith.arabic}
            </p>

            <div
              className="my-6"
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)",
              }}
            />

            <p
              className="text-center text-base md:text-lg mb-4"
              style={{ color: "#f0e6cc" }}
            >
              &ldquo;{hadith.translation}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-3 text-sm" style={{ color: "#8a6d2f" }}>
              <span>Narrated by {hadith.narrator}</span>
              <span>·</span>
              <span>{hadith.source}</span>
            </div>
          </div>
        </section>

        {/* Dhikr Counter + 99 Names — 2 col on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <DhikrCounter />
          <NamesCarousel />
        </div>

        {/* Closing reminder */}
        <div className="mt-16 text-center">
          <div className="gold-divider mb-8" />
          <p className="arabic text-xl mb-3" style={{ color: "#c9a84c" }}>
            اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا
          </p>
          <p className="text-sm italic" style={{ color: "#c4b48a" }}>
            &ldquo;O Allah, I ask You for beneficial knowledge.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
