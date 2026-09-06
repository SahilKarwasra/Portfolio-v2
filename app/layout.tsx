import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const title = "Sahil Karwasra | Software Engineer";
const description =
  "Android-first, full-stack mobile engineer. Kotlin, Jetpack Compose, Flutter and the cloud behind them. Shipped fintech super apps and live-streaming platforms. MSc Advanced Computing Science at the University of East Anglia. Open to new roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilkarwasra.app"),
  title,
  description,
  keywords: [
    "Sahil Karwasra",
    "Software Engineer",
    "Android Engineer",
    "Kotlin",
    "Jetpack Compose",
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sahil Karwasra, Software Engineer" }],
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
  themeColor: "#FFD23F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
