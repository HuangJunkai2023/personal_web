import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junkai Huang — Engineer, Builder, Maker",
  description: "Personal site of a student engineer focused on embedded systems, robotics, and embodied AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-[family-name:var(--font-geist-sans)]">
        <LangProvider>
          <Navbar />
          <div className="flex-1 pt-16">{children}</div>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
