"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostPage() {
  // Interactive states
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(28);
  const [commentCount, setCommentCount] = useState(12);
  const [shareCount, setShareCount] = useState(8);

  // Event handlers
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "How To Register For An Account On Big Mumbai App - Complete Guide",
      text: "Learn how to register for Big Mumbai App in simple steps. Get your invitation code and start earning money through exciting color prediction games.",
      url: "https://bigmumbaiwin.com/how-to-register-big-mumbai-app"
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareCount(prev => prev + 1);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard! Share it with your friends.");
        setShareCount(prev => prev + 1);
      }
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  const handleComment = () => {
    const commentSection = document.getElementById('comment-section');
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("Comment feature coming soon! Stay tuned for community discussions.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blogs</span>
            </Link>
          </div>

          {/* Blog Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How To Register For An Account On Big Mumbai App
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Written by Big Mumbai Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>January 13, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>

            {/* Category Badge */}
            <div className="inline-block bg-green-500 text-black text-sm font-bold px-4 py-2 rounded-full">
              Getting Started
            </div>
          </div>

          {/* Header Image */}
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/blogs/how-to-register-big-mumbai-app-header.jpg"
                alt="Big Mumbai App registration guide - Step by step process to create account and start playing color prediction games"
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Registering for a new account on the Big Mumbai App only takes a few simple steps. The first thing you'll need is a Big Mumbai invitation code. With this code <strong className="text-yellow-400">5154350250</strong>, you can create your account and start playing right away.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              Step-by-Step Registration Guide
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Visit the Big Mumbai Official Site</h3>
                    <p className="text-gray-300">Click the register button below to visit the official Big Mumbai website.</p>
                    <div className="mt-4">
                      <a 
                        href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                      >
                        🎮 Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Click on Account Tab and Register</h3>
                    <p className="text-gray-300">Click on the "Account" tab and then click "Register". You will see the registration interface.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Fill Your Details</h3>
                    <p className="text-gray-300">Enter your mobile number, create an 8-14 digit password, and use the invitation code <strong className="text-yellow-400">54147218367</strong>.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Use the Big Mumbai Invitation Code</h3>
                    <p className="text-gray-300">The Big Mumbai invite code is <strong className="text-yellow-400">54147218367</strong> - make sure to enter this correctly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Complete Registration</h3>
                    <p className="text-gray-300">Click on the register button, and you will create a new account on the Big Mumbai App.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Games Available on Big Mumbai App
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Big Mumbai is an innovative color prediction website that offers an exciting opportunity to earn money through various engaging games, including popular options like:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h4 className="font-semibold text-white mb-2">🎯 Prediction Games</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Lottery</li>
                  <li>• Mini Game (Aviator)</li>
                  <li>• PVC</li>
                  <li>• Wingo</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h4 className="font-semibold text-white mb-2">🎮 Casino Games</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Fishing</li>
                  <li>• Casino</li>
                  <li>• Slots</li>
                  <li>• Sports</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With a wide array of games to choose from, players have a multitude of avenues for increasing their earnings. By trying your hand at all the games featured on the Big Mumbai platform, you'll not only have a better grasp of these prediction-based games but also increase your potential to earn money seamlessly.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              Big Mumbai Game Promotion & Earnings
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The Big Mumbai Game offers a promotion program that allows you to invite your friends and earn money from them. Through the Big Mumbai promotion program, you have the opportunity to earn income across four different levels.
            </p>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-6 border border-white/20 mb-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">💰 How the Referral System Works</h3>
              <p className="text-gray-300 mb-4">
                This method is helping people earn lakhs. The scheme works like this: imagine you've invited 20 people to join. They start building a team, which ultimately becomes your team.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>You receive a 0.6% daily commission for up to 6 levels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Daily salary of up to ₹10,000 when your referrals deposit and play games</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>First recharge bonus when someone recharges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Active downline reward that can earn you lakhs of rupees</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">📱 How to Access Promotion Tab</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">Step 1: Open the Big Mumbai app or visit the website</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">Step 2: Click on the "Promotion" tab</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">Step 3: Find your unique invitation code and invitation link to share with friends</p>
              </div>
            </div>

            <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🎁 Big Mumbai Invitation Code</h3>
              <p className="text-gray-300 mb-4">
                The Big Mumbai Game invitation code is <strong className="text-yellow-400 text-xl">54147218367</strong>. You can enter this code while registering on the Big Mumbai app to receive a Big Mumbai gift code worth ₹10 – ₹100.
              </p>
              <div className="text-center">
                <a 
                  href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-200"
                >
                  🚀 Use Code: 54147218367
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              How To Withdraw Money On Big Mumbai Game
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Follow these simple steps to know how to withdraw money from Big Mumbai Game:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300"><strong>Step 1:</strong> Click on Account and then click on Withdraw</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300"><strong>Step 2:</strong> You'll see "Add a bank account number" - click on that</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300"><strong>Step 3:</strong> Fill your bank account details correctly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300"><strong>Step 4:</strong> Congratulations! Now click on withdraw. Minimum withdrawal amount is ₹110. It usually takes 1-2 hours and sometimes up to 24 hours to process.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Big Mumbai Customer Support
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Big Mumbai offers 24/7 customer support. At the moment, the Big Mumbai Telegram channel is not available. The app solely provides one type of support, which is through live chat. You can access this live chat feature on the Big Mumbai app or website.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center my-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Big Mumbai Journey?
              </h3>
              <p className="text-red-100 mb-6 text-lg">
                Join thousands of players who are already earning money through Big Mumbai Game!
              </p>
              <a 
                href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                🎮 Register Now & Start Earning
              </a>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likeCount}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors duration-200"
            >
              <Share2 className="w-5 h-5" />
              <span>{shareCount}</span>
            </button>

            <button
              onClick={handleComment}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{commentCount}</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <p className="text-sm text-gray-400 mb-2">Previous Post</p>
                <Link 
                  href="/blogs" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  ← Back to All Blogs
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-2">Next Post</p>
                <Link 
                  href="/welcome-to-big-mumbai-game" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  What Is Big Mumbai Game →
                </Link>
              </div>
            </div>
          </div>

          {/* Comment Section Placeholder */}
          <div id="comment-section" className="mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Comments</h3>
              <p className="text-gray-400 text-center py-8">
                Comment feature coming soon! Stay tuned for community discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
