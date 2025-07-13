import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, FileText, Users, Building, Gavel, HelpCircle } from "lucide-react"
import { legalResources, governmentResources, businessResources, internalResources } from "@/data/resources"

export const metadata = {
  title: "Legal Resources | JSW Law Group Atlanta",
  description: "Helpful legal resources, guides, and links from JSW Law Group. Find information about attorney-client relationships and useful legal resources.",
}

const iconMap = {
  FileText,
  HelpCircle
}

export default function ResourcesPage() {

  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Resources" }]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Legal Resources
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access helpful legal information, guides, and resources to better understand 
              your legal rights and the legal process.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {internalResources.map((resource, index) => {
              const IconComponent = iconMap[resource.icon as keyof typeof iconMap]
              return (
                <ScrollReveal key={index} delay={(index + 1) * 100}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-8 w-8 text-[var(--jsw-primary)] mr-4" />
                        <h2 className="text-2xl font-serif font-bold text-gray-900">
                          {resource.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      <Button asChild className="bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white">
                        <Link href={resource.href}>
                          {resource.title === "Attorney-Client 101" ? "Read Guide" : "View FAQ"}
                        </Link>
                      </Button>
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
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              External Resources
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Legal Resources */}
            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 flex items-center">
                  <Gavel className="h-6 w-6 text-[var(--jsw-primary)] mr-3" />
                  Legal Resources
                </h3>
                <div className="space-y-4">
                  {legalResources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        <a 
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)] text-sm font-medium"
                        >
                          Visit Website
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Government Resources */}
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-[var(--jsw-primary)] mr-3" />
                  Government Resources
                </h3>
                <div className="space-y-4">
                  {governmentResources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        <a 
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)] text-sm font-medium"
                        >
                          Visit Website
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Business Resources */}
            <ScrollReveal delay={300}>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-[var(--jsw-primary)] mr-3" />
                  Business Resources
                </h3>
                <div className="space-y-4">
                  {businessResources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        <a 
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)] text-sm font-medium"
                        >
                          Visit Website
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have questions about your specific legal situation, don't hesitate to contact 
              JSW Law Group for professional guidance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white text-lg px-8 py-6 font-semibold"
            >
              <Link href="/contact">
                Contact Us Today
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}