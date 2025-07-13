import { PracticeAreaTemplate } from "@/components/practice-area-template"
import { Building2 } from "lucide-react"

export const metadata = {
  title: "Corporate Law Services | JSW Law Group Atlanta",
  description: "Comprehensive corporate legal services in Atlanta. Business formation, governance, compliance, and corporate law representation.",
}

export default function CorporateLawPage() {
  const services = [
    "Business entity formation (LLC, Corporation, Partnership)",
    "Corporate governance and compliance",
    "Board of directors and shareholder matters",
    "Corporate bylaws and operating agreements",
    "Securities law compliance",
    "Employment law and HR policies",
    "Regulatory compliance and licensing",
    "Corporate restructuring and dissolution",
    "Franchise law and agreements",
    "Corporate tax planning support"
  ]

  const whyChooseUs = [
    "Comprehensive understanding of Georgia business law",
    "Practical business advice beyond legal compliance",
    "Cost-effective solutions for startups and established businesses",
    "Ongoing corporate maintenance and support",
    "Experience with diverse business structures and industries",
    "Bilingual services for international business owners",
    "Strong relationships with accounting and tax professionals",
    "Proactive approach to regulatory compliance"
  ]

  return (
    <PracticeAreaTemplate
      title="Corporate Law"
      description="Comprehensive corporate legal services including governance, compliance, and entity formation."
      overview="JSW Law Group provides full-service corporate legal representation for businesses throughout their lifecycle. From startup formation to ongoing compliance and governance matters, we help businesses operate legally and efficiently. Our corporate law practice focuses on providing practical, business-oriented legal advice that supports your company's growth and success. We understand the challenges facing modern businesses and work to provide legal solutions that are both compliant and commercially viable. Whether you're launching a new venture or managing an established company, we're your trusted legal partner."
      services={services}
      whyChooseUs={whyChooseUs}
      icon={<Building2 className="h-10 w-10 text-[var(--jsw-primary)]" />}
    />
  )
}