"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/daily-deen", label: "Daily Deen" },
  { href: "/heroes", label: "Muslim Heroes" },
  { href: "/seerah", label: "Seerah" },
  { href: "/duas", label: "Dua Companion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    padding: scrolled ? "12px 24px" : "18px 24px",
    background: scrolled ? "rgba(8,12,24,0.96)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "linear-gradient(135deg,#c9a84c,#8a6d2f)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, boxShadow: "0 0 20px rgba(201,168,76,0.3)",
        }}>☽</div>
        <span className="cinzel" style={{
          fontSize: 20, fontWeight: 700,
          background: "linear-gradient(135deg,#c9a84c,#e8c97a)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Noor</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
        {links.map(l => {
          const active = pathname === l.href;
          return (
            <Link key={l.href} href={l.href} style={{
              padding: "8px 16px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              textDecoration: "none",
              color: active ? "#c9a84c" : "#c4b48a",
              background: active ? "rgba(201,168,76,0.1)" : "transparent",
              border: active ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
              transition: "all 0.2s",
            }}>{l.label}</Link>
          );
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
        className="show-mobile"
        aria-label="Menu"
      >
        <div style={{ width: 24, height: 2, background: "#c9a84c", marginBottom: 5, borderRadius: 2, transition: "all 0.3s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
        <div style={{ width: 24, height: 2, background: "#c9a84c", marginBottom: 5, borderRadius: 2, opacity: open ? 0 : 1, transition: "all 0.3s" }} />
        <div style={{ width: 24, height: 2, background: "#c9a84c", borderRadius: 2, transition: "all 0.3s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 16, right: 16,
          background: "rgba(10,15,30,0.98)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: 16, padding: 12, backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              padding: "12px 16px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              textDecoration: "none",
              color: pathname === l.href ? "#c9a84c" : "#c4b48a",
              background: pathname === l.href ? "rgba(201,168,76,0.1)" : "transparent",
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </nav>
  );
}
