import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Noor — Islamic Inspiration for Bayaan Academy",
  description: "Daily ayahs, hadiths, Muslim heroes, Seerah, and duas. Built for Bayaan Academy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ paddingTop: "80px" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
