import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';

(async function generate() {
  try {
    const baseUrl = 'https://justgirls.com';

    // Central route list — update if you add more pages
    const routes = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/how-we-work', changefreq: 'weekly', priority: 0.9 },
      { url: '/services', changefreq: 'weekly', priority: 0.8 },
      { url: '/faq', changefreq: 'monthly', priority: 0.6 },
      { url: '/contact', changefreq: 'monthly', priority: 0.6 }
    ];

    const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');

    const sitemapStream = new SitemapStream({ hostname: baseUrl });
    routes.forEach(r => sitemapStream.write(r));
    sitemapStream.end();

    const xml = (await streamToPromise(sitemapStream)).toString();

    writeFileSync(sitemapPath, xml, { encoding: 'utf8' });

    console.log('Sitemap generated at', sitemapPath);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    process.exit(1);
  }
})();