import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Noor — Islamic Inspiration for Bayaan Academy",
  description:
    "Daily ayahs, hadiths, Muslim heroes, the Seerah of the Prophet ﷺ, and duas for every moment. Built for Bayaan Academy students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col star-pattern">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
