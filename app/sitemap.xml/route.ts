import { NextResponse } from 'next/server'
import { practiceAreas } from '@/data/practice-areas'

export async function GET() {
  const baseUrl = 'https://jswlaw.com'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: '',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: '/about',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: '/practice',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: '/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: '/faq',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: '/resources',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: '/resources/attorney-client-101',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: '/utility/privacy',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: '/utility/disclaimer',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ]

  // Dynamic practice area pages
  const practiceAreaPages = practiceAreas.map(area => ({
    url: `/practice/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8
  }))

  const allPages = [...staticPages, ...practiceAreaPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200'
    }
  })
}