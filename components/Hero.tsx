'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import Image from 'next/image';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Enhanced Neon Laser Beams Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-1 h-96 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/3 w-1 h-80 bg-gradient-to-b from-green-500 via-blue-500 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-1/3 w-1 h-72 bg-gradient-to-b from-yellow-500 via-red-500 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-0 right-1/4 w-1 h-64 bg-gradient-to-b from-cyan-500 via-pink-500 to-transparent animate-pulse delay-1500"></div>
        
        {/* Additional neon tubes for more dramatic effect */}
        <div className="absolute top-20 left-1/6 w-1 h-64 bg-gradient-to-b from-magenta-500 via-pink-500 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-32 right-1/6 w-1 h-56 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent animate-pulse delay-1500"></div>
        <div className="absolute top-16 left-1/2 w-1 h-48 bg-gradient-to-b from-yellow-500 via-orange-500 to-transparent animate-pulse delay-2500"></div>
      </div>

      {/* Enhanced Disco Ball Effect */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 via-white to-gray-300 rounded-full shadow-2xl animate-spin">
        <div className="absolute inset-3 bg-black rounded-full"></div>
        <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-3 left-4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-6 left-6 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-white rounded-full"></div>
      </div>

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
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
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

        {/* Countdown Timer */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Limited Time Offer!</span>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Days</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Hours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Minutes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Seconds</div>
            </div>
          </div>
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