import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dilip B K - Portfolio",
  description:
    "Software engineer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
  keywords: [
    "portfolio",
    "developer",
    "software engineer",
    "web development",
    "full-stack",
    "React",
    "JavaScript",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`min-h-screen font-sans antialiased ${fontSans.variable}`}
      >
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col">
            <CustomCursor />
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </SmoothScroll>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
