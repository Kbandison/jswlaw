"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Phone, MapPin, Mail, MessageSquare } from "lucide-react"
import { practiceAreas } from "@/data/practice-areas"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your message. We will get back to you within 24 hours.'
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          practiceArea: "",
          message: ""
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'An error occurred while sending your message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again, or call us directly at (678) 638-0110.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Contact" }]} />
          </div>
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Contact JSW Law Group
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to discuss your legal needs? Contact us today for a free consultation. 
              We're here to help you achieve your goals with confidence.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <MessageSquare className="h-6 w-6 text-[var(--jsw-primary)] mr-3" />
                    Send Us a Message
                  </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full bg-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full bg-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full bg-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="practice-area" className="block text-sm font-medium text-gray-700 mb-2">
                        Practice Area
                      </label>
                      <Select onValueChange={(value) => handleChange("practiceArea", value)}>
                        <SelectTrigger className="bg-white data-[placeholder]:text-gray-700">
                          <SelectValue placeholder="Select a practice area" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {practiceAreas.map((area) => (
                            <SelectItem key={area.id} value={area.id} className="text-gray-900 hover:text-white focus:text-white">
                              {area.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your legal matter and how we can help you..."
                      className="w-full bg-white placeholder:text-gray-400"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div className={`mt-4 p-4 rounded-md ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                    </div>
                  )}
                </form>

                <p className="text-sm text-gray-500 mt-4">
                  * Required fields. All communications are confidential.
                </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={200} className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Phone className="h-6 w-6 text-[var(--jsw-primary)] mr-3" />
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-[var(--jsw-primary)] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <a href="tel:(678) 638-0110" className="text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)] text-lg">
                          (678) 638-0110
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-[var(--jsw-primary)] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <div className="space-y-1">
                          <div>
                            <span className="text-sm text-gray-600">General Inquiries:</span>
                            <br />
                            <a href="mailto:hlwoo@jswlaw.com" className="text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)]">
                              hlwoo@jswlaw.com
                            </a>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Residential Real Estate:</span>
                            <br />
                            <a href="mailto:loretta@jswlaw.com" className="text-[var(--jsw-primary)] hover:text-[var(--jsw-primary-dark)]">
                              loretta@jswlaw.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-[var(--jsw-primary)] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Office Location</h3>
                        <p className="text-gray-600">
                          5855 Medlock Bridge Pkwy.<br />
                          Suwanee, GA 30024<br />
                          Serving Metro-Atlanta
                        </p>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    Why Choose JSW Law Group?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[var(--jsw-primary)] mr-2">•</span>
                      Free initial consultation
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--jsw-primary)] mr-2">•</span>
                      20+ years of experience serving metro-Atlanta
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--jsw-primary)] mr-2">•</span>
                      Licensed in Georgia and California
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--jsw-primary)] mr-2">•</span>
                      Multilingual consultation available
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--jsw-primary)] mr-2">•</span>
                      Client-focused approach
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  )
}