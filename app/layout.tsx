import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Sahil Karwasra | Software Engineer";
const description =
  "Go / Golang developer and backend engineer with mobile expertise. High-performance APIs, real-time WebSockets, and clean production architectures. MSc Advanced Computing Science at University of East Anglia. Open to new roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilkarwasra.app"),
  title,
  description,
  keywords: [
    "Sahil Karwasra",
    "Go Developer",
    "Golang Developer",
    "Backend Engineer",
    "Software Engineer",
    "Go",
    "Gin",
    "WebSockets",
    "Android",
    "Kotlin",
    "Flutter",
    "Norwich",
    "University of East Anglia",
    "United Kingdom",
  ],
  openGraph: {
    title,
    description,
    url: "https://sahilkarwasra.app",
    siteName: "Sahil Karwasra",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sahil Karwasra, Go Developer & Backend Engineer" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
