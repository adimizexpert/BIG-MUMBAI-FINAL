import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Big Mumbai App - Our Story, Mission & Gaming Vision",
  description: "Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity. Join our gaming community!",
  openGraph: {
    title: "About Big Mumbai App - Our Story, Mission & Gaming Vision",
    description: "Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity.",
    type: "website",
    url: "https://bigmumbaiwin.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Big Mumbai App - Our Story, Mission & Gaming Vision",
    description: "Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Big Mumbai
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Founded in the heart of Mumbai, Big Mumbai is more than just a game
          — it's a vibrant community for gamers who love challenge, creativity,
          and connection. Our mission is to bring the energy of the city into
          every gaming experience.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          From immersive visuals to competitive events, we strive to make Big
          Mumbai the go-to hub for players seeking fun, fairness, and a shared
          passion for gaming.
        </p>
      </div>
    </main>
  );
}
