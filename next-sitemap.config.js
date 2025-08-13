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
      '/about',
      '/contact',
      '/privacy-policy',
      '/terms-of-service',
      '/disclaimer',
      '/blogs'
    ];
    
    return additionalPaths.map(path => ({
      loc: path,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};