import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,168,76,0.1)", padding: "48px 24px", marginTop: 80 }}>
      <style>{`
        .footer-link { color: #c4b48a; text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: #c9a84c; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#8a6d2f)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>☽</div>
            <div>
              <div className="cinzel" style={{ fontSize: 18, fontWeight: 700, background: "linear-gradient(135deg,#c9a84c,#e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Noor</div>
              <div style={{ fontSize: 11, color: "#8a6d2f" }}>Bayaan Academy</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link href="/daily-deen" className="footer-link">Daily Deen</Link>
            <Link href="/heroes" className="footer-link">Heroes</Link>
            <Link href="/seerah" className="footer-link">Seerah</Link>
            <Link href="/duas" className="footer-link">Duas</Link>
          </div>

          <div style={{ textAlign: "right" }}>
            <div className="arabic" style={{ fontSize: 16, color: "#c9a84c" }}>نُورٌ عَلَى نُورٍ</div>
            <div style={{ fontSize: 11, color: "#8a6d2f", marginTop: 4 }}>Light upon Light</div>
          </div>
        </div>

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(201,168,76,0.08)", textAlign: "center", fontSize: 12, color: "#8a6d2f" }}>
          Made with ❤️ for Bayaan Academy — may your knowledge be a light in this world and the next.
        </div>
      </div>
    </footer>
  );
}
