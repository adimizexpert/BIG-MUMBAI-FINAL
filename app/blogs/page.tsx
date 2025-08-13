import React from "react";
import { Metadata } from "next";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs - Big Mumbai Game",
  description: "Read the latest blogs, tips, and insights about Big Mumbai Game platform, gaming strategies, and community updates.",
  openGraph: {
    title: "Blogs - Big Mumbai Game",
    description: "Read the latest blogs, tips, and insights about Big Mumbai Game platform, gaming strategies, and community updates.",
    type: "website",
    url: "https://bigmumbaiwin.com/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - Big Mumbai Game",
    description: "Read the latest blogs, tips, and insights about Big Mumbai Game platform, gaming strategies, and community updates.",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400">
            Big Mumbai Game Blogs
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover gaming insights, tips, strategies, and the latest updates from Big Mumbai Game
            </p>
          </div>

          {/* Featured Blog Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Featured Post</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>December 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    What Is Big Mumbai Game
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Discover the Big Mumbai Gaming App - an innovative mobile application offering diverse games, 
                    multiplayer challenges, and local cultural themes. Learn about features, community engagement, 
                    and how to get started.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-400">Big Mumbai Team</span>
                    </div>
                    <a 
                      href="/welcome-to-big-mumbai-game" 
                      className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <h4 className="text-xl font-bold text-white mb-2">Featured Article</h4>
                  <p className="text-blue-100">Essential reading for all Big Mumbai Game players</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Gaming Tips</h3>
              <p className="text-gray-400">Strategies and tips to improve your gaming skills</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Platform Updates</h3>
              <p className="text-gray-400">Latest features and improvements to Big Mumbai Game</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400">Stories and highlights from our gaming community</p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-green-400 mb-4">More Blog Posts Coming Soon!</h3>
              <p className="text-lg text-gray-300">
                We're working on creating more valuable content for our gaming community. 
                Stay tuned for tips, strategies, and exciting updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
