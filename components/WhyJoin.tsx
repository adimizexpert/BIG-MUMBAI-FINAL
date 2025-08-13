import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, TrendingUp, Heart, Zap, Gift, Users } from 'lucide-react';

export default function WhyJoin() {
  const benefits = [
    {
      icon: Star,
      title: 'Premium Gaming Experience',
      description: 'High-quality games with smooth gameplay and stunning graphics.',
      color: 'bg-yellow-500'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Improve your strategic thinking and problem-solving skills.',
      color: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Unwind and relax with entertaining games after a busy day.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Entertainment',
      description: 'Jump into games immediately without any waiting or downloads.',
      color: 'bg-green-500'
    },
    {
      icon: Gift,
      title: 'Daily Rewards',
      description: 'Earn points, bonuses, and prizes just by playing regularly.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Social Connection',
      description: 'Meet like-minded players and build lasting friendships.',
      color: 'bg-indigo-500'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">🌟 Member Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Play Big Mumbai Games & Earn Real Money
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing benefits that await you as a Big Mumbai Game member. 
            From exclusive rewards to lasting friendships, here's what you'll gain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}