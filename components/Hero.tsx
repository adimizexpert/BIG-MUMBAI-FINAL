'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* 1. Hero Image - Below Top Bar */}
        <div className="mb-6">
          <div className="relative w-full h-96 lg:h-[500px] overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <Image
              src="/images/glamorous-woman-big-mumbai-game.jpeg"
              alt="Glamorous young woman with long wavy hair wearing shimmering silver top, playing colorful board game with neon lights and disco ball in background - Big Mumbai Game"
              fill
              className="object-contain"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Trending Badge - Top Right */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              🔥 Trending
            </div>
          </div>
        </div>

        {/* 2. Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to Big Mumbai Game
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Login and play exciting color prediction games, win real money, and claim your exclusive welcome bonus and gift codes
          </p>
        </div>

        {/* 3. Full Width Login/Register Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            onClick={() => window.open('https://www.bigmumbaij.com/#/register?invitationCode=54147218367', '_blank', 'rel=noopener noreferrer')}
          >
            🎮 Register Now & Get ₹500 Bonus!
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 text-lg backdrop-blur-md transition-all duration-300"
            onClick={() => window.open('https://www.bigmumbaij.com/#/register?invitationCode=54147218367', '_blank', 'rel=noopener noreferrer')}
          >
            Login
          </Button>
        </div>

        {/* 4. About Big Mumbai Game Content */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            About Big Mumbai Game
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Experience the ultimate gaming platform where entertainment meets opportunity. Big Mumbai Game offers a diverse collection of engaging games designed to provide both fun and potential rewards. Our platform is built with cutting-edge technology to ensure smooth gameplay and secure transactions.
          </p>
        </div>

        {/* Floating Register Button for Mobile */}
        <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            onClick={() => window.open('https://www.bigmumbaij.com/#/register?invitationCode=54147218367', '_blank', 'rel=noopener noreferrer')}
          >
            🎯 Register
          </Button>
        </div>
      </div>
    </section>
  );
}