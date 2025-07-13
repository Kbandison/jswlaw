export interface PracticeArea {
  id: string
  title: string
  description: string
  slug: string
  icon?: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  location?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  practiceArea?: string
}