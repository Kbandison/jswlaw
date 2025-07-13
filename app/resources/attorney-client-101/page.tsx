import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FileText, Users, DollarSign, Shield, MessageCircle, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Attorney-Client Relationship 101 | JSW Law Group",
  description: "Learn about working with an attorney, what to expect during consultations, how legal fees work, and how to prepare for your legal matter with JSW Law Group.",
}

export default function AttorneyClient101Page() {
  const sections = [
    {
      title: "Understanding the Attorney-Client Relationship",
      icon: <Users className="h-8 w-8 text-[var(--jsw-primary)]" />,
      content: [
        "The attorney-client relationship is a professional partnership built on trust, communication, and mutual respect. When you hire an attorney, you're not just paying for legal knowledge—you're gaining an advocate who will represent your interests and guide you through complex legal matters.",
        "This relationship is governed by strict ethical rules that protect your rights and ensure your attorney acts in your best interests. Understanding this relationship from the beginning helps set proper expectations and ensures the best possible outcome for your legal matter."
      ]
    },
    {
      title: "Your First Consultation: What to Expect",
      icon: <MessageCircle className="h-8 w-8 text-[var(--jsw-primary)]" />,
      content: [
        "Your initial consultation is an opportunity for both you and the attorney to evaluate whether you're a good fit for each other. At JSW Law Group, we offer free initial consultations for most legal matters, allowing you to discuss your situation without financial commitment.",
        "During the consultation, we'll listen to your concerns, ask relevant questions, explain your legal options, and provide an honest assessment of your case. We'll also discuss potential strategies, timelines, and what you can expect moving forward.",
        "Come prepared with questions about our experience, approach to similar cases, and what working together would look like. This is your chance to ensure you feel comfortable with our firm before making any commitments."
      ]
    },
    {
      title: "Understanding Legal Fees and Costs",
      icon: <DollarSign className="h-8 w-8 text-[var(--jsw-primary)]" />,
      content: [
        "Legal fees can be structured in several ways, and we believe in complete transparency about costs from the beginning:",
        "**Contingent Fees**: For personal injury cases, we work on a 'no fee unless you recover' basis. Our fee is a percentage of any settlement or judgment obtained. You pay nothing upfront, and if we don't win your case, you don't pay attorney fees.",
        "**Flat Fees**: For routine matters like real estate closings or simple business formations, we often charge a predetermined flat fee. This provides cost certainty and allows you to budget accordingly.",
        "**Hourly Rates**: For complex matters requiring extensive research or ongoing representation, we may charge an hourly rate. We'll provide estimates and keep you informed of time spent on your matter.",
        "All fee arrangements are discussed upfront and outlined in a written agreement. We also distinguish between attorney fees and case expenses (like court filing fees, expert witness costs, etc.)."
      ]
    },
    {
      title: "Confidentiality and Attorney-Client Privilege",
      icon: <Shield className="h-8 w-8 text-[var(--jsw-primary)]" />,
      content: [
        "Attorney-client privilege is one of the strongest protections in the legal system. Everything you tell your attorney is confidential and protected, even if you ultimately decide not to hire them (with very limited exceptions).",
        "This means you can speak freely about your situation without fear that your words will be used against you. We cannot and will not share your information with anyone without your explicit permission, except in extraordinary circumstances defined by law.",
        "This confidentiality extends to our entire team and continues even after your case is resolved. You can trust that your private matters will remain private."
      ]
    },
    {
      title: "Your Responsibilities as a Client",
      icon: <CheckCircle className="h-8 w-8 text-[var(--jsw-primary)]" />,
      content: [
        "A successful attorney-client relationship requires active participation from both parties. As a client, your responsibilities include:",
        "**Honesty and Full Disclosure**: Provide complete and truthful information about your situation. Even details that seem embarrassing or irrelevant could be important to your case.",
        "**Timely Communication**: Respond promptly to requests for information, documents, or decisions. Legal matters often have deadlines that cannot be extended.",
        "**Document Preservation**: Keep all relevant documents safe and organized. Don't destroy anything that might be related to your legal matter.",
        "**Following Advice**: While the final decisions are yours, consider our legal advice carefully. We have the experience to guide you toward the best outcomes.",
        "**Realistic Expectations**: Understand that legal processes take time and outcomes cannot be guaranteed. We'll provide honest assessments, not false promises."
      ]
    },
    {
      title: "What We'll Do for You",
      icon: <FileText className="h-8 w-8 text-[var(--jsw-primary)]" />,
      content: [
        "As your attorneys, JSW Law Group commits to:",
        "**Competent Representation**: We'll apply our knowledge, skill, and experience to your matter with diligence and care.",
        "**Clear Communication**: We'll explain legal concepts in plain English, keep you informed of developments, and respond to your questions promptly.",
        "**Zealous Advocacy**: We'll represent your interests vigorously while adhering to all ethical and legal requirements.",
        "**Confidentiality**: Your information and communications with us are strictly protected.",
        "**Reasonable Fees**: Our fees will be fair and clearly explained before we begin work on your matter.",
        "**Professional Service**: You'll receive courteous, respectful treatment from everyone on our team."
      ]
    }
  ]

  const preparationTips = [
    {
      title: "Gather Relevant Documents",
      items: [
        "Contracts, agreements, or legal papers related to your matter",
        "Correspondence (letters, emails, text messages)",
        "Financial records if money is involved",
        "Photos, if applicable to your situation",
        "Insurance policies and coverage information",
        "Any previous legal documents or court papers"
      ]
    },
    {
      title: "Prepare Your Questions",
      items: [
        "What are my legal options?",
        "How long might this process take?",
        "What are the potential outcomes?",
        "What will this cost me?",
        "What should I do (or not do) while this is pending?",
        "How will we communicate during the process?"
      ]
    },
    {
      title: "Organize Your Timeline",
      items: [
        "When did events occur? (dates are crucial)",
        "Who was involved in each incident?",
        "What was said or written, and when?",
        "Are there any upcoming deadlines?",
        "Have you spoken to other attorneys about this matter?",
        "Are there any time-sensitive issues we should address immediately?"
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Resources", href: "/resources" },
              { label: "Attorney-Client 101" }
            ]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Attorney-Client Relationship 101
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your comprehensive guide to working with an attorney. Learn what to expect, 
              how to prepare, and how to build a successful partnership with your legal team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
                Essential Information for New Clients
              </h2>
            </ScrollReveal>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {section.icon}
                        <h3 className="text-2xl font-serif font-bold text-gray-900 ml-4">
                          {section.title}
                        </h3>
                      </div>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-600 leading-relaxed">
                            {paragraph.split('**').map((part, partIndex) => 
                              partIndex % 2 === 1 ? (
                                <strong key={partIndex} className="font-semibold text-gray-900">
                                  {part}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
                How to Prepare for Your Consultation
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {preparationTips.map((tip, index) => (
                <ScrollReveal key={index} delay={(index + 1) * 100}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                        {tip.title}
                      </h3>
                      <ul className="space-y-2">
                        {tip.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                            <CheckCircle className="h-4 w-4 text-[var(--jsw-primary)] mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--jsw-primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Now that you understand what to expect, contact JSW Law Group for your free consultation. 
              We're here to answer your questions and help you navigate your legal matter with confidence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-[var(--jsw-primary)] hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
              <div className="flex items-center gap-4 text-white/90">
                <a 
                  href="tel:(678) 638-0110" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-lg font-medium">(678) 638-0110</span>
                </a>
                <a 
                  href="mailto:hlwoo@jswlaw.com" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>hlwoo@jswlaw.com</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}