import Script from 'next/script'

interface OrganizationSchemaProps {
  url?: string
}

export function OrganizationSchema({ url }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "JSW Law Group",
    "alternateName": "JSW Law Group LLC",
    "description": "Comprehensive legal services in metro-Atlanta including real estate, business law, corporate transactions, and immigration services. Licensed in Georgia and California since 2003.",
    "url": url || "https://jswlaw.com",
    "logo": `${url || "https://jswlaw.com"}/logo.png`,
    "image": `${url || "https://jswlaw.com"}/og-image.jpg`,
    "telephone": "(678) 638-0110",
    "email": "hlwoo@jswlaw.com",
    "founder": {
      "@type": "Person",
      "name": "John S. Woo",
      "jobTitle": "Founding Attorney",
      "alumniOf": "University of California, Los Angeles School of Law"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5855 Medlock Bridge Pkwy",
      "addressLocality": "Suwanee",
      "addressRegion": "GA",
      "postalCode": "30024",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-84.1557"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Georgia"
      },
      {
        "@type": "State", 
        "name": "California"
      },
      {
        "@type": "City",
        "name": "Atlanta"
      },
      {
        "@type": "City",
        "name": "Suwanee"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.7490",
        "longitude": "-84.3880"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Real Estate",
            "description": "Expert guidance for home buyers and sellers throughout metro-Atlanta for smooth property closings."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Commercial Real Estate",
            "description": "Comprehensive legal services for commercial property transactions, leasing, and development projects."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Transactions", 
            "description": "Strategic legal support for mergers, acquisitions, contracts, and business formation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Law",
            "description": "Comprehensive corporate legal services including governance, compliance, and entity formation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Immigration",
            "description": "Immigration solutions for businesses and professionals seeking to work in the United States."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Foreign Investments",
            "description": "Legal guidance for international investors looking to establish business presence in the US."
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "4",
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Myung Lee"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "JSW law group showed exceptional customer service and made me feel comfortable in every way throughout the process, and I am very satisfied with the outcome."
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Joy Hernandez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "It has been a positive experience working with the JSW Law firm they have been very helpful working on our case. Not only did we use John for our personal injury case, but My husband and I also used this firm to close our home."
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/jsw-law-group",
      "https://www.facebook.com/jswlawgroup", 
      "https://twitter.com/jswlawgroup"
    ]
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": faq.answer
      }
    }))
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  )
}

interface ServiceSchemaProps {
  serviceName: string
  description: string
  url: string
}

export function ServiceSchema({ serviceName, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LegalService",
      "name": "JSW Law Group",
      "telephone": "(678) 638-0110",
      "email": "hlwoo@jswlaw.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5855 Medlock Bridge Pkwy",
        "addressLocality": "Suwanee",
        "addressRegion": "GA",
        "postalCode": "30024",
        "addressCountry": "US"
      }
    },
    "areaServed": "Georgia",
    "url": url
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  )
}