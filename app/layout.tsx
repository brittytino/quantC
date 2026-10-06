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
  title: "⚛️ Quantum Machine Learning with Python | College Technical Presentation",
  description:
    "Interactive 8-slide presentation deck and live Python/Qiskit Variational Quantum Classifier (VQC) demonstration.",
  keywords: ["Quantum Machine Learning", "QML", "Qiskit", "Python", "VQC", "Quantum Computing", "AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="h-full w-full bg-[#050505] text-slate-100 overflow-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
