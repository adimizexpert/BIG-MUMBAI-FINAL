import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyJoin() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">🌟 Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Play Big Mumbai Games & Earn Real Money
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why Big Mumbai Game is the ultimate choice for Indian gamers seeking entertainment, 
            community, and real rewards.
          </p>
        </div>

        {/* Why Join Big Mumbai Game */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Why Join Big Mumbai Game?
              </h3>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  <strong className="text-blue-600">Big Mumbai Game</strong> stands out as India's most trusted and exciting gaming platform. 
                  We've created an environment where gaming meets opportunity, offering players not just entertainment but real chances to win 
                  substantial rewards while building meaningful connections with fellow gamers.
                </p>
                
                <p>
                  Our platform is designed with Indian players in mind, featuring games that resonate with local preferences and cultural elements. 
                  From traditional favorites to modern innovations, every game is carefully crafted to provide an engaging experience that keeps 
                  players coming back for more. The variety ensures there's something for every type of gamer, whether you prefer quick rounds 
                  or strategic gameplay.
                </p>
                
                <p>
                  What truly makes us special is our commitment to community building. Unlike other platforms that focus solely on individual play, 
                  we encourage interaction, strategy sharing, and friendly competition among players. Our real-time chat system allows you to connect 
                  with gamers from across India, creating a sense of belonging and camaraderie that enhances the overall gaming experience.
                </p>
                
                <p>
                  Security and transparency are fundamental to our operations. We understand that players need to trust the platform with their time 
                  and money, which is why we've implemented industry-leading security measures. Our games use certified RNG technology, ensuring 
                  fair play and unbiased results. Additionally, our customer support team is available 24/7 to assist with any questions or concerns.
                </p>
                
                <p>
                  The rewards system is designed to benefit both new and existing players. From generous welcome bonuses to daily login rewards, 
                  seasonal tournaments, and referral commissions, there are multiple ways to maximize your earnings. We believe in rewarding 
                  loyalty and active participation, making every gaming session potentially profitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}