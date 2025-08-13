"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostPage() {
  // Interactive states - Update these values for your blog
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);

  // Blog metadata - UPDATE THESE VALUES
  const blogData = {
    title: "YOUR BLOG TITLE HERE",
    author: "Author Name",
    date: "YYYY-MM-DD",
    readTime: "X min read",
    category: "Gaming Tips",
    metaDescription: "Your meta description for SEO",
    keywords: "keyword1, keyword2, keyword3",
    headerImage: "/images/blogs/your-blog-header-image.jpg",
    headerImageAlt: "Descriptive alt text for your header image"
  };

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
      title: blogData.title,
      text: blogData.metaDescription,
      url: `https://bigmumbaiwin.com/${window.location.pathname}`
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
              {blogData.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Written by {blogData.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{blogData.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{blogData.readTime}</span>
              </div>
            </div>

            {/* Category Badge */}
            <div className="inline-block bg-yellow-500 text-black text-sm font-bold px-4 py-2 rounded-full">
              {blogData.category}
            </div>
          </div>

          {/* Header Image */}
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={blogData.headerImage}
                alt={blogData.headerImageAlt}
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            {/* REPLACE THIS SECTION WITH YOUR BLOG CONTENT */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This is where your blog content goes. Replace this paragraph with your actual blog content.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              Your First Subheading
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Add more paragraphs here. You can include multiple sections with different headings.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">
              Sub-subheading Example
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Continue with your content. You can add:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Bullet points like this</li>
              <li>More bullet points</li>
              <li>And even more points</li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Conclude your blog post with a strong ending that encourages engagement.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 text-center my-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Play Big Mumbai Game?
              </h3>
              <p className="text-yellow-100 mb-4">
                Put your new knowledge to the test and start winning today!
              </p>
              <a 
                href="https://www.bigmumbaij.com/#/register?invitationCode=54147218367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                🎮 Start Playing Now
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
                  href="/blogs" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  More Gaming Tips →
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
