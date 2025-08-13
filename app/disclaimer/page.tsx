import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Big Mumbai Game",
  description: "Disclaimer for Big Mumbai Game - Important legal information about our unofficial status and website usage.",
  openGraph: {
    title: "Disclaimer - Big Mumbai Game",
    description: "Disclaimer for Big Mumbai Game - Important legal information about our unofficial status and website usage.",
    type: "website",
    url: "https://bigmumbaiwin.com/disclaimer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - Big Mumbai Game",
    description: "Disclaimer for Big Mumbai Game - Important legal information about our unofficial status and website usage.",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400">
            Disclaimer
          </h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <div className="bg-red-900/30 rounded-lg p-6 border-l-4 border-red-500">
                  <p className="text-lg leading-relaxed font-semibold">
                    This is an unofficial website. We are not affiliated with, endorsed by, or in any way officially 
                    connected to Big Mumbai. The official website for Big Mumbai should be sought through independent 
                    and official channels.
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  The information provided on this website is for general informational purposes only. While we strive 
                  to keep the content accurate and current, we make no representations or warranties of any kind, 
                  either express or implied, about the completeness, accuracy, reliability, suitability, or availability 
                  of the information, products, services, or related graphics found on this site. Any decisions you 
                  make based on this information are strictly at your own risk.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">1. No Professional Advice</h2>
                  <p className="text-lg leading-relaxed">
                    The content on this website is not intended as professional advice. If you require specific advice, 
                    please consult a qualified professional. We do not accept any liability for any loss or damage 
                    arising from reliance on the information provided on this site.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">2. Third-Party Links</h2>
                  <p className="text-lg leading-relaxed">
                    Our website may contain links to external sites that are not provided or maintained by us 
                    <strong className="text-blue-300"> [bigmumbaigames.app]</strong>. We have no control over the content 
                    and availability of those sites and do not endorse or make any representations about them. 
                    Accessing third-party websites is at your own risk.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">3. Game Availability</h2>
                  <p className="text-lg leading-relaxed">
                    The availability of games and services mentioned on our website is subject to change. We do not 
                    guarantee that any game or feature will be available at all times or that it will remain unchanged. 
                    Please check our website regularly for updates.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">4. User-Generated Content</h2>
                  <p className="text-lg leading-relaxed">
                    Users may be able to submit or post content on our website. We do not endorse or guarantee the 
                    accuracy of any user-generated content. We reserve the right to monitor, remove, or edit any 
                    content that we deem inappropriate or in violation of our policies.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">5. Limitation of Liability</h2>
                  <p className="text-lg leading-relaxed">
                    To the fullest extent permitted by law, Big Mumbai Games shall not be liable for any indirect, 
                    incidental, special, or consequential damages arising out of or in connection with the use of our 
                    website or the inability to use it. This includes, but is not limited to, damages for loss of 
                    profits, goodwill, data, or other intangible losses.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">6. Changes to This Disclaimer</h2>
                  <p className="text-lg leading-relaxed">
                    We may update this Disclaimer from time to time. Any changes will be posted on this page with an 
                    updated effective date. We encourage you to review this Disclaimer periodically for any changes.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">7. Contact Us</h2>
                  <p className="text-lg leading-relaxed">
                    If you have any questions about this Disclaimer or our practices, please contact us at:
                  </p>
                  
                  <div className="bg-blue-900/30 rounded-lg p-6 mt-4">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">Big Mumbai Games</h3>
                    <p className="text-lg">Email: <a href="mailto:info@bigmumbaiwin.com" className="text-yellow-400 hover:text-yellow-300 underline">info@bigmumbaiwin.com</a></p>
                  </div>
                </div>

                <div className="bg-green-900/30 rounded-lg p-6 mt-8 text-center">
                  <p className="text-lg font-semibold text-green-300">
                    By using our website, you acknowledge that you have read this Disclaimer and agree to its terms. 
                    Thank you for visiting Big Mumbai Games!
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
