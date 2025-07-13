import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Phone, MapPin, Scale, Users, Award, Globe, GraduationCap, Building } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About JSW Law Group | Experienced Atlanta Law Firm",
  description: "Learn about JSW Law Group's 20+ years of legal experience serving metro-Atlanta. Licensed in Georgia and California with bilingual services available.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "About Us" }]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              About JSW Law Group
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Serving metro-Atlanta since 2003 with dedication, expertise, and a commitment to your success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
                Meet Our Founder
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-[var(--jsw-primary)]/20">
                    <Image
                      src="https://jswlaw.com/wp-content/uploads/2018/02/john_woo_bio_photo.jpg"
                      alt="John S. Woo, Founding Attorney"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      quality={90}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">John S. Woo</h3>
                  <p className="text-[var(--jsw-primary)] font-semibold mb-4">Founding Attorney</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Scale className="h-4 w-4" />
                      <span>Licensed in GA & CA</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>UC Hastings J.D. 2001</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Bilingual Services</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  John S. Woo has been serving the metro-Atlanta area since 2003 in the fields of 
                  commercial transactions, corporate law, foreign investments and relevant immigration law, 
                  residential transactions and business immigration law. Mr. Woo earned his J.D. from the 
                  University of California, Hastings College of Law in 2001.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since establishing his private practice, Mr. Woo has represented numerous corporate and 
                  individual clients in the metro-Atlanta community, including international Tier-One 
                  automotive corporations, corporate restructuring of international companies to meet 
                  expansion plans, and foreign investors with strategic implementation of their unique requirements.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  His experience spans complex commercial transactions for the acquisition of multi-million 
                  dollar properties ranging from $1,000,000.00 to over $50,000,000.00, residential developers 
                  from initial property purchase to the sale of all sub-divided lots, and individual business 
                  owners with various needs in their continued successful operation of their business enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Professional Credentials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center">
                    <Scale className="h-5 w-5 text-[var(--jsw-primary)] mr-2" />
                    Areas of Practice
                  </h3>
                  <div className="space-y-2">
                    <div className="text-gray-700">• Commercial Real Estate</div>
                    <div className="text-gray-700">• Residential Real Estate</div>
                    <div className="text-gray-700">• Business Transactions</div>
                    <div className="text-gray-700">• Corporate Law</div>
                    <div className="text-gray-700">• Business Immigration Law</div>
                    <div className="text-gray-700">• Foreign Investments</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 text-[var(--jsw-primary)] mr-2" />
                    Education
                  </h3>
                  <div className="text-gray-700">
                    • Juris Doctor, University of California, Hastings College of Law (2001)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="h-5 w-5 text-[var(--jsw-primary)] mr-2" />
                    Bar Admissions
                  </h3>
                  <div className="space-y-1">
                    <div className="text-gray-700">• State of Georgia (2003)</div>
                    <div className="text-gray-700">• State of California (2001)</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-[var(--jsw-primary)] mr-2" />
                    Professional Associations
                  </h3>
                  <div className="space-y-1">
                    <div className="text-gray-700">• State Bar of Georgia</div>
                    <div className="text-gray-700">• State Bar of California</div>
                    <div className="text-gray-700">• American Bar Association</div>
                    <div className="text-gray-700">• Gwinnett County Bar Association</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                JSW Law is an aggressive law firm with dedicated attorneys that are "old-fashioned" in character. 
                Established in 2004 in Metro Atlanta, we represent diverse clients in multiple practice areas 
                of the law, with the mindset of reviewing client matters from the client's perspective. 
                Our goal is putting client's needs ahead of profits.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is to offer the best possible legal representation, based on professionalism, 
                expertise and respect. Our firm believes that we should be quick to listen and provide our 
                clients our utmost attention. The only way to represent our clients efficiently is to understand 
                the client's point of view and then apply our knowledge of the legal matter at hand.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether the legal matter be personal injury, business litigation or a commercial transaction, 
                it is specific to the client and the client's story is important to us. Licensed in both Georgia 
                and California, we provide comprehensive legal support tailored to each client's unique needs.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--jsw-primary)] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Licensed in Two States</h3>
                  <p className="text-gray-600">Georgia (since 2003) and California (since 2001)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--jsw-accent)] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">20+ Years Experience</h3>
                  <p className="text-gray-600">Serving metro-Atlanta since 2003</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--jsw-gold)] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bilingual Services</h3>
                  <p className="text-gray-600">Multilingual consultation available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at JSW Law Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[var(--jsw-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in legal practice, ensuring every client 
                  receives exceptional representation and results.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[var(--jsw-accent)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">Client-Centered</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your success is our priority. We listen, understand your needs, 
                  and work tirelessly to achieve your goals.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[var(--jsw-gold)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">Cultural Understanding</h3>
                <p className="text-gray-600 leading-relaxed">
                  We bridge cultural gaps and provide services that respect and 
                  understand diverse backgrounds and perspectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[var(--jsw-primary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the JSW Law Group difference. Contact us today for a free consultation 
            and let us help you achieve your legal goals.
          </p>
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
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Suwanee, GA 30024</span>
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
      </section>
    </div>
  )
}