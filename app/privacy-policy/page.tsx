import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Big Mumbai Game",
  description: "Privacy Policy for Big Mumbai Game - Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy - Big Mumbai Game",
    description: "Privacy Policy for Big Mumbai Game - Learn how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://bigmumbaiwin.com/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Big Mumbai Game",
    description: "Privacy Policy for Big Mumbai Game - Learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400">
            Privacy Policy
          </h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                <strong>Last updated:</strong> December 2024
              </p>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  At Big Mumbai Games, we value your privacy and are committed to protecting your personal information. 
                  This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our 
                  website or use our services.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">1. Information We Collect</h2>
                  <p className="text-lg leading-relaxed">We may collect the following types of information:</p>
                  
                  <div className="ml-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-300">Personal Information:</h3>
                      <p>This includes your name, email address, contact details, and any other information you provide when you create an account, subscribe to our newsletter, or participate in our events.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-300">Usage Data:</h3>
                      <p>We automatically collect information about your interactions with our website, including your IP address, browser type, pages visited, and the time and date of your visit.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-300">Cookies:</h3>
                      <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us recognize you and remember your preferences. You can manage your cookie settings through your browser.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">2. How We Use Your Information</h2>
                  <p className="text-lg leading-relaxed">We may use your information for the following purposes:</p>
                  
                  <div className="ml-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-green-300">To Provide Services:</h3>
                      <p>To manage your account, process transactions, and deliver the services you request.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-green-300">To Improve Our Website:</h3>
                      <p>To analyze usage patterns and improve the functionality and user experience of our website.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-green-300">To Communicate With You:</h3>
                      <p>To send you updates, newsletters, promotional materials, and other information that may be of interest to you.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-green-300">To Enhance Security:</h3>
                      <p>To monitor for suspicious activity and protect our website from potential threats.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">3. Sharing Your Information</h2>
                  <p className="text-lg leading-relaxed">
                    We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  
                  <div className="ml-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-300">With Service Providers:</h3>
                      <p>We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that they agree to keep your information confidential.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-purple-300">For Legal Reasons:</h3>
                      <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">4. Data Security</h2>
                  <p className="text-lg leading-relaxed">
                    We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. 
                    However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot 
                    guarantee its absolute security.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">5. Your Rights</h2>
                  <p className="text-lg leading-relaxed">You have the right to:</p>
                  
                  <div className="ml-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-orange-300">Access Your Information:</h3>
                      <p>Request a copy of the personal information we hold about you.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-orange-300">Update Your Information:</h3>
                      <p>Request corrections to any inaccurate or incomplete information.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-orange-300">Withdraw Consent:</h3>
                      <p>Opt-out of receiving marketing communications at any time.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">6. Third-Party Links</h2>
                  <p className="text-lg leading-relaxed">
                    Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. 
                    We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
                  <p className="text-lg leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 
                    effective date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">8. Contact Us</h2>
                  <p className="text-lg leading-relaxed">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  
                  <div className="bg-blue-900/30 rounded-lg p-6 mt-4">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">Big Mumbai Games</h3>
                    <p className="text-lg">Email: <a href="mailto:info@bigmumbaiwin.com" className="text-yellow-400 hover:text-yellow-300 underline">info@bigmumbaiwin.com</a></p>
                  </div>
                </div>

                <div className="bg-green-900/30 rounded-lg p-6 mt-8 text-center">
                  <p className="text-lg font-semibold text-green-300">
                    Thank you for trusting Big Mumbai Games with your personal information. Your privacy is important to us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
