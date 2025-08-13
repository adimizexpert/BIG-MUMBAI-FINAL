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
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on content type
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/about')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/contact')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/privacy-policy')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path.includes('/terms-of-service')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path.includes('/disclaimer')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path.includes('/blogs')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/welcome-to-big-mumbai-game')) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    // Add additional important Big Mumbai related paths
    const additionalPaths = [
      '/about',
      '/contact',
      '/privacy-policy',
      '/terms-of-service',
      '/disclaimer',
      '/blogs',
      '/welcome-to-big-mumbai-game'
    ];
    
    return additionalPaths.map(path => ({
      loc: path,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};