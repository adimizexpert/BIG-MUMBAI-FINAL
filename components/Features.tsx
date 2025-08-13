import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Features() {
  return (
    <section id="games" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">🎮 Platform Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Big Mumbai Games & Features
          </h2>
        </div>

        {/* About Big Mumbai Game Paragraph */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Experience the Ultimate Gaming Platform
              </h3>
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong className="text-blue-600">Big Mumbai Game</strong> is India's premier online gaming platform that brings you an unparalleled gaming experience. 
                  Our platform features over 100+ exciting games including color prediction, lottery, casino games, fishing, and the popular Aviator game, 
                  all designed to provide maximum entertainment and winning opportunities.
                </p>
                
                <p>
                  What sets us apart is our commitment to creating a vibrant gaming community where players can connect, compete, and win together. 
                  With real-time chat features, you can interact with fellow gamers from across India, share strategies, and build lasting friendships. 
                  Our platform operates 24/7, ensuring you can enjoy your favorite games anytime, anywhere without any downloads or installations.
                </p>
                
                <p>
                  Security and fairness are our top priorities. We use bank-level encryption and advanced security protocols to protect your data and transactions. 
                  Every game is powered by certified Random Number Generation (RNG) technology, guaranteeing fair play and unbiased results. 
                  Plus, our instant withdrawal system ensures you receive your winnings quickly and securely.
                </p>
                
                <p>
                  Join our community of 500,000+ active players and start earning amazing rewards today. From daily login bonuses and seasonal tournaments 
                  to exclusive gift codes and referral commissions, there are countless ways to maximize your earnings. 
                  Whether you're a casual gamer or a competitive player, Big Mumbai Game offers something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}