'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Disclaimer', href: '/disclaimer' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-700' 
        : 'bg-black/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/big-mumbai-logo.jpg"
                alt="Big Mumbai Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">BIG MUMBAI</h1>
              <p className="text-xs text-yellow-400">Gaming Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-300 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className={`border-2 transition-all duration-200 ${
                  isScrolled 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}
              >
                🔐 Login
              </Button>
            </a>
            <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🎮 Register
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-gray-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    🔐 Login
                  </Button>
                </a>
                <a href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                  >
                    🎮 Register
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
