import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { footerPracticeAreas, footerQuickLinks } from "@/data/navigation"

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[var(--jsw-gold)]">
              JSW Law Group
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving metro-Atlanta since 2003 with comprehensive legal services 
              in real estate, business law, and immigration matters.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-[var(--jsw-gold)]" />
                <span>Suwanee, GA 30024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-[var(--jsw-gold)]" />
                <a href="tel:(678) 638-0110" className="hover:text-white transition-colors">
                  (678) 638-0110
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-[var(--jsw-gold)]">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {footerPracticeAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-[var(--jsw-gold)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-[var(--jsw-gold)]">
              Schedule Consultation
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Ready to discuss your legal needs? Contact us for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} JSW Law Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/utility/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/utility/disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            Licensed in Georgia (since 2003) and California (since 2001) • Multilingual consultation available
          </div>
        </div>
      </div>
    </footer>
  )
}