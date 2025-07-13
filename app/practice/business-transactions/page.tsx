import { PracticeAreaTemplate } from "@/components/practice-area-template"
import { Handshake } from "lucide-react"

export const metadata = {
  title: "Business Transactions Law | JSW Law Group Atlanta",
  description: "Strategic legal support for business transactions in Atlanta. Mergers, acquisitions, contracts, and business formation legal services.",
}

export default function BusinessTransactionsPage() {
  const services = [
    "Mergers and acquisitions (M&A)",
    "Business purchase and sale agreements",
    "Contract drafting and negotiation",
    "Joint venture and partnership agreements",
    "Asset purchase transactions",
    "Stock purchase agreements",
    "Business valuation support",
    "Due diligence coordination",
    "Financing and lending transactions",
    "Intellectual property transfers"
  ]

  const whyChooseUs = [
    "Extensive experience in complex business transactions",
    "Strategic approach to deal structuring and negotiation",
    "Deep understanding of Atlanta business landscape",
    "Efficient transaction management and coordination",
    "Strong network of professional advisors and specialists",
    "Bilingual capabilities for international business deals",
    "Multi-state licensing for cross-border transactions",
    "Proven track record of successful deal closings"
  ]

  return (
    <PracticeAreaTemplate
      title="Business Transactions"
      description="Strategic legal support for mergers, acquisitions, contracts, and business formation."
      overview="Business transactions require sophisticated legal expertise and strategic thinking. JSW Law Group provides comprehensive legal support for businesses of all sizes engaging in mergers, acquisitions, and other complex transactions. Our team understands that every deal is unique and requires customized legal solutions. We work closely with business owners, investors, and other advisors to structure transactions that achieve your business objectives while minimizing legal and financial risks. From initial term sheets to final closing documents, we ensure your interests are protected throughout the transaction process."
      services={services}
      whyChooseUs={whyChooseUs}
      icon={<Handshake className="h-10 w-10 text-[var(--jsw-primary)]" />}
    />
  )
}