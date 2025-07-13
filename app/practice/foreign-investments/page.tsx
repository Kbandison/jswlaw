import { PracticeAreaTemplate } from "@/components/practice-area-template"
import { TrendingUp } from "lucide-react"

export const metadata = {
  title: "Foreign Investment Law | JSW Law Group Atlanta",
  description: "Legal guidance for foreign investments in the US. International business law, investment structuring, and foreign investor legal services in Atlanta.",
}

export default function ForeignInvestmentsPage() {
  const services = [
    "Foreign investment structuring and planning",
    "U.S. business entity formation for foreign investors",
    "Investment compliance and regulatory matters",
    "International joint venture agreements",
    "Cross-border transaction support",
    "Foreign Corrupt Practices Act (FCPA) compliance",
    "International tax planning coordination",
    "Foreign investment in U.S. real estate",
    "Investment immigration visa support",
    "International contract negotiations"
  ]

  const whyChooseUs = [
    "Specialized expertise in foreign investment matters",
    "Multilingual services for international investors",
    "Licensed in Georgia with extensive experience",
    "Deep understanding of U.S. business and investment landscape",
    "Strong network of international business professionals",
    "Experience with diverse foreign investment structures",
    "Professional approach to international business customs",
    "Comprehensive support from planning to implementation"
  ]

  return (
    <PracticeAreaTemplate
      title="Foreign Investments"
      description="Legal guidance for international investors looking to establish business presence in the US."
      overview="Foreign investment in the United States offers tremendous opportunities but requires careful legal planning and compliance. JSW Law Group provides specialized legal services for international investors seeking to establish or expand their business presence in the U.S. market. Our foreign investment practice combines deep knowledge of U.S. business law with cultural understanding of international business practices. We help foreign investors navigate complex regulatory requirements, structure investments efficiently, and achieve their business objectives while ensuring full legal compliance. From initial investment planning to ongoing business operations, we're your trusted legal partner for successful U.S. investments."
      services={services}
      whyChooseUs={whyChooseUs}
      icon={<TrendingUp className="h-10 w-10 text-[var(--jsw-primary)]" />}
    />
  )
}