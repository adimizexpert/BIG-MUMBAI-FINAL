import React from "react";
import { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Big Mumbai Game",
  description: "Contact Big Mumbai Game for support and help. Our team will connect with you within 24 hours.",
  openGraph: {
    title: "Contact Us - Big Mumbai Game",
    description: "Contact Big Mumbai Game for support and help. Our team will connect with you within 24 hours.",
    type: "website",
    url: "https://bigmumbaiwin.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Big Mumbai Game",
    description: "Contact Big Mumbai Game for support and help. Our team will connect with you within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400">
            Contact Us
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Drop Us Mail For any kind of Support and Help, Our Team Connect with you in 24 Hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Support Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Support</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <a 
                      href="mailto:info@bigmumbaiwin.com" 
                      className="text-lg text-yellow-400 hover:text-yellow-300 underline font-semibold"
                    >
                      info@bigmumbaiwin.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-green-300 mb-4">Response Time</h2>
                <p className="text-lg text-gray-300">
                  Our dedicated support team will get back to you within <strong className="text-green-400">24 hours</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
              Get in Touch
            </h2>
            <div className="text-center text-gray-300 space-y-4">
              <p className="text-lg">
                Whether you have questions about our games, need technical support, or want to provide feedback, 
                we're here to help!
              </p>
              <p className="text-lg">
                <strong className="text-yellow-400">Email us anytime</strong> and we'll respond within 24 hours 
                to ensure you get the assistance you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
