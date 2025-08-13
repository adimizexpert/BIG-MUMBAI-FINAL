import { NextSeo } from 'next-seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Gamepad2, Trophy, Heart, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <NextSeo
        title="About Big Mumbai App - Our Story, Mission & Gaming Vision"
        description="Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity. Join our gaming community!"
        canonical="https://bigmumbaiwin.com/about"
        openGraph={{
          title: "About Big Mumbai App - Our Story, Mission & Gaming Vision",
          description: "Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity.",
          url: "https://bigmumbaiwin.com/about",
          type: "website",
          images: [
            {
              url: "https://bigmumbaiwin.com/images/big-mumbai-about-og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Big Mumbai App - About Us - Gaming Community and Mission",
            },
          ],
        }}
        twitter={{
          handle: "@bigmumbaiwin",
          site: "@bigmumbaiwin",
          cardType: "summary_large_image",
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full mb-4">
                🏢 About Our Company
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              About Big Mumbai App
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Big Mumbai App, we are passionate about bringing the vibrant spirit of Mumbai to the world of gaming. 
              Founded in the heart of this bustling metropolis, we aim to create immersive experiences that capture the energy, 
              diversity, and creativity of our city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#games">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  🎮 Explore Our Games
                </Button>
              </Link>
              <Link href="/#how-to-login">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-6 px-8 text-xl transition-all duration-300"
                >
                  🚀 Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our mission is to unite gamers, artists, and storytellers through engaging and innovative gameplay. 
                  We believe that games are not just a pastime; they are a powerful medium for connection and expression. 
                  By showcasing local talent and drawing inspiration from Mumbai's rich culture, we aim to craft games 
                  that resonate with players both locally and globally.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Community First
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Building a supportive gaming community where players connect, compete, and collaborate.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="w-8 h-8 text-green-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Creating innovative and engaging gameplay experiences that inspire and entertain.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Celebrating Mumbai's rich culture and showcasing local talent in gaming.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the unique features and offerings that make Big Mumbai App special
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Diverse Game Portfolio
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    From thrilling action games to thought-provoking narratives, our lineup caters to all types of gamers. 
                    We are committed to quality and creativity, ensuring that each title reflects our dedication to excellence.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700">100+ exciting games</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Gamepad2 className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Multiple genres and styles</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">Quality-driven development</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                  <div className="text-center">
                    <Gamepad2 className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Gaming Excellence</h4>
                    <p className="text-gray-600">Every game tells a unique story</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-green-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Community Driven</h4>
                    <p className="text-gray-600">Connect, compete, and collaborate</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Community Engagement
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We believe in the power of community. Through events, tournaments, and collaborative projects, 
                    we foster a supportive environment where players can connect, compete, and collaborate.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700">Regular tournaments and events</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">500K+ active community members</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">24/7 community support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Local Talent Spotlight
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We are proud to highlight the incredible talent that Mumbai has to offer. Our team comprises 
                    skilled developers, artists, and writers who are passionate about storytelling and game design.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Mumbai-based development team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Global gaming community</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">Passionate creators and developers</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
                  <div className="text-center">
                    <MapPin className="w-24 h-24 text-orange-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Mumbai Pride</h4>
                    <p className="text-gray-600">Celebrating local talent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              As Big Mumbai App continues to grow and innovate, we invite you to be a part of our journey. 
              Whether you're a gamer, developer, or simply someone who loves the art of play, 
              there's a place for you in our community.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold mb-4">🎉 Welcome to the Big Mumbai Games Family</h3>
              <p className="text-lg opacity-90">
                Where every game tells a story!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/#how-to-login">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  🎮 Start Playing Now
                </Button>
              </Link>
              <Link href="/#faq">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-6 px-8 text-xl transition-all duration-300"
                >
                  ❓ Learn More
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4">Follow us on social media and stay updated on our latest releases, events, and initiatives.</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200">
                  <span className="text-2xl">📘</span>
                </a>
                <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200">
                  <span className="text-2xl">🐦</span>
                </a>
                <a href="#" className="text-white hover:text-pink-300 transition-colors duration-200">
                  <span className="text-2xl">📷</span>
                </a>
                <a href="#" className="text-white hover:text-red-300 transition-colors duration-200">
                  <span className="text-2xl">📺</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Experience Big Mumbai Gaming?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of players who are already enjoying our games and building connections in our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#how-to-login">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    🚀 Get Started Today
                  </Button>
                </Link>
                <Link href="/#games">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-6 px-8 text-xl transition-all duration-300"
                  >
                    🎮 Explore Games
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
