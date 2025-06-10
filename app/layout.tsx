import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import CutoutTextLoader from "../others/loadingscreen";
import React from "react";
import Home from "../WebseiteKomponenten/home";
import Aboutme from "../WebseiteKomponenten/aboutme";
import Projects from "../WebseiteKomponenten/projects";
import Contact from "../WebseiteKomponenten/contact";
import { cn } from "@/lib/utils";
import { Glow } from "@/others/glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hari Gian - Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased relative min-h-screen bg-black"
        )}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <Glow variant="center" className="opacity-50 scale-125 blur-3xl" />
        </div>

        <div className="flex flex-col min-h-screen relative z-10">
          <Header />

          <main className="flex-grow">
            <section id="home" className="min-h-screen">
              <Home />
            </section>

            <section id="about" className="min-h-screen">
              <Aboutme />
            </section>

            <section id="projects" className="min-h-screen">
              <Projects />
            </section>

            <section id="contact" className="min-h-screen">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
