import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ScrollReveal } from "@/components/scroll-reveal"
import { practiceAreas } from "@/data/practice-areas"
import { keyFAQs } from "@/data/faq"
import { Building, Home, Handshake, Building2, Globe, TrendingUp, Phone, MapPin, ChevronRight } from "lucide-react"

const iconMap = {
  Building,
  Home,
  Handshake,
  Building2,
  Globe,
  TrendingUp
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1676181739859-08330dea8999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional consultation between lawyer and client"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--jsw-primary)]/90 to-[var(--jsw-accent)]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Your Success is Our Mission
            </h1>
            <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed">
              At JSW Law Group, we don't just practice law—we champion your dreams. 
              Whether you're buying your first home, growing your business, or building your American dream, 
              we're here to make it happen. Real results. Real people. Real success.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[var(--jsw-primary)] text-lg px-8 py-6 font-semibold"
              >
                <Link href="/practice">
                  Practice Areas
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Suwanee, GA • Serving Metro-Atlanta</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:(678) 638-0110" className="hover:text-white transition-colors">
                  (678) 638-0110
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real estate transactions to business formation and immigration matters, 
              we provide the legal expertise you need to succeed.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap]
              return (
                <ScrollReveal key={area.id} delay={index * 100}>
                  <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-[var(--jsw-primary)]/10 rounded-lg mr-4">
                          <IconComponent className="h-6 w-6 text-[var(--jsw-primary)]" />
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-gray-900">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                      <Link 
                        href={`/practice/${area.slug}`}
                        className="text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)] font-medium inline-flex items-center group-hover:gap-2 transition-all"
                      >
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose JSW Law Group?
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal className="text-center" delay={100}>
              <div className="bg-[var(--jsw-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">20+</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Years of Experience</h3>
              <p className="text-gray-600">Serving metro-Atlanta since 2003 with proven results and expertise.</p>
            </ScrollReveal>
            <ScrollReveal className="text-center" delay={200}>
              <div className="bg-[var(--jsw-accent)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Dual State Licensed</h3>
              <p className="text-gray-600">Licensed in Georgia (2003) and California (2001).</p>
            </ScrollReveal>
            <ScrollReveal className="text-center" delay={300}>
              <div className="bg-[var(--jsw-gold)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Bilingual Services</h3>
              <p className="text-gray-600">Multilingual consultation available to better serve our diverse community.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <TestimonialsCarousel />
          </ScrollReveal>
          
          {/* <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-[var(--jsw-primary)] text-white hover:bg-[var(--jsw-primary)] hover:text-white">
              <Link href="/about">Read More Reviews</Link>
            </Button>
          </div> */}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our legal services.
            </p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFAQs.map((faq, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 100}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={500} className="text-center mt-8">
            <Button asChild variant="outline" className="border-[var(--jsw-primary)] text-white hover:bg-[var(--jsw-primary)] hover:text-white">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-[var(--jsw-primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact JSW Law Group today for a free consultation. 
              Let us help you navigate your legal needs with confidence.
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
