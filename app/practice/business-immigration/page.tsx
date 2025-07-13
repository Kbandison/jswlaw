import { PracticeAreaTemplate } from "@/components/practice-area-template"
import { Globe } from "lucide-react"

export const metadata = {
  title: "Business Immigration Law | JSW Law Group Atlanta",
  description: "Business immigration legal services in Atlanta. Visa applications, work permits, and immigration solutions for businesses and professionals.",
}

export default function BusinessImmigrationPage() {
  const services = [
    "Employment-based visa applications (H-1B, L-1, O-1)",
    "Permanent residence (Green Card) applications",
    "Business investor visas (E-2, EB-5)",
    "Intracompany transfer visas",
    "Professional worker visas",
    "I-9 compliance and employment verification",
    "Immigration compliance audits",
    "Family-based immigration support",
    "Naturalization and citizenship applications",
    "Immigration appeals and litigation"
  ]

  const whyChooseUs = [
    "Multilingual immigration services",
    "Deep understanding of U.S. immigration system",
    "Experience with complex business immigration cases",
    "Professional service for international clients",
    "Comprehensive support throughout the immigration process",
    "Strong track record of successful visa applications",
    "Ongoing compliance monitoring and support",
    "Personalized attention to each client's unique situation"
  ]

  return (
    <PracticeAreaTemplate
      title="Business Immigration"
      description="Immigration solutions for businesses and professionals seeking to work in the United States."
      overview="Navigating U.S. immigration law can be complex and overwhelming. JSW Law Group provides comprehensive business immigration services to help international professionals and businesses achieve their American dreams. Our immigration practice combines legal expertise with professional understanding for international clients seeking opportunities in the United States. We guide clients through every step of the immigration process, from initial visa applications to permanent residence and citizenship. Our multilingual capabilities ensure clear communication and understanding throughout your immigration journey."
      services={services}
      whyChooseUs={whyChooseUs}
      icon={<Globe className="h-10 w-10 text-[var(--jsw-primary)]" />}
    />
  )
}