import { PracticeAreaTemplate } from "@/components/practice-area-template"
import { Building } from "lucide-react"

export const metadata = {
  title: "Commercial Real Estate Law | JSW Law Group Atlanta",
  description: "Expert commercial real estate legal services in Atlanta. Property transactions, leasing, development projects, and commercial real estate law.",
}

export default function CommercialRealEstatePage() {
  const services = [
    "Commercial property purchase and sale transactions",
    "Commercial lease negotiations and agreements", 
    "Real estate development and zoning matters",
    "Property financing and loan documentation",
    "Due diligence and title examination",
    "Environmental compliance and regulations",
    "Property management legal support",
    "Real estate investment structuring",
    "Construction contracts and disputes",
    "Property tax appeals and assessments"
  ]

  const whyChooseUs = [
    "20+ years of commercial real estate experience in Georgia",
    "Deep understanding of Atlanta market dynamics",
    "Comprehensive transaction management from start to finish",
    "Proactive risk identification and mitigation",
    "Strong relationships with local professionals and institutions",
    "Bilingual services for international investors",
    "Licensed in Georgia with extensive local market knowledge",
    "Track record of successful complex transactions"
  ]

  return (
    <PracticeAreaTemplate
      title="Commercial Real Estate"
      description="Comprehensive legal services for commercial property transactions, leasing, and development projects."
      overview="JSW Law Group provides sophisticated legal representation for all aspects of commercial real estate transactions in metro-Atlanta. Whether you're an investor, developer, landlord, or tenant, our experienced team guides you through complex commercial real estate matters with precision and expertise. We understand the fast-paced nature of commercial real estate and work efficiently to close deals while protecting your interests. Our comprehensive approach covers everything from initial due diligence to final closing, ensuring smooth transactions and minimizing risks."
      services={services}
      whyChooseUs={whyChooseUs}
      icon={<Building className="h-10 w-10 text-[var(--jsw-primary)]" />}
    />
  )
}