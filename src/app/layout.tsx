import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Analoguenews — The daily pulse of analogue photography",
  description:
    "News, guides, film stock reference, and tools for the analogue photography community. No paywall, no gatekeeping.",
  keywords: [
    "analogue photography",
    "film photography",
    "film stocks",
    "darkroom",
    "exposure calculator",
    "film news",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
