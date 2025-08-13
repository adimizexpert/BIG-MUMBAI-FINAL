/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bigmumbaiwin.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://bigmumbaiwin.com/sitemap.xml',
    ],
    sitemap: 'https://bigmumbaiwin.com/sitemap.xml',
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on content type
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/games') || path.includes('/challenges')) {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.includes('/rewards') || path.includes('/leaderboard')) {
      priority = 0.8;
      changefreq = 'daily';
    } else if (path.includes('/community') || path.includes('/chat')) {
      priority = 0.8;
      changefreq = 'hourly';
    } else if (path.includes('/about') || path.includes('/help')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://bigmumbaiwin.com${path}`,
          hreflang: 'en-IN',
        },
        {
          href: `https://bigmumbaiwin.com${path}`,
          hreflang: 'en',
        },
      ],
    }
  },
  additionalPaths: async (config) => {
    // Add additional important Big Mumbai related paths
    const additionalPaths = [
      '/games',
      '/challenges',
      '/rewards',
      '/leaderboard',
      '/community',
      '/chat',
      '/about',
      '/help',
      '/support',
      '/terms',
      '/privacy',
      '/download',
      '/play-now',
      '/join-community',
      '/win-rewards',
      '/gaming-experience',
      '/interactive-challenges',
      '/real-time-gaming',
      '/mobile-gaming',
      '/online-gaming',
      '/india-gaming',
      '/gaming-platform',
      '/entertainment-platform'
    ];
    
    return additionalPaths.map(path => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};