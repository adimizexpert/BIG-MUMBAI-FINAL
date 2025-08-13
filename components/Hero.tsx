'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Trophy, Users, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
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
      {/* Enhanced Neon Laser Beams Effect - Matching the image */}
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

      {/* Enhanced Disco Ball Effect - More realistic */}
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
        {/* Hero Image at the Top */}
        <div className="mb-12">
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
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🔥 Trending
            </div>
          </div>
        </div>

        {/* Text Content Below Image */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-yellow-400 drop-shadow-lg">BIG MUMBAI GAME</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Experience the ultimate gaming platform where every second brings excitement and rewards!
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mx-auto mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">500K+</div>
              <div className="text-sm text-gray-400">Active Players</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mx-auto mb-2">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-gray-400">Games</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-2">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">₹10L+</div>
              <div className="text-sm text-gray-400">Rewards Given</div>
            </div>
          </div>

          {/* Full Width CTA Buttons - Prominently Visible */}
          <div className="w-full mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  size="lg" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-8 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  🎮 Login
                </Button>
              </a>
              <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  🎯 Register
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-6 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Welcome To Big Mumbai Game
          </h2>
        </div>
      </div>

      {/* Informational Text Section */}
      <div className="py-16 bg-gray-900 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-300">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              <strong className="text-yellow-400">Big Mumbai Game</strong> is an online Gaming Platform to win rewards in every second. 
              We provide multiple bonuses and commission on every referral.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Our platform provides predictions that can help in winning possibility. We offer various games like 
              <strong className="text-green-400"> Lottery, Casino, Fishing and Aviator</strong> etc.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              <strong className="text-blue-400">Big Mumbai Game</strong> also Provide Video Tutorial That can help to play the game safely.
            </p>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              It's an <strong className="text-yellow-400">Online Free Platform</strong>, and you can play without Downloading app, 
              through our official Website. Just follow the Login – Register Link Mention Below.
            </p>

            {/* Mid-Page CTA Buttons - Full Width */}
            <div className="w-full mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    size="lg" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    🎮 Login
                  </Button>
                </a>
                <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    🎯 Register
                  </Button>
                </a>
              </div>
            </div>

            {/* Gift Code Section */}
            <div className="bg-gradient-to-r from-orange-700 to-orange-800 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Big Mumbai Game Gift Code that help in Bonus
              </h3>
              <p className="text-lg text-orange-100">
                Use our exclusive gift codes to unlock amazing bonuses and rewards!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA Buttons */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <div className="flex gap-3">
          <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              🎮 Login
            </Button>
          </a>
          <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button 
              size="lg" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              🎯 Sign Up
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}