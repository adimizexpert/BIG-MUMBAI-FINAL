import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Big Mumbai - Official Gaming Platform | Login & Register',
  description: 'Welcome to the official Big Mumbai gaming platform. Login and play exciting color prediction games, win real money, and claim your exclusive welcome bonus and gift codes.',
  keywords: 'Big Mumbai, Big Mumbai game, Big Mumbai login, Big Mumbai app, Big Mumbai register, Big Mumbai invite code, Big Mumbai withdrawal, online gaming, color prediction game, earn money online',
  authors: [{ name: 'Big Mumbai' }],
  creator: 'Big Mumbai',
  publisher: 'Big Mumbai',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://bigmumbaiwin.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bigmumbaiwin.com',
    title: 'Big Mumbai - The Official Gaming Platform to Win',
    description: 'Play the best color prediction games on Big Mumbai. Register now and get started with a bonus!',
    siteName: 'Big Mumbai',
    images: [
      {
        url: 'https://bigmumbaiwin.com/images/big-mumbai-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Big Mumbai Gaming Platform - Login and Play Color Prediction Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Mumbai - The Official Gaming Platform to Win',
    description: 'Play the best color prediction games on Big Mumbai. Register now and get started with a bonus!',
    creator: '@bigmumbaiwin',
    images: ['https://bigmumbaiwin.com/images/big-mumbai-og-image.jpg'],
  },
  other: {
    'application-name': 'Big Mumbai',
    'theme-color': '#7c3aed',
    'msapplication-TileColor': '#7c3aed',
    'apple-mobile-web-app-title': 'Big Mumbai',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/big-mumbai-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/big-mumbai-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/big-mumbai-logo.jpg" />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://bigmumbaiwin.com" />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Big Mumbai",
              "url": "https://bigmumbaiwin.com",
              "description": "Official Big Mumbai gaming platform",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://bigmumbaiwin.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Big Mumbai",
              "applicationCategory": "GameApplication",
              "operatingSystem": "Android, iOS, Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "5000"
              }
            })
          }}
        />
        
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is the Big Mumbai Game?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Big Mumbai is an online color prediction and gaming platform where users can play games like Hilo, Aviator, and Win Go to win cash rewards and bonuses. It's an exciting way to earn money and connect with a community of players."
                }
              },{
                "@type": "Question",
                "name": "How can I download the Big Mumbai Games app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You don't need to download a separate app! You can play all Big Mumbai games directly from the official website. Simply visit bigmumbaiwin.com to register and start playing immediately on any device."
                }
              },{
                "@type": "Question",
                "name": "How do I get started with Big Mumbai Game?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started is simple! Click the 'Register' button, fill in your basic details, verify your phone number, and you'll receive a ₹500 welcome bonus immediately. You can start playing games right away without any deposits."
                }
              },{
                "@type": "Question",
                "name": "Is Big Mumbai Game safe and legal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Big Mumbai Game operates under all applicable Indian gaming laws. We use bank-level encryption to protect your data, and all transactions are processed through secure payment gateways. Your privacy and security are our top priorities."
                }
              },{
                "@type": "Question",
                "name": "How do withdrawals work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Withdrawals are processed instantly to your bank account, UPI, or digital wallet. There's no minimum withdrawal limit, and all transactions are free of charge. Most withdrawals are completed within 5 minutes."
                }
              },{
                "@type": "Question",
                "name": "What types of games can I play?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 100+ games including puzzles, strategy games, trivia, card games, and action challenges. All games are skill-based and fair, with new games added regularly based on player feedback."
                }
              },{
                "@type": "Question",
                "name": "Are the rewards real money?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All rewards, bonuses, and prize money are real and can be withdrawn directly to your bank account. We've already distributed over ₹10 lakhs in rewards to our players."
                }
              },{
                "@type": "Question",
                "name": "Can I play on mobile devices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Definitely! Big Mumbai Game is optimized for all devices - smartphones, tablets, and computers. No downloads required - just open your browser and start playing instantly."
                }
              },{
                "@type": "Question",
                "name": "What is the welcome bonus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "New players receive ₹500 as a welcome bonus immediately after registration. This bonus can be used to play games and any winnings from bonus gameplay can be withdrawn after completing simple verification steps."
                }
              },{
                "@type": "Question",
                "name": "How does customer support work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide 24/7 customer support through live chat, email, and phone. Our support team responds within minutes and can help with any questions, technical issues, or account matters in Hindi and English."
                }
              }]
            })
          }}
        />
        
        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Login to Big Mumbai",
              "description": "A simple step-by-step guide to log in and start playing on the Big Mumbai platform.",
              "step": [{
                "@type": "HowToStep",
                "url": "https://bigmumbaiwin.com/#step1",
                "name": "Visit the Official Website",
                "text": "Navigate to bigmumbaiwin.com on your web browser."
              },{
                "@type": "HowToStep",
                "url": "https://bigmumbaiwin.com/#step2",
                "name": "Click on Login/Register",
                "text": "Find and click the prominent 'Login' or 'Register' button on the homepage to be directed to the sign-in page."
              },{
                "@type": "HowToStep",
                "url": "https://bigmumbaiwin.com/#step3",
                "name": "Enter Your Credentials",
                "text": "Input your registered phone number and password, then click the login button to access your account."
              },{
                "@type": "HowToStep",
                "url": "https://bigmumbaiwin.com/#step4",
                "name": "Start Playing Games",
                "text": "Once logged in, you can immediately start playing color prediction games and other exciting challenges to win real money."
              }]
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Big Mumbai",
              "url": "https://bigmumbaiwin.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bigmumbaiwin.com/images/logo.png"
              },
              "description": "Big Mumbai is India's premier gaming platform offering color prediction games, real-time community chat, and amazing rewards.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/bigmumbaiwin",
                "https://facebook.com/bigmumbaiwin",
                "https://instagram.com/bigmumbaiwin"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English, Hindi"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}