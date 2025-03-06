export default function handler(req, res) {
  const urls = [
    { url: 'https://drowning-dog.com/', lastmod: '2025-10-01' },
    { url: 'https://drowning-dog.com/about', lastmod: '2025-10-01' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
      .map(
          (item) => `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>1.0</priority>
        </url>
      `
      )
      .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}