export interface Resource {
  title: string
  description: string
  url: string
  category: string
}

export interface InternalResource {
  title: string
  description: string
  href: string
  icon: string
}

export const legalResources: Resource[] = [
  {
    title: "State Bar of Georgia",
    description: "Official website of the State Bar of Georgia with lawyer referrals and legal information.",
    url: "https://www.gabar.org",
    category: "Bar Associations"
  },
  {
    title: "American Bar Association",
    description: "National professional organization for attorneys with legal resources and public information.",
    url: "https://www.americanbar.org",
    category: "Bar Associations"
  },
  {
    title: "Georgia Legal Services",
    description: "Free legal assistance for low-income individuals and families in Georgia.",
    url: "https://www.glsp.org",
    category: "Legal Aid"
  },
  {
    title: "Atlanta Legal Aid Society",
    description: "Providing free civil legal services to low-income residents of metro Atlanta.",
    url: "https://www.atlantalegalaid.org",
    category: "Legal Aid"
  }
]

export const governmentResources: Resource[] = [
  {
    title: "Georgia Secretary of State",
    description: "Business registration, corporate filings, and business entity information for Georgia.",
    url: "https://sos.ga.gov",
    category: "Business"
  },
  {
    title: "U.S. Small Business Administration",
    description: "Resources for starting and managing a business, including legal guidance.",
    url: "https://www.sba.gov",
    category: "Business"
  },
  {
    title: "U.S. Citizenship and Immigration Services",
    description: "Official information on immigration processes, forms, and requirements.",
    url: "https://www.uscis.gov",
    category: "Immigration"
  },
  {
    title: "Georgia Department of Revenue",
    description: "Tax information and resources for individuals and businesses in Georgia.",
    url: "https://dor.georgia.gov",
    category: "Tax"
  }
]

export const businessResources: Resource[] = [
  {
    title: "Better Business Bureau",
    description: "Business ratings, reviews, and dispute resolution services.",
    url: "https://www.bbb.org",
    category: "Business"
  },
  {
    title: "Gwinnett Chamber of Commerce",
    description: "Local business networking and resources for the Gwinnett County area.",
    url: "https://www.gwinnettchamber.org",
    category: "Business"
  },
  {
    title: "SCORE Mentors",
    description: "Free business mentoring and education for entrepreneurs and small business owners.",
    url: "https://www.score.org",
    category: "Business"
  },
  {
    title: "Georgia Centers for Innovation",
    description: "Economic development resources and support for Georgia businesses.",
    url: "https://www.georgia.org/industries",
    category: "Business"
  }
]

export const internalResources: InternalResource[] = [
  {
    title: "Attorney-Client 101",
    description: "Learn about the attorney-client relationship, what to expect during your consultation, and how legal fees work. Essential information for anyone considering legal representation.",
    href: "/resources/attorney-client-101",
    icon: "FileText"
  },
  {
    title: "Frequently Asked Questions",
    description: "Find answers to common legal questions about real estate transactions, business law, immigration, and working with an attorney.",
    href: "/faq",
    icon: "HelpCircle"
  }
]