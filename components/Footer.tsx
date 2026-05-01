import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-24 py-12 px-6"
      style={{ borderTop: "1px solid rgba(201, 168, 76, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #8a6d2f)" }}
            >
              ☽
            </div>
            <div>
              <div
                className="text-lg font-bold"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Noor
              </div>
              <div className="text-xs" style={{ color: "#8a6d2f" }}>
                Bayaan Academy
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm" style={{ color: "#c4b48a" }}>
            <Link href="/daily-deen" className="hover:text-[#c9a84c] transition-colors">Daily Deen</Link>
            <Link href="/heroes" className="hover:text-[#c9a84c] transition-colors">Heroes</Link>
            <Link href="/seerah" className="hover:text-[#c9a84c] transition-colors">Seerah</Link>
            <Link href="/duas" className="hover:text-[#c9a84c] transition-colors">Duas</Link>
          </div>

          {/* Tagline */}
          <div
            className="text-sm text-center md:text-right"
            style={{ color: "#8a6d2f" }}
          >
            <div className="arabic text-base" style={{ color: "#c9a84c" }}>
              نُورٌ عَلَى نُورٍ
            </div>
            <div className="text-xs mt-1">Light upon Light</div>
          </div>
        </div>

        <div
          className="mt-8 pt-8 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(201, 168, 76, 0.08)",
            color: "#8a6d2f",
          }}
        >
          Made with ❤️ for Bayaan Academy students — may your knowledge be a light in this world and the next.
        </div>
      </div>
    </footer>
  );
}
