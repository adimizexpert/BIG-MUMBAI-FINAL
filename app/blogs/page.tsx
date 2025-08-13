import React from "react";
import { Metadata } from "next";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

// Blog data - Add new blogs here
const blogPosts = [
  {
    id: "how-to-register",
    title: "How To Register For An Account On Big Mumbai App",
    slug: "how-to-register-big-mumbai-app",
    excerpt: "Learn how to register for Big Mumbai App in simple steps. Get your invitation code and start earning money through exciting color prediction games.",
    author: "Aditya",
    date: "2025-01-13",
    readTime: "7 min read",
    category: "Getting Started",
    featured: true,
    image: "/images/blogs/how-to-register-big-mumbai-app-header.jpg"
  },
  {
    id: "welcome-guide",
    title: "What Is Big Mumbai Game",
    slug: "welcome-to-big-mumbai-game",
    excerpt: "Discover the Big Mumbai Gaming App - an innovative mobile application offering diverse games, multiplayer challenges, and local cultural themes.",
    author: "Aditya",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Getting Started",
    featured: false,
    image: "/images/luxurious-casino-big-mumbai-game.jpeg"
  }
];

export default function BlogsPage() {
  const featuredBlog = blogPosts.find(blog => blog.featured);
  const regularBlogs = blogPosts.filter(blog => !blog.featured);

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
          {featuredBlog && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Featured Post</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredBlog.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredBlog.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="inline-block bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
                      {featuredBlog.category}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredBlog.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {featuredBlog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400">{featuredBlog.author}</span>
                      </div>
                      <Link 
                        href={`/${featuredBlog.slug}`}
                        className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
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
          )}

          {/* All Blog Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">All Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((blog) => (
                <div key={blog.id} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                  {/* Blog Thumbnail Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={`${blog.title} - Big Mumbai Game Blog`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      quality={80}
                    />
                    <div className="absolute top-3 left-3">
                      <div className="inline-block bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        {blog.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {blog.readTime}
                      </div>
                      <Link 
                        href={`/${blog.slug}`}
                        className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors duration-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
