import React from "react";
import { Metadata } from "next";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What Is Big Mumbai Game - Complete Guide to Mumbai's Premier Gaming Platform",
  description: "Discover the Big Mumbai Gaming App - an innovative mobile application offering diverse games, multiplayer challenges, and local cultural themes. Learn about features, community engagement, and how to get started.",
  openGraph: {
    title: "What Is Big Mumbai Game - Complete Guide to Mumbai's Premier Gaming Platform",
    description: "Discover the Big Mumbai Gaming App - an innovative mobile application offering diverse games, multiplayer challenges, and local cultural themes.",
    type: "article",
    url: "https://bigmumbaiwin.com/welcome-to-big-mumbai-game",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Big Mumbai Game - Complete Guide to Mumbai's Premier Gaming Platform",
    description: "Discover the Big Mumbai Gaming App - an innovative mobile application offering diverse games, multiplayer challenges, and local cultural themes.",
  },
};

export default function BlogPostPage() {
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
              What Is Big Mumbai Game
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Written by Big Mumbai Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2024</span>
              </div>
            </div>
          </div>

          {/* Header Image */}
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/luxurious-casino-big-mumbai-game.jpeg"
                alt="BIG MUMBAI - Luxurious casino-themed gaming platform featuring roulette wheel, playing cards, dice, casino chips, and luxury cars against a futuristic Mumbai cityscape with neon lights and golden accents"
                fill
                className="object-cover"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="prose prose-invert max-w-none">
              
              <div className="mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  The Big Mumbai Gaming App is an innovative mobile application that offers a wide array of games ranging from traditional card games to modern multiplayer challenges. Tailored to appeal to Mumbai's diverse population, the app integrates local themes and cultural elements, creating a unique gaming experience that resonates with its users.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6">Key Features</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-300 mb-3">Diverse Game Selection</h3>
                    <p className="text-gray-300">
                      Whether you're a fan of strategy games, quizzes, or casual puzzles, the Big Mumbai Gaming App has something for everyone. Users can easily switch between genres, ensuring that boredom is never an option.
                    </p>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-300 mb-3">Multiplayer Mode</h3>
                    <p className="text-gray-300">
                      One of the app's standout features is its multiplayer functionality. Players can challenge friends or connect with new opponents, fostering a sense of competition and community. This feature is particularly popular among those looking to engage with fellow gamers from different parts of the city.
                    </p>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-300 mb-3">Local Themes and Challenges</h3>
                    <p className="text-gray-300">
                      The app frequently hosts themed events that celebrate Mumbai's culture and festivals. From Diwali challenges to Mumbai-specific trivia, players can immerse themselves in local traditions while gaming.
                    </p>
                  </div>
                  
                  <div className="bg-orange-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-300 mb-3">User-Friendly Interface</h3>
                    <p className="text-gray-300">
                      Designed with accessibility in mind, the app boasts a sleek and intuitive interface. Even novice gamers can easily navigate through its features, making it welcoming for all age groups.
                    </p>
                  </div>
                  
                  <div className="bg-red-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-300 mb-3">Rewards and Leaderboards</h3>
                    <p className="text-gray-300">
                      Gamification elements such as rewards, badges, and leaderboards keep players motivated. Compete for top spots and earn exclusive in-app rewards, creating a compelling incentive to engage regularly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6">Why the Big Mumbai Game Online</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-300 mb-3">1. Community Engagement</h3>
                    <p className="text-gray-300">
                      The Big Mumbai Gaming App is more than just a gaming platform; it's a community hub. Players can join forums, participate in discussions, and share strategies, fostering a sense of belonging among users. This aspect is crucial in a city like Mumbai, where connections often transcend geographical boundaries.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-300 mb-3">2. Promoting Local Talent</h3>
                    <p className="text-gray-300">
                      By featuring local game developers and artists, the app supports Mumbai's burgeoning tech and creative industries. This focus on local talent not only enriches the app's content but also highlights the city's innovation.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-300 mb-3">3. Accessibility</h3>
                    <p className="text-gray-300">
                      With mobile gaming on the rise, the Big Mumbai Gaming App ensures that entertainment is accessible to everyone, regardless of their background. Its availability on smartphones means that anyone can join in on the fun, whether they're at home or commuting across the city.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6">How to Get Started</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Getting started with the Big Mumbai Gaming App is simple:
                </p>
                
                <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-6">
                  <ol className="space-y-3 text-lg text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="text-yellow-400 font-bold">1.</span>
                      <span>Create an Account: Sign up to personalize your gaming experience. This allows you to track your progress, join teams, and engage with the community.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-yellow-400 font-bold">2.</span>
                      <span>Start Playing: Explore the diverse game offerings, participate in challenges, and connect with other players. Dive into the action and discover what makes the app a hit among Mumbai's gamers.</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6">Conclusion</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The Big Mumbai Gaming App stands at the intersection of culture, community, and competition. As it continues to evolve, it promises to be a significant player in the city's gaming landscape, providing endless entertainment for its users. Whether you're a seasoned gamer or a casual player, this app invites you to join in, connect with others, and experience the thrill of gaming in the vibrant city of Mumbai. Download the app today and unleash your gaming potential!
                </p>
              </div>

              {/* Post Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Post Tags:</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">#Big Mumbai</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">#Big Mumbai Game</span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">#Big Mumbai Game Online</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Ready to Experience Big Mumbai Game?</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Join thousands of players and discover the unique gaming experience that celebrates Mumbai's culture and community.
                  </p>
                  <a 
                    href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Start Playing Now</span>
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-center space-x-6 mt-12">
            <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              <Heart className="w-5 h-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
              <span>Comment</span>
            </button>
          </div>

          {/* Blog Navigation */}
          <div className="mt-16 border-t border-white/20 pt-8">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <span className="text-sm text-gray-400 block mb-2">Previous Post</span>
                <span className="text-gray-500 text-sm">No previous posts yet</span>
              </div>
              
              <div className="text-right">
                <span className="text-sm text-gray-400 block mb-2">Next Post</span>
                <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-4 border border-white/20 hover:bg-gradient-to-r hover:from-yellow-800/40 hover:to-orange-800/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">Coming Soon!</h4>
                  <p className="text-gray-300 text-sm mb-3">Stay tuned for our next exciting blog post about gaming strategies and tips.</p>
                  <div className="flex items-center justify-end space-x-2 text-yellow-400">
                    <span className="text-sm font-medium">Read Next</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
