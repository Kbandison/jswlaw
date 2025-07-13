export interface NavLink {
  name: string
  href: string
}

export const mainNavigation: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice" },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export const footerPracticeAreas: NavLink[] = [
  { name: "Commercial Real Estate", href: "/practice/commercial-real-estate" },
  { name: "Residential Real Estate", href: "/practice/residential-real-estate" },
  { name: "Business Transactions", href: "/practice/business-transactions" },
  { name: "Corporate Law", href: "/practice/corporate-law" },
  { name: "Business Immigration", href: "/practice/business-immigration" },
  { name: "Foreign Investments", href: "/practice/foreign-investments" },
]

export const footerQuickLinks: NavLink[] = [
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Resources", href: "/resources" },
  { name: "Attorney-Client 101", href: "/resources/attorney-client-101" },
  { name: "Contact", href: "/contact" },
]