import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Privacy Policy | JSW Law Group",
  description: "JSW Law Group's privacy policy regarding the collection, use, and protection of your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card>
                <CardContent className="p-8 prose max-w-none">
                  <div className="space-y-8 text-gray-600 leading-relaxed">
                    
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Introduction</h2>
                      <p>
                        JSW Law Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website jswlaw.com or engage our legal services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Information We Collect</h2>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
                      <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>Contact us through our website contact forms</li>
                        <li>Call our office or send us emails</li>
                        <li>Engage our legal services</li>
                        <li>Subscribe to our newsletters or communications</li>
                        <li>Participate in consultations or meetings</li>
                      </ul>
                      <p className="mb-4">This information may include:</p>
                      <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>Name and contact information (email, phone number, address)</li>
                        <li>Legal matter details and case information</li>
                        <li>Financial information relevant to your legal matter</li>
                        <li>Other information you choose to provide</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                      <p>When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                      <p className="mb-4">We use the information we collect to:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Provide, maintain, and improve our legal services</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Send you updates about your legal matter</li>
                        <li>Comply with legal obligations and ethical requirements</li>
                        <li>Protect our rights and the rights of our clients</li>
                        <li>Improve our website and services</li>
                        <li>Communicate with you about our services (with your consent)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Attorney-Client Privilege and Confidentiality</h2>
                      <p>
                        All communications between JSW Law Group and our clients are protected by attorney-client privilege and are strictly confidential. We will not disclose any information about your legal matter without your express written consent, except as required by law or ethical obligations. This protection extends to all information you provide to us, whether or not you ultimately engage our services.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                      <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>With your explicit consent</li>
                        <li>To comply with legal obligations or court orders</li>
                        <li>To protect our rights, property, or safety, or that of our clients or others</li>
                        <li>With service providers who assist us in our operations (under strict confidentiality agreements)</li>
                        <li>In connection with the sale or transfer of our practice (with appropriate protections)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Data Security</h2>
                      <p>
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                      <p>
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                      <p className="mb-4">You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Access and review the personal information we have about you</li>
                        <li>Request corrections to inaccurate information</li>
                        <li>Request deletion of your information (subject to legal and ethical obligations)</li>
                        <li>Opt out of marketing communications</li>
                        <li>Contact us with questions about our privacy practices</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Children's Privacy</h2>
                      <p>
                        Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Contact Information</h2>
                      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p><strong>JSW Law Group</strong></p>
                        <p>5855 Medlock Bridge Pkwy</p>
                        <p>Suwanee, GA 30024</p>
                        <p>Phone: (678) 638-0110</p>
                        <p>Email: hlwoo@jswlaw.com</p>
                      </div>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}