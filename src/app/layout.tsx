import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Climavise tech | Heal the Land. Feed the People. Protect the Future.",
  description:
    "AI-driven platforms for sustainable agriculture and environmental protection. Eza Climavise delivers agriculture intelligence; Climavise delivers environmental intelligence across forests, wetlands, and vital ecosystems.",
  keywords:
    "Climavise, Eza Climavise, AI agriculture, precision agriculture, crop disease detection, forest protection, deforestation detection, satellite radar, environmental surveillance, conservation, Rwanda, Africa, GLOC 2026",
  authors: [{ name: "Climavise tech" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
