import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { practiceAreas } from "@/data/practice-areas"
import { Building, Home, Handshake, Building2, Globe, TrendingUp, ChevronRight, Phone } from "lucide-react"

const iconMap = {
  Building,
  Home,
  Handshake,
  Building2,
  Globe,
  TrendingUp
}

export const metadata = {
  title: "Practice Areas | JSW Law Group Atlanta",
  description: "JSW Law Group offers comprehensive legal services including real estate law, business transactions, corporate law, and immigration services in metro-Atlanta.",
}

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Practice Areas" }]} />
          </div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              JSW Law Group provides comprehensive legal services across multiple practice areas. 
              Our experienced team is ready to help you navigate complex legal matters with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {practiceAreas.map((area) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap]
              return (
                <Card key={area.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--jsw-primary)]/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-[var(--jsw-primary)]/10 rounded-xl mr-4 group-hover:bg-[var(--jsw-primary)] group-hover:text-white transition-colors">
                        <IconComponent className="h-8 w-8 text-[var(--jsw-primary)] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {area.description}
                    </p>
                    <Link 
                      href={`/practice/${area.slug}`}
                      className="inline-flex items-center text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)] font-semibold group-hover:gap-2 transition-all"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Why Choose JSW Law Group?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our commitment to excellence and client success sets us apart.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-[var(--jsw-primary)] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">20+</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Years of Experience</h3>
                <p className="text-gray-600">Proven track record serving metro-Atlanta since 2003.</p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--jsw-accent)] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Dual State Licensed</h3>
                <p className="text-gray-600">Licensed in Georgia (2003) and California (2001).</p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--jsw-gold)] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Bilingual Services</h3>
                <p className="text-gray-600">Multilingual consultation available for diverse communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--jsw-primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't wait - legal matters require prompt attention. 
            Contact JSW Law Group today for expert guidance tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-[var(--jsw-primary)] hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
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