import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Big Mumbai Game",
  description: "Terms of Service for Big Mumbai Game - Read our terms and conditions for using our gaming platform.",
  openGraph: {
    title: "Terms of Service - Big Mumbai Game",
    description: "Terms of Service for Big Mumbai Game - Read our terms and conditions for using our gaming platform.",
    type: "website",
    url: "https://bigmumbaiwin.com/terms-of-service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Big Mumbai Game",
    description: "Terms of Service for Big Mumbai Game - Read our terms and conditions for using our gaming platform.",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400">
            Terms of Service
          </h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                <strong>Effective Date:</strong> 02 Feb 2025
              </p>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Welcome to Big Mumbai Games! These Terms of Service ("Terms") govern your use of our website, services, 
                  and any related features operated by Big Mumbai Games ("we," "our," "us"). By accessing or using our 
                  website or services, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">1. Eligibility</h2>
                  <p className="text-lg leading-relaxed">
                    You must be at least 18 years old (or the legal age in your jurisdiction) to create an account or use our services.
                  </p>
                  <p className="text-lg leading-relaxed">
                    By using our services, you confirm that you meet these requirements and that all information you provide is accurate and truthful.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">2. Account Registration</h2>
                  <div className="ml-6 space-y-3">
                    <p>To access certain features, you may need to create an account.</p>
                    <p>You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.</p>
                    <p>You agree to notify us immediately of any unauthorized use of your account.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">3. Use of Services</h2>
                  <p className="text-lg leading-relaxed">
                    You agree to use our services for lawful purposes only and in compliance with these Terms. You must not:
                  </p>
                  <div className="ml-6 space-y-3">
                    <p>• Engage in any fraudulent, deceptive, or harmful activities.</p>
                    <p>• Attempt to disrupt, damage, or gain unauthorized access to our systems.</p>
                    <p>• Use our services for any illegal or prohibited activity under applicable laws.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">4. Intellectual Property</h2>
                  <p className="text-lg leading-relaxed">
                    All content on our website, including text, images, graphics, logos, and software, is the property of 
                    Big Mumbai Games or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-lg leading-relaxed">
                    You may not copy, reproduce, modify, distribute, or create derivative works without our prior written consent.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">5. Payments & Transactions</h2>
                  <p className="text-lg leading-relaxed">
                    If you purchase services or participate in paid activities, you agree to provide accurate payment information 
                    and authorize us (or our third-party payment processor) to charge the applicable fees.
                  </p>
                  <p className="text-lg leading-relaxed">All fees are non-refundable unless otherwise stated.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">6. Disclaimer of Warranties</h2>
                  <p className="text-lg leading-relaxed">
                    Our services are provided "as is" and "as available" without any warranties, express or implied. We do not guarantee:
                  </p>
                  <div className="ml-6 space-y-3">
                    <p>• That our services will be error-free, secure, or uninterrupted.</p>
                    <p>• The accuracy, reliability, or completeness of any content.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">7. Limitation of Liability</h2>
                  <p className="text-lg leading-relaxed">
                    To the fullest extent permitted by law, Big Mumbai Games shall not be liable for:
                  </p>
                  <div className="ml-6 space-y-3">
                    <p>• Any indirect, incidental, special, consequential, or punitive damages.</p>
                    <p>• Loss of data, profits, or business opportunities arising from your use of our services.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">8. Termination</h2>
                  <p className="text-lg leading-relaxed">
                    We may suspend or terminate your account or access to our services at our discretion, without prior notice, 
                    if you violate these Terms or engage in activities that harm us, our users, or our reputation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">9. Third-Party Links</h2>
                  <p className="text-lg leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the content, policies, 
                    or practices of these sites.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">10. Changes to Terms</h2>
                  <p className="text-lg leading-relaxed">
                    We may update these Terms from time to time. The updated version will be posted on this page with the 
                    revised effective date. Your continued use of our services constitutes acceptance of the updated Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">11. Governing Law</h2>
                  <p className="text-lg leading-relaxed">
                    These Terms shall be governed by and construed under the laws of India, without regard to conflict of law principles.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">12. Contact Us</h2>
                  <p className="text-lg leading-relaxed">
                    If you have questions about these Terms, please contact us at:
                  </p>
                  
                  <div className="bg-blue-900/30 rounded-lg p-6 mt-4">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">Big Mumbai Games</h3>
                    <p className="text-lg">Email: <a href="mailto:info@bigmumbaiwin.com" className="text-yellow-400 hover:text-yellow-300 underline">info@bigmumbaiwin.com</a></p>
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
