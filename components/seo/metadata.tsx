import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  canonical?: string
  ogType?: 'website' | 'article'
  ogImage?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generateSEOMetadata({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  noIndex = false,
  keywords = []
}: SEOMetadataProps): Metadata {
  const baseUrl = 'https://jswlaw.com'
  const fullTitle = title.includes('JSW Law Group') ? title : `${title} | JSW Law Group`
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined

  const defaultKeywords = [
    'attorney',
    'lawyer',
    'legal services',
    'Atlanta lawyer',
    'Georgia attorney',
    'real estate law',
    'business law',
    'immigration law',
    'Suwanee attorney',
    'metro Atlanta legal services'
  ]

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: 'JSW Law Group' }],
    creator: 'JSW Law Group',
    publisher: 'JSW Law Group',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: canonical ? {
      canonical: fullCanonical
    } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url: fullCanonical,
      siteName: 'JSW Law Group',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: '@jswlawgroup'
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code'
    },
    other: {
      'geo.region': 'US-GA',
      'geo.placename': 'Suwanee, Atlanta',
      'geo.position': '34.0522;-84.1557',
      'ICBM': '34.0522, -84.1557',
      'DC.title': fullTitle,
      'DC.creator': 'JSW Law Group',
      'DC.subject': description,
      'DC.description': description,
      'DC.publisher': 'JSW Law Group',
      'DC.contributor': 'John S. Woo',
      'DC.language': 'en',
      'DC.coverage': 'Georgia, California, Atlanta, Suwanee'
    }
  }
}