import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilkarwasra.app"),
  title: "Sahil Karwasra — Software Engineer",
  description:
    "Full-stack mobile engineer in Delhi, India. Kotlin, Jetpack Compose, Flutter and the cloud behind them — fintech super apps, real-time platforms, production code since 2024.",
  keywords: [
    "Sahil Karwasra",
    "Software Engineer",
    "Android Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Delhi",
  ],
  openGraph: {
    title: "Sahil Karwasra — Software Engineer",
    description:
      "Full-stack mobile engineer in Delhi, India. Fintech super apps, real-time platforms, Kotlin-first.",
    url: "https://sahilkarwasra.app",
    siteName: "Sahil Karwasra",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sahil Karwasra — Software Engineer" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Karwasra — Software Engineer",
    description: "Full-stack mobile engineer in Delhi, India.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E9E5DC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${grotesk.variable} ${jbmono.variable}`}>
      <body className="noise">{children}</body>
    </html>
  );
}
