"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ChevronDown, ChevronUp, Phone, Mail } from "lucide-react"
import { faqData } from "@/data/faq"
import { FAQSchema } from "@/components/seo/structured-data"
import Link from "next/link"

export function FAQClient() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // Flatten all FAQ questions for structured data
  const allFAQs = faqData.flatMap(category => 
    category.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  )

  return (
    <div className="flex flex-col">
      <FAQSchema faqs={allFAQs} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "FAQ" }]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common legal questions. Can't find what you're looking for? 
              Contact us for a free consultation.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqData.map((category, categoryIndex) => (
              <ScrollReveal key={category.category} delay={categoryIndex * 100}>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const itemId = `${category.category}-${questionIndex}`
                      const isOpen = openItems.includes(itemId)
                      
                      return (
                        <Card key={itemId} className="overflow-hidden">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-[var(--jsw-primary)] flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-[var(--jsw-primary)] flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-6 border-t border-gray-100">
                                <p className="text-gray-600 leading-relaxed pt-4">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help. Contact JSW Law Group today for personalized legal guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
              <div className="flex items-center gap-4 text-gray-600">
                <a 
                  href="tel:(678) 638-0110" 
                  className="flex items-center gap-2 hover:text-[var(--jsw-primary)] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(678) 638-0110</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}