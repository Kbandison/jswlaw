import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Phone, CheckCircle } from "lucide-react"

interface PracticeAreaTemplateProps {
  title: string
  description: string
  overview: string
  services: string[]
  whyChooseUs: string[]
  icon: React.ReactNode
}

export function PracticeAreaTemplate({ 
  title, 
  description, 
  overview, 
  services, 
  whyChooseUs, 
  icon 
}: PracticeAreaTemplateProps) {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Practice Areas", href: "/practice" },
              { label: title }
            ]} />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-[var(--jsw-primary)]/10 rounded-xl mr-6">
                {icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                  {title}
                </h1>
                <p className="text-xl text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {overview}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[var(--jsw-primary)] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Why Choose JSW Law Group?
                </h2>
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[var(--jsw-accent)] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--jsw-primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact JSW Law Group today for expert legal guidance. 
            We're here to help you achieve your goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-[var(--jsw-primary)] hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="h-5 w-5" />
              <a href="tel:(678) 638-0110" className="text-lg font-medium hover:text-white transition-colors">
                (678) 638-0110
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}