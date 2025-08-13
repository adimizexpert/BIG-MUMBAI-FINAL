import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Gamepad2, Trophy, Heart, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Big Mumbai App - Our Story, Mission & Gaming Vision",
  description: "Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity. Join our gaming community!",
  openGraph: {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "About Big Mumbai App - Our Story, Mission & Gaming Vision",
    description: "Discover the story behind Big Mumbai App - founded in the heart of Mumbai, we create immersive gaming experiences that capture the city's energy, diversity, and creativity.",
    images: ["https://bigmumbaiwin.com/images/big-mumbai-about-og-image.jpg"],
  },
};

export default function About() {
  return (
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
                    <Gamepad2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Gaming Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We strive for excellence in every game we create, ensuring high-quality gameplay experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Community First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Building a strong, supportive community where players can connect and grow together.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Pushing boundaries and exploring new possibilities in gaming technology and design.
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From thrilling action games to thought-provoking narratives, our lineup caters to all types of gamers. 
                We are committed to quality and creativity, ensuring that each title reflects our dedication to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Diverse Game Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A wide variety of games spanning different genres, styles, and player preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connecting players from around the world through our gaming experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Local Talent Spotlight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Highlighting the incredible talent that Mumbai has to offer in game development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              As Big Mumbai App continues to grow and innovate, we invite you to be a part of our journey. 
              Whether you're a gamer, developer, or simply someone who loves the art of play, there's a place for you in our community.
            </p>
            <p className="text-lg text-blue-200 mb-8">
              Follow us on social media and stay updated on our latest releases, events, and initiatives. 
              Together, let's celebrate the dynamic world of gaming right from the heart of Mumbai!
            </p>
            <div className="text-2xl font-bold text-yellow-300 mb-8">
              Welcome to the Big Mumbai Games family—where every game tells a story!
            </div>
            <Link href="/">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                🏠 Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
