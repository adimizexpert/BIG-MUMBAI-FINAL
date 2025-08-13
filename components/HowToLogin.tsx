'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Smartphone, Globe, Shield, Zap } from 'lucide-react';

export default function HowToLogin() {
  const steps = [
    {
      id: 'step1',
      icon: Globe,
      title: 'Visit the Official Website',
      description: 'Navigate to bigmumbaiwin.com on your web browser. Our platform is optimized for all devices - smartphones, tablets, and computers.',
      color: 'bg-blue-500'
    },
    {
      id: 'step2',
      icon: Smartphone,
      title: 'Click on Login/Register',
      description: 'Find and click the prominent "Login" or "Register" button on the homepage. New users should choose "Register" to create an account.',
      color: 'bg-green-500'
    },
    {
      id: 'step3',
      icon: Shield,
      title: 'Enter Your Credentials',
      description: 'For registration: Input your phone number, create a strong password, and verify your details. For login: Use your registered phone number and password.',
      color: 'bg-purple-500'
    },
    {
      id: 'step4',
      icon: Zap,
      title: 'Start Playing Games',
      description: 'Once logged in, you can immediately start playing color prediction games like Hilo, Aviator, and Win Go to win real money.',
      color: 'bg-orange-500'
    }
  ];

  const benefits = [
    'No download required - play instantly',
    '₹500 welcome bonus for new users',
    'Instant withdrawal to bank/UPI',
    '24/7 customer support in Hindi & English',
    '100% safe and secure platform',
    'Access to exclusive tournaments and events'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="how-to-login">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">🚀 Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            How to Login and Register to Big Mumbai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Big Mumbai is simple and takes just a few minutes. 
            Follow our step-by-step guide to create your account and start winning real money.
          </p>
        </div>

        {/* Step-by-Step Registration Guide */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Step-by-Step Registration Guide
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-400 mb-2">Step {index + 1}</div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-auto transform rotate-90 md:rotate-0" />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Big Mumbai Platform?
            </h3>
            <p className="text-xl text-gray-600">
              Experience the best gaming platform designed specifically for Indian players
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                🎁 Claim Your Welcome Bonus
              </h4>
              <p className="text-gray-600 mb-6">
                New players receive ₹500 as a welcome bonus immediately after registration. 
                This bonus can be used to play games and any winnings can be withdrawn after verification.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                🎮 Register Now & Get ₹500 Bonus!
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-6 px-8 text-xl transition-all duration-300"
              >
                🔐 Login to Your Account
              </Button>
            </div>

            <div className="mt-8 text-gray-600 text-sm">
              <p>✅ 100% Safe & Secure • ✅ Instant Registration • ✅ 24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
