import { generateSEOMetadata } from "@/components/seo/metadata"
import { FAQClient } from "./faq-client"

export const metadata = generateSEOMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers to common legal questions about personal injury, real estate transactions, business law, immigration, and working with JSW Law Group.",
  canonical: "/faq",
  keywords: ["legal FAQ", "attorney questions", "personal injury FAQ", "real estate law questions", "business law FAQ", "immigration questions", "Atlanta lawyer FAQ"]
})

export default function FAQPage() {
  return <FAQClient />
}