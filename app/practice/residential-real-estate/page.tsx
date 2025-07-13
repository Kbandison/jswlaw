import { PracticeAreaTemplate } from "@/components/practice-area-template"
import { Home } from "lucide-react"

export const metadata = {
  title: "Residential Real Estate Law | JSW Law Group Atlanta",
  description: "Expert residential real estate legal services in Atlanta. Home buying, selling, closings, and residential property law for metro-Atlanta clients.",
}

export default function ResidentialRealEstatePage() {
  const services = [
    "Home purchase and sale transactions",
    "Real estate closing services",
    "Contract review and negotiation",
    "Title examination and insurance",
    "Mortgage and financing assistance",
    "Property dispute resolution",
    "Homeowners association (HOA) matters",
    "Real estate investment guidance",
    "First-time homebuyer support",
    "Refinancing legal assistance"
  ]

  const whyChooseUs = [
    "Experienced in metro-Atlanta residential market since 2003",
    "Personalized attention for every home transaction",
    "Clear communication throughout the closing process",
    "Multilingual services for diverse clients",
    "Strong relationships with local real estate professionals",
    "Proactive problem-solving to avoid closing delays",
    "Comprehensive title and contract review",
    "Affordable and transparent fee structure"
  ]

  return (
    <PracticeAreaTemplate
      title="Residential Real Estate"
      description="Expert guidance for home buyers and sellers throughout metro-Atlanta for smooth property closings."
      overview="Buying or selling a home is one of life's most significant financial decisions. JSW Law Group makes the process as smooth and stress-free as possible for homeowners throughout metro-Atlanta. Our residential real estate practice focuses on protecting your interests while ensuring efficient closings. We provide clear explanations of complex legal documents, thorough title examinations, and proactive communication with all parties involved. Whether you're a first-time homebuyer or an experienced investor, we're committed to making your real estate transaction successful."
      services={services}
      whyChooseUs={whyChooseUs}
      icon={<Home className="h-10 w-10 text-[var(--jsw-primary)]" />}
    />
  )
}