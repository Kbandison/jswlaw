import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Legal Disclaimer | JSW Law Group",
  description: "Important legal disclaimers and terms regarding the use of JSW Law Group's website and information provided.",
}

export default function LegalDisclaimerPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Legal Disclaimer" }]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Legal Disclaimer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Important information about the use of this website and our legal services
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h2>
                    <p className="text-yellow-700">
                      The information on this website is for general informational purposes only and does not constitute legal advice. 
                      No attorney-client relationship is formed by visiting this website or contacting us through it.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <CardContent className="p-8 prose max-w-none">
                  <div className="space-y-8 text-gray-600 leading-relaxed">
                    
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">No Attorney-Client Relationship</h2>
                      <p>
                        Visiting this website, reading its content, or contacting JSW Law Group through this website does not create an attorney-client relationship between you and our firm. An attorney-client relationship is only formed when you sign a written retainer agreement with our firm after we have agreed to represent you in a specific legal matter.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Not Legal Advice</h2>
                      <p>
                        The information provided on this website is for general informational purposes only and should not be construed as legal advice. Legal advice can only be provided after we understand the specific facts and circumstances of your situation. Every legal matter is unique, and general information cannot substitute for personalized legal counsel.
                      </p>
                      <p>
                        Do not act or refrain from acting based solely on information found on this website. Always consult with a qualified attorney regarding your specific legal situation.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">No Guarantee of Results</h2>
                      <p>
                        The information about prior case results, verdicts, or settlements does not guarantee or predict a similar result in any future case. Every case is different, and the outcome of any legal matter depends on its unique facts and circumstances. Past results do not guarantee future success.
                      </p>
                      <p>
                        JSW Law Group makes no representations or warranties about the outcome of any legal matter. We cannot and do not guarantee any particular result.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Confidentiality Warning</h2>
                      <p>
                        While we respect your privacy, information you send to us through this website may not be confidential or privileged unless we have agreed to represent you. If you are not already our client, please do not send us any confidential information about your legal matter through this website.
                      </p>
                      <p>
                        If you would like to discuss confidential information, please contact us to schedule a consultation where appropriate confidentiality protections can be established.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Jurisdiction and Licensing</h2>
                      <p>
                        JSW Law Group is licensed to practice law in Georgia (since 2003) and California (since 2001). We are not licensed to practice law in any other jurisdiction. This website and the information it contains is intended primarily for residents of Georgia and California.
                      </p>
                      <p>
                        If your legal matter involves laws of other states or jurisdictions, we may be able to refer you to qualified attorneys in those areas, but we cannot provide legal advice regarding the laws of jurisdictions where we are not licensed.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Accuracy of Information</h2>
                      <p>
                        While we strive to keep the information on this website current and accurate, laws change frequently, and we make no representations or warranties about the accuracy, completeness, or timeliness of the information provided. Legal information can become outdated quickly.
                      </p>
                      <p>
                        We reserve the right to update, modify, or remove any information on this website without notice.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Links to Third-Party Websites</h2>
                      <p>
                        This website may contain links to third-party websites for your convenience and information. We do not control or endorse these websites and are not responsible for their content, privacy policies, or practices. Accessing third-party websites is at your own risk.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                      <p>
                        JSW Law Group and its attorneys will not be liable for any damages or losses arising from your use of this website or reliance on its content. This includes any direct, indirect, incidental, consequential, or punitive damages.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Advertising Material</h2>
                      <p>
                        Under the rules of certain jurisdictions, this website may constitute attorney advertising. Some jurisdictions require the following statement: "Advertising Material" and "Prior results do not guarantee a similar outcome."
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Time Limitations</h2>
                      <p>
                        Legal matters are subject to statutes of limitations and other time deadlines. If you believe you may have a legal claim, do not delay in seeking legal advice. Waiting too long may result in the loss of your right to pursue legal action.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Professional Rules</h2>
                      <p>
                        JSW Law Group is subject to the professional rules of conduct in Georgia and California. We are committed to maintaining the highest standards of professional and ethical conduct in all our client relationships and legal practice.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                      <p>
                        By using this website, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms. If you do not agree with these terms, please do not use this website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Contact Information</h2>
                      <p className="mb-4">If you have questions about this disclaimer or need legal assistance, please contact us:</p>
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