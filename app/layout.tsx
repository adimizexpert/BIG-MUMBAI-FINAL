import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Big Mumbai - India\'s Premier Gaming & Entertainment Platform | Play, Connect & Win',
  description: 'Big Mumbai is India\'s leading gaming platform offering interactive challenges, real-time community chat, and amazing rewards. Join millions of players in the ultimate Big Mumbai gaming experience.',
  keywords: 'Big Mumbai, Big Mumbai game, Big Mumbai gaming, Big Mumbai platform, Big Mumbai entertainment, Big Mumbai rewards, Big Mumbai challenges, Big Mumbai community, Big Mumbai India, Big Mumbai online, Big Mumbai mobile, Big Mumbai app, Big Mumbai website, Big Mumbai gaming platform, Big Mumbai entertainment platform, Big Mumbai interactive games, Big Mumbai real-time gaming, Big Mumbai gaming community, Big Mumbai gaming rewards, Big Mumbai gaming challenges, Big Mumbai gaming experience, Big Mumbai gaming app, Big Mumbai gaming website, Big Mumbai gaming platform India, Big Mumbai entertainment India, Big Mumbai gaming India, Big Mumbai platform India, Big Mumbai rewards India, Big Mumbai challenges India, Big Mumbai community India, Big Mumbai online India, Big Mumbai mobile India, Big Mumbai app India, Big Mumbai website India',
  authors: [{ name: 'Big Mumbai' }],
  creator: 'Big Mumbai',
  publisher: 'Big Mumbai',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://bigmumbai.game'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bigmumbai.game',
    title: 'Big Mumbai - India\'s Premier Gaming & Entertainment Platform',
    description: 'Big Mumbai is India\'s leading gaming platform offering interactive challenges, real-time community chat, and amazing rewards. Join millions of players in the ultimate Big Mumbai gaming experience.',
    siteName: 'Big Mumbai',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Big Mumbai Gaming Platform - Interactive Gaming Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Mumbai - India\'s Premier Gaming & Entertainment Platform',
    description: 'Big Mumbai is India\'s leading gaming platform offering interactive challenges, real-time community chat, and amazing rewards. Join millions of players in the ultimate Big Mumbai gaming experience.',
    creator: '@bigmumbai',
    images: ['/images/og-image.jpg'],
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
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://bigmumbai.game" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bigmumbai.game/#organization",
                  "name": "Big Mumbai",
                  "url": "https://bigmumbai.game",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://bigmumbai.game/images/logo.png"
                  },
                  "description": "Big Mumbai is India's premier gaming and entertainment platform offering interactive challenges, real-time community chat, and amazing rewards.",
                  "foundingDate": "2024",
                  "sameAs": [
                    "https://twitter.com/bigmumbai",
                    "https://facebook.com/bigmumbai",
                    "https://instagram.com/bigmumbai"
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
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bigmumbai.game/#website",
                  "url": "https://bigmumbai.game",
                  "name": "Big Mumbai",
                  "description": "Big Mumbai is India's premier gaming and entertainment platform offering interactive challenges, real-time community chat, and amazing rewards.",
                  "publisher": {
                    "@id": "https://bigmumbai.game/#organization"
                  },
                  "inLanguage": "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://bigmumbai.game/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://bigmumbai.game/#webpage",
                  "url": "https://bigmumbai.game",
                  "name": "Big Mumbai - India's Premier Gaming & Entertainment Platform",
                  "isPartOf": {
                    "@id": "https://bigmumbai.game/#website"
                  },
                  "about": {
                    "@id": "https://bigmumbai.game/#organization"
                  },
                  "description": "Big Mumbai is India's leading gaming platform offering interactive challenges, real-time community chat, and amazing rewards. Join millions of players in the ultimate Big Mumbai gaming experience.",
                  "inLanguage": "en-IN",
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://bigmumbai.game"
                      }
                    ]
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://bigmumbai.game/#app",
                  "name": "Big Mumbai",
                  "applicationCategory": "GameApplication",
                  "operatingSystem": "Android, iOS, Web",
                  "description": "Big Mumbai gaming platform for interactive challenges and rewards",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "50000"
                  }
                }
              ]
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